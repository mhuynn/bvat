'use client'

import { FormEvent } from 'react'

interface ProductConsultationProps {
  eyebrow: string
  title: string
  description: string
  hotline: string
  hours: string
  interestOptions: string[]
  interestPlaceholder: string
}

export default function ProductConsultation({
  eyebrow,
  title,
  description,
  hotline,
  hours,
  interestOptions,
  interestPlaceholder,
}: ProductConsultationProps) {

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    alert(
      'Cảm ơn bạn! Yêu cầu tư vấn đã được ghi nhận.'
    )
  }

  return (
    <section
      className="product-consultation"
      id="tu-van"
    >

      <div className="container product-consultation-grid">

        <div className="product-consultation-info">

          <span className="eyebrow">
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>

          <p>
            {description}
          </p>

          <div className="product-hotline">

            <span>Hotline tư vấn 24/7</span>

            <strong>{hotline}</strong>

            <span>{hours}</span>

          </div>

        </div>

        <div className="consultation-box">

          <h3>
            Đăng ký thông tin tư vấn
          </h3>

          <p>
            Vui lòng để lại thông tin, chuyên viên sẽ liên hệ
            trong vòng 30 phút.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label>
                Họ và tên của bạn
              </label>

              <input
                type="text"
                placeholder="Vd: Nguyễn Văn A"
                required
              />

            </div>

            <div className="input-group">

              <label>
                Số điện thoại
              </label>

              <input
                type="tel"
                placeholder="Số điện thoại"
                required
              />

            </div>

            <div className="input-group">

              <label>
                Gói bảo hiểm quan tâm
              </label>

              <select defaultValue="" required>

                <option value="" disabled>
                  {interestPlaceholder}
                </option>

                {interestOptions.map((option) => (
                  <option key={option}>
                    {option}
                  </option>
                ))}

              </select>

            </div>

            <button
              type="submit"
              className="form-submit"
            >
              Gửi yêu cầu ngay
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}
