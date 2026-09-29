interface ProductTermsProps {
  eyebrow: string
  title: string
  leftTitle: string
  leftItems: string[]
  rightTitle: string
  rightItems: string[]
}

export default function ProductTerms({
  eyebrow,
  title,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: ProductTermsProps) {
  return (
    <section className="product-terms">

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>

        </div>

        <div className="terms-grid">

          <div className="terms-col">

            <h3>
              {leftTitle}
            </h3>

            <ul>

              {leftItems.map((term) => (
                <li key={term}>
                  {term}
                </li>
              ))}

            </ul>

          </div>

          <div className="terms-col">

            <h3>
              {rightTitle}
            </h3>

            <ul>

              {rightItems.map((term) => (
                <li key={term}>
                  {term}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  )
}
