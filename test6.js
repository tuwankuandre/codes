// Object literal
// Problem : tidak efektif untuk object yang banyak
// let this1 = {
//   nama: `Andre`,
//   energy: 10,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

// let this2 = {
//     nama: `Andre`,
//     energy: 10,
//     makan: function (porsi) {
//       this.energy += porsi;
//       console.log(`Halo ${this.nama}, selamat makan`);
//     },
//   };

// // Object >> Function Declaration
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan!`);
//   },

//   main: function (jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain!`);
//   },
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat Tidur!`);
//   },
// };
// function Mahasiswa(nama, energy) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   return mahasiswa;
// }

// let andre = Mahasiswa(`Andre`, 10);
// let naufal = Mahasiswa(`Naufal`, 20);

// // Constructor Function
// // Keyword New
// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;

//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan!`);
//   };

//   this.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain!`);
//   };
// }

// let andre = new Mahasiswa(`Andre`, 10);
// let naufal = new Mahasiswa(`Naufal`, 15);

// // OBJECT PROTOTYPE
// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energy += porsi;
//   return `Halo ${this.nama}, Selamat Makan!`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energy -= jam;
//   return `Halo ${this.nama}, Selamat Main!`;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energy += jam * 2;
//   return `Halo ${this.nama}, Selamat Tidur!`;
// };

// let andre = new Mahasiswa(`Andre`, 10);

//OBJECT CLASS
class Mahasiswa {
  constructor(nama, energy) {
    this.nama = nama;
    this.energy = energy;
  }
  makan(porsi) {
    this.energy += porsi;
    return `Halo ${this.nama}, Selamat Makan!`;
  }
  main(jam) {
    this.energy -= jam;
    return `Halo ${this.nama}, Selamat Main!`;
  }
  tidur(jam) {
    this.energy += jam * 2;
    return `Halo ${this.nama}, Selamat Tidur!`;
  }
}
let andre = new Mahasiswa(`Andre`, 10);
