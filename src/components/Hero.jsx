// full: 웹(한 줄), mobile: 모바일(정해 둔 줄바꿈)
const LINES = [
  { full: '따뜻하게 맞이하고 위로와 격려를 드리겠습니다.', mobile: ['따뜻하게 맞이하고', '위로와 격려를 드리겠습니다.'] },
  { full: '어두운 길을 함께 걷는 동반자가 되겠습니다.', mobile: ['어두운 길을 함께 걷는', '동반자가 되겠습니다.'] },
  { full: '전문적인 치료를 제공하겠습니다.', mobile: ['전문적인 치료를', '제공하겠습니다.'] },
]

export default function Hero() {
  return (
    <section className="relative w-full min-h-[max(68vh,30rem)] overflow-hidden">
      {/* 고정 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-welcome.jpeg')" }}
      />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 photo-tint" />

      {/* 고정 텍스트 3줄 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        {LINES.map((line, i) => (
          <p
            key={i}
            className={`text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide${i > 0 ? ' mt-6' : ''}`}
            style={{
              lineHeight: 1.8,
              letterSpacing: '0.03em',
              textShadow: '0 1px 10px rgba(0,0,0,0.55)',
            }}
          >
            <span className="hidden md:inline">{line.full}</span>
            <span className="md:hidden">
              {line.mobile[0]}
              <br />
              {line.mobile[1]}
            </span>
          </p>
        ))}
      </div>
    </section>
  )
}
