'use client'

import { FormEvent } from 'react'

export default function Consultation() {

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
      className="consultation"
      id="tu-van"
    >

      <div className="container consultation-grid">

        <div className="consultation-info">

          <span className="eyebrow">
            TƯ VẤN TRỰC TUYẾN
          </span>

          <h2>
            Nhận tư vấn
            <span> miễn phí ngay hôm nay</span>
          </h2>

          <p>
            Hãy để các chuyên gia tài chính của chúng tôi giúp bạn
            xây dựng kế hoạch bảo vệ tối ưu nhất cho bản thân và
            gia đình. Quy trình đơn giản, tư vấn tận tâm.
          </p>

          <div className="consultation-list">

            <div>
              <span>📞</span>
              <em>Đường dây nóng hỗ trợ 24/7</em>
              <strong>1900 8888</strong>
            </div>

            <div>
              <span>🕐</span>
              <em>Giờ làm việc</em>
              <strong>Thứ Hai - Chủ Nhật (08:00 - 21:00)</strong>
            </div>

          </div>

        </div>

        <div className="consultation-box">

          <h3>
            Đăng ký thông tin tư vấn
          </h3>

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label>
                Họ và tên của bạn
              </label>

              <input
                type="text"
                placeholder="Ví dụ: Nguyễn Văn A"
                required
              />

            </div>

            <div className="input-group">

              <label>
                Số điện thoại liên hệ
              </label>

              <input
                type="tel"
                placeholder="Ví dụ: 0987 654 321"
                required
              />

            </div>

            <div className="input-group">

              <label>
                Địa chỉ Email
              </label>

              <input
                type="email"
                placeholder="Ví dụ: nguyen.a@gmail.com"
              />

            </div>

            <div className="input-group">

              <label>
                Gói bảo hiểm bạn quan tâm
              </label>

              <select defaultValue="" required>

                <option value="" disabled>
                  Chọn loại bảo hiểm cần tư vấn...
                </option>

                <option>
                  Bảo hiểm nhân thọ
                </option>

                <option>
                  Bảo hiểm sức khỏe
                </option>

                <option>
                  Bảo hiểm xe cơ giới
                </option>

                <option>
                  Bảo hiểm tài sản
                </option>

              </select>

            </div>

            <div className="input-group">

              <label>
                Nội dung cần hỗ trợ thêm
              </label>

              <textarea
                rows={4}
                placeholder="Vd: Tôi muốn tư vấn gói bảo hiểm cho con đi học"
              />

            </div>

            <button
              type="submit"
              className="form-submit"
            >
              Gửi yêu cầu tư vấn
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}
