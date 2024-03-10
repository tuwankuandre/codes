// 3 Contoh higher order function
// Array.prototype.map
// Array.prototype.filter
// Array.prototype.reduce

// Example
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// // mencari angka >= 3 menggunakan looping for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// // Mencari angka >= 3 menggunakan filter
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(a);

// // Mencari angka >= 3 menggunakan filter dan arrow function
// const newAngka = angka.filter((a) => a >= 3);
// console.log(a);

// // fitur Map untuk memetakan tiap-tiap isi array, bisa dikali, bagi, atau memperbesar,
// // menambah karakter, mengganti warna, dll
// const newAngka = angka.map(function (a) {
//   return a * 2;
// });
// console.log(newAngka);

// // Menggunakan Reduce untuk menjumlahkan semua elemen Array
// // -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(newAngka);

// '
// -----------------------------------------------------------------------------------------
// Higher Order Function
// Kalau ada function sebagai argumen maka disebut Callback
// Function yg memiliki argument berupa callback disebut higher order function
// Exxample 1
// function kerjakanTugas(matakuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
//   selesai();
// }
// function selesai() {
//   alert(`Selesai mengerjakan tugas!`);
// }
// kerjakanTugas(`Matematika`, selesai);

// // Example 2
// setTimeout(function () {
//   console.log(`Hello World`);
// }, 1000);

// // Example 3
// const tombol = document.querySelector(`.submit`);
// tombol.addEventListener(`click`, function () {
//   console.log(`Tombol Ditekan!`);
// });

// // Example 4
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan.`);
//   };
// }
// let selamatMalam = ucapkanSalam(`Malam`);
// console.log(selamatMalam(`Andre`));

// // Example 5
// function repeatLog(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// repeatLog(10);
// repeatLog(5);

// // Example 6 (Paling Kompleks)
// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }
// repeat(10, console.log);
// repeat(5, alert);
