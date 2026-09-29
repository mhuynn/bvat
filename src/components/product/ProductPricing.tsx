interface ProductPricingProps {
  eyebrow: string
  title: string
  columnLabel: string
  rows: { label: string; bronze: string; silver: string; gold: string }[]
}

export default function ProductPricing({
  eyebrow,
  title,
  columnLabel,
  rows,
}: ProductPricingProps) {
  return (
    <section className="product-pricing">

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>

        </div>

        <div className="pricing-table-wrap">

          <table className="pricing-table">

            <thead>
              <tr>
                <th>{columnLabel}</th>
                <th>Gói Đồng</th>
                <th>Gói Bạc</th>
                <th className="pricing-gold">Gói Vàng (VIP)</th>
              </tr>
            </thead>

            <tbody>

              {rows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.bronze}</td>
                  <td>{row.silver}</td>
                  <td className="pricing-gold">{row.gold}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  )
}
