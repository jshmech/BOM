const LINES = [
  '따뜻하게 맞이하고 위로와 격려를 드리겠습니다.',
  '어두운 길을 함께 걷는 동반자가 되겠습니다.',
  '전문적인 치료를 제공하겠습니다.',
]

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* 고정 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-welcome.jpeg')" }}
      />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 고정 텍스트 3줄 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        {LINES.map((line, i) => (
          <p
            key={i}
            className={`font-serif text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide${i > 0 ? ' mt-6' : ''}`}
            style={{
              lineHeight: 1.8,
              letterSpacing: '0.03em',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  )
}
