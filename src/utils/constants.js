export const BASE_URL = 'https://api.sysoev.nomoreparties.co';
// export const BASE_URL = 'http://localhost:3000';
export const IMAGE_PUTH = 'https://api.nomoreparties.co'


export const errorsName = {
    401: 'Вы ввели неправильный логин или пароль',
    419: ' Обычно код отдается, если CSRF-токен устарел или оказался некорректным.',

}
export const SHORT_MOVIE =40;

export const DEVICE_PARAMS = {
  desktop: {
    width: 1280,
    cards: {
      total: 12,
      more: 4,
    },
  },
  tablet: {
    width: 768,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    width: 480,
    cards: {
      total: 5,
      more: 2,
    },
  },
};

