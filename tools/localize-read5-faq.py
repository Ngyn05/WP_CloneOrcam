from __future__ import annotations

import json
import re
from pathlib import Path


PAGE = Path(__file__).resolve().parents[1] / "static-pages" / "vi" / "orcam-read-5.html"

HEADING = "Những câu hỏi thường gặp nhất"

ROWS = [
    (
        "OrCam Read 5 có phải là giải pháp phù hợp với tôi không?",
        """OrCam Read 5 được thiết kế đặc biệt để hỗ trợ người khiếm thị, bao gồm người mắc AMD, tăng nhãn áp và nhiều tình trạng khác, cũng như bất kỳ ai gặp khó khăn khi đọc, giúp việc đọc và tương tác với văn bản trở nên dễ dàng.

Một số ví dụ về cách thiết bị có thể hỗ trợ bạn:

● Khi ra ngoài, bạn có thể dùng OrCam Read 5 cầm tay để đọc thực đơn ngay lập tức hoặc yêu cầu Trợ lý AI tích hợp tóm tắt nhanh các món ăn và cung cấp thông tin chi tiết về một món cụ thể.

● Để tự quản lý tài chính, bạn có thể phóng to tài liệu tài chính bằng Kính lúp thông minh và nhờ Trợ lý AI trả lời những câu hỏi như “Khi nào hóa đơn này đến hạn?”.

● Để hiểu văn bản bằng ngôn ngữ khác, chỉ cần yêu cầu OrCam Read 5 dịch nội dung, dù bạn đang dùng thiết bị như máy đọc di động hay cùng Kính lúp thông minh đặt cố định tại nhà.

Nếu muốn các hoạt động hằng ngày trở nên dễ dàng và độc lập hơn, OrCam Read 5 có thể chính là thiết bị bạn cần.""",
    ),
    (
        "Tại sao tôi nên chọn OrCam Read 5 thay vì các lựa chọn khác?",
        """OrCam Read 5 là một thiết bị hỗ trợ độc đáo trên thị trường.

Không giống các thiết bị khác, sản phẩm vừa hoạt động như máy đọc cầm tay để đọc mọi văn bản in hoặc kỹ thuật số, vừa có thể đặt cố định và biến thành kính lúp tiên tiến, hỗ trợ bạn mọi lúc theo nhiều cách khác nhau.

Trợ lý AI tích hợp còn có thể trả lời các câu hỏi về văn bản hoặc những chủ đề mở rộng ở bất cứ đâu.

Bạn có thể hỏi tiếp theo cách hội thoại và dịch tức thì văn bản tiếng nước ngoài sang tiếng Anh, giúp người khiếm thị sống độc lập hơn và tiếp cận thông tin dễ dàng.

Nếu muốn có tất cả tính năng này trong một thiết bị tiện lợi, bạn có thể chọn OrCam Read 5 ngay hôm nay.""",
    ),
    (
        "Trợ lý AI của OrCam Read 5 có những tính năng và lợi ích gì?",
        """Trợ lý AI của OrCam Read 5 là người bạn đồng hành mạnh mẽ, giúp bạn đọc mọi nội dung ở bất cứ đâu và giải đáp các câu hỏi.

Bạn có thể trò chuyện với Trợ lý AI như với một người bạn, hỏi về văn bản như “Tổng số tiền phải thanh toán trên hóa đơn này là bao nhiêu?” hoặc những chủ đề chung như “Người khiếm thị cần mang theo những gì khi đi bộ đường dài?”.

Thiết bị có thể nhanh chóng tóm tắt văn bản để bạn tiếp nhận lượng thông tin lớn dễ dàng hơn. Thiết bị cũng dịch văn bản từ năm ngôn ngữ — Đức, Tây Ban Nha, Pháp, Ý và Bồ Đào Nha — sang tiếng Anh.

Ngoài ra, Kính lúp thông minh độc đáo của OrCam Read 5 còn có thể nhận diện, đọc thành tiếng chữ viết tay và dịch tức thì văn bản sang hơn 140 ngôn ngữ.""",
    ),
    (
        "OrCam Read 5 hoạt động như thế nào?",
        """OrCam Read 5 rất trực quan và dễ sử dụng.

Chỉ cần hướng thiết bị vào văn bản in hoặc kỹ thuật số, thiết bị sẽ đọc thành tiếng cho bạn. Không chỉ là máy đọc, bạn còn có thể nhấn nút để hỏi Trợ lý AI tích hợp về nội dung văn bản hoặc các chủ đề chung.

Thiết bị dễ dàng kết nối Internet từ điện thoại thông qua ứng dụng chuyên dụng, bảo đảm Trợ lý AI luôn sẵn sàng.

Tính năng Kính lúp thông minh cũng biến màn hình máy tính thành kính lúp với các tùy chọn nâng cao như độ tương phản và thu phóng. Giao diện trực quan giúp bạn xem chi tiết văn bản, hình ảnh và tùy chỉnh trải nghiệm đọc độc lập hoặc nghe đọc thành tiếng.""",
    ),
    (
        "Bộ sản phẩm OrCam Read 5 bao gồm những gì?",
        """Bộ sản phẩm OrCam Read 5 bao gồm:

● OrCam Read 5 — thiết bị cầm tay sử dụng công nghệ tiên tiến.
● Giá đỡ cố định, giúp chuyển thiết bị thành máy đọc đặt bàn hoặc kính lúp rảnh tay.
● Loa Bluetooth cho âm thanh chất lượng cao và ứng dụng OrCam chuyên dụng, dễ sử dụng, giúp thiết bị luôn trực tuyến thông qua kết nối Internet của điện thoại.""",
    ),
    (
        "Tôi có thể mua OrCam Read 5 an toàn ở đâu và có những phương thức thanh toán nào?",
        """Bạn chỉ còn vài bước để sở hữu OrCam Read 5.

Hãy nhấn nút “Mua ngay” trên website để bắt đầu. Chúng tôi cung cấp kế hoạch thanh toán linh hoạt với lãi suất 0% và chấp nhận nhiều phương thức như Visa, MasterCard, American Express, Discover, Diners Club, PayPal cùng các lựa chọn khác; giao dịch được xử lý an toàn qua Stripe.

Ngoài ra, OrCam Read 5 cũng có mặt trên Amazon.""",
    ),
    (
        "OrCam Read 5 có bảo hành hoặc chính sách hoàn tiền không?",
        """Ưu tiên của chúng tôi là bảo đảm bạn hoàn toàn hài lòng với thiết bị.

Vì vậy, OrCam Read 5 đi kèm chính sách hoàn tiền trong 30 ngày và bảo hành 1 năm. Bạn có đủ 30 ngày để trải nghiệm sản phẩm và thông báo cho chúng tôi nếu muốn hoàn trả. Trong thời hạn bảo hành 1 năm, bạn được bảo vệ trước các lỗi của thiết bị.""",
    ),
]


def js_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)[1:-1]


text = PAGE.read_text(encoding="utf-8-sig")
text, heading_count = re.subn(
    r'heading:"Your Most Asked Questions:"',
    f'heading:"{js_string(HEADING)}"',
    text,
)

row_pattern = re.compile(
    r'\{title:"(?:\\.|[^"\\])*",content:"(?:\\.|[^"\\])*",id:"(?P<id>63fb4[^"\\]+)"\}'
)
matches = list(row_pattern.finditer(text))
if heading_count != 1 or len(matches) != len(ROWS):
    raise SystemExit(
        f"Expected one heading and {len(ROWS)} FAQ rows; found {heading_count} heading and {len(matches)} rows"
    )

translated_rows = iter(ROWS)


def replace_row(match: re.Match[str]) -> str:
    title, content = next(translated_rows)
    return (
        f'{{title:"{js_string(title)}",content:"{js_string(content)}",'
        f'id:"{match.group("id")}"}}'
    )


text = row_pattern.sub(replace_row, text)
PAGE.write_text(text, encoding="utf-8", newline="")
print(f"Localized {len(ROWS)} FAQ rows in {PAGE}")
