// // Contoh penerapan Arrow Function dengan CSS dan DOM Selection
// const box = document.querySelector(`.box`);
// box.addEventListener(`click`, function () {
//   let satu = `size`;
//   let dua = `caption`;

//   if (this.classList.contains(satu)) {
//     [satu, dua] = [dua, satu];
//   }

//   this.classList.toggle(`size`);
//   setTimeout(() => {
//     this.classList.toggle(`caption`);
//     // console.log(this);
//   }, 600);
// });

// -------------------------------------------------------------------------------------------
// Konsep this pada arrow function

// // Constructor Function
// // Tidak semua Constructor function bisa menggunakan arrow function, kecuali methodnya saja
// const Mahasiswa = function () {
//   this.nama = `Andre`;
//   this.umur = 24;
//   this.sayHello = function () {
//     console.log(
//       `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`
//     );
//   };
// };

// const andre = new Mahasiswa();

// // Arrow Function
// // Tidak semua function bisa diubah jadi arrow function, tapi kalau method nya bisa
// const Mahasiswa = function () {
//   this.nama = `Andre`;
//   this.umur = 24;
//   this.sayHello = () => {
//     console.log(
//       `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`
//     );
//   };
// };
// const andre = new Mahasiswa();

// // Object Literal
// // Arrow function tidak bisa digunakan pada object literal
// // Arrow function tidak memiliki konsep this
// // Contohnya Begini...
// const mhs1 = {
//   nama: `Andre`,
//   umur: 24,
//   sayHello: () => {
//     console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//   },
// };

// // Arrow function tidak memiliki konsep this
// const Mahasiswa = function () {
//   this.nama = `Andre`;
//   this.umur = 24;
//   this.sayHello = function () { // function expression akan disimpan ke dlm variable
//     console.log(                // sehingga tidak akan kena hoisting
//       `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`
//     );
//   };
//   setInterval(() => {   // Function declaration akan terkena hoisting jika pake function biasa
//     console.log(this.umur++); // sehingga this-nya akan mengecheck variable global
//   }, 1000);     // Krna itu digunakan arrow function, karena arrow function tdk pnya konsep this
// };              // Maka this nya akan bergerak ke lexical scope yaitu mengacu pada this.umur
// const andre = new Mahasiswa();

// -------------------------------------------------------------------------------------------

// // Arrow Function >> Khusus dilakukan dengan Function Expression, dimana hrs inisialisasi var
// // Function Declaration
// function panggilNama(nama) {
//   alert(`halo ` + nama);
// }
// panggilNama(`Andre`);

// // Function Expression
// let panggilNama = function (nama) {
//   alert(`Halo ` + nama);
// };
// panggilNama(`Andre`);

// // Arrow Function
// let panggilNama = (nama) => {
//   alert(`Halo, ${nama}`);
// };
// panggilNama(`Naufal`);

// // Example Arrow Function 1 Parameter
// const panggilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(panggilNama(`Andre`));
// // KEMUDIAN DIUBAH LEBIH SINGKAT MENJADI
// const panggilNama = (nama) => `Halo, ${nama}`;
// console.log(panggilNama(`Andre`));

// // Arrow Function 2 parameter atau lebih
// const panggilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(panggilNama(`Andre`, `Malam`));

// // Arrow Function Tanpa Parameter
// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// CONTOH PENGGUNAAN ARROW FUNCTION
// let mahasiswa = [`Tuwanku Andre Al Farisi`, `Meily Fazilla`, `Beyza Yildize`];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);
// // Ubah jadi Arrow Function
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);
// Ubah jadi Arrow Function tapi yg tampil dlm bentuk object bukan array lagi
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// VAR, LET, CONST

// // Gunakan Let hanya untuk pengulangan (looping)

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// // CONST >> kita bisa ubah constanta dgn cara menambah isinya, tidak bisa membuat const baru
// const mhs = {
//   nama: `Andre`,
//   umur: 24,
// };
// console.log(mhs);
