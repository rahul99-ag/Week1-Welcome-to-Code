// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!",
// yang kemudian akan ditampilkan di console.

function shoutOut() {
  return 'Halo Function!';
}

console.log(shoutOut());
console.log('');

// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari
// dua parameter yang dikirim.
function calculateMultiply(a, b) {
  return a * b;
}

let num1 = 1;
let num2 = 2;

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);
console.log('');

// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi
// satu kalimat berikut:
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini
function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

let name = 'Agus';
let age = 30;
let address = 'Jln. Malioboro, Yogjakarta';
let hobby = 'gaming';
let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
