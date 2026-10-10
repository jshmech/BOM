export default function AnalysisSection() {
  return (
    <section
      id="analysis"
      className="relative min-h-screen flex flex-col justify-center"
      style={{ backgroundImage: "url('/images/hero-analysis.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 photo-tint" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full py-20">
        <img
          src="/images/section-analysis.png"
          alt="정신분석"
          className="h-8 md:h-11 w-auto mx-auto mb-10"
          loading="lazy"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mx-auto">
          {/* 모바일: 사진 위 / 데스크탑: 본문 왼쪽 */}
          <div className="flex-shrink-0 text-center order-first md:order-last">
            <img
              src="/images/jung-portrait.png"
              alt="C. G. Jung"
              width={390}
              height={509}
              className="w-40 sm:w-56 md:w-80 h-auto mx-auto rounded shadow-xl"
              loading="lazy"
            />
            <img
              src="/images/doctor-name-jung.png"
              alt="C. G. Jung"
              className="h-8 w-auto mx-auto mt-4 max-w-[200px]"
              loading="lazy"
            />
          </div>

          {/* 데스크탑: 본문 왼쪽 */}
          <div className="flex-1 max-w-md order-last md:order-first text-center md:text-left">
            <p className="font-sans text-lg md:text-xl text-white text-on-photo" style={{ lineHeight: 2.2 }}>
              {/* 모바일: 문단 안에서는 화면 폭에 맞춰 줄이 흐른다 */}
              <span className="md:hidden text-balance block">
                삶에서 지치고 더이상 길이 보이지 않을 때, 잠시 멈추고 자신의 내면을 들여다보는 것이 필요합니다.<br />
                <br />
                그 안에서 내가 알지 못하는 나의 마음, 즉 무의식이 나에게 알려주는 새로운 가능성과 창조성을 만날 길이 열립니다.<br />
                <br />
                정신분석은 진정한 자신을 찾기 위해<br />
                내면으로 떠나는 여행입니다.<br />
                <br />
                박희형 원장은,<br />
                스위스의 정신의학자 칼 구스타프{' '}
                <span className="whitespace-nowrap">융(C.&nbsp;G.&nbsp;Jung)의</span> 분석심리학에 기반한 정신분석을 시행하고 있습니다.
              </span>
              {/* 웹: 정해 둔 위치에서 줄바꿈 */}
              <span className="hidden md:block">
                삶에서 지치고 더이상 길이 보이지 않을 때,<br />
                잠시 멈추고 자신의 내면을 들여다보는 것이 필요합니다.<br />
                <br />
                그 안에서 내가 알지 못하는 나의 마음,<br />
                즉 무의식이 나에게 알려주는 새로운 가능성과 창조성을 만날 길이 열립니다.<br />
                <br />
                정신분석은 진정한 자신을 찾기 위해<br />
                내면으로 떠나는 여행입니다.<br />
                <br />
                박희형 원장은,<br />
                스위스의 정신의학자 칼 구스타프 <span className="whitespace-nowrap">융(C.&nbsp;G.&nbsp;Jung)의</span><br />
                분석심리학에 기반한<br />
                정신분석을 시행하고 있습니다.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
