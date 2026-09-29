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
} from '@/data/bao-hiem-du-lich'

export const metadata = {
  title: 'Bảo Hiểm Du Lịch Quốc Tế | Bảo Việt An Tâm',
  description:
    'An tâm tuyệt đối tại hơn 200 quốc gia với mức chi trả bảo hiểm y tế lên đến 5 tỷ VNĐ.',
}

export default function BaoHiemDuLichPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="BẢO HIỂM DU LỊCH QUỐC TẾ"
          title="Hành Trình An Tâm"
          highlight="Khắp Thế Giới"
          description="Trải nghiệm kỳ nghỉ trọn vẹn và an tâm tuyệt đối tại hơn 200 quốc gia. Bảo Việt An Tâm đồng hành cùng bạn trước mọi rủi ro y tế và tài chính trên hành trình quốc tế với mức chi trả bảo hiểm lên đến 5 tỷ VNĐ."
          primaryCtaLabel="Nhận báo giá ngay"
          secondaryCtaLabel="Tải Brochure chi tiết"
          benefitsTitle="Quyền lợi nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Bảo Hiểm Du Lịch Quốc Tế Bảo Việt An Tâm"
          description="Sẵn sàng khám phá mọi miền cùng năng lượng bảo vệ toàn diện. Giải pháp bảo hiểm du lịch tối ưu, thủ tục đơn giản trên mọi điểm đến, đáp ứng yêu cầu visa Schengen và toàn cầu."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="TÍNH NĂNG VƯỢT TRỘI"
          title="Đặc Quyền Bảo Vệ Trên Từng Cung Đường"
          features={features}
        />

        <ProductBenefits
          eyebrow="CHI TIẾT HẠN MỨC"
          title="Bảng Quyền Lợi Bảo Hiểm 12 Hạng Mục"
          leftTitle="Quyền lợi cơ bản bắt buộc"
          leftItems={coreBenefits}
          rightTitle="Quyền lợi mở rộng tự chọn"
          rightItems={extendedBenefits}
        />

        <ProductAudience
          eyebrow="ĐỐI TƯỢNG THAM GIA"
          title="Thiết Kế Phù Hợp Với Mọi Chuyến Đi"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="BẢNG GIÁ 4 HẠNG MỤC"
          title="Hạn Mức Đền Bù Chi Tiết Từng Gói"
          columnLabel="Hạng mục quyền lợi bảo vệ"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="QUY TRÌNH THAM GIA"
          title="Quy Trình 4 Bước Đơn Giản Trực Tuyến"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="QUY ĐỊNH PHÁP LÝ"
          title="Điều Khoản & Loại Trừ Trách Nhiệm Quan Trọng"
          leftTitle="1. Điều kiện áp dụng"
          leftItems={eligibilityTerms}
          rightTitle="2. Các trường hợp loại trừ đền bù"
          rightItems={exclusionTerms}
        />

        <ProductFaq
          eyebrow="HỎI ĐÁP PHỔ BIẾN"
          title="Giải Đáp Thắc Mắc Thường Gặp Về Bảo Hiểm Du Lịch"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="HỖ TRỢ TRỰC TUYẾN"
          title="Nhận Ưu Đãi Phí Bảo Hiểm Du Lịch Lên Đến 15%"
          description="Hãy để đội ngũ chuyên viên giàu kinh nghiệm của Bảo Việt An Tâm giúp bạn tìm ra gói bảo hiểm du lịch tốt nhất, phù hợp với hành trình sắp tới và ngân sách của bạn."
          hotline="0569 490 888"
          hours="Thứ Hai - Chủ Nhật (08:00 - 21:00)"
          interestOptions={['Gói Đồng', 'Gói Bạc', 'Gói Vàng (VIP) - Khuyến nghị']}
          interestPlaceholder="Khối Schengen (Châu Âu) - 15 ngày"
        />

      </main>

      <Footer />
    </>
  )
}
