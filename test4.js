// THIS : Sebuah keyword spesial yg secara otomatis didefinisikan pada setiap function
// this = window; setiap variabel yg dibuat di scope global sama aja dgn properti window
// console.log(this);

// // Membuat object
// // CARA 1 >> Function Declaration
// // THIS pada function declaration mengembalikan object global
// function helo() {
//   console.log(this);
//   console.log(`Hallo`);
// }
// this.helo();

// // CARA 2 >> Object Literal
// // THIS pada object literal mengembalikan object yg bersangkutan
// let obj = { a: 10, nama: `Andre` };
// obj.halo = function () {
//   console.log(this);
//   console.log(`Hallo`);
// };
// obj.halo();

// CARA 3 >> Object Constructor
// THIS pada object constructor mengembalikan object yang baru dibuat
function Halo() {
  console.log(this);
  console.log(`Hallo`);
}
let obj1 = new Halo();
let obj2 = new Halo();

// // BUAT OBJECT DENGAN CONSTRUCTOR FUNCTION (KEYWORD NEW)
// function Mahasiswa(nama, npm, email, jurusan) {
//   this.nama = nama;
//   this.npm = npm;
//   this.email = email;
//   this.jurusan = jurusan;
// }
// let mhs = new Mahasiswa(
//   `Andre`,
//   `1804105010046`,
//   `tuwankuandre@gmail.com`,
//   `Teknik Elektro`
// );
// console.log(mhs);

// // BUAT OBJECT DENGAN FUNCTION DECLARATION
// function buatObjectMhs(nama, npm, email, jurusan) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.npm = npm;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }
// let mhs1 = buatObjectMhs(
//   `Andre`,
//   `1804105010046`,
//   `tuwankuandre@gmail.com`,
//   `Teknik Elektro`
// );
// console.log(mhs1);

// // OBJECT : Array yang lebih sakti, kumpulan nama yg memiliki nilai
// // BUAT OBJECT SECARA LITERAL
// let mhs = {
//   nama: `Andre`,
//   umur: 24,
//   ipk: [3.0, 3.2, 3.4],
//   alamat: {
//     jalan: `Rahmat No.10`,
//     kota: `Banda Aceh`,
//     provinsi: `Aceh`,
//   },
// };
// console.log(mhs.alamat);
