interface ProductProcessProps {
  eyebrow: string
  title: string
  steps: { number: string; title: string; description: string }[]
}

export default function ProductProcess({
  eyebrow,
  title,
  steps,
}: ProductProcessProps) {
  return (
    <section className="product-process">

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>

        </div>

        <div className="process-grid">

          {steps.map((step) => (
            <div
              className="process-step"
              key={step.number}
            >

              <span className="process-number">
                {step.number}
              </span>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
