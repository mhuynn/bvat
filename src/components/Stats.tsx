const stats = [
  {
    number: '20+ Năm',
    label: 'Kinh nghiệm hoạt động',
  },
  {
    number: '500,000+',
    label: 'Khách hàng tin dùng',
  },
  {
    number: '98%',
    label: 'Tỷ lệ hài lòng',
  },
  {
    number: '24/7',
    label: 'Hỗ trợ khách hàng',
  },
]

export default function Stats() {
  return (
    <section className="stats">

      <div className="container stats-grid">

        {stats.map((item) => (
          <div
            className="stat-item"
            key={item.number}
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

    </section>
  )
}