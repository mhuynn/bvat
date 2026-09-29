'use client'

import { useState } from 'react'

interface ProductFaqProps {
  eyebrow: string
  title: string
  faqs: { question: string; answer: string }[]
}

export default function ProductFaq({
  eyebrow,
  title,
  faqs,
}: ProductFaqProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="product-faq">

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>

        </div>

        <div className="faq-list">

          {faqs.map((item, index) => {
            const isOpen = index === openIndex

            return (
              <div
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                key={item.question}
              >

                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.question}
                  <span>{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <p className="faq-answer">
                    {item.answer}
                  </p>
                )}

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}
