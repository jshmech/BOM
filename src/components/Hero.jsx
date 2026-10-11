import { MobileBreak } from './Breaks'

// 모바일에서는 [앞, 뒤] 사이에서 줄이 바뀌고, 웹에서는 한 줄로 이어진다
const LINES = [
  ['따뜻하게 맞이하고', '위로와 격려를 드리겠습니다.'],
  ['어두운 길을 함께 걷는', '동반자가 되겠습니다.'],
  ['전문적인 치료를', '제공하겠습니다.'],
]

export default function Hero() {
  return (
    <section className="relative w-full min-h-[max(68vh,30rem)] overflow-hidden">
      {/* 화면에는 보이지 않는 페이지 대표 제목(검색엔진·화면 읽기용) */}
      <h1 className="sr-only">봄정신건강의학과의원</h1>

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
            {line[0]}{' '}
            <MobileBreak />
            {line[1]}
          </p>
        ))}
      </div>
    </section>
  )
}
