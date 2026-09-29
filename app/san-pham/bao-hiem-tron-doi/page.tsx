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
} from '@/data/bao-hiem-tron-doi'

export const metadata = {
  title: 'Bảo Hiểm Trọn Đời | Bảo Việt An Tâm',
  description:
    'Bảo vệ tài chính trọn đời và tích lũy tài sản vững chắc cho gia đình bạn.',
}

export default function BaoHiemTronDoiPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="BẢO HIỂM TRỌN ĐỜI"
          title="Bảo Vệ Trọn Vẹn"
          highlight="Suốt Cuộc Đời"
          description="Giải pháp an tâm lao động, chuẩn bị tài chính vững chắc trước những rủi ro bất ngờ và an tâm thảnh thơi khi tuổi già đến. Điều khoản linh hoạt cả cuộc đời."
          primaryCtaLabel="Đăng ký tư vấn"
          secondaryCtaLabel="Tải tài liệu sản phẩm"
          benefitsTitle="Quyền lợi nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Giới thiệu Bảo hiểm Trọn Đời"
          description="Bảo hiểm Trọn Đời mang đến giải pháp tài chính và sức khỏe vẹn toàn. Không chỉ bảo vệ tính mạng và sức khỏe trên mọi chặng đời, chương trình còn hoạt động như quỹ đầu tư an toàn giúp gia tăng tài sản vững vàng cho thế hệ tương lai."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="ĐẶC QUYỀN VƯỢT TRỘI"
          title="Tính Năng Độc Quyền Trọn Đời"
          features={features}
        />

        <ProductBenefits
          eyebrow="QUYỀN LỢI BẢO VỆ"
          title="Quyền Lợi Chi Tiết"
          leftTitle="Quyền Lợi Cơ Bản (Bắt buộc)"
          leftItems={coreBenefits}
          rightTitle="Quyền Lợi Bổ Sung & Tích Lũy"
          rightItems={accumulationBenefits}
        />

        <ProductAudience
          eyebrow="ĐIỀU KIỆN THAM GIA"
          title="Đối Tượng Phù Hợp"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="PHẠM VI CHI TRẢ"
          title="Bảng Giá & Hạn Mức Quyền Lợi"
          columnLabel="Quyền lợi bảo hiểm"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="HƯỚNG DẪN THAM GIA"
          title="Quy Trình 4 Bước Sở Hữu Hợp Đồng"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="LƯU Ý PHÁP LÝ"
          title="Điều Khoản & Quy Định Quan Trọng"
          leftTitle="1. Điều kiện tham gia"
          leftItems={eligibilityTerms}
          rightTitle="2. Thời gian chờ & Loại trừ"
          rightItems={waitingPeriodTerms}
        />

        <ProductFaq
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Giải Đáp Thắc Mắc Thường Gặp"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="TƯ VẤN TRỰC TUYẾN"
          title="An Tâm Tích Lũy, Trọn Đời Bình An"
          description="Hãy để các chuyên gia của Bảo Việt An Tâm giúp bạn xây dựng hành trình tích lũy tài sản vững chắc cho cả cuộc đời. Quy trình đơn giản, tư vấn tận tâm."
          hotline="1900 8888"
          hours="Thứ Hai - Chủ Nhật (08:00 - 21:00)"
          interestOptions={['Gói Đồng', 'Gói Bạc', 'Gói Vàng (VIP) - Khuyến nghị']}
          interestPlaceholder="Gói Vàng (VIP) - Khuyến nghị"
        />

      </main>

      <Footer />
    </>
  )
}
