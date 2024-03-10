// METHOD FIND & FILTER >> Mencari elemen pada array
// // Filter : Mencari nilai pada Array dan mengembalikan banyak nilai yg berbentuk Array
// let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// let angka2 = angka.filter(function (e) {
//   // FILTER
//   return e > 5;
// });
// let angka3 = angka2.sort(function (a, b) {
//   // SORT biar berurutan hasil filter
//   return a - b;
// });
// console.log(angka2.join(` - `));
// FIND : Cari nilai pertama pada array & menghasilkan hanya satu nilai yg tidak berbentuk Array
// let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// let angka2 = angka.find(function (e) {
//   return e > 5;
// });
// console.log(angka2);

// METHOD LOOPING ARRAY (FOREACH & MAP SERTA SORT)
// // FOREACH
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let nama = [`Twk`, `Andre`, `Al Farisi`];
// nama.forEach(function (e, i) { // Looping forEach pada array dgn memasukkan Function Expression
//   console.log(`Mahasiswa ke - ${i + 1} adalah ${e}`);
// });

// // MAP
// // Looping Map pada array menghasilkan array lagi, sedangkan forEach tidak menghasilkan array
// let angka = [1, 2, 5, 3, 6, 8, 4];
// let angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(` - `));

// // SORT
// Mengurutkan/menyortir array
// let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(` - `));

// let arr = [`Twk`, `Andre`, `Al Farisi`, `Harimau`, `Koala`]; // METHOD ARRAY (SPLICE & SLICE)
// // -Splice(menyambung)- (indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2, ...) - Contoh:
// // arr.splice(2, 0, `Lembu`, `Sapi`); // Jika tidak ada yang dihapus
// // arr.splice(1, 2, `Kambing`, `Gajah`); // Jika yg dihapus termasuk index ke-1 dan seterusnya
// // -Slice(mengiris)- (indexAwal <ikut terbawa>, indexAkhir <tidak terbawa> ) - Contoh :
// // Buat variabel baru untuk menampung array yang mau di-slice
// let arr2 = arr.slice(1, 3); // Jika yg di-iris index ke-1 dan ke-2, maka index akhir harus 3
// console.log(arr.join(` - `));
// console.log(arr2.join(` - `));

// let arr = [`Twk`, `Andre`, `Al Farisi`]; // METHOD ARRAY (JOIN, PUSH, POP, UNSHIFT, SHIFT)
// // arr.push(`Lembu`, `Sapi`); // Method push untuk menambah array baru di baris terakhir
// // arr.pop(); // Method pop untuk menghapus array dari urutan yg terakhir
// // arr.unshift(`Lembu`); // Method unshift untuk menggeser/menambah array baru di baris awal
// // arr.shift(); // Method shift untuk menggeser/menghapus keluar array di urutan pertama
// console.log(arr.join(` - `)); // Method join (menggabung) array

// let arr = [`Twk`, `Andre`, `Al Farisi`, `lembu`]; //Looping array
// for (let i = 0; i < arr.length; i++) {
//   console.log(`Mahasiswa ke - ` + (i + 1) + ` ` + arr[i]);
// }

// let arr = [`Twk`, `andre`, `alfarisi`]; //cara menghapus array manual
// arr[1] = undefined;
// console.log(arr[1]);

// let arr = []; // Menambah array
// arr[0] = `Twk`;
// arr[1] = `Andre`;
// arr[2] = `Al Farisi`;
// console.log(arr);

// let tesArr = function () {
//   alert(`Hello World`);
// };
// // let tesArr = [`teks`, 12, false, tes]; // Tampilin function yang ada dalam array
// // //   console.log(tesArr[3]());

// let myArr2 = [`teks`, 2, false, tesArr, [4, 5, 6]]; //tampilin arrar yg ada di dlm array
// console.log(myArr2[4][2]);

// let binatang = [`lembu`, `kambing`, `domba`]; //array
// console.log(binatang[2].length);
