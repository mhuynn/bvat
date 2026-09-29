import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductHero from '@/components/product/ProductHero'
import ProductOverview from '@/components/product/ProductOverview'
import ProductFeatures from '@/components/product/ProductFeatures'
import ProductBenefits from '@/components/product/ProductBenefits'
import ProductAudience from '@/components/product/ProductAudience'
import ProductPricing from '@/components/product/ProductPricing'
import ProductProcess from '@/components/product/ProductProcess'
import ProductTerms from '@/components/product/ProductTerms'
import ProductFaq from '@/components/product/ProductFaq'
import ProductConsultation from '@/components/product/ProductConsultation'
import {
  heroBenefits,
  overviewStats,
  features,
  protectionBenefits,
  accumulationBenefits,
  audiences,
  pricingRows,
  processSteps,
  eligibilityTerms,
  exclusionTerms,
  faqs,
} from '@/data/bao-hiem-hon-hop'

export const metadata = {
  title: 'Bảo Hiểm Hỗn Hợp | Bảo Việt An Tâm',
  description:
    'Giải pháp tài chính linh hoạt kết hợp bảo vệ trước rủi ro và tích lũy tài sản với lãi suất hấp dẫn.',
}

export default function BaoHiemHonHopPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="SẢN PHẨM ĐẦU TƯ TOÀN DIỆN"
          title="Bảo Hiểm Hỗn Hợp"
          highlight="Bảo Vệ Kết Hợp Tích Lũy Thông Minh"
          description="Giải pháp tài chính linh hoạt giúp bạn vừa an tâm bảo vệ trước rủi ro vừa có cơ hội gia tăng tài sản với mức lãi suất tích lũy hấp dẫn."
          primaryCtaLabel="Đăng ký tư vấn"
          secondaryCtaLabel="Tài liệu minh họa"
          benefitsTitle="Đặc Quyền Vượt Trội"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="GIỚI THIỆU SẢN PHẨM"
          title="Giải Pháp Tài Chính Bền Vững Cho Gia Đình"
          description="Chương trình Bảo hiểm Hỗn hợp của Bảo Việt An Tâm được thiết kế đặc biệt giúp khách hàng vừa bảo vệ trước rủi ro gặp phải, vừa có khả năng tích lũy tài sản với hạn mức bảo vệ rõ ràng ngay từ hôm nay cho mục tiêu dài hạn."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="ĐIỂM ƯU VIỆT CỦA SẢN PHẨM"
          title="6 Đặc Điểm Vượt Trội Không Thể Bỏ Qua"
          features={features}
        />

        <ProductBenefits
          eyebrow="QUYỀN LỢI CHI TIẾT"
          title="Chi Tiết 12 Quyền Lợi Bảo Vệ & Tích Lũy"
          leftTitle="I. Quyền Lợi Bảo Vệ Toàn Diện (6 Quyền Lợi)"
          leftItems={protectionBenefits}
          rightTitle="II. Quyền Lợi Đầu Tư & Tích Lũy (6 Quyền Lợi)"
          rightItems={accumulationBenefits}
        />

        <ProductAudience
          eyebrow="NGUỒN CHO THAM GIA"
          title="Sản Phẩm Thiết Kế Cho Ai?"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="PHẠM VI CHI TRẢ"
          title="Bảng Quyền Lợi So Sánh Các Gói Sản Phẩm"
          columnLabel="Quyền lợi bảo hiểm"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="HƯỚNG DẪN THAM GIA"
          title="Quy Trình 4 Bước Đơn Giản Để Được Bảo Vệ"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="LƯU Ý QUAN TRỌNG"
          title="Quy Định & Điều Khoản Loại Trừ"
          leftTitle="1. Điều kiện gia nhập hợp đồng"
          leftItems={eligibilityTerms}
          rightTitle="2. Các điều khoản loại trừ chính"
          rightItems={exclusionTerms}
        />

        <ProductFaq
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Những Câu Hỏi Thường Gặp"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="TƯ VẤN MIỄN PHÍ"
          title="Bảo Vệ Tổ Ấm, Tích Lũy Ngày Mai Cùng Bảo Việt"
          description="Đừng ngần ngại để lại thông tin để đội ngũ chuyên viên tư vấn của Bảo Việt An Tâm giúp bạn tìm ra giải pháp tài chính phù hợp nhất."
          hotline="0569 490 888"
          hours="Thứ 2 - Chủ nhật (07:00 - 23:00)"
          interestOptions={['Gói Đồng', 'Gói Bạc', 'Gói Vàng (VIP) - Khuyến nghị']}
          interestPlaceholder="Gói Vàng (VIP) - Khuyến nghị"
        />

      </main>

      <Footer />
    </>
  )
}
