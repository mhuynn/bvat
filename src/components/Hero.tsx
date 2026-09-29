export default function Hero() {
  return (
    <section
      className="hero"
      id="trang-chu"
    >

      <div className="container hero-inner">

        <div className="hero-content">

          <span className="eyebrow">
            BẢO HIỂM SỨC KHỎE TOÀN DIỆN
          </span>

          <h1>
            Bảo vệ tương lai –
            <br />
            <span>An tâm cuộc sống</span>
          </h1>

          <p>
            Giải pháp bảo hiểm toàn diện cho bạn và gia đình với hơn
            20 năm kinh nghiệm đồng hành cùng hàng triệu gia đình
            Việt.
          </p>

          <div className="hero-actions">

            <a
              href="#san-pham"
              className="btn btn-primary"
            >
              Xem gói bảo hiểm
              <span>→</span>
            </a>

            <a
              href="#tu-van"
              className="btn btn-outline"
            >
              Tư vấn miễn phí
            </a>

          </div>

          <div className="hero-benefits">

            <div>
              <span>✓</span>
              Bồi thường nhanh 24h
            </div>

            <div>
              <span>✓</span>
              Bảo lãnh viện phí rộng khắp
            </div>

            <div>
              <span>✓</span>
              Hỗ trợ 24/7
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-image">
            <img
              src="banner.png"
              alt="Gia đình"
            />
          </div>

        </div>

      </div>

    </section>
  )
}