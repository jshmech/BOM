import { useState } from 'react'

const NAV_LINKS = [
  { label: '병원소개', href: '#hospital' },
  { label: '원장소개', href: '#doctor' },
  { label: '정신분석', href: '#analysis' },
  { label: '진료안내', href: '#info' },
  { label: '오시는길', href: '#location' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 로고 + 병원명 */}
        <a href="#" onClick={handleNavClick} className="flex items-center gap-3">
          <img
            src="/images/bom-logo.png"
            alt="봄 정신건강의학과"
            className="w-14 h-14 object-contain"
            style={{ filter: 'brightness(0)' }}
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1C2220' }}>
            봄정신건강의학과
          </span>
        </a>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-lg font-medium tracking-wide text-ink transition-colors duration-200 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 햄버거 버튼 (모바일) */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-line">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-sans text-base text-ink font-medium py-1 hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
