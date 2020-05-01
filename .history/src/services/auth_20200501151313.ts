export default function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'ert34tryrtyrtyrtyrtyrtyrty',
        user: {
          name: 'Marcio',
          email: 'marciocamello@outlook.com',
        },
      });
    }, 2000);
  });
}
