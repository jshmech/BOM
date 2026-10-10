export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: "url('/images/hero-welcome.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full py-20">
        <img
          src="/images/section-location.png"
          alt="오시는길"
          className="h-8 md:h-12 w-auto mx-auto mb-14"
          style={{ filter: 'brightness(0) invert(1)' }}
          loading="lazy"
        />

        {/* 지도 */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg mb-8">
          <iframe
            title="봄 정신건강의학과 위치"
            src="https://maps.google.com/maps?q=37.511396,127.081620&z=15&output=embed&hl=ko"
            width="100%"
            className="w-full rounded-xl"
            style={{ height: 'clamp(250px, 40vw, 400px)', border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* 주소 및 교통 정보 */}
        <div className="font-sans text-white space-y-4">
          <p className="text-center text-lg md:text-xl font-semibold">
            서울특별시 송파구 올림픽로 100 효창타워 6층
          </p>

          {/* 교통 카드 */}
          <div
            className="max-w-lg mx-auto rounded-xl px-4 md:px-6 py-5 space-y-4"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
          >
            {/* 지하철 */}
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 border border-white/70 rounded-full px-3 py-1 text-white text-base font-semibold">
                지하철
              </span>
              <p className="text-white text-base leading-relaxed">
                2호선 잠실새내역 도보 5분<br />
                9호선 종합운동장역 도보 5분
              </p>
            </div>

            {/* 주차 */}
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 border border-white/70 rounded-full px-3 py-1 text-white text-base font-semibold">
                주&nbsp;&nbsp;&nbsp;차
              </span>
              <p className="text-white text-base leading-relaxed">
                건물 뒷편 주차타워<br />
                (SUV와 전기차는 공영주차장 이용)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
