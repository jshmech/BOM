export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C2220' }} className="py-6 px-4 text-center">
      <p
        className="font-sans font-semibold"
        style={{ color: '#9DB8A9', fontSize: '1.1rem', marginBottom: '0.5rem' }}
      >
        봄 정신건강의학과
      </p>
      <p
        className="font-sans"
        style={{ color: '#cccccc', fontSize: '0.9rem' }}
      >
        박희형 &nbsp;|&nbsp; 서울시 송파구 올림픽로 100 효창타워 6층 &nbsp;|&nbsp;
        사업자등록번호 : 220-90-92731 &nbsp;|&nbsp; 전화번호 :&nbsp;
        <a
          href="tel:02-419-1800"
          style={{ color: '#9DB8A9' }}
          className="hover:underline"
        >
          02-419-1800
        </a>
      </p>
      <p
        className="font-sans"
        style={{ color: '#999999', fontSize: '0.85rem', marginTop: '0.4rem' }}
      >
        Copyright(C)2017 봄 정신건강의학과의원 All rights reserved.
      </p>
    </footer>
  )
}
