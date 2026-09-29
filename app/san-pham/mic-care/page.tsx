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
  inpatientBenefits,
  optionalBenefits,
  audiences,
  pricingRows,
  processSteps,
  eligibilityTerms,
  waitingPeriodTerms,
  faqs,
} from '@/data/mic-care'

export const metadata = {
  title: 'Bảo Hiểm Sức Khỏe Toàn Diện MIC Care | Bảo Việt An Tâm',
  description:
    'Bảo lãnh viện phí trực tiếp tại hơn 300 bệnh viện hàng đầu Việt Nam và Quốc tế.',
}

export default function MicCarePage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="CHƯƠNG TRÌNH CAO CẤP"
          title="Bảo Hiểm Sức Khỏe Toàn Diện"
          highlight="MIC Care"
          description="An tâm tận hưởng cuộc sống với hệ thống bảo lãnh viện phí tại hơn 300 bệnh viện hàng đầu Việt Nam và Quốc tế. Bảo vệ sức khỏe, chi phí hợp lý."
          primaryCtaLabel="Đăng ký tư vấn"
          secondaryCtaLabel="Tải tài liệu sản phẩm"
          benefitsTitle="Quyền lợi nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN"
          title="Giới thiệu Sản phẩm"
          description="Sức khỏe là vốn quý nhất của con người. Chương trình bảo hiểm sức khỏe MIC Care của Bảo Việt An Tâm được thiết kế đặc biệt nhằm bảo vệ bạn và người thân trước mọi rủi ro sức khỏe bất ngờ, giảm áp lực tài chính khi ốm đau hay điều trị."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="ƯU ĐIỂM VƯỢT TRỘI"
          title="Đặc Điểm Nổi Bật Của MIC Care"
          features={features}
        />

        <ProductBenefits
          eyebrow="QUYỀN LỢI BẢO HIỂM"
          title="Quyền Lợi Bảo Vệ Toàn Diện"
          leftTitle="Quyền Lợi Nội Trú (Bắt buộc)"
          leftItems={inpatientBenefits}
          rightTitle="Quyền Lợi Tự Chọn & Bổ Sung"
          rightItems={optionalBenefits}
        />

        <ProductAudience
          eyebrow="AI CÓ THỂ THAM GIA"
          title="Đối Tượng Tham Gia Bảo Hiểm"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="BẢNG GIÁ & PHẠM VI"
          title="Hạn Mức Chi Trả Chi Tiết"
          columnLabel="Hạng mục bảo vệ"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="QUY TRÌNH"
          title="4 Bước Đăng Ký Đơn Giản"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="ĐIỀU KHOẢN QUAN TRỌNG"
          title="Điều Kiện & Lưu Ý Quan Trọng"
          leftTitle="1. Điều kiện tham gia"
          leftItems={eligibilityTerms}
          rightTitle="2. Thời gian chờ & Điều khoản loại trừ"
          rightItems={waitingPeriodTerms}
        />

        <ProductFaq
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Câu Hỏi Thường Gặp"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="TƯ VẤN TRỰC TIẾP"
          title="Nhận Tư Vấn Sức Khỏe Miễn Phí"
          description="Hãy để các chuyên gia tư vấn của Bảo Việt An Tâm đồng hành cùng bạn xây dựng kế hoạch bảo vệ sức khỏe phù hợp nhất."
          hotline="0569 490 888"
          hours="Thứ 2 - Chủ nhật (08:00 - 21:00)"
          interestOptions={['Gói Đồng', 'Gói Bạc', 'Gói Vàng (VIP)', 'Chưa rõ, cần tư vấn thêm']}
          interestPlaceholder="Chọn gói bảo hiểm"
        />

      </main>

      <Footer />
    </>
  )
}
