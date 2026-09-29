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
  waitingPeriodTerms,
  faqs,
} from '@/data/bao-hiem-tu-ky'

export const metadata = {
  title: 'Bảo Hiểm Tử Kỳ | Bảo Việt An Tâm',
  description:
    'Chi phí thấp, mức bảo vệ cao - giải pháp bảo vệ nguồn thu nhập trụ cột gia đình và các khoản vay tài chính.',
}

export default function BaoHiemTuKyPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="GIẢI PHÁP BẢO VỆ TÀI CHÍNH"
          title="An Tâm Cho Những"
          highlight="Năm Tháng Quan Trọng"
          description="Chi phí thấp tối ưu với mức bảo vệ cao, lựa chọn thông minh để bảo vệ nguồn thu nhập trụ cột gia đình và bảo đảm an toàn cho các khoản vay tài chính lớn."
          primaryCtaLabel="Đăng ký tư vấn"
          secondaryCtaLabel="Tải tài liệu sản phẩm"
          benefitsTitle="Quyền lợi nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Giới thiệu Bảo hiểm Tử Kỳ"
          description="Bảo hiểm Tử Kỳ là công cụ bảo vệ thuần túy, tối ưu nhất dành cho người trụ cột tài chính. Với mức chi phí định kỳ rất nhỏ, bạn hoàn toàn có thể yên tâm bảo vệ gia đình trước các khoản nợ thế chấp hoặc đảm bảo tương lai con cái không rơi vào khó khăn tài chính."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="ĐẶC QUYỀN VƯỢT TRỘI"
          title="Đặc Điểm Nổi Bật Của Bảo Hiểm Tử Kỳ"
          features={features}
        />

        <ProductBenefits
          eyebrow="QUYỀN LỢI BẢO VỆ"
          title="Phạm Vi Bảo Vệ Toàn Diện"
          leftTitle="Quyền Lợi Chính (Bắt buộc)"
          leftItems={coreBenefits}
          rightTitle="Quyền Lợi Tự Chọn & Bổ Sung"
          rightItems={optionalBenefits}
        />

        <ProductAudience
          eyebrow="ĐIỀU KIỆN THAM GIA"
          title="Ai Nên Tham Gia Bảo Hiểm Tử Kỳ?"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="BẢNG GIÁ"
          title="Bảng Hạn Mức Chi Trả Chi Tiết"
          columnLabel="Hạng mục bảo vệ"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="HƯỚNG DẪN THAM GIA"
          title="4 Bước Nhận Quyền Lợi Bảo Vệ"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="ĐIỀU KHOẢN QUAN TRỌNG"
          title="Điều Kiện Tham Gia & Lưu Ý"
          leftTitle="1. Điều kiện tham gia"
          leftItems={eligibilityTerms}
          rightTitle="2. Loại trừ & Thời gian chờ"
          rightItems={waitingPeriodTerms}
        />

        <ProductFaq
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Câu Hỏi Thường Gặp"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="TƯ VẤN TRỰC TUYẾN"
          title="An Tâm Trách Nhiệm, Trọn Vẹn Tương Lai"
          description="Bảo vệ nền tảng tài chính gia đình vững vàng trước mọi biến cố với gói bảo hiểm phù hợp và chi phí tối ưu nhất cho ngân sách của bạn."
          hotline="1900 8888"
          hours="Thứ 2 - Chủ nhật (08:00 - 21:00)"
          interestOptions={['Gói Đồng', 'Gói Bạc', 'Gói Vàng (VIP) - Khuyến nghị']}
          interestPlaceholder="Gói Vàng (VIP) - Khuyến nghị"
        />

      </main>

      <Footer />
    </>
  )
}
