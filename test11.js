// // Latihan Template Literals dengan conditionals
// // Ternary
// const lagu = {
//   penyanyi: `Kau Adalah`,
//   judul: `Tetap Dalam Jiwa`,
//   feat: `Rayi Putra`,
// };
// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi} ${lagu.feat ? ` feat ${lagu.feat}` : ``}</li>
// <li>${lagu.judul}</li>
// </ul>
// </div>`;
// document.body.innerHTML = el;

// Template Literals Bersarang (Nested)
const mhs = {
  nama: `Tuwanku Andre`,
  smt: 5,
  mataKuliah: [
    `Rekayasa Web`,
    `Analisis dan Perancangan Sistem Informasi`,
    `Pemrograman Sistem Interakftif`,
    `Perancangan Sistem Berorientasi Object`,
  ],
};

function tampilMataKuliah(mataKuliah) {
  return `
  <ol>
  ${mataKuliah.map((mk) => `<li>${mk}</li>`).join(``)}
  </ol>
  `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester: ${mhs.smt}</span>
<h4>Mata Kuliah :</h4>
${tampilMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;

// // Latihan Template Literals pada HTML Fragments
// const mhs = [
//   {
//     nama: `Tuwanku Andre`,
//     email: `tuwankuandre@gmail.com`,
//   },
//   {
//     nama: `Naufal Rizki`,
//     email: `naufalrizki@gmail.com`,
//   },
//   {
//     nama: `Meily Fazilla`,
//     email: `meilyfazilla@gmail.com`,
//   },
// ];
// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m, i) =>
//       `<ul>
//         <li>${i + 1} ${m.nama}</li>
//         <li>Email : ${m.email}</li>
//       </ul>`
//   )
//   .join("")}
// </div>`;
// document.body.innerHTML = el;

// Template Literals -> ialah string literal yg memungkinkan ada expression di dalamnya
// Harus menggunakan `` back tick
// Digunakan utk:
// Multi-line string
// Embedded Expression
// HTML Fragments
// Expression Interpolation
// Tagged Template

// // Example template literals
// const nama = `Andre`;
// const umur = 24;
// console.log(`Halo nama saya ${nama}, umur saya ${umur} tahun.`);

// // Example Embedded Expressions
// // 1.
// console.log(`${alert(`Hello World`)}`);
// // 2.
// const angka = 13;
// console.log(`${angka % 2 == 0 ? `Genap` : `Ganjil`}`);

// // HTML Fragments
// const mhs = {
//   nama: `Tuwanku Andre`,
//   umur: 24,
//   npm: `1804105010046`,
//   email: `tuwankuandre@gmail.com`,
// };
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="npm">${mhs.npm}</span>
// <span class="umur">${mhs.umur}</span>
// <span class="email">${mhs.email}</span>
// </div>`;

// document.body.innerHTML = el;
