export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'rtygh3456rytyjjh@564%6yrty4564YR$56456',
        user: {
          name: 'Marcio',
          email: 'marciocamello@outlook.com',
        },
      });
    }, 2000);
  });
}
