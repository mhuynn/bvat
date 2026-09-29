const reasons = [
  {
    icon: '🏆',
    title: 'Uy tín hàng đầu',
    text: 'Hơn 20 năm phát triển vững mạnh, trực thuộc hệ thống tài chính bảo hiểm uy tín quốc gia.',
  },
  {
    icon: '💳',
    title: 'Chi trả nhanh chóng',
    text: 'Cam kết giải quyết quyền lợi bảo hiểm minh bạch, nhanh gọn trong vòng 24 giờ làm việc.',
  },
  {
    icon: '👥',
    title: 'Tư vấn chuyên nghiệp',
    text: 'Đội ngũ tư vấn viên am hiểu sâu sắc, tận tâm và luôn đặt quyền lợi khách hàng lên hàng đầu.',
  },
  {
    icon: '🌐',
    title: 'Mạng lưới rộng khắp',
    text: 'Hệ thống chi nhánh và bệnh viện liên kết trải dài khắp 63 tỉnh thành cả nước.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      className="why-section"
      id="ve-chung-toi"
    >

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            GIÁ TRỊ CỐT LÕI
          </span>

          <h2>
            Tại sao chọn Bảo Việt An Tâm?
          </h2>

          <p>
            Chúng tôi tự hào là người đồng hành đáng tin cậy trong
            mọi kế hoạch bảo vệ cuộc sống của bạn.
          </p>

        </div>

        <div className="reasons-grid">

          {reasons.map((item) => (
            <div
              className="reason-card"
              key={item.title}
            >

              <span className="reason-number">
                {item.icon}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}