// // Lexical Scope
// // Example
// function init() {
//   let nama = `Andre`;
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// // Example 1
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
//   };
// }
// let selamatPagi = ucapkanSalam(`Pagi`);
// let selamatSiang = ucapkanSalam(`Siang`);
// let selamatMalam = ucapkanSalam(`Malam`);

// console.log(selamatMalam`Andre`);

// Example 2
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100; // Apapun variable yg diisi ga ngaruh ke nilai counter awal

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

// // Execution Context, Hoisting & Scope

// let nama = `Tuwanku Andre`;
// let username = `@tuwankuandre`;

// function cetakURL(username) {
//   let instagramURL = `http://instagram.com/`;
//   return instagramURL + username;
// }
// console.log(cetakURL(username));

// // Example
// function a() {
//   console.log(`Ini a`);

//   function b() {
//     console.log(`Ini b`);

//     function c() {
//       console.log(`Ini c`);
//     }
//     c();
//   }
//   b();
// }
// a();

// Example
// function satu() {
//   let nama = `Andre`;
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }
// console.log(nama);
// let nama = `Naufal`;
// satu();
// dua(`Haris`);
// console.log(nama);
