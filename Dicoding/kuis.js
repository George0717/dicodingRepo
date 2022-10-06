// const fetchingUserFromInternet = (callback, isOffline) => {
//     setTimeout(() => {
//       if (isOffline) {
//         callback(new NetworkError('Gagal mendapatkan data dari internet'), null);
//       }
//       callback(null, { name: 'John', age: 18 });
//     }, 500);
//   };

const fetchingUserFromInternet = (isOffline) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOffline) {
        reject(new NetworkError ("Gagal mendapatkan data dari internet"));
      } else {
        resolve({ name: "John", age: 18 });
      }
    }, 500);
  });
};

// Todo 2
// const gettingUserName = () => {
//     fetchingUserFromInternet((error, user) => {
//       if (error) {
//         return error.message;
//       }
//       return user.name;
//     }, false);
//   };

async function gettingUserName(isOffline) {
  try {
    const dataFromInternet = await fetchingUserFromInternet;
    return dataFromInternet.name;
  } catch (error) {
    return error.message;
  }
}
