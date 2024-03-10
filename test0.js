var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt(`Pilih : gajah, semut, orang`);

  //menangkap pilihan komputer

  //membangkitkan bilangan random
  var comp = Math.random();
  if (comp < 0.34) {
    comp = `gajah`;
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = `orang`;
  } else {
    comp = `semut`;
  }
  console.log(comp);
  var hasil = ``;
  //menentukan rules
  if (p == comp) {
    hasil = `SERI!`;
  } else if (p == `gajah`) {
    // if(comp == `orang`){
    //   hasil = `MENANG!`
    // } else{
    //   hasil = `KALAH!`;
    // }
    hasil = comp == `orang` ? `MENANG!` : `KALAH!`;
  } else if (p == `orang`) {
    hasil = (comp = `gajah`) ? `KALAH` : `MENANG`;
  } else if (p == `semut`) {
    hasil = comp == `orang` ? `KALAH` : `MENANG`;
  } else {
    hasil = `Masukan salah`;
  }
  //tampilkan hasilnya
  alert(
    `Kamu memilih ` +
      p +
      ` dan komputer memilih ` +
      comp +
      `\nsehingga hasilnya ` +
      hasil
  );
  tanya = confirm(`Lagi ga?`);
}
alert(`Terimakasih udh bermain!`);

// var x = ``;
// for (var i = 5; i >= i - 1; i--) {
//   for (var z = 0 - 1; z < i; z++) {
//     x += `*`;
//   }
//   x += `\n`;
// }

// console.log(x);

// var item = prompt(
//   `Masukkan nama makanan / minuman : \n(Cth : nasi, daging, susu, hamburger, softdrink)`
// );

// switch (item) {
//   case `nasi`:
//   case `daging`:
//   case `susu`:
//     alert(`Ini adalah makanan sehat`);
//     break;
//   case `hamburger`:
//   case `softdrink`:
//     alert(`Ini adalah makanan tidak sehat`);
//     break;
//   default:
//     alert(`Makanan/minuman yang anda masukkan salah`);
//     break;
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= 6 && noAngkot != 5) {
//     console.log(`Angkot No.` + noAngkot + ` sedang beroperasi`);
//   } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
//     console.log(`Angkot No.` + noAngkot + ` sedang lembur`);
//   } else {
//     console.log(`Angkot NO.` + noAngkot + ` sedang tidak beroperasi`);
//   }
// }

// var jmlAngkot = 10;
// var angkotberoperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotberoperasi) {
//     console.log(`Angkot No.` + noAngkot + ` beroperasi dengan baik.`);
//   } else {
//     console.log(`Angkot No.` + noAngkot + ` tidak beroperasi dengan baik.`);
//   }
// }

// // while (noAngkot <= angkotBeroperasi) {
// //   console.log(`Angkot No.` + noAngkot + ` beroperasi dengan baik.`);
// //   noAngkot++;
// // }

// // for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
// //   console.log(`Angkot No.` + noAngkot + ` tidak beroperasi dengan baik.`);
// // }

// var angka = `asd`;
// if (angka % 2 === 0) {
//   console.log(angka + ` adalah bilangan genap`);
// } else if (angka % 2 === 1) {
//   console.log(angka + ` adalah bilangan ganjil`);
// } else {
//   console.log(`yang anda masukkan bukan angka`);
// }
