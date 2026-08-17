import os, glob, re, json, sys
sys.stdout.reconfigure(encoding='utf-8')

static_dir = r"c:\Users\hnguy\Local Sites\orcam\app\public\wp-content\themes\orcam_theme\static-pages\vi"
html_files = [f for f in glob.glob(os.path.join(static_dir, "*.html"))]

# Dictionary of clean Vietnamese SEO Title and Description for all static pages
page_seo_dict = {
    'index': {
        'title': 'OrCam Việt Nam - Công Nghệ Trợ Năng & Kính AI Cho Người Khiếm Thị',
        'desc': 'Khám phá các thiết bị AI hỗ trợ thị lực và đọc sách tiên tiến nhất từ OrCam giúp người khiếm thị, thị lực kém và khó đọc tự tin làm chủ cuộc sống.'
    },
    'blog': {
        'title': 'Blog OrCam - Tin Tức & Kiến Thức Công Nghệ Hỗ Trợ Thị Lực AI',
        'desc': 'Tổng hợp các bài viết, cẩm nang và tin tức mới nhất về công nghệ hỗ trợ thị lực AI, kinh nghiệm sống và giải pháp đột phá cho người khiếm thị và đọc khó khăn.'
    },
    'low-vision': {
        'title': 'Giải Pháp Cho Người Thị Lực Kém & Khiếm Thị - OrCam Việt Nam',
        'desc': 'Tìm hiểu các giải pháp công nghệ AI đột phá từ OrCam dành cho người giảm thị lực, thoái hóa điểm vàng, đục thủy tinh thể và người khiếm thị.'
    },
    'orcam-learn': {
        'title': 'OrCam Learn - Giải Pháp Đọc & Hỗ Trợ Học Tập Đột Phá Cho Trẻ Em',
        'desc': 'OrCam Learn giúp học sinh mắc chứng khó đọc (Dyslexia) và khó khăn trong việc đọc hiểu nâng cao khả năng đọc, sự tự tin và kết quả học tập vượt trội.'
    },
    'distributor': {
        'title': 'Tìm Đại Lý & Điểm Trải Nghiệm OrCam Gần Bạn Nhất Tại Việt Nam',
        'desc': 'Tra cứu danh sách đại lý phân phối chính hãng và địa điểm đăng ký trải nghiệm trực tiếp các thiết bị OrCam trên toàn quốc.'
    },
    'events': {
        'title': 'Sự Kiện & Ngày Hội Trải Nghiệm Sản Phẩm OrCam Trực Tiếp',
        'desc': 'Đăng ký tham gia các sự kiện Demo Days và ngày hội trải nghiệm công nghệ trợ năng OrCam hoàn toàn miễn phí cùng chuyên gia.'
    },
    'comparison': {
        'title': 'Bảng So Sánh Các Dòng Sản Phẩm OrCam MyEye & OrCam Read Chi Tiết',
        'desc': 'So sánh chi tiết tính năng, thông số kỹ thuật và mức giá giữa các dòng OrCam MyEye 3 Pro, MyEye 2 Pro, OrCam Read 5, Read 3 và OrCam Read.'
    },
    'contact-us': {
        'title': 'Liên Hệ Tư Vấn & Hỗ Trợ Khách Hàng - OrCam Việt Nam',
        'desc': 'Liên hệ với đội ngũ chuyên gia OrCam Việt Nam để nhận tư vấn miễn phí, hỗ trợ kỹ thuật và thông tin chi tiết về sản phẩm.'
    },
    'faq': {
        'title': 'Câu Hỏi Thường Gặp (FAQ) Về Các Thiết Bị Trợ Năng OrCam',
        'desc': 'Giải đáp toàn bộ thắc mắc phổ biến nhất về cách sử dụng, tính năng, bảo hành và chính sách mua hàng của các thiết bị OrCam.'
    },
    'leadership': {
        'title': 'Ban Lãnh Đạo & Đội Ngũ Sáng Lập - OrCam Technologies',
        'desc': 'Gặp gỡ những nhà khoa học và chuyên gia công nghệ thị giác máy tính hàng đầu đứng sau sự thành công của OrCam Technologies.'
    },
    'pressroom': {
        'title': 'Phòng Báo Chí & Tin Tức Truyền Thông - OrCam Việt Nam',
        'desc': 'Cập nhật các thông cáo báo chí, tin tức truyền thông và câu chuyện truyền cảm hứng về hành trình hỗ trợ cộng đồng của OrCam.'
    },
    'accessibility': {
        'title': 'Tuyên Bố Về Khả Năng Tiếp Cận Website - OrCam Technologies',
        'desc': 'Cam kết của OrCam về việc cung cấp website dễ tiếp cận, thuận tiện và thân thiện cho tất cả mọi người, bao gồm người khuyết tật.'
    },
    'affiliation-and-partnership': {
        'title': 'Chương Trình Đối Tác & Đại Lý Phân Phối - OrCam Việt Nam',
        'desc': 'Hợp tác cùng OrCam mang công nghệ hỗ trợ thị giác tiên tiến đến hàng triệu người cần hỗ trợ tại Việt Nam và trên thế giới.'
    },
    'cookies-policy': {
        'title': 'Chính Sách Cookie - OrCam Technologies',
        'desc': 'Thông tin chi tiết về cách OrCam sử dụng cookie và công nghệ theo dõi để nâng cao trải nghiệm của người dùng trên website.'
    },
    'privacy-policy': {
        'title': 'Chính Sách Quyền Riêng Tư & Bảo Mật Dữ Liệu - OrCam',
        'desc': 'Chính sách bảo vệ thông tin cá nhân và dữ liệu riêng tư của khách hàng và người dùng khi sử dụng sản phẩm và dịch vụ của OrCam.'
    },
    'terms-and-conditions': {
        'title': 'Điều Khoản & Điều Kiện Sử Dụng - OrCam Technologies',
        'desc': 'Các điều khoản, điều kiện pháp lý và quy định khi mua sắm, sở hữu và sử dụng các thiết bị công nghệ trợ năng từ OrCam.'
    },
    'terms-of-use': {
        'title': 'Điều Khoản Sử Dụng Dịch Vụ - OrCam Việt Nam',
        'desc': 'Quy định và điều khoản sử dụng website và các dịch vụ trực tuyến của OrCam Technologies.'
    },
    'orcam-documents': {
        'title': 'Tài Liệu & Hướng Dẫn Kỹ Thuật OrCam - Tải Về Miễn Phí',
        'desc': 'Tổng hợp tài liệu hướng dẫn sử dụng, thông số kỹ thuật và tài liệu giới thiệu chi tiết về các dòng máy OrCam.'
    },
    'orcam-learn-schools': {
        'title': 'Giải Pháp OrCam Learn Dành Cho Trường Học & Giáo Dục',
        'desc': 'Ứng dụng công nghệ đọc và học AI OrCam Learn vào trường học giúp học sinh tự tin, xóa bỏ rào cản đọc và bứt phá thành tích.'
    },
    'orcam-learn-testimonials': {
        'title': 'Đánh Giá & Cảm Nhận Thực Tế Về OrCam Learn Từ Phụ Huynh',
        'desc': 'Những câu chuyện có thật từ phụ huynh, học sinh và giáo viên về sự tiến bộ vượt bậc sau khi sử dụng thiết bị OrCam Learn.'
    },
    'orcam-read-3-testimonials': {
        'title': 'Trải Nghiệm Thực Tế Của Người Dùng Về OrCam Read 3',
        'desc': 'Chia sẻ chân thực từ khách hàng và chuyên gia nhãn khoa về hiệu quả hỗ trợ đọc của thiết bị trợ năng OrCam Read 3.'
    },
    'patent': {
        'title': 'Bằng Sáng Chế & Công Nghệ Độc Quyền - OrCam Technologies',
        'desc': 'Danh mục các bằng sáng chế công nghệ thị giác nhân tạo và xử lý ngôn ngữ tiên tiến thuộc sở hữu của OrCam.'
    },
    'release-notes': {
        'title': 'Ghi Chú Phát Hành & Cập Nhật Phần Mềm Thiết Bị OrCam',
        'desc': 'Chi tiết các phiên bản nâng cấp phần mềm, bổ sung tính năng mới và cải tiến hiệu năng cho các thiết bị OrCam.'
    },
    'submit-case': {
        'title': 'Gửi Yêu Cầu Hỗ Trợ & Dịch Vụ Khách Hàng - OrCam',
        'desc': 'Gửi thông tin yêu cầu trợ giúp kỹ thuật hoặc bảo hành cho trung tâm chăm sóc khách hàng OrCam Việt Nam.'
    }
}

print(f"Configured SEO metadata for {len(page_seo_dict)} core pages.")
