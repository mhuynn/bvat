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
  coreBenefits,
  accumulationBenefits,
  audiences,
  pricingRows,
  processSteps,
  eligibilityTerms,
  waitingPeriodTerms,
  faqs,
} from '@/data/bao-hiem-huu-tri'

export const metadata = {
  title: 'Bảo Hiểm Hưu Trí | Bảo Việt An Tâm',
  description:
    'Chuẩn bị tài chính vững vàng cho tuổi hưu trí an nhàn, tự tại mà không phụ thuộc vào con cháu.',
}

export default function BaoHiemHuuTriPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="GÓI AN NHÀN TUỔI VÀNG"
          title="Bảo Hiểm Hưu Trí"
          highlight="An Nhàn Tuổi Vàng"
          description="Đồng hành cùng bạn xây dựng tương lai hưu trí độc lập tài chính, an nhàn tự tại chăm sóc bản thân và gia đình mà không phụ thuộc vào con cháu."
          primaryCtaLabel="Đăng ký tư vấn ngay"
          secondaryCtaLabel="Tải tài liệu hưu trí"
          benefitsTitle="Quyền lợi tuổi xế chiều"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Hành Trình Chuẩn Bị Cho Tuổi Hưu Trọn Vẹn"
          description="Chương trình Bảo hiểm Hưu trí Bảo Việt mang lại điểm tựa vững chắc cho những năm tháng sau khi nghỉ hưu, đảm bảo tích lũy có kỷ luật ngay hôm nay để tương lai không còn lo lắng về mặt tài chính."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="ĐẶC QUYỀN VƯỢT TRỘI"
          title="Tính Năng Độc Quyền Dành Cho Tuổi Nghỉ Hưu"
          features={features}
        />

        <ProductBenefits
          eyebrow="PHẠM VI QUYỀN LỢI"
          title="Hạng Mục Chi Trả Chi Tiết"
          leftTitle="Quyền Lợi Hưu Trí & Bảo Vệ Cơ Bản"
          leftItems={coreBenefits}
          rightTitle="Quyền Lợi Tích Lũy & Gia Tăng Sức Khỏe"
          rightItems={accumulationBenefits}
        />

        <ProductAudience
          eyebrow="GIẢI PHÁP PHÙ HỢP"
          title="Giải Pháp Cho Từng Nhóm Khách Hàng"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="BẢNG SO SÁNH QUYỀN LỢI"
          title="Hạn Mức & Giá Trị Hưu Trí Tích Lũy"
          columnLabel="Hạng mục bảo vệ hưu trí"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="CÁC BƯỚC THAM GIA"
          title="Quy Trình 4 Bước Sở Hữu Gói Hưu Trí"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="LƯU Ý QUAN TRỌNG"
          title="Điều Khoản & Quy Định Pháp Lý"
          leftTitle="1. Điều kiện tham gia chương trình"
          leftItems={eligibilityTerms}
          rightTitle="2. Thời gian chờ & Quy tắc loại trừ"
          rightItems={waitingPeriodTerms}
        />

        <ProductFaq
          eyebrow="CÂU HỎI THƯỜNG GẶP"
          title="Hỏi Đáp Về Bảo Hiểm Hưu Trí"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="TƯ VẤN TRỰC TIẾP"
          title="Tích Lũy Cho Tuổi Hưu An Yên"
          description="Hãy để đội ngũ chuyên viên hoạch định tài chính của Bảo Việt An Tâm đồng hành cùng bạn xây dựng chiến lược tích lũy hưu trí vững vàng."
          hotline="0569 490 888"
          hours="Thứ Hai - Chủ Nhật (08:00 - 21:00)"
          interestOptions={['Gói Đồng', 'Gói Bạc', 'Gói Vàng (VIP) - Khuyến nghị']}
          interestPlaceholder="Gói Vàng (VIP) - Khuyến nghị"
        />

      </main>

      <Footer />
    </>
  )
}
