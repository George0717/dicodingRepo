// Set Timout
// console.log("Selamat datang")
// setTimeout(() => {
//     console.log("Terima kasih sudah datang")
// }, 5000)

// console.log("ada yang bisa dibantu?")

// CallBack
// const orderCoffee = callback => {
//     let coffe = null
//     console.log("Sedang membuat coffee silahkan tunggu...")

//     setTimeout(() => {
//         coffe = "Sudah jadi"
//         callback(coffe)
//     }, 2000)
// }

// orderCoffee(coffe => {
//     console.log(coffe)
// })

// Promise
// function makeACake(...rawIngredients){
//     collectIngredients(rawIngredients)
//     .then(makeThedough)
//     .then(pourdough)
//     .then(bakeACake)
//     .then(console.log)
// }

// const executorFunction = (resolve, reject) => {
//     const isCoffeMakerReady = true
//     if(isCoffeMakerReady) {
//         resolve("Kopi berhasil dibuat")
//     }
//     else {
//         reject("Mesi kopi tidak bisa digunakan")
//     }
// }

// const makeCoffee = () => {
//     return new Promise(executorFunction)
// }
// const coffePromise = makeCoffee()
// console.log(coffePromise)

// const stock = {
//     coffeeBeans: 250,
//     water: 1000
// }

// const checkStock = () => {
//     return new Promise((resolve,reject) => {
//         if(stock.coffeeBeans >= 16&& stock.water >= 250)
//         {
//             resolve("Stok cukup. bisa membuat coffee")
//         }
//         else{
//             reject("Stok tidak cukup untuk membuat coffe")
//         }
//     })
// }

// const handleSuccess = resolvedValue => {
//     console.log(resolvedValue)
// }

// const handleFailure = rejectionReason => {
//     console.log(rejectionReason)
// }

// checkStock()
// .then(handleSuccess)
// .catch(handleFailure)

// Chaining Promise
// const state = {

//     stock: {
//         coffeeBeans: 250,
//         water: 1000,
//     },
//     isCoffeeMachineBusy: false,
// }

// const boilWater = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Air sedang dipanaskan...")
//         setTimeout(() => {
//             resolve("Air sudah sudah siap")
//         }, 2000)
//     })
// }

// const grindCoffeBeans = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Kopi sedang digiling")
//         setTimeout(() => {
//             resolve("Kopi berhasil digiling")
//         }, 3000 )
//     })
// }

// const checkAvailability = () => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (!state.isCoffeeMachineBusy) {
//             resolve("Mesin kopi siap digunakan.");
//         } else {
//             reject("Maaf, mesin sedang sibuk.");
//         }
//     }, 1000);
// });
// };

// const checkStock = () => {
// return new Promise((resolve, reject) => {
//     state.isCoffeeMachineBusy = true;
//     setTimeout(() => {
//         if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
//             resolve("Stok cukup. Bisa membuat kopi.");
//         } else {
//             reject("Stok tidak cukup!");
//         }
//     }, 1500);
// });
// };

// const brewCoffee = () => {
// console.log("Membuatkan kopi Anda...")
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Kopi sudah siap!")
//     }, 2000);
// });
// };

// function makeEspresso() {
// checkAvailability()
//     .then((value) => {
//         console.log(value);
//         return checkStock();
//     })
//     .then(value => {
//         console.log(value)
//         const promises = [boilWater(), grindCoffeBeans()]

//         return Promise.all(promises)
//     })
//     .then((value) => {
//         console.log(value)
//         return brewCoffee();
//     })
//     .then(value => {
//         console.log(value);
//         state.isCoffeeMachineBusy = false;
//     })
//     .catch(rejectedReason => {
//         console.log(rejectedReason);
//         state.isCoffeeMachineBusy = false;
//     });
// }

// makeEspresso();

async function makeCoffe() {
    const coffee = await getCoffee()
    console.log(coffee)
}
makeCoffe()