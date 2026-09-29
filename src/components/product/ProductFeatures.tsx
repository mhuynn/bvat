interface ProductFeaturesProps {
  eyebrow: string
  title: string
  features: { title: string; description: string; image: string }[]
}

export default function ProductFeatures({
  eyebrow,
  title,
  features,
}: ProductFeaturesProps) {
  return (
    <section className="product-features">

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>

        </div>

        <div className="feature-grid">

          {features.map((item) => (
            <article
              className="feature-card"
              key={item.title}
            >

              <div className="feature-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}
