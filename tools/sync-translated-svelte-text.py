"""Copy cached Vietnamese translations into Svelte's serialized text fields."""

from __future__ import annotations

import argparse
import importlib.util
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CACHE = Path(__file__).with_name(".vi-translation-cache.json")
TEXT_FIELD = re.compile(r'(?P<prefix>\b(?:text|title|heading|label|description|summary|content|blockName):)(?P<value>"(?:\\.|[^"\\])*")')


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="+")
    parser.add_argument("--translate-missing", action="store_true")
    args = parser.parse_args()
    cache: dict[str, str] = json.loads(CACHE.read_text(encoding="utf-8"))
    overrides = {
        "Testimonials <br>OrCam Learn": "Cảm nhận về <br>OrCam Learn",
        "Testimonials <br>OrCam Read 3": "Cảm nhận về <br>OrCam Read 3",
        "OrCam Learn Testimonials": "Cảm nhận về OrCam Learn",
        "OrCam Read 3 Testimonials": "Cảm nhận về OrCam Read 3",
        "Lời chứng thực của OrCam Read 3: Trải nghiệm người dùng & Đánh giá": "Cảm nhận về OrCam Read 3: Trải nghiệm và đánh giá từ người dùng",
        "Đọc lời chứng thực của người dùng trên OrCam Read 3, cho thấy tác động của nó trong việc cải thiện khả năng đọc cho những người gặp khó khăn về thị giác.": "Khám phá cảm nhận của người dùng OrCam Read 3 và tác động của thiết bị trong việc hỗ trợ người gặp khó khăn về thị giác đọc hiệu quả hơn.",
        "Comparison with Past Hỗ trợ:": "So sánh với phương thức hỗ trợ trước đây:",
        "Interactive Khả năng đọc with OrCam Learn:": "Đọc tương tác cùng OrCam Learn:",
        "Dịch thuật Feature in Action:": "Trình diễn tính năng dịch thuật:",
        "Interactive Khả năng đọc Feature:": "Tính năng đọc tương tác:",
        "OrCam Learn in Action:": "Trình diễn OrCam Learn:",
        "Khả năng đọc and Feedback:": "Đọc và nhận phản hồi:",
        "Wish I Had OrCam Learn: Vượt qua những thách thức về đọc viết với ADHD 🌟": "Ước gì tôi từng có OrCam Learn: Vượt qua khó khăn về đọc viết do ADHD 🌟",
        "Feedback on Khả năng đọc Performance:": "Phản hồi về kết quả đọc:",
        "Personalized Khả năng đọc Goals in the App:": "Mục tiêu đọc cá nhân hóa trong ứng dụng:",
        "OrCam in Action: Watch Sasha Improve Khả năng đọc Skills with Real-Time Feedback 👁️": "OrCam trong thực tế: Sasha cải thiện kỹ năng đọc nhờ phản hồi theo thời gian thực 👁️",
        "Homeschooling Made Easy: Introducing OrCam Learn for Khả năng đọc Success 📚": "Dạy học tại nhà dễ dàng hơn: OrCam Learn hỗ trợ đọc hiệu quả 📚",
        "Hỗ trợ for Multiple Children and Different Khả năng đọc Levels:": "Hỗ trợ nhiều trẻ ở các trình độ đọc khác nhau:",
        "Interactive Khả năng đọc and Feedback Feature:": "Tính năng đọc tương tác và phản hồi:",
        "Increased Excitement and Confidence in Khả năng đọc:": "Tăng hứng thú và sự tự tin khi đọc:",
        "Hỗ trợing Independent Khả năng đọc Goals:": "Hỗ trợ mục tiêu đọc độc lập:",
        "Dịch thuật and Multilingual Hỗ trợ:": "Dịch thuật và hỗ trợ đa ngôn ngữ:",
        "Literacy Teacher Shows How OrCam Learn Boosts Khả năng đọc Skills 📖👓": "Giáo viên hướng dẫn cách OrCam Learn nâng cao kỹ năng đọc 📖👓",
        "Demonstration of Khả năng đọc and Feedback:": "Trình diễn tính năng đọc và phản hồi:",
        "OrCam Learn: A Busy Parent's Aid for Children's Khả năng đọc Improvement 👨‍👦": "OrCam Learn: Trợ thủ giúp phụ huynh bận rộn cải thiện kỹ năng đọc của con 👨‍👦",
        "Son's Sống độc lập with OrCam Learn:": "Con trai đọc độc lập cùng OrCam Learn:",
        "Sống độc lập with OrCam Learn:": "Sống độc lập cùng OrCam Learn:",
        "Impact on Confidence and Sống độc lập:": "Tác động đến sự tự tin và cuộc sống độc lập:",
        "Summer Khả năng đọc Challenges for Dyslexic Children:": "Khó khăn khi đọc trong mùa hè của trẻ mắc chứng khó đọc:",
        "Khả năng đọc Speed Comparison:": "So sánh tốc độ đọc:",
        "Lời chứng thực <br>OrCam Tìm hiểu": "Cảm nhận về <br>OrCam Learn",
        "OrCam Learn Testimonials: Câu chuyện của người dùng thực & Phản hồi": "Cảm nhận về OrCam Learn: Câu chuyện và phản hồi thực tế từ người dùng",
        "OrCam Learn in Action:": "OrCam Learn trong thực tế:",
        "Son's Independence with OrCam Learn:": "Con trai sống độc lập hơn cùng OrCam Learn:",
        "Tính năng Reading Pal:": "Tính năng Người bạn đọc:",
        "Reading Pal": "Người bạn đọc",
        "OrCam Learn: A Busy Parent's Aid for Children's Reading Improvement 👨‍👦": "OrCam Learn: Trợ thủ giúp phụ huynh bận rộn cải thiện kỹ năng đọc của con 👨‍👦",
        "Empowering Young Readers: A Parent's View on OrCam Learn's Impact 🧐": "Trao quyền cho độc giả nhỏ tuổi: Góc nhìn của phụ huynh về tác động của OrCam Learn 🧐",
        "Navigating University with OrCam Learn DSA: A Guide for UK Students 👩‍🎓": "Hành trang đại học cùng OrCam Learn DSA: Hướng dẫn dành cho sinh viên Anh 👩‍🎓",
        "OrCam Learn: A Beacon of Hope for Dyslexic Students' Summer Reading Challenges 🔦🏮": "OrCam Learn: Niềm hy vọng cho học sinh mắc chứng khó đọc trong mùa hè 🔦🏮",
        "OrCam Learn: A Beacon of Hope for Dyslexic Students' Summer Reading Challenges": "OrCam Learn: Niềm hy vọng cho học sinh mắc chứng khó đọc trong mùa hè",
        "Helping Students that Read & Perform Below Grade Level": "Giúp học sinh đọc và học tập dưới chuẩn lớp",
        "Ensuring Every Child Succeeds": "Giúp mọi trẻ em đều thành công",
        "The Ultimate Classroom Reset Guide: Tips and Tricks for a Clean Slate": "Hướng dẫn làm mới lớp học: Mẹo để có một khởi đầu thuận lợi",
        "The Ultimate Classroom Reset Guide": "Hướng dẫn làm mới lớp học",
        "5 Back to School Tips to Get Ready: OrCam Learn's Impact on Classroom Learning 📈": "5 mẹo chuẩn bị trở lại trường: Tác động của OrCam Learn trong lớp học 📈",
        "5 Back to School Tips to Get Ready": "5 mẹo chuẩn bị trở lại trường",
        "See OrCam Learn trong thực tế: Boosting Reading Skills with Smart Tech 🌟": "Xem OrCam Learn hoạt động: Nâng cao kỹ năng đọc bằng công nghệ thông minh 🌟",
        "OrCam in Action: Xem Sasha cải thiện kỹ năng đọc với phản hồi theo thời gian thực 👁️": "OrCam trong thực tế: Sasha cải thiện kỹ năng đọc nhờ phản hồi theo thời gian thực 👁️",
        "Giáo dục tại nhà dễ dàng: Giới thiệu OrCam Learn for Reading Success 📚": "Dạy học tại nhà dễ dàng hơn: OrCam Learn hỗ trợ đọc hiệu quả 📚",
        "Search": "Tìm kiếm",
        "Sort by": "Sắp xếp theo",
        "Proximity to me": "Gần tôi nhất",
        "Address": "Địa chỉ",
        "Online Event": "Sự kiện trực tuyến",
        "Reserve a spot": "Đăng ký tham dự",
        "No results found. Try increasing your search radius or choose a new location.": "Không tìm thấy kết quả. Hãy tăng bán kính tìm kiếm hoặc chọn một địa điểm khác.",
        "/vi/contact-us-for-school": "/vi/contact-us",
        "contact-us-for-school.html": "contact-us.html",
        "Which OrCam MyEye Is Right For You?": "Thiết bị OrCam MyEye nào phù hợp với bạn?",
        "Which OrCam Read": "Thiết bị OrCam Read nào",
        "Is Right For You?": "phù hợp với bạn?",
        "Which OrCam device ": "Thiết bị OrCam nào ",
        "is right for you?": "phù hợp với bạn?",
        "AI Assistant-Just Ask": "Trợ lý AI - Chỉ cần hỏi",
        "Summarize text into main topics": "Tóm tắt văn bản thành các chủ đề chính",
        "Utilizes intext and outsourced data": "Sử dụng dữ liệu trong văn bản và dữ liệu mở rộng",
        "Reads handwriting": "Đọc chữ viết tay",
        "Zoom in&out": "Phóng to & thu nhỏ",
        "Change contrast": "Thay đổi độ tương phản",
        "Extract and copy text": "Trích xuất và sao chép văn bản",
        "Converts image text to digital text": "Chuyển văn bản hình ảnh thành văn bản số",
        "Connect to any screen": "Kết nối với mọi màn hình",
        "Connect to most screens": "Kết nối với hầu hết màn hình",
        "Supports over 140 languages": "Hỗ trợ hơn 140 ngôn ngữ",
        "Voice commands": "Lệnh bằng giọng nói",
        "Text reading": "Đọc văn bản",
        "Smart reading": "Đọc thông minh",
        "Smart Reading": "Đọc thông minh",
        "Recognize Faces": "Nhận diện khuôn mặt",
        "Identifying Products": "Nhận diện sản phẩm",
        "Money Notes": "Nhận biết tiền tệ",
        "Barcodes": "Mã vạch",
        "Colors": "Màu sắc",
        "1.5-2 Hours of active use": "Thời lượng pin: 1,5-2 giờ",
        "4 Hours": "Thời lượng pin: 4 giờ",
        "Smart Magnifier": "Kính lúp thông minh",
        "Handheld Device": "Thiết bị cầm tay",
        "Handheld": "Cầm tay",
        "Wearable": "Thiết bị đeo",
        "Works offline": "Hoạt động ngoại tuyến",
        "Wireless": "Không dây",
        "Reading light": "Đèn đọc sách",
        "Portable": "Di động",
        "Touch Bar": "Thanh cảm ứng",
        "1 Year Warranty": "Bảo hành 1 năm",
        "2 Year Warranty": "Bảo hành 2 năm",
        "Groundbreaking New Feature:": "Tính năng đột phá mới:",
        "Easily Engage With the World": "Dễ dàng tương tác với thế giới",
        "Around You": "Xung quanh bạn",
        "Explore your surroundings in an entirely new, interactive way.": "Khám phá môi trường xung quanh bạn theo cách hoàn toàn mới, đầy tương tác.",
        "Simply ask OrCam MyEye, \"What's in Front of Me?\" and receive descriptions in real-time.": "Chỉ cần hỏi OrCam MyEye: \"Có gì ở phía trước tôi?\" và nhận mô tả theo thời gian thực.",
        "To get even more insights, you can ask follow-up questions.": "Để tìm hiểu thêm thông tin, bạn có thể đặt thêm câu hỏi tiếp theo.",
        "Product Comparison": "So sánh sản phẩm",
        "Summarize text": "Tóm tắt văn bản",
    }
    cache.update(overrides)

    documents: dict[str, str] = {}
    for relative in args.paths:
        path = (ROOT / relative).resolve()
        if ROOT not in path.parents:
            raise SystemExit(f"Path is outside theme: {path}")
        documents[relative] = path.read_text(encoding="utf-8")

    if args.translate_missing:
        spec = importlib.util.spec_from_file_location("orcam_translate", Path(__file__).with_name("translate-blog-posts.py"))
        module = importlib.util.module_from_spec(spec)
        assert spec.loader
        spec.loader.exec_module(module)
        module.translator = module.GoogleTranslator(source="auto", target="vi")
        values: list[str] = []
        for document in documents.values():
            for match in TEXT_FIELD.finditer(document):
                source = json.loads(match.group("value"))
                if source not in cache and module.should_translate(source) and source not in values:
                    values.append(source)
        for offset in range(0, len(values), 40):
            cache.update(module.translate_batch(values[offset:offset + 40]))
            module.save_cache()
            print(f"translated state {min(offset + 40, len(values))}/{len(values)}")

    for relative, document in documents.items():
        path = (ROOT / relative).resolve()

        def replace(match: re.Match[str]) -> str:
            source = json.loads(match.group("value"))
            translated = cache.get(source)
            if not translated or translated == source:
                return match.group(0)
            return match.group("prefix") + json.dumps(translated, ensure_ascii=False)

        result = TEXT_FIELD.sub(replace, document)
        result = result.replace("Lời chứng thực <br>OrCam Learn", "Cảm nhận về <br>OrCam Learn")
        result = result.replace("Lời chứng thực <br>OrCam Read 3", "Cảm nhận về <br>OrCam Read 3")
        result = result.replace("Testimonials <br>OrCam Learn", "Cảm nhận về <br>OrCam Learn")
        result = result.replace("Testimonials <br>OrCam Read 3", "Cảm nhận về <br>OrCam Read 3")
        for source, translated in overrides.items():
            result = result.replace(source, translated)
        if result != document:
            path.write_text(result, encoding="utf-8", newline="")
            print(f"updated {relative}")
        else:
            print(f"unchanged {relative}")


if __name__ == "__main__":
    main()
