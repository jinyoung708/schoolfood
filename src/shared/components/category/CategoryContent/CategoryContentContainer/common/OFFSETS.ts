// 하기 OFFSETS 수치 수정 시 tailwind.config.js 파일의 safelist 또한 수정되어야 합니다
export const OFFSETS = {
  pc: {
    fixed: {
      tabTop: 118,
      scrollOffset: 200,
      scrollMarginTop: 200,
    },
    notFixed: {
      tabTop: 0,
    },
  },
  mobile: {
    tabTop: 60,
    scrollOffset: 120,
    scrollMarginTop: 120,
  },
};
