import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

fn_path = r'c:\Users\hnguy\Local Sites\orcam\app\public\wp-content\themes\orcam_theme\functions.php'

with open(fn_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Exact replacement dictionary for all remaining mojibake tokens
exact_replaces = {
    'ThÃ´ng tin cÃ¡ nhÃ¢n cá»§a báº¡n sáº½ Ä‘Æ°á»£c sá»\xad dá»¥ng Ä‘á»ƒ xá»\xad lÃ½ Ä‘Æ¡n hÃ\xa0ng, hỗ trợ tráº£i nghiá»‡m cá»§a báº¡n trÃªn website và cho cÃ¡c má»¥c Ä‘Ã\xadch khÃ¡c theo':
    'Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, hỗ trợ trải nghiệm của bạn trên website và cho các mục đích khác theo',
    
    'Hiá»‡n táº¡i Ä‘Æ¡n hÃ\xa0ng sáº½ Ä‘Æ°á»£c nhÃ¢n viÃªn cá»§a OrCam liÃªn há»‡ trá»±c tiáº¿p Ä‘á»ƒ xÃ¡c nháº\xadn và hÆ°á»›ng dáº«n thanh toÃ¡n chi tiáº¿t cho báº¡n.':
    'Hiện tại đơn hàng sẽ được nhân viên của OrCam liên hệ trực tiếp để xác nhận và hướng dẫn thanh toán chi tiết cho bạn.',
    
    'Hiá»‡n táº¡i Ä‘Æ¡n hÃ\xa0ng sáº½ Ä‘Æ°á»£c nhÃ¢n viÃªn liÃªn há»‡ trá»±c tiáº¿p Ä‘á»ƒ xÃ¡c nháº\xadn và hÆ°á»›ng dáº«n thanh toÃ¡n chi tiáº¿t cho báº¡n.':
    'Hiện tại đơn hàng sẽ được nhân viên liên hệ trực tiếp để xác nhận và hướng dẫn thanh toán chi tiết cho bạn.',
    
    'Ã p dá»¥ng mÃ£ ưu đãi': 'Áp dụng mã ưu đãi',
    'Ã p dá»¥ng': 'Áp dụng',
    'không tá»“n táº¡i!': 'không tồn tại!',
    'Mã giảm giá nÃ\xa0y': 'Mã giảm giá này',
    'không thá»ƒ dÃ¹ng chung vá»›i cÃ¡c mÃ£ khÃ¡c.': 'không thể dùng chung với các mã khác.',
    'không Ã¡p dá»¥ng cho sản phẩm trong Ä‘Æ¡n hÃ\xa0ng.': 'không áp dụng cho sản phẩm trong đơn hàng.',
    'Ä‘Ã£ háº¿t': 'đã hết',
    'sá»\xad dá»¥ng.': 'sử dụng.',
    'Ä‘á»ƒ Ã¡p dá»¥ng mÃ£ nÃ\xa0y.': 'để áp dụng mã này.',
    'Ä‘á»ƒ dÃ¹ng mÃ£ nÃ\xa0y lÃ\xa0 %s.': 'để dùng mã này là %s.',
    'Ä‘ang giáº£m giÃ¡.': 'đang giảm giá.',
    'và Ä‘Ã£ bá»‹ gá»¡ bá» .': 'và đã bị gỡ bỏ.',
    'hoáº·c Ä‘Ã£ hết hạn': 'hoặc đã hết hạn',
    'Thanh toÃ¡n': 'Thanh toán',
    'ThÃ´ng tin ngÆ°á»\x9di nháº\xadn': 'Thông tin người nhận',
    'ThÃ´ng tin khÃ¡ch hÃ\xa0ng': 'Thông tin khách hàng',
    'HÃ¬nh thá»©c phá»¥c vá»¥ & Ghi chÃº': 'Hình thức phục vụ & Ghi chú',
    'Ä Æ¡n hÃ\xa0ng cá»§a báº¡n': 'Đơn hàng của bạn',
    'Táº¡m tÃ\xadnh': 'Tạm tính',
    'Tá»•ng cá»™ng': 'Tổng cộng',
    'XÃ¡c nháº\xadn Ä‘áº·t hÃ\xa0ng': 'Xác nhận đặt hàng',
    'Ghi chÃº Ä‘Æ¡n hÃ\xa0ng': 'Ghi chú đơn hàng',
    'Ghi chÃº thÃªm vá»  Ä‘Æ¡n hÃ\xa0ng hoáº·c thá»\x9di gian nháº\xadn hÃ\xa0ng...': 'Ghi chú thêm về đơn hàng hoặc thời gian nhận hàng...',
    'Báº¡n cÃ³ mÃ£': 'Bạn có mã',
    'Nháº¥n vào Ä‘Ã¢y Ä‘á»ƒ': 'Nhấn vào đây để',
    'MÃ£ ưu đãi': 'Mã ưu đãi',
    'Náº¿u báº¡n cÃ³ mÃ£ giáº£m giÃ¡ hoáº·c Voucher, vui lÃ²ng nhập bÃªn dÆ°á»›i:': 'Nếu bạn có mã giảm giá hoặc Voucher, vui lòng nhập bên dưới:',
    'Giao hàng Ä‘áº¿n Ä‘á»‹a chá»‰ khÃ¡c?': 'Giao hàng đến địa chỉ khác?',
    'Báº¡n Ä‘Ã£ tá»«ng mua hÃ\xa0ng?': 'Bạn đã từng mua hàng?',
    'Ä‘á»ƒ Ä‘Äƒng nhập': 'để đăng nhập',
    'PhÆ°Æ¡ng thá»©c thanh toÃ¡n': 'Phương thức thanh toán',
    'Thanh toÃ¡n khi nháº\xadn hÃ\xa0ng (COD)': 'Thanh toán khi nhận hàng (COD)',
    'Thanh toÃ¡n báº±ng tiá»\x81n máº·t trá»±c tiáº¿p khi nháº\xadn hÃ\xa0ng.': 'Thanh toán bằng tiền mặt trực tiếp khi nhận hàng.',
    'Chuyá»ƒn khoáº£n ngÃ¢n hÃ\xa0ng': 'Chuyển khoản ngân hàng',
    'Vui lòng chuyá»ƒn khoáº£n trá»±c tiáº¿p vào tÃ\xa0i khoáº£n ngÃ¢n hÃ\xa0ng cá»§a chÃºng tÃ´i vá»›i ná»™i dung lÃ\xa0 MÃ£ Ä‘Æ¡n hÃ\xa0ng. Ä Æ¡n hÃ\xa0ng sáº½ Ä‘Æ°á»£c nhÃ¢n viÃªn liÃªn há»‡ xÃ¡c nháº\xadn ngay.':
    'Vui lòng chuyển khoản trực tiếp vào tài khoản ngân hàng của chúng tôi với nội dung là Mã đơn hàng. Đơn hàng sẽ được nhân viên liên hệ xác nhận ngay.',
    '%s lÃ\xa0': '%s là',
    'Ä á»‹a chá»‰': 'Địa chỉ',
    'Ä áº·t hÃ\xa0ng': 'Đặt hàng',
    'Cáº£m Æ¡n báº¡n! Ä Æ¡n hÃ\xa0ng Ä‘Ã£ Ä‘Æ°á»£c tiáº¿p nháº\xadn thành công. ChÃºng tÃ´i sáº½ liÃªn há»‡ trong thá»\x9di gian sá»›m nháº¥t.':
    'Cảm ơn bạn! Đơn hàng đã được tiếp nhận thành công. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.',
    'Ä á»‹a chá»‰ nháº\xadn hÃ\xa0ng': 'Địa chỉ nhận hàng',
    'Giá»  hÃ\xa0ng': 'Giỏ hàng',
    'Ä Ã£ Ã¡p dá»¥ng mÃ£ giáº£m giÃ¡ thành công.': 'Đã áp dụng mã giảm giá thành công.',
    'Ä Ã£ xÃ³a mÃ£ giáº£m giÃ¡ thành công.': 'Đã xóa mã giảm giá thành công.',
    'GiÃ¡ trá»‹ Ä‘Æ¡n hÃ\xa0ng': 'Giá trị đơn hàng',
    'không Ã¡p dá»¥ng cho': 'không áp dụng cho',
    'sản phẩm Ä‘Ã£ chá»\x8dn.': 'sản phẩm đã chọn.',
    'cho Ä‘Æ¡n hÃ\xa0ng cá»§a báº¡n.': 'cho đơn hàng của bạn.',
    'Báº¡n chÆ°a chá»\x8dn sản phẩm nÃ\xa0o Ä‘á»ƒ thanh toÃ¡n.': 'Bạn chưa chọn sản phẩm nào để thanh toán.',
    'Ä Ã¡nh giÃ¡': 'Đánh giá',
    'vá»›i thiáº¿t káº¿': 'với thiết kế',
    'vá»›i công nghệ': 'với công nghệ',
    'OrCam Há»\x8dc': 'OrCam Học',
    'cho ngÆ°á»\x9di khiáº¿m thá»‹ và ngÆ°á»\x9di gáº·p khÃ³ khÄƒn khi Ä‘á»\x8dc.': 'cho người khiếm thị và người gặp khó khăn khi đọc.',
    '226 Ä Æ°á»\x9ng LÃ¡ng, PhÆ°á»\x9ng Thá»‹nh Quang,<br>Quáº\xadn Ä á»‘ng Ä a, HÃ\xa0 Ná»™i': '226 Đường Láng, Phường Thịnh Quang,<br>Quận Đống Đa, Hà Nội',
    '137 HÃ\xa0 Hòa Hưng, Phường Hòa Hưng': '137 Hòa Hưng, Phường Hòa Hưng',
    '137 HÃ\xa0 Hưng': '137 Hòa Hưng',
    'Hotline Tá»•ng Ä Ã\xa0i': 'Hotline Tổng Đài',
    'tÆ° váº¥n má»\x8di lÃºc, má»\x8di nÆ¡i': 'tư vấn mọi lúc, mọi nơi',
    'Ä Æ¡n hÃ\xa0ng': 'Đơn hàng',
    'mÃ£': 'mã',
    'lÃ\xa0': 'là',
    'giáº£m giÃ¡': 'giảm giá',
    'sáº½': 'sẽ',
    'cá»§a': 'của',
    'báº¡n': 'bạn',
    'Ä‘Æ°á»£c': 'được',
    'thá»\x9di': 'thời',
    'nháº¥t': 'nhất'
}

for k, v in exact_replaces.items():
    content = content.replace(k, v)

with open(fn_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Exact replaces applied to functions.php!")
