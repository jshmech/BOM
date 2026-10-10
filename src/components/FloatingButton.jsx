export default function FloatingButton() {
  return (
    <a
      href="tel:02-419-1800"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand rounded-full shadow-lg flex items-center justify-center hover:bg-brand-dark transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-brand/30"
      aria-label="전화 문의 02-419-1800"
    >
      <img src="/images/icon-phone.png" alt="" className="w-7 h-auto" />
    </a>
  )
}
