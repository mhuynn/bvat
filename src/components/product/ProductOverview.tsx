interface ProductOverviewProps {
  eyebrow: string
  title: string
  description: string
  stats: { number: string; label: string }[]
}

export default function ProductOverview({
  eyebrow,
  title,
  description,
  stats,
}: ProductOverviewProps) {
  return (
    <section className="product-overview">

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>

          <p>
            {description}
          </p>

        </div>

        <div className="overview-stats">

          {stats.map((item) => (
            <div
              className="overview-stat"
              key={item.label}
            >

              <strong>
                {item.number}
              </strong>

              <span>
                {item.label}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
