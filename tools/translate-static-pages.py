"""Translate visible text in exported HTML files to Vietnamese without reformatting HTML."""

from __future__ import annotations

import argparse
import html
import importlib.util
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TOOLS = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("orcam_translate", TOOLS / "translate-blog-posts.py")
translator = importlib.util.module_from_spec(spec)
assert spec.loader
spec.loader.exec_module(translator)
# Exported pages already contain partially translated strings, so language
# auto-detection is required to finish mixed English/Vietnamese fragments.
translator.translator = translator.GoogleTranslator(source="auto", target="vi")

SKIP_BLOCK = re.compile(r"<(script|style|svg|noscript|template)\b[^>]*>.*?</\1\s*>", re.I | re.S)
COMMENT = re.compile(r"<!--.*?-->", re.S)
TAG = re.compile(r"<[^>]+>", re.S)
ATTRIBUTE = re.compile(
    r"(?P<prefix>\b(?:alt|title|placeholder|aria-label)\s*=\s*)(?P<quote>['\"])(?P<value>.*?)(?P=quote)",
    re.I | re.S,
)
AUTO_TRANSLATE = re.compile(
    r"<!-- ORCAM_VI_AUTO_TRANSLATE_START -->.*?<!-- ORCAM_VI_AUTO_TRANSLATE_END -->",
    re.I | re.S,
)
VIETNAMESE = re.compile(r"[À-ỹĐđ]")
LETTERS = re.compile(r"[A-Za-z]")
TECHNICAL = re.compile(r"^(?:https?://|[/#_.-]|\w+[./]\w+|[A-Z0-9_-]{2,})$")
ENGLISH_WORDS = re.compile(
    r"\b(?:the|and|or|for|with|from|to|of|in|on|at|by|your|you|our|we|is|are|was|were|"
    r"website|statement|learn|read|support|contact|school|events?|news|guide|manual|"
    r"accessibility|technology|device|devices|privacy|terms|conditions|help|how|what|why|"
    r"tips|story|stories|page|user|users|about|more|all|new|best|assistive|visual|vision)\b",
    re.I,
)
MANUAL = {
    "off and on again": "tắt rồi bật lại",
    "E-mail": "Email",
    "OrCam Learn Basic Tutorials": "Hướng dẫn sử dụng OrCam Learn Basic",
    "OrCam Learn Basic Setup": "Thiết lập OrCam Learn Basic",
    "BORDER/FRAME LASER:": "TIA LASER VIỀN/KHUNG:",
    "“magnetic bit”": "“đầu nối nam châm”",
    "OrCam Learn - Learn to Read with Dyslexia": "OrCam Learn - Học đọc dành cho người mắc chứng khó đọc",
    "Love Is In the Air": "Tình yêu ngập tràn",
    "Cách thay đổi giọng nói trên OrCam Read Smart and Read 3": "Cách thay đổi giọng nói trên OrCam Read Smart và Read 3",
    "OrCam Learn as a support tool:": "OrCam Learn như một công cụ hỗ trợ:",
    "In zoom to size:": "Phóng to theo kích thước:",
    "Click here for a PDF version Khả năng đọc Rate Menu This...…": "Nhấp vào đây để xem bản PDF của menu tốc độ đọc...…",
    "Where can I purchase an OrCam Read or an Thiết bị OrCam MyEye?": "Tôi có thể mua OrCam Read hoặc thiết bị OrCam MyEye ở đâu?",
    "Click here for a list of Đọc thông minh Vocal Commands": "Nhấp vào đây để xem danh sách lệnh giọng nói của tính năng Đọc thông minh",
    " All You Need To Know About OrCam Learn Basic": " Mọi điều bạn cần biết về OrCam Learn Basic",
    "All You Need To Know Giới thiệu OrCam Learn Basic": "Mọi điều bạn cần biết về OrCam Learn Basic",
    "What types of payment can I use to purchase Learn Basic products?": "Tôi có thể dùng phương thức thanh toán nào để mua sản phẩm Learn Basic?",
    "We accept a variety of payment methods for your convenience. You can use any major Credit, Debit, or Prepaid Card, including VISA, MASTERCARD, AMERICAN EXPRESS, JCB, DISCOVER, DINERS, and UNIONPAY.\\nAdditionally, we offer digital wallet options like Apple Pay and Google Play.": "Chúng tôi chấp nhận nhiều phương thức thanh toán thuận tiện. Bạn có thể sử dụng các loại thẻ tín dụng, thẻ ghi nợ hoặc thẻ trả trước phổ biến, bao gồm VISA, MASTERCARD, AMERICAN EXPRESS, JCB, DISCOVER, DINERS và UNIONPAY.\\nNgoài ra, chúng tôi còn hỗ trợ ví điện tử như Apple Pay và Google Pay.",
    "In which countries is Learn Basic currently available for purchase?": "Hiện có thể mua Learn Basic tại những quốc gia nào?",
    "Currently, the OrCam Learn is available for purchase in the US, Canada and the UK.\\n": "Hiện tại, OrCam Learn được bán tại Hoa Kỳ, Canada và Vương quốc Anh.\\n",
    "Who could benefit from Learn Basic? ": "Những ai có thể hưởng lợi từ Learn Basic? ",
    "The Learn Basic is created to help and support individuals of all ages with various reading and learning challenges, such as dyslexia and ADHD to become independent readers and allow students full equity of access to any text printed or digital.": "Learn Basic được thiết kế để hỗ trợ người dùng ở mọi lứa tuổi gặp khó khăn trong việc đọc và học tập, chẳng hạn như chứng khó đọc và ADHD. Thiết bị giúp họ đọc độc lập và tiếp cận bình đẳng với mọi văn bản in hoặc kỹ thuật số.",
    "How do I return the device and what is the refund policy? ": "Tôi trả lại thiết bị như thế nào và chính sách hoàn tiền ra sao? ",
    " The Learn Basic has a 30-day money-back guarantee. If you want to cancel you need to return the device. To cancel, please reach out to customer success. ": " Learn Basic có chính sách hoàn tiền trong 30 ngày. Nếu muốn hủy đơn, bạn cần trả lại thiết bị và liên hệ với bộ phận Chăm sóc khách hàng. ",
    "Is shipping free? ": "Có được miễn phí vận chuyển không? ",
    " Yes, all Learn Basic orders come with free shipping. ": " Có. Tất cả đơn hàng Learn Basic đều được miễn phí vận chuyển. ",
    "Can OrCam Learn Basic be used in exams?": "Có thể sử dụng OrCam Learn Basic trong kỳ thi không?",
    "Yes it can, provided it is their normal way of working and this can be evidenced.": "Có, với điều kiện đây là phương thức làm bài thông thường của thí sinh và có thể cung cấp bằng chứng xác nhận.",
    "The OrCam Learn Basic does not connect to WIFI and is simply a Text-To-Speech device.": "OrCam Learn Basic không kết nối Wi-Fi và chỉ hoạt động như một thiết bị chuyển văn bản thành giọng nói.",
    "This means that it cannot access the additional features and does not have access to a dictionary, which is in line with JCQ Guidance.": "Điều này có nghĩa là thiết bị không thể sử dụng các tính năng bổ sung hoặc truy cập từ điển, phù hợp với hướng dẫn của JCQ.",
    "Information about accommodations can be located in JCQ Access Arrangements and Reasonable Adjustments (Page 50, 2023-2024):": "Thông tin về các điều chỉnh hỗ trợ có trong tài liệu JCQ Access Arrangements and Reasonable Adjustments (trang 50, năm 2023–2024):",
    "The use of an examination reading pen, provided by the centre, might benefit those candidates who wish to work independently.": "Bút đọc dùng trong kỳ thi do trung tâm cung cấp có thể hữu ích cho những thí sinh muốn làm bài độc lập.",
    "It may increase the independence of candidates who needed a reader for accuracy rather than comprehension.": "Thiết bị có thể tăng tính độc lập cho những thí sinh cần người hỗ trợ đọc để bảo đảm độ chính xác, thay vì hỗ trợ khả năng hiểu.",
    "The use of an examination reading pen should always be considered for those candidates who only require occasional words or phrases to be read to them.": "Nên cân nhắc sử dụng bút đọc trong kỳ thi cho những thí sinh chỉ thỉnh thoảng cần đọc một số từ hoặc cụm từ.",
    "5.6 Read aloud and/or the use of an examination reading pen": "5.6 Đọc thành tiếng và/hoặc sử dụng bút đọc trong kỳ thi",
    "5.6.2 The arrangement must reflect the candidate’s normal way of working in internal school tests and mock examinations.": "5.6.2 Việc hỗ trợ phải phản ánh phương thức làm bài thông thường của thí sinh trong các bài kiểm tra nội bộ và kỳ thi thử tại trường.",
    "Examination reading pen": "Bút đọc dùng trong kỳ thi",
    "5.6.5  A permitted examination reading pen will not have an in-built dictionary or thesaurus, or a data storage facility.": "5.6.5 Bút đọc được phép sử dụng trong kỳ thi không được tích hợp từ điển, từ điển đồng nghĩa hoặc chức năng lưu trữ dữ liệu.",
    "OrCam in the Tin tức": "OrCam trên báo chí",
    "OrCam in the Tin tức: Transforming Lives with Technology": "OrCam trên báo chí: Thay đổi cuộc sống bằng công nghệ",
    "More Tin tức": "Tin tức khác",
    "OrCam Learn For Schools": "OrCam Learn dành cho trường học",
    "PR Tin tứcwire": "PR Newswire",
    "ABC 7 Tin tức": "ABC 7 News",
    "Tài nguyên:": "Nguồn:",
    "ATM market place": "ATM Marketplace",
    "Daily mail": "Daily Mail",
    "The courier express": "The Courier Express",
    "Ngu?n:": "Nguồn:",
    "Tin t?c kh?c": "Tin tức khác",
    "OrCam tr?n b?o ch?": "OrCam trên báo chí",
    "OrCam tr?n b?o ch?: Transforming Lives with Technology": "OrCam trên báo chí: Thay đổi cuộc sống bằng công nghệ",
    "Show More": "Tải thêm",
    "Show more": "Tải thêm",
    "Hiển thị thêm": "Tải thêm",
    "Khả năng lãnh đạo": "Ban lãnh đạo",
    "Tin t?c": "Tin tức",
    "Nghề nghiệp": "Tuyển dụng",
    "Liên hệ với chúng tôi": "Liên hệ",
}


