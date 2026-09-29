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
  optionalBenefits,
  audiences,
  pricingRows,
  processSteps,
  eligibilityTerms,
  exclusionTerms,
  faqs,
} from '@/data/bao-hiem-hang-hoa'

export const metadata = {
  title: 'Bảo Hiểm Hàng Hóa | Bảo Việt An Tâm',
  description:
    'Bảo vệ giá trị lô hàng trên mọi hành trình đường biển, đường hàng không, đường bộ và đường sắt.',
}

export default function BaoHiemHangHoaPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="BẢO HIỂM HÀNG HÓA"
          title="Đảm Bảo An Toàn"
          highlight="Vận Chuyển Toàn Cầu"
          description="Vững vàng giao thương trên mọi nẻo đường hành trình đường biển, đường hàng không, đường bộ và đường sắt. Bảo Việt An Tâm đồng hành cùng quý doanh nghiệp trước mọi rủi ro tổn thất, va chạm và thiên tai."
          primaryCtaLabel="Nhận báo giá ngay"
          secondaryCtaLabel="Tải hồ sơ bảo hiểm"
          benefitsTitle="Quyền lợi cốt lõi"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Bảo Hiểm Hàng Hóa Vận Chuyển Bảo Việt An Tâm"
          description="Hàng hóa của bạn là huyết mạch của doanh nghiệp. Cho dù vận chuyển nội địa hay giao thương quốc tế, giải pháp của chúng tôi cam kết bảo vệ giá trị lô hàng trước mọi thiệt hại vật chất bất ngờ, giúp doanh nghiệp vững tâm tập trung vào hoạt động sản xuất kinh doanh cốt lõi."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="TÍNH NĂNG VƯỢT TRỘI"
          title="6 Đặc Quyền Bảo Vệ Hàng Hóa Toàn Diện"
          features={features}
        />

        <ProductBenefits
          eyebrow="CHI TIẾT HẠN MỨC"
          title="Bảng Quyền Lợi Bảo Hiểm Hàng Hóa 12 Hạng Mục"
          leftTitle="Quyền lợi cơ bản (Mọi rủi ro - Gói A)"
          leftItems={coreBenefits}
          rightTitle="Quyền lợi bổ sung tự chọn mở rộng"
          rightItems={optionalBenefits}
        />

        <ProductAudience
          eyebrow="ĐỐI TƯỢNG THAM GIA"
          title="Sản Phẩm Thiết Kế Cho Mọi Chủ Hàng & Nhà Vận Tải"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="PHẠM VI SO SÁNH GÓI"
          title="Hạn Mức & Phạm Vi Đền Bù Chi Tiết"
          columnLabel="Quyền lợi chính & Tùy chọn bảo vệ hàng hóa"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="QUY TRÌNH THAM GIA"
          title="Quy Trình 4 Bước Cấp Đơn Điện Tử Nhanh Chóng"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="QUY ĐỊNH PHÁP LÝ"
          title="Điều Khoản Áp Dụng & Loại Trừ Trách Nhiệm Quan Trọng"
          leftTitle="1. Điều kiện tham gia tiêu chuẩn"
          leftItems={eligibilityTerms}
          rightTitle="2. Các trường hợp loại trừ đền bù"
          rightItems={exclusionTerms}
        />

        <ProductFaq
          eyebrow="GIẢI ĐÁP THƯỜNG GẶP"
          title="Giải Đáp Thắc Mắc Về Bảo Hiểm Hàng Hóa"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="ĐĂNG KÝ NGAY"
          title="Nhận Ưu Đãi Phí Bảo Hiểm Lên Đến 15%"
          description="Hãy để chuyên gia bảo hiểm và logistics của Bảo Việt An Tâm giúp bạn tối ưu chi phí bảo hiểm cho từng lô hàng vận chuyển."
          hotline="0569 490 888"
          hours="Thứ Hai - Chủ Nhật (24/7/365)"
          interestOptions={['Gói Đồng (FPA - C)', 'Gói Bạc (WA - B)', 'Gói Vàng (All Risks - A)']}
          interestPlaceholder="Hàng khô - Vận đường biển..."
        />

      </main>

      <Footer />
    </>
  )
}
