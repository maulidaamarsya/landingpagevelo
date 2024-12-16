document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".Frame6 .button1, .Frame6 .button2, .Frame6 .button3");
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Fungsi untuk memperbarui posisi slider
    function updateSliderPosition() {
        slides.forEach((slide, index) => {
            // Geser setiap slide berdasarkan posisi relatifnya
            const offset = (index - currentSlide) * 100;
            slide.style.transform = `translateX(${offset}%)`;
        });

        // Tambahkan class active pada indikator
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentSlide);
        });
    }

    // Fungsi untuk geser ke slide berikutnya
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSliderPosition();
    }

    // Fungsi untuk geser ke slide sebelumnya
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
    }

    // Tombol navigasi (jika diperlukan)
    document.querySelector(".ButtonPrev")?.addEventListener("click", prevSlide);
    document.querySelector(".ButtonNext")?.addEventListener("click", nextSlide);

    // Auto-slide setiap 5 detik
    setInterval(nextSlide, 5000);

    // Inisialisasi slider pertama
    updateSliderPosition();
});


$(document).ready(function(){
  $('.slider').slick({
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    
    // slidesToShow: 1,
    // slidesToScroll: 1,
  });
});

// Konten 10 //

function scrollLeft() {
    const container = document.getElementById('slider-container');
    container.scrollLeft -= 200; // Geser kontainer ke kiri sejauh 200px
}

function scrollRight() {
    const container = document.getElementById('slider-container');
    container.scrollLeft += 200; // Geser kontainer ke kanan sejauh 200px
}

// konten4 //



document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const radioButtons = document.querySelectorAll("input[name='position']");

    // Fungsi untuk mendapatkan index radio yang sedang aktif
    const getActiveIndex = () => {
        return Array.from(radioButtons).findIndex(radio => radio.checked);
    };

    // Fungsi untuk memperbarui radio yang aktif berdasarkan index
    const updateActiveRadio = (newIndex) => {
        if (newIndex >= 0 && newIndex < radioButtons.length) {
            radioButtons[newIndex].checked = true;
        }
    };

    // Event listener untuk tombol Previous
    prevButton.addEventListener("click", () => {
        const currentIndex = getActiveIndex();
        const newIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
        updateActiveRadio(newIndex);
    });

    // Event listener untuk tombol Next
    nextButton.addEventListener("click", () => {
        const currentIndex = getActiveIndex();
        const newIndex = (currentIndex + 1) % radioButtons.length;
        updateActiveRadio(newIndex);
    });

    // Event listener untuk klik manual pada radio button
    radioButtons.forEach((radio, index) => {
        radio.addEventListener("change", () => {
            // Dapatkan item carousel berdasarkan index radio aktif
            const carousel = document.getElementById("carousel");
            carousel.style.setProperty("--position", index + 1); // Misalnya gunakan custom property
        });
    });
});


/* animasi konten 1*/