def needs_translation(value: str) -> bool:
    text = html.unescape(value).strip()
    return bool(
        len(text) > 1
        and LETTERS.search(text)
        and (not VIETNAMESE.search(text) or ENGLISH_WORDS.search(text))
        and not TECHNICAL.fullmatch(text)
    )


# Reuse the cached batch transport while applying the stricter page audit,
# including partially translated English/Vietnamese strings.
translator.should_translate = needs_translation


def text_parts(document: str):
    """Yield replaceable visible-text spans while preserving the original bytes."""
    protected = []
    for pattern in (SKIP_BLOCK, COMMENT):
        for match in pattern.finditer(document):
            protected.append((match.start(), match.end()))
    protected.sort()
    protected_index = 0
    for match in re.finditer(r"(?<=>)[^<]+(?=<)", document):
        start, end = match.span()
        while protected_index < len(protected) and protected[protected_index][1] <= start:
            protected_index += 1
        if protected_index < len(protected):
            left, right = protected[protected_index]
            if start < right and end > left:
                continue
        yield start, end, match.group(0)


def collect(document: str) -> list[str]:
    values = []
    for _, _, raw in text_parts(document):
        if needs_translation(raw):
            values.append(raw)
    for tag in TAG.findall(document):
        if tag.startswith(("<!--", "<!", "<?")):
            continue
        for match in ATTRIBUTE.finditer(tag):
            value = match.group("value")
            if needs_translation(value):
                values.append(value)
    return values


