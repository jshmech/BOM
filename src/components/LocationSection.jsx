import { useRef, useEffect } from 'react'

export default function LocationSection() {
  const mapContainer = useRef(null)

  useEffect(() => {
    if (!mapContainer.current || !window.naver) return

    const location = new window.naver.maps.LatLng(37.511396, 127.081620)
    // 지도 안 버튼이 말풍선을 가리지 않도록 마커를 중앙보다 조금 아래에 둔다
    const map = new window.naver.maps.Map(mapContainer.current, {
      center: new window.naver.maps.LatLng(37.511396 + 0.0013, 127.081620),
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.RIGHT_CENTER,
      },
    })

    const marker = new window.naver.maps.Marker({
      position: location,
      map: map,
      title: '봄 정신건강의학과',
    })

    const infowindow = new window.naver.maps.InfoWindow({
      content: '<div style="padding:10px 14px;font-size:14px;font-weight:600;white-space:nowrap;">봄 정신건강의학과</div>',
    })

    window.naver.maps.Event.addListener(marker, 'click', () => {
      if (infowindow.getMap()) {
        infowindow.close()
      } else {
        infowindow.open(map, marker)
      }
    })

    infowindow.open(map, marker)
  }, [])

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
      <div className="absolute inset-0 photo-tint" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full py-20">
        <img
          src="/images/section-location.png"
          alt="오시는길"
          className="h-8 md:h-12 w-auto mx-auto mb-14"
          style={{ filter: 'brightness(0) invert(1)' }}
          loading="lazy"
        />

        {/* 지도 */}
        {/* isolate: 지도 내부의 높은 z-index가 고정 헤더 위로 올라오지 않게 한다 */}
        <div className="relative isolate w-full max-w-2xl mx-auto rounded overflow-hidden shadow-lg mb-8">
          <div
            ref={mapContainer}
            style={{
              width: '100%',
              height: 'clamp(250px, 40vw, 400px)',
            }}
          />
          <a
            href="https://map.naver.com/p/entry/place/38264434"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 z-10 flex items-center gap-2 pl-2.5 pr-4 py-2 bg-ink hover:bg-black text-white text-sm font-semibold rounded-sm shadow-md transition-colors"
          >
            <span
              className="flex items-center justify-center w-5 h-5 rounded-sm text-white text-xs font-black leading-none"
              style={{ backgroundColor: '#03C75A' }}
              aria-hidden="true"
            >
              N
            </span>
            네이버 지도에서 보기
          </a></div>

        {/* 주소 및 교통 정보 */}
        <div className="font-sans text-white text-on-photo space-y-4">
          <p className="text-center text-lg md:text-xl font-semibold">
            서울특별시 송파구 올림픽로 100 효창타워 6층
          </p>

          {/* 교통 카드 */}
          <div
            className="max-w-2xl mx-auto rounded px-4 md:px-6 py-5 space-y-4"
            style={{ backgroundColor: 'rgba(18,22,20,0.38)', backdropFilter: 'blur(8px)' }}
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
