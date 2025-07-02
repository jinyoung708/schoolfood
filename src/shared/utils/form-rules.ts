export const emailRules = {
  required: 'Email ID를 입력해주세요',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: '올바른 이메일 형식이 아닙니다.',
  },
  minLength: {
    value: 6,
    message: '이메일은 최소 6자 이상이어야 합니다.',
  },
};

export const numberRules = {
  required: 'Number is required',
  valueAsNumber: true,
  validate: {
    positive: (value: number) => value > 0 || '반드시 양수여야 합니다.',
    max: (value: number) => value <= 100 || '100까지 입력할 수 있습니다.',
  },
};