def replace_visible_text(document: str, translations: dict[str, str]) -> str:
    spans = list(text_parts(document))
    for start, end, raw in reversed(spans):
        replacement = translations.get(raw)
        if replacement and replacement != raw:
            leading = raw[: len(raw) - len(raw.lstrip())]
            trailing = raw[len(raw.rstrip()) :]
            replacement = leading + replacement.strip() + trailing
            document = document[:start] + replacement + document[end:]

    def replace_attributes(tag_match: re.Match[str]) -> str:
        tag = tag_match.group(0)
        if tag.startswith(("<!--", "<!", "<?")):
            return tag

        def repl(match: re.Match[str]) -> str:
            value = match.group("value")
            replacement = translations.get(value, value)
            return match.group("prefix") + match.group("quote") + replacement + match.group("quote")

        return ATTRIBUTE.sub(repl, tag)

    return TAG.sub(replace_attributes, document)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="+", help="HTML files or directories relative to the theme root")
    parser.add_argument("--audit", action="store_true")
    args = parser.parse_args()

    files: list[Path] = []
    for value in args.paths:
        path = (ROOT / value).resolve()
        if ROOT not in path.parents and path != ROOT:
            raise SystemExit(f"Path is outside the theme: {path}")
        files.extend(path.rglob("*.html") if path.is_dir() else [path])
    files = sorted(set(files))

    documents = {path: path.read_text(encoding="utf-8") for path in files}
    values = list(dict.fromkeys(value for document in documents.values() for value in collect(document)))
    if args.audit:
        print(f"files={len(files)} untranslated_unique={len(values)}")
        for value in values[:100]:
            print(html.unescape(value).strip()[:240])
        return

    translations: dict[str, str] = {}
    chunk_size = 50
    for offset in range(0, len(values), chunk_size):
        chunk = values[offset : offset + chunk_size]
        translations.update(translator.translate_batch(chunk))
        translator.save_cache()
        print(f"translated={min(offset + chunk_size, len(values))}/{len(values)}", flush=True)
    translations.update(MANUAL)
    changed = 0
    for path, document in documents.items():
        result = replace_visible_text(document, translations)
        for source, target in MANUAL.items():
            result = result.replace(source, target)
        result = AUTO_TRANSLATE.sub("", result)
        result = re.sub(r"(<html\b[^>]*\blang=)(['\"])[^'\"]*\2", r"\1\2vi\2", result, count=1, flags=re.I)
        if result != document:
            path.write_text(result, encoding="utf-8", newline="")
            changed += 1
    translator.save_cache()
    print(f"files={len(files)} unique_strings={len(values)} changed={changed}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
