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
  investmentBenefits,
  audiences,
  pricingRows,
  processSteps,
  eligibilityTerms,
  exclusionTerms,
  faqs,
} from '@/data/bao-hiem-lien-ket-dau-tu'

export const metadata = {
  title: 'Bảo Hiểm Liên Kết Đầu Tư | Bảo Việt An Tâm',
  description:
    'Giải pháp tài chính kết hợp bảo vệ an toàn trước rủi ro và cơ hội gia tăng tài sản qua danh mục quỹ đầu tư đa dạng.',
}

export default function BaoHiemLienKetDauTuPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="LIÊN KẾT ĐẦU TƯ CHUYÊN NGHIỆP"
          title="Bảo Vệ Toàn Diện"
          highlight="Gia Tăng Tài Sản Vững Bền"
          description="Giải pháp tài chính kết hợp tối ưu giữa bảo vệ an toàn trước rủi ro và cơ hội gia tăng tài sản nhờ vào danh mục quỹ đầu tư đa dạng do chính Bảo Việt quản lý."
          primaryCtaLabel="Đăng ký tư vấn"
          secondaryCtaLabel="Bảng minh họa dòng tiền"
          benefitsTitle="Đặc quyền nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Giới thiệu Bảo hiểm Liên kết Đầu tư"
          description="Sự kết hợp hoàn hảo mang đến cho bạn cơ hội tiếp cận thị trường tài chính năng động cùng sự an toàn của giải pháp bảo hiểm gia đình, dựa trên danh mục quỹ đầu tư linh hoạt, đồng thời đảm bảo an toàn tài chính cho gia đình bạn."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="ĐẶC QUYỀN VƯỢT TRỘI"
          title="Tính Năng Đầu Tư & Bảo Vệ Độc Quyền"
          features={features}
        />

        <ProductBenefits
          eyebrow="HẠN MỨC QUYỀN LỢI"
          title="Chi Tiết Quyền Lợi Toàn Diện"
          leftTitle="Nhóm Quyền Lợi Bảo Vệ (Bắt buộc)"
          leftItems={protectionBenefits}
          rightTitle="Nhóm Quyền Lợi Đầu Tư & Sinh Lời"
          rightItems={investmentBenefits}
        />

        <ProductAudience
          eyebrow="ĐIỀU KIỆN THAM GIA"
          title="Đối Tượng Phù Hợp Cho Giải Pháp"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="PHẠM VI CHI TRẢ"
          title="Bảng Giá & Hạn Mức Quyền Lợi Khuyên Dùng"
          columnLabel="Quyền lợi đầu tư & bảo hiểm"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="HƯỚNG DẪN THAM GIA"
          title="Quy Trình 4 Bước Sở Hữu Hợp Đồng"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="LƯU Ý THẬT KỸ"
          title="Điều Khoản & Quy Định Quan Trọng"
          leftTitle="1. Điều kiện tiên quyết để tham gia"
          leftItems={eligibilityTerms}
          rightTitle="2. Quy định thời gian chờ & Loại trừ"
          rightItems={exclusionTerms}
        />

        <ProductFaq
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Giải Đáp Thắc Mắc Thường Gặp"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="TƯ VẤN TRỰC TIẾP"
          title="An Tâm Đầu Tư, Kiến Tạo Tương Lai"
          description="Hãy để chuyên gia tài chính riêng của Bảo Việt An Tâm đồng hành cùng bạn xây dựng lộ trình đầu tư và bảo vệ tài sản hiệu quả nhất."
          hotline="0569 490 888"
          hours="Thứ 2 - Chủ nhật (08:00 - 21:00)"
          interestOptions={['Gói Đồng', 'Gói Bạc', 'Gói Vàng (VIP) - Tối ưu lợi nhuận']}
          interestPlaceholder="Gói Vàng (VIP) - Tối ưu lợi nhuận"
        />

      </main>

      <Footer />
    </>
  )
}
