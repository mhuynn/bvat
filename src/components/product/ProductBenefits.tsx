interface ProductBenefitsProps {
  eyebrow: string
  title: string
  leftTitle: string
  leftItems: string[]
  rightTitle: string
  rightItems: string[]
}

export default function ProductBenefits({
  eyebrow,
  title,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: ProductBenefitsProps) {
  return (
    <section
      className="product-benefits"
      id="quyen-loi"
    >

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>

        </div>

        <div className="benefits-grid">

          <div className="benefits-col">

            <h3>
              {leftTitle}
            </h3>

            <ul>

              {leftItems.map((benefit) => (
                <li key={benefit}>
                  <span>✓</span>
                  {benefit}
                </li>
              ))}

            </ul>

          </div>

          <div className="benefits-col">

            <h3>
              {rightTitle}
            </h3>

            <ul>

              {rightItems.map((benefit) => (
                <li key={benefit}>
                  <span>✓</span>
                  {benefit}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  )
}
