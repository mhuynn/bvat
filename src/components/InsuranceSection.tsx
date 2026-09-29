import Link from 'next/link'
import ShieldIcon from '@mui/icons-material/Shield'
import EventIcon from '@mui/icons-material/Event'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import SchoolIcon from '@mui/icons-material/School'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import HomeIcon from '@mui/icons-material/Home'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import FlightIcon from '@mui/icons-material/Flight'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import GavelIcon from '@mui/icons-material/Gavel'
import {
  lifeInsurance,
  nonLifeInsurance,
} from '@/data/insurance'

const icons = {
  Shield: ShieldIcon,
  Event: EventIcon,
  AccountBalanceWallet: AccountBalanceWalletIcon,
  TrendingUp: TrendingUpIcon,
  EmojiEvents: EmojiEventsIcon,
  LocalHospital: LocalHospitalIcon,
  School: SchoolIcon,
  DirectionsCar: DirectionsCarIcon,
  Home: HomeIcon,
  LocalFireDepartment: LocalFireDepartmentIcon,
  Flight: FlightIcon,
  LocalShipping: LocalShippingIcon,
  Gavel: GavelIcon,
}

interface InsuranceItem {
  icon: string
  title: string
  description: string
  image: string
  href?: string
}

function InsuranceCard({
  item,
}: {
  item: InsuranceItem
}) {
  const Icon = icons[item.icon as keyof typeof icons]

  return (
    <article className="insurance-card">

      <img
        src={item.image}
        alt={item.title}
      />

      <div className="insurance-card-overlay">

        <div className="insurance-check">
          <Icon fontSize="inherit" />
        </div>

        <div>
          <h3>
            {item.title}
          </h3>

          <p>
            {item.description}
          </p>

          <Link href={item.href ?? '#tu-van'}>
            Tìm hiểu thêm →
          </Link>
        </div>

      </div>

    </article>
  )
}

export default function InsuranceSection() {
  return (
    <section
      className="insurance-section"
      id="san-pham"
    >

      <div className="container">

        <div className="insurance-group">

          <div className="section-heading">

            <span className="eyebrow">
              BẢO VỆ TƯƠNG LAI DÀI HẠN
            </span>

            <h2>
              Bảo Hiểm Nhân Thọ
            </h2>

            <p>
              Giải pháp bảo vệ tài chính bền vững cho bạn và gia đình
              trước những rủi ro không lường trước trong cuộc sống.
            </p>

          </div>

          <div className="life-grid">

            {lifeInsurance.map((item) => (
              <InsuranceCard
                item={item}
                key={item.title}
              />
            ))}

          </div>

        </div>

        <div className="insurance-group">

          <div className="section-heading">

            <span className="eyebrow">
              BẢO VỆ TÀI SẢN & HÀNH TRÌNH
            </span>

            <h2>
              Bảo Hiểm Phi Nhân Thọ
            </h2>

            <p>
              Bảo vệ tài sản cá nhân và doanh nghiệp một cách toàn
              diện trước mọi rủi ro bất ngờ thường nhật.
            </p>

          </div>

          <div className="nonlife-grid">

            {nonLifeInsurance.map((item) => (
              <InsuranceCard
                item={item}
                key={item.title}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}
