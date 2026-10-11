import { MobileBreak, WebBreak } from './Breaks'

export default function HospitalSection() {
  return (
    <section
      id="hospital"
      className="relative min-h-screen flex flex-col justify-center"
      style={{ backgroundImage: "url('/images/hero-hospital.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 photo-tint-strong" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full text-center py-20">
        <h2>
          <img
            src="/images/section-hospital.png"
            alt="병원소개"
            className="h-8 md:h-12 w-auto mx-auto mb-12"
            style={{ filter: 'brightness(0) invert(1)' }}
            loading="lazy"
          />
        </h2>
        <p className="font-sans text-lg md:text-xl text-white text-on-photo w-fit max-w-full mx-auto text-left text-balance md:text-wrap" style={{ lineHeight: 2.2 }}>
          마음의 병은 대개 서서히 시작되어,{' '}
          <WebBreak />
          시간이 흐르며 기분과 일상에 깊은 영향을 미치게 됩니다.
          <br />
          <br />
          진정한 회복을 위해서는<span className="md:hidden">,</span>{' '}
          <MobileBreak />
          자신의 마음을 이해하고 치유해 가도록 돕는 심리치료가 중요하며,{' '}
          <WebBreak />
          경우에 따라서는 일상생활을 유지하고 증상을 완화하는 데 약물치료가 도움이 되기도 합니다.
          <br />
          <br />
          박희형 원장은{' '}
          <MobileBreak />
          정신건강의학과 전문의로서 풍부한 임상 경험을 갖추고 있으며,{' '}
          <WebBreak />
          <span className="whitespace-nowrap">융(C.&nbsp;G.&nbsp;Jung)의</span> 분석심리학 연구를 통해 인간 정신에 대한 폭넓고 깊은 이해를 쌓아 왔습니다.
          <br />
          <br />
          내원하시는 모든 분들이 마음의 병을 극복하고 삶의 의미와 자기 자신을 다시 찾아가실 수 있도록,{' '}
          <WebBreak />
          따뜻하고 든든한 동반자가 되어 드리겠습니다.
        </p>
      </div>
    </section>
  )
}
