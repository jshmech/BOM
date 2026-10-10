const CAREER_GROUPS = [
  {
    items: ['정신건강의학과 전문의', '국제 융학파 정신분석가'],
    highlight: true,
  },
  {
    items: [
      '서울대학교 의과대학 졸업',
      '서울대학교병원 인턴 및 신경정신과 레지던트',
      '대한신경정신의학회 정회원',
    ],
    highlight: false,
  },
  {
    items: [
      '대한신경정신의학회 지정 전공의 정신치료 지도 전문의',
      '정신건강의학과 전문의시험 정신치료 고시위원',
    ],
    highlight: false,
  },
  {
    items: [
      '한국분석심리학회(KAP) 정회원',
      '한국융분석가협회(KAJA) 정회원',
      '국제분석심리학회(IAAP) 정회원',
      '한국분석심리학회 이사 역임',
      '한국분석심리학회 편집위원',
      '대한노인정신의학회 인증의',
    ],
    highlight: false,
  },
]

export default function DoctorSection() {
  return (
    <section
      id="doctor"
      className="relative min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: "url('/images/hero-doctor.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 photo-tint" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full py-20">
        <img
          src="/images/section-doctor.png"
          alt="원장소개"
          className="h-8 md:h-12 w-auto mx-auto mb-14"
          loading="lazy"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mx-auto">
          {/* 좌측: 사진 + 이름 */}
          <div className="flex-shrink-0 text-center">
            <img
              src="/images/doctor-profile.jpeg"
              alt="박희형 원장"
              className="w-48 sm:w-64 md:w-96 mx-auto rounded shadow-xl object-cover object-top"
              style={{ height: 'clamp(240px, 60vw, 420px)' }}
              loading="lazy"
            />
            <img
              src="/images/doctor-name.png"
              alt="박희형 원장"
              className="h-10 w-auto mx-auto mt-5"
              loading="lazy"
            />
          </div>

          {/* 우측: 이력 */}
          <div className="max-w-md font-sans text-on-photo text-center md:text-left text-balance">
            {CAREER_GROUPS.map((group, gi) => (
              <div key={gi} style={{ marginBottom: gi < CAREER_GROUPS.length - 1 ? '1.5rem' : 0 }}>
                {group.items.map((item, ii) => (
                  <p
                    key={ii}
                    style={{
                      fontWeight: group.highlight ? 700 : 400,
                      fontSize: group.highlight ? '1.25rem' : '1.05rem',
                      color: group.highlight ? '#ffffff' : 'rgba(255,255,255,0.92)',
                      lineHeight: 1.75,
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
