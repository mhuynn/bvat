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
  homeBenefits,
  propertyBenefits,
  audiences,
  pricingRows,
  processSteps,
  eligibilityTerms,
  waitingPeriodTerms,
  faqs,
} from '@/data/bao-hiem-tai-san'

export const metadata = {
  title: 'Bảo Hiểm Tài Sản | Bảo Việt An Tâm',
  description:
    'Giải pháp toàn diện bảo vệ ngôi nhà và tài sản trước rủi ro hỏa hoạn, thiên tai, trộm cắp.',
}

export default function BaoHiemTaiSanPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="GÓI BẢO VỆ TÀI SẢN"
          title="Bảo Hiểm Tài Sản"
          highlight="An Tâm Bảo Vệ Tổ Ấm"
          description="Giải pháp toàn diện bảo vệ ngôi nhà và tài sản thân yêu của gia đình trước các rủi ro hỏa hoạn, thiên tai, trộm cắp và gánh nặng chi phí phát sinh không mong muốn."
          primaryCtaLabel="Đăng ký tư vấn"
          secondaryCtaLabel="Tải tài liệu bảo hiểm"
          benefitsTitle="Quyền lợi nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Bảo Vệ Toàn Diện Cho Tổ Ấm Của Bạn"
          description="Ngôi nhà không chỉ là tài sản mà còn là nơi lưu giữ những khoảnh khắc hạnh phúc của gia đình. Với gói Bảo hiểm Tài sản Bảo Việt An Tâm, chúng tôi cam kết đồng hành và gánh vác mọi rủi ro tài chính, mang lại sự an tâm tuyệt đối cho ngôi nhà và những người thân yêu của bạn."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="ƯU ĐIỂM VƯỢT TRỘI"
          title="Phạm Vi Bảo Vệ Toàn Diện Tài Sản"
          features={features}
        />

        <ProductBenefits
          eyebrow="QUYỀN LỢI CHI TIẾT"
          title="Bảng Quyền Lợi Bảo Hiểm Chi Tiết"
          leftTitle="Quyền Lợi Ngôi Nhà (Bắt buộc)"
          leftItems={homeBenefits}
          rightTitle="Quyền Lợi Tài Sản & Chi Phí (Tùy Chọn)"
          rightItems={propertyBenefits}
        />

        <ProductAudience
          eyebrow="ĐIỀU KIỆN THAM GIA"
          title="Ai Nên Tham Gia Bảo Hiểm?"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="PHẠM VI CHI TRẢ"
          title="Bảng Giá & Hạn Mức Quyền Lợi"
          columnLabel="Quyền lợi bảo hiểm tài sản"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="HƯỚNG DẪN THAM GIA"
          title="Quy Trình 4 Bước Đơn Giản Nhận Bảo Vệ"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="LƯU Ý PHÁP LÝ"
          title="Điều Khoản & Quy Định Quan Trọng"
          leftTitle="1. Điều kiện cấu trúc tài sản"
          leftItems={eligibilityTerms}
          rightTitle="2. Thời gian chờ & Điểm loại trừ"
          rightItems={waitingPeriodTerms}
        />

        <ProductFaq
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Giải Đáp Thắc Mắc Thường Gặp"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="TƯ VẤN TRỰC TIẾP"
          title="An Tâm Tận Hưởng, Vững Chãi Ngôi Nhà Việt"
          description="Hãy để đội ngũ chuyên viên tư vấn của Bảo Việt An Tâm giúp bạn tìm ra giải pháp bảo vệ tài sản tối ưu nhất cho ngôi nhà của mình."
          hotline="0569 490 888"
          hours="Thứ 2 - Chủ nhật (08:00 - 21:00)"
          interestOptions={['Gói Đồng', 'Gói Bạc', 'Gói Vàng (VIP) - Khuyến nghị']}
          interestPlaceholder="Gói Vàng (VIP) - Khuyến nghị"
        />

      </main>

      <Footer />
    </>
  )
}
