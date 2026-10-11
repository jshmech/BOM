// 빌드가 끝난 dist/index.html 의 빈 #root 에, 화면을 한 번 그린 HTML 을 미리 넣어 둔다.
// 검색 로봇이 자바스크립트를 실행하지 않아도 병원 소개·원장 이력·진료시간 같은 본문을 읽을 수 있게 하려는 것이다.
// 사용자 브라우저에서는 이 HTML 위에 React 가 이어 붙는다(src/main.jsx 의 hydrateRoot).
import fs from 'node:fs'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const INDEX = 'dist/index.html'
const MARKER = '<div id="root"></div>'

const html = fs.readFileSync(INDEX, 'utf8')
if (!html.includes(MARKER)) {
  throw new Error(`${INDEX} 에서 ${MARKER} 를 찾지 못했습니다(이미 미리 그린 상태이거나 빌드 형식이 바뀜).`)
}

const vite = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true, hmr: false },
})
let app
try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  app = renderToString(createElement(App))
} finally {
  await vite.close()
}

// 본문이 정말 들어갔는지 확인한다(빈 화면이 배포되는 것을 막는다)
for (const needle of ['<h1', '<h2', '마음의 병은', '박희형', '02-419-1800']) {
  if (!app.includes(needle)) throw new Error(`미리 그린 HTML 에 "${needle}" 이(가) 없습니다.`)
}

fs.writeFileSync(INDEX, html.replace(MARKER, `<div id="root">${app}</div>`))
console.log(`prerender: #root 에 ${(app.length / 1024).toFixed(1)}KB 를 미리 넣었습니다.`)
