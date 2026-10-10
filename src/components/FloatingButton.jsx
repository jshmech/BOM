export default function FloatingButton() {
  return (
    <a
      href="tel:02-419-1800"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-ink border border-white/70 rounded-full shadow-lg flex items-center justify-center hover:bg-black transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-ink/30"
      aria-label="전화 문의 02-419-1800"
    >
      <img
        src="/images/icon-phone.png"
        alt=""
        className="w-7 h-auto"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </a>
  )
}
