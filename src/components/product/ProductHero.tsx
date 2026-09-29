interface ProductHeroProps {
  eyebrow: string
  title: string
  highlight: string
  description: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  benefitsTitle: string
  benefits: string[]
}

export default function ProductHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCtaLabel,
  secondaryCtaLabel,
  benefitsTitle,
  benefits,
}: ProductHeroProps) {
  return (
    <section className="product-hero">

      <div className="container product-hero-inner">

        <div className="product-hero-content">

          <span className="eyebrow eyebrow-light">
            {eyebrow}
          </span>

          <h1>
            {title}
            <br />
            <span>{highlight}</span>
          </h1>

          <p>
            {description}
          </p>

          <div className="hero-actions">

            <a
              href="#tu-van"
              className="btn btn-primary"
            >
              {primaryCtaLabel}
              <span>→</span>
            </a>

            <a
              href="#quyen-loi"
              className="btn btn-outline btn-outline-light"
            >
              {secondaryCtaLabel}
            </a>

          </div>

        </div>

        <div className="product-benefit-card">

          <h3>
            {benefitsTitle}
          </h3>

          <ul>

            {benefits.map((benefit) => (
              <li key={benefit}>
                <span>✓</span>
                {benefit}
              </li>
            ))}

          </ul>

        </div>

      </div>

    </section>
  )
}
