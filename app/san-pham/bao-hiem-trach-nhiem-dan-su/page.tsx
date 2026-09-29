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
} from '@/data/bao-hiem-trach-nhiem-dan-su'

export const metadata = {
  title: 'Bảo Hiểm Trách Nhiệm Dân Sự | Bảo Việt An Tâm',
  description:
    'Bảo vệ doanh nghiệp và tổ chức trước các khiếu nại bồi thường thiệt hại ngoài hợp đồng.',
}

export default function BaoHiemTrachNhiemDanSuPage() {
  return (
    <>
      <Header />

      <main>

        <ProductHero
          eyebrow="BẢO HIỂM TRÁCH NHIỆM DÂN SỰ"
          title="Bảo Vệ Vững Chắc"
          highlight="Trước Mọi Rủi Ro Pháp Lý"
          description="Giải pháp tối ưu bảo vệ doanh nghiệp và tổ chức trước các khiếu nại bồi thường thiệt hại ngoài hợp đồng. Bảo Việt An Tâm đồng hành cùng bạn giảm thiểu rủi ro tài chính, chi phí pháp lý và duy trì uy tín vững bền."
          primaryCtaLabel="Nhận báo giá ngay"
          secondaryCtaLabel="Tải quy tắc bảo hiểm"
          benefitsTitle="Quyền lợi nổi bật"
          benefits={heroBenefits}
        />

        <ProductOverview
          eyebrow="TỔNG QUAN CHƯƠNG TRÌNH"
          title="Bảo Hiểm Trách Nhiệm Dân Sự Toàn Diện"
          description="Sản phẩm được thiết kế đặc biệt nhằm bảo vệ khả năng tài chính của tổ chức, doanh nghiệp trước nguy cơ khiếu nại từ bên thứ ba do sự vô ý gây thiệt hại về người hoặc tài sản trong quá trình hoạt động kinh doanh, vận hành."
          stats={overviewStats}
        />

        <ProductFeatures
          eyebrow="TÍNH NĂNG VƯỢT TRỘI"
          title="Phạm Vi Bảo Vệ 6 Hạng Mục Trách Nhiệm"
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
          title="Giải Pháp Phù Hợp Cho Mọi Tổ Chức"
          audiences={audiences}
        />

        <ProductPricing
          eyebrow="BẢNG GIÁ 4 HẠNG MỤC"
          title="Hạn Mức Đền Bù Chi Tiết Từng Gói"
          columnLabel="Hạng mục quyền lợi & Hạn mức chi trả"
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
          rightTitle="2. Các trường hợp loại trừ trách nhiệm"
          rightItems={exclusionTerms}
        />

        <ProductFaq
          eyebrow="HỎI ĐÁP PHỔ BIẾN"
          title="Giải Đáp Thắc Mắc Thường Gặp Về Bảo Hiểm Trách Nhiệm"
          faqs={faqs}
        />

        <ProductConsultation
          eyebrow="HỖ TRỢ TRỰC TUYẾN"
          title="Nhận Thiết Kế Gói Trách Nhiệm Riêng Ngay Hôm Nay"
          description="Hãy để đội ngũ chuyên viên pháp lý của Bảo Việt An Tâm đồng hành cùng bạn phân tích rủi ro và thiết kế gói bảo hiểm trách nhiệm phù hợp nhất với ngành nghề kinh doanh của bạn."
          hotline="0569 490 888"
          hours="Thứ Hai - Chủ Nhật (08:00 - 21:00)"
          interestOptions={['Gói Cơ Bản (Đồng)', 'Gói Phổ Thông (Bạc)', 'Gói Toàn Diện (Vàng)']}
          interestPlaceholder="Sản xuất/Xây dựng/Dịch vụ..."
        />

      </main>

      <Footer />
    </>
  )
}
