// let tampilPesan = function (nama) { // function expression
//   alert(`Halo ${nama}`);
// };
// tampilPesan(`Twk Andre`);

// function tampilPesan(nama) { // function declaration
//   alert(`Halo  ${nama}`);
// }
// tampilPesan(`Twk Andre`);

// function faktorial(x) { //function faktorial dengan rekursif
//   if (x === 0) return 1; // rekursif base
//   return x * faktorial(x - 1);
// }
// console.log(faktorial(4));

// function faktorial(x) { //function faktorial normal tanpa rekursif
//   var hasil = 1;
//   for (var y = x; y > 0; y--) {
//     hasil *= y;
//   }
//   return hasil;
// }
// console.log(faktorial(10));

// function cetakAngka(n) { //function looping normal tanpa rekursif
//   for (var i = n; i >= 1; i--) {
//     console.log(i);
//   }
// }
// cetakAngka(7);

// function faktorial(x) {
//   // faktorial secara rekursif
//   if (x === 0) return 1;
//   return x * faktorial(x - 1);
// }
// console.log(faktorial(3));

// function tampilAngka(x) {
//   if (x === 0) return; // base case (rekursif function)
//   console.log(x);
//   return tampilAngka(x - 1);
// }
// tampilAngka(7);

// function faktorial(x) {
//   var y;
//   x === 0 ? (y = 1) : null;
//   return y * faktorial(x - 1);
// }
// console.log(faktorial(2));

// function faktorial(x) {
//   var hasil = 1;
//   for (var i = x; i > 0; i--) {
//     hasil *= i;
//   }
//   console.log(hasil);
//   return hasil;
// }
// faktorial(4);
// faktorial(3);
// function tampilAngka(x) {
//   if (x === 0) return;
//   console.log(x);
//   return tampilAngka(x - 1);
// }
// tampilAngka(4);

function fibonacci(x) {
  // rekursif
  if (x === 0) return;
  console.log(x);
  return x * faktorial(x - 1);
  tree;
}
faktorial(10);

// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }

// var a = 1;
// function tes() {
//   a = 2;
// }
// tes();
// console.log(a);

// var i = 2;
// if (i % 2 == 0) {
//   var genap = true;
// }
// if (genap) {
//   console.log(`Ini adalah bilangan GENAP`);
// }
// function jumlahVolumeKubus(a, b) {
//   return a * a * a + b * b * b;
// }
// alert(jumlahVolumeKubus(8, 3));

// function tambah() {
//   var hasil = 0;
//   for (var x = 0; x < arguments.length; x++) {
//     hasil += arguments[x];
//   }
//   return hasil;
// }
// var coba = tambah(1, 3, 4);
// alert(coba);

// function tambah(a, b) {
//   return a + b;
// }
// let tes = tambah(1, 3, 5);
// console.log(tes);

// function jumlahBil(a, b) {
//   return a + b;
// }
// function kaliBil(a, b) {
//   return a * b;
// }
// var a = parseInt(prompt(`Masukkan angka ke-1`));
// var b = parseInt(prompt(`Masukkan angka ke-2`));
// var hasil = kaliBil(jumlahBil(a, b), jumlahBil(a, b));
// alert(`Total = ` + hasil);

// function jmlKubus(a, b) {
//   var volumeA = a * a * a;
//   var volumeB = b * b * b;
//   var total = volumeA + volumeB;
//   return total;
// }
// alert(jmlKubus(10, 10));

// function jumlah(a, b) {
//   return a + b;
// }
// alert(jumlah(5, 7));
