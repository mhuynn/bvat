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
  extendedBenefits,
  audiences,
  pricingRows,
  processSteps,
  eligibilityTerms,
  exclusionTerms,
  faqs,
} from '@/data/bao-hiem-chay-no'

export const metadata = {
  title: 'Bảo Hiểm Cháy Nổ | Bảo Việt An Tâm',
  description:
    'Giải pháp tài chính vẹn toàn giúp doanh nghiệp phòng ngừa rủi ro cháy nổ, tuân thủ Nghị định 136/2020/NĐ-CP.',
}

export default function BaoHiemChayNoPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="BẮT BUỘC THEO PHÁP LUẬT"
          title="Phòng Ngừa Rủi Ro"
          highlight="Hỏa Hoạn"
          description="Giải pháp tài chính vẹn toàn, chủ động và công cụ trợ giúp hữu hiệu cho các doanh nghiệp trước những rủi ro cháy nổ. Tuân thủ nghiêm ngặt quy định pháp luật và giúp khắc phục hoạt động kinh doanh nhanh chóng."
          primaryCtaLabel="Đăng ký tư vấn"
          secondaryCtaLabel="Tải tài liệu sản phẩm"
          benefitsTitle="Quyền lợi nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Giới thiệu Bảo hiểm Cháy Nổ"
          description="Bảo hiểm Cháy Nổ Bảo Việt mang đến sự bảo vệ toàn diện cho nhà xưởng, văn phòng và kho bãi của bạn. Không chỉ đồng hành phòng ngừa rủi ro, chúng tôi còn cam kết hỗ trợ tài chính khi tổn thất để doanh nghiệp tái thiết hoạt động sản xuất kinh doanh sớm nhất."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="ĐẶC QUYỀN VƯỢT TRỘI"
          title="Tính Năng Ưu Việt Của Sản Phẩm"
          features={features}
        />

        <ProductBenefits
          eyebrow="HẠN MỨC BẢO VỆ"
          title="Quyền Lợi Chi Tiết (12 Điều Khoản)"
          leftTitle="Quyền Lợi Cơ Bản & Bắt buộc"
          leftItems={coreBenefits}
          rightTitle="Quyền Lợi Mở Rộng & Hỗ Trợ"
          rightItems={extendedBenefits}
        />

        <ProductAudience
          eyebrow="ĐỐI TƯỢNG THAM GIA"
          title="Đối Tượng Cần Bảo Hiểm"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="PHẠM VI CHI TRẢ"
          title="Bảng Giá & Hạn Mức Quyền Lợi"
          columnLabel="Hạng mục bảo hiểm cháy nổ"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="HƯỚNG DẪN THAM GIA"
          title="Quy Trình 4 Bước Đăng Ký Đơn Giản"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="LƯU Ý PHÁP LÝ"
          title="Điều Khoản & Quy Định Quan Trọng"
          leftTitle="1. Điều kiện tham gia bắt buộc"
          leftItems={eligibilityTerms}
          rightTitle="2. Các điểm loại trừ bảo hiểm"
          rightItems={exclusionTerms}
        />

        <ProductFaq
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Giải Đáp Thắc Mắc Thường Gặp"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="TƯ VẤN TRỰC TIẾP"
          title="An Tâm Sản Xuất, Vững Vàng Tương Lai"
          description="Hãy để đội ngũ chuyên viên tư vấn doanh nghiệp của Bảo Việt An Tâm giúp bạn thẩm định và lựa chọn gói bảo hiểm cháy nổ phù hợp nhất."
          hotline="0569 490 888"
          hours="24/24 ngày - Tất cả các ngày trong tuần"
          interestOptions={['Gói Đồng', 'Gói Bạc', 'Gói Vàng (VIP) - Khuyến nghị']}
          interestPlaceholder="Gói Vàng (VIP) - Khuyến nghị"
        />

      </main>

      <Footer />
    </>
  )
}
