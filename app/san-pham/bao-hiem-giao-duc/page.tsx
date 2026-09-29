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
  educationBenefits,
  protectionBenefits,
  audiences,
  pricingRows,
  processSteps,
  eligibilityTerms,
  waitingPeriodTerms,
  faqs,
} from '@/data/bao-hiem-giao-duc'

export const metadata = {
  title: 'Bảo Hiểm Giáo Dục | Bảo Việt An Tâm',
  description:
    'Kiến tạo bệ phóng tương lai vững chắc, tích lũy tài chính thông minh cho hành trình học vấn của con.',
}

export default function BaoHiemGiaoDucPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="GÓI HỌC VẤN TOÀN DIỆN"
          title="Bảo Hiểm Giáo Dục"
          highlight="Đầu Tư Cho Tương Lai Con"
          description="Kiến tạo bệ phóng tương lai vững chắc, tích lũy tài chính thông minh cho từng chặng đường khôn lớn của con từ bậc tiểu học cho đến khi vào đại học."
          primaryCtaLabel="Đăng ký tư vấn"
          secondaryCtaLabel="Tải Brochure chi tiết"
          benefitsTitle="Quyền lợi cốt lõi nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="GIỚI THIỆU CHƯƠNG TRÌNH"
          title="Bảo Hiểm Giáo Dục Toàn Diện Cho Con"
          description="Bảo hiểm giáo dục của Bảo Việt An Tâm đồng hành cùng các bậc phụ huynh xây dựng kế hoạch tích lũy tài chính vững chắc, đảm bảo quỹ học vấn của con từ tiểu học đến đại học không bị gián đoạn trước mọi biến cố không mong đợi."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="ĐẶC QUYỀN NỔI BẬT"
          title="Đặc Điểm Vượt Trội Từ Bảo Việt An Tâm"
          features={features}
        />

        <ProductBenefits
          eyebrow="QUYỀN LỢI CHI TIẾT"
          title="Hạn Mức Và Quyền Lợi Bảo Vệ Con Toàn Diện"
          leftTitle="Quyền Lợi Học Vấn & Tích Lũy"
          leftItems={educationBenefits}
          rightTitle="Quyền Lợi Bảo Vệ & Sức Khỏe Con"
          rightItems={protectionBenefits}
        />

        <ProductAudience
          eyebrow="ĐỐI TƯỢNG THAM GIA"
          title="Bảo Hiểm Giáo Dục Phù Hợp Cho Ai?"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="SO SÁNH CÁC GÓI"
          title="So Sánh Các Gói Bảo Hiểm Giáo Dục"
          columnLabel="Hạng mục quyền lợi bảo vệ con"
          rows={pricingRows}
        />

        <ProductProcess
          eyebrow="HƯỚNG DẪN THAM GIA"
          title="Quy Trình 4 Bước Đảm Bảo Học Vấn Cho Con"
          steps={processSteps}
        />

        <ProductTerms
          eyebrow="LƯU Ý QUAN TRỌNG"
          title="Quy Định & Điều Khoản Quan Trọng"
          leftTitle="1. Điều kiện sở hữu hợp đồng"
          leftItems={eligibilityTerms}
          rightTitle="2. Thời gian chờ & Quy tắc loại trừ"
          rightItems={waitingPeriodTerms}
        />

        <ProductFaq
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Câu Hỏi Thường Gặp Về Bảo Hiểm Giáo Dục"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="TƯ VẤN TRỰC TUYẾN"
          title="Kiến Tạo Tương Lai, Khởi Đầu Từ Hôm Nay"
          description="Hãy để đội ngũ chuyên viên tư vấn giáo dục của Bảo Việt An Tâm đồng hành cùng bạn xây dựng lộ trình học vấn vững chắc và trọn vẹn nhất cho con."
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
