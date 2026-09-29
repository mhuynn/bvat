'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">

        <Link href="/" className="logo">
            <img src="/logo.png" alt="" />

          <div className="logo-info">
            
            <strong>Bảo Việt An Tâm</strong>
            <span>VỮNG BƯỚC TƯƠNG LAI</span>
          </div>
        </Link>

        <nav className={`nav ${open ? 'show' : ''}`}>

          <a href="#trang-chu">
            Trang chủ
          </a>

          <a href="#san-pham">
            Sản phẩm
          </a>

          <a href="#vi-chung-toi">
            Về chúng tôi
          </a>

          <a href="#tin-tuc">
            Tin tức
          </a>

          <a href="#lien-he">
            Liên hệ
          </a>

        </nav>

        <div className="header-actions">

          <div className="hotline">
            <span>Hotline 24/7</span>
            <strong>1900 8888</strong>
          </div>

          <a
            href="#tu-van"
            className="header-consult"
          >
            Tư vấn miễn phí
            <span>→</span>
          </a>

        </div>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Mở menu"
        >
          ☰
        </button>

      </div>
    </header>
  )
}