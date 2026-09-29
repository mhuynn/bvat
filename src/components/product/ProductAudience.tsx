interface ProductAudienceProps {
  eyebrow: string
  title: string
  audiences: { range: string; title: string; description: string }[]
}

export default function ProductAudience({
  eyebrow,
  title,
  audiences,
}: ProductAudienceProps) {
  return (
    <section className="product-audience">

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>

        </div>

        <div className="audience-grid">

          {audiences.map((item) => (
            <div
              className="audience-card"
              key={item.title}
            >

              <span className="audience-range">
                {item.range}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
