let currentSlideIndex = 0;

function showSlides() {
  // Seleksi hanya gambar dengan class "istana-slide"
  const slides = document.querySelectorAll(".istana");

  // Sembunyikan semua slide
  slides.forEach((slide) => (slide.style.display = "none"));

  // Tampilkan slide berikutnya
  currentSlideIndex++;
  if (currentSlideIndex > slides.length) currentSlideIndex = 1;

  slides[currentSlideIndex - 1].style.display = "block";

  // Pindah slide setiap 3 detik
  setTimeout(showSlides, 3000);
}

// Pilih semua elemen dengan class .animate
const animatedElements = document.querySelectorAll(".animate");

// Fungsi untuk menambahkan class 'active' saat elemen terlihat
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Hentikan pengamatan setelah aktif
      }
    });
  },
  { threshold: 0.4 } // Elemen dianggap terlihat saat 20% dari tinggi elemen masuk ke viewport
);

// Amati setiap elemen yang ingin dianimasikan
animatedElements.forEach((el) => observer.observe(el));

// Jalankan fungsi ketika halaman selesai dimuat
window.onload = showSlides;


alert('Hai')

let nama= prompt('Masukan Nama')
switch(nama) {
  case 'Salwah':
    alert('Salwah cewe nya Fikri yaa')
  break

  case 'Salmah':
    alert('Kamu cewenya Mas Jawir yaa')
  break
}

alert('Selamat datang')