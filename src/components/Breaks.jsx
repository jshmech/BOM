// 같은 글을 모바일과 웹에서 다르게 줄바꿈하기 위한 표시.
// 글은 한 벌만 두고(검색 로봇에 같은 글이 두 번 보이지 않게), 줄바꿈만 화면 폭(768px)에 따라 켜고 끈다.

// 모바일(768px 미만)에서만 줄이 바뀐다
export const MobileBreak = () => <br className="md:hidden" />

// 웹(768px 이상)에서만 줄이 바뀐다
export const WebBreak = () => <br className="hidden md:inline" />
