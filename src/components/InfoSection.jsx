const SCHEDULE = [
  { day: '월', am: true,  pm: true  },
  { day: '화', am: true,  pm: true  },
  { day: '수', am: false, pm: true  },
  { day: '목', am: true,  pm: true  },
  { day: '금', am: false, pm: false },
  { day: '토', am: true,  pm: false },
]

const NOTICES = [
  '진료는 예약제로 운영됩니다.',
  '수요일 오전과 금요일은 휴진입니다.',
  '토요일은 2시까지 진료합니다.',
]

export default function InfoSection() {
  return (
    <section
      id="info"
      className="relative flex flex-col justify-center"
      style={{
        backgroundImage: "url('/images/hero-info.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 photo-tint" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full py-12">
        <h2>
          <img
            src="/images/section-info.png"
            alt="진료안내"
            className="h-8 md:h-11 w-auto mx-auto mb-10"
            style={{ filter: 'brightness(0) invert(1)' }}
            loading="lazy"
          />
        </h2>

        {/* 진료시간 카드 */}
        <div
          className="max-w-2xl mx-auto rounded overflow-hidden shadow-xl"
          style={{ backgroundColor: '#fff', border: '1px solid #E3E6E4' }}
        >
          {/* 테이블 — overflow-x-auto로 모바일 스크롤 대응 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-base" style={{ minWidth: '300px' }}>
              {/* 요일 헤더 */}
              <thead>
                <tr style={{ backgroundColor: '#1C2220', borderBottom: '2px solid #e0e0e0' }}>
                  <th className="px-1 md:px-3 py-2 md:py-3 text-left" style={{ width: '28%' }} />
                  {SCHEDULE.map((row) => (
                    <th
                      key={row.day}
                      className="py-2 md:py-3 text-center text-base font-bold"
                      style={{
                        color: '#ffffff',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {row.day}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* 오전 행 */}
                <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                  <td
                    className="px-1 md:px-3 py-2 text-center text-base whitespace-nowrap"
                    style={{ backgroundColor: '#fafafa', color: '#666', width: '28%', verticalAlign: 'middle' }}
                  >
                    9:30 am – 1:00 pm
                  </td>
                  {SCHEDULE.map((row) => (
                    <td key={row.day} className="py-2 text-center">
                      {row.am
                        ? <span className="text-xl md:text-2xl" style={{ color: '#7C9A8A', lineHeight: 1 }}>●</span>
                        : <span className="text-base" style={{ color: '#ccc' }}>—</span>
                      }
                    </td>
                  ))}
                </tr>

                {/* 오후 행 */}
                <tr>
                  <td
                    className="px-1 md:px-3 py-2 text-center text-base whitespace-nowrap"
                    style={{ backgroundColor: '#fafafa', color: '#666', width: '28%', verticalAlign: 'middle' }}
                  >
                    2:00 pm – 6:30 pm
                  </td>
                  {SCHEDULE.map((row) => (
                    <td key={row.day} className="py-2 text-center">
                      {row.pm
                        ? <span className="text-xl md:text-2xl" style={{ color: '#7C9A8A', lineHeight: 1 }}>●</span>
                        : <span className="text-base" style={{ color: '#ccc' }}>—</span>
                      }
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* 안내 영역 */}
          <div
            className="px-4 md:px-6 py-4"
            style={{ backgroundColor: '#f8faf9', borderTop: '2px solid #e0e0e0' }}
          >
            {NOTICES.map((notice, i) => (
              <p
                key={i}
                className="font-sans flex items-start gap-2 text-base"
                style={{ color: '#666', lineHeight: 1.8 }}
              >
                <span style={{ color: '#7C9A8A', fontSize: '0.6rem', marginTop: '0.5rem', flexShrink: 0 }}>●</span>
                <span>{notice}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
