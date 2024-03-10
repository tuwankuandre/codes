// PROJECT ANGKOT
let penumpang = [];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length === 0) {
    // Tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // Kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // Tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // Tampilkan pesan kesalahannya
        console.log(`Maaf nama ${namaPenumpang} sudah ada di dalam angkot`);
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // Tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
    console.log(`Angkot masih kosong`);
    // kembalikan isi array & keluar dari function
  } else {
    // telusuri seluruh kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah namanya jadi undefined
        penumpang[i] = undefined;
        // kembalikan isi array dan keluar dari function
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika tidak ada nama yang sesuai
        // tampilkan pesan kesalahannya
        console.log(
          `Nama Penumpang ${namaPenumpang} tidak ada di dalam angkot`
        );
      }
    }
  }
  return penumpang; // kembalikan isi array dan keluar dari function
};
