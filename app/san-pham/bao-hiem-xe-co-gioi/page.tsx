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
} from '@/data/bao-hiem-xe-co-gioi'

export const metadata = {
  title: 'Bảo Hiểm Xe Cơ Giới | Bảo Việt An Tâm',
  description:
    'Bảo vệ toàn diện cho chiếc xe của bạn trên mọi cung đường, hỗ trợ cứu hộ khẩn cấp 24/7.',
}

export default function BaoHiemXeCoGioiPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="BẢO HIỂM XE CƠ GIỚI"
          title="Bảo Vệ Toàn Diện"
          highlight="Cho Xe Yêu Của Bạn"
          description="Vững tâm trên mọi cung đường cùng giải pháp bảo hiểm ô tô cao cấp nhất từ Bảo Việt An Tâm. Chi trả nhanh chóng, hỗ trợ tận tình 24/7 trước mọi rủi ro va chạm, ngập nước, hỏa hoạn và mất cắp."
          primaryCtaLabel="Nhận báo giá ngay"
          secondaryCtaLabel="Tải bảng phí chi tiết"
          benefitsTitle="Quyền lợi nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Bảo Hiểm Xe Cơ Giới Bảo Việt An Tâm"
          description="Chương trình bảo hiểm vật chất xe được thiết kế toàn diện dành cho mọi dòng xe cá nhân và doanh nghiệp. Bảo Việt An Tâm cam kết dịch vụ cứu hộ nhanh chóng, thủ tục bồi thường minh bạch giúp bạn an tâm, mang lại sự bình yên tuyệt đối cho mọi hành trình di chuyển."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="TÍNH NĂNG VƯỢT TRỘI"
          title="Đặc Quyền Bảo Vệ Toàn Diện Cho Xe"
          features={features}
        />

        <ProductBenefits
          eyebrow="CHI TIẾT HẠN MỨC"
          title="Bảng Quyền Lợi Bảo Hiểm 12 Hạng Mục"
          leftTitle="Quyền lợi cơ bản bắt buộc"
          leftItems={coreBenefits}
          rightTitle="Quyền lợi bổ sung tự chọn"
          rightItems={optionalBenefits}
        />

        <ProductAudience
          eyebrow="ĐỐI TƯỢNG THAM GIA"
          title="Thiết Kế Phù Hợp Với Mọi Nhu Cầu"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="BẢNG SO SÁNH GÓI"
          title="Hạn Mức Đền Bù Chi Tiết Từng Gói"
          columnLabel="Quyền lợi chính & Tùy chọn mở rộng"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="QUY TRÌNH THAM GIA"
          title="Quy Trình 4 Bước Đơn Giản Nhận Hợp Đồng"
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
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Giải Đáp Thắc Mắc Thường Gặp Về Bảo Hiểm Xe"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="HỖ TRỢ TRỰC TUYẾN"
          title="Nhận Ưu Đãi Phí Bảo Hiểm Xe Lên Đến 15%"
          description="Hãy để đội ngũ chuyên viên bảo hiểm xe của Bảo Việt An Tâm giúp bạn lựa chọn gói bảo hiểm phù hợp nhất với nhu cầu sử dụng xe của bạn."
          hotline="0569 490 888"
          hours="Thứ Hai - Chủ Nhật (08:00 - 21:00)"
          interestOptions={['Gói Đồng (Cơ bản)', 'Gói Bạc (Nâng cao)', 'Gói Vàng (VIP Toàn diện)']}
          interestPlaceholder="Toyota Camry - Đời 2023..."
        />

      </main>

      <Footer />
    </>
  )
}
