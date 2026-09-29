const testimonials = [
  {
    name: 'Chị Minh Thư',
    role: 'Mẹ của 2 con nhỏ, Hà Nội',
    content:
      'Lúc đầu tôi rất đắn đo khi mua bảo hiểm sức khỏe, nhưng sau khi được tư vấn bởi Bảo Việt An Tâm tôi đã tin tưởng lựa chọn. Quá trình bồi thường viện phí diễn ra cực kỳ suôn sẻ.',
  },
  {
    name: 'Bác Hoàng Hải',
    role: 'Cán bộ hưu trí, TP. Hồ Chí Minh',
    content:
      'Tôi tham gia bảo hiểm hưu trí để chuẩn bị tốt cho tuổi già. Dịch vụ tư vấn rất kỹ lưỡng, rõ ràng về mặt pháp lý và hợp đồng nên tôi thực sự an tâm.',
  },
  {
    name: 'Anh Quốc Khánh',
    role: 'Chủ doanh nghiệp, Đà Nẵng',
    content:
      'Bảo hiểm xe cơ giới của Bảo Việt An Tâm giải quyết bồi thường nhanh chóng đến không ngờ. Xe tôi bị va quẹt nhẹ được hỗ trợ ngay trong đêm.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            Ý KIẾN TỪ KHÁCH HÀNG
          </span>

          <h2>
            Khách hàng nói gì về chúng tôi
          </h2>

          <p>
            Sự an tâm và hài lòng của quý khách hàng chính là động
            lực phát triển lớn nhất của Bảo Việt An Tâm.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item) => (
            <article
              className="testimonial-card"
              key={item.name}
            >

              <div className="quote-icon">
                ❝
              </div>

              <p>
                “{item.content}”
              </p>

              <div className="customer">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <strong>
                    {item.name}
                  </strong>

                  <span>
                    {item.role}
                  </span>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}