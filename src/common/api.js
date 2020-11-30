// eslint-disable-next-line import/prefer-default-export
export function callApiLike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        resolve();
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject("callApiLike 실패");
      }
    }, 1000);
  });
}
