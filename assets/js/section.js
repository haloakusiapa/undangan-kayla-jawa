// Fungsi untuk menampilkan section berikutnya dan menyembunyikan section saat ini
function bukaUndangan() {
    const section1 = document.getElementById('section-1');
    const section2 = document.getElementById('section-2');

    section1.style.display = 'none'; // Sembunyikan section pertama
    section2.style.display = 'block'; // Tampilkan section kedua

    // Memutar musik saat undangan dibuka
    putarLagu();
}

// Fungsi untuk mengontrol pemutaran musik
let isPlaying = true; // Untuk melacak status musik
const audioElement = document.getElementById('lagu'); // Ambil elemen audio
const controlIcon = document.getElementById('kontrol'); // Ambil ikon kontrol

// Fungsi untuk memutar atau menghentikan audio
function putarLagu() {
    if (isPlaying) {
        audioElement.play(); // Putar audio
        controlIcon.src = 'assets/img/volume-on.png'; // Ganti ikon ke suara hidup
    } else {
        audioElement.pause(); // Hentikan audio
        controlIcon.src = 'assets/img/volume-off.png'; // Ganti ikon ke suara mati
    }
    isPlaying = !isPlaying; // Ubah status pemutaran
}

// Fungsi untuk menggulir ke section tertentu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); // Gulir dengan halus
}

// Ketika halaman sudah dimuat
window.onload = function() {
    document.querySelector('.konten h1').classList.add('fade-in');
    document.querySelector('.konten h2').classList.add('fade-in');
}

// Mengecek elemen pengantin saat halaman digulir
document.addEventListener("DOMContentLoaded", function() {
    const pengantinElements = document.querySelectorAll(".pengantin");

    function checkVisibility() {
        pengantinElements.forEach(pengantin => {
            const rect = pengantin.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                pengantin.classList.add("visible"); // Tambah kelas 'visible' jika elemen terlihat
            }
        });
    }

    window.addEventListener("scroll", checkVisibility); // Cek saat halaman digulir
    checkVisibility(); // Cek visibilitas setelah halaman dimuat
});

// Tambahkan animasi fade-in pada teks kutipan
document.addEventListener("DOMContentLoaded", function() {
    const quoteText = document.querySelector('.quote-text');
    quoteText.classList.add('fade-in'); // Tambah kelas fade-in
});

// Tambahkan animasi fade-in pada teks terima kasih
document.addEventListener("DOMContentLoaded", function() {
    const thankYouText = document.querySelector('.thank-you-text');
    thankYouText.classList.add('fade-in'); // Tambah kelas fade-in untuk transisi
});

// Fungsi untuk menyalin teks
function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(function() {
            alert('No. Rekening berhasil disalin!'); // Tampilkan pesan berhasil
        })
        .catch(function(err) {
            console.error('Error copying text: ', err); // Tampilkan pesan kesalahan
        });
}

// Fungsi untuk menyalin detail bank
function copyBankDetails() {
    const copyText = document.getElementById("bank-details");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Untuk perangkat mobile
    document.execCommand("copy");
    alert("Rekening berhasil disalin: " + copyText.value);
}

// Fungsi untuk menyalin alamat hadiah
function copyGiftAddress() {
    const copyAddress = document.getElementById("gift-address");
    copyAddress.select();
    copyAddress.setSelectionRange(0, 99999); // Untuk perangkat mobile
    document.execCommand("copy");
    alert("Alamat berhasil disalin: " + copyAddress.value);
}

// Menangani pengiriman form pesan
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form mengirim secara default

    const nameInput = document.getElementById("nameInput");
    const messageInput = document.getElementById("messageInput");
    const nameText = nameInput.value.trim();
    const messageText = messageInput.value.trim();

    if (nameText && messageText) { // Hanya lanjut jika nama dan pesan tidak kosong
        const messageItem = document.createElement("div");
        messageItem.className = "message-item";
        messageItem.textContent = `${nameText}: ${messageText}`; // Tampilkan nama dengan pesan

        const messageList = document.getElementById("messageList");
        messageList.appendChild(messageItem); // Tambahkan pesan baru ke daftar

        nameInput.value = ''; // Kosongkan input nama
        messageInput.value = ''; // Kosongkan input pesan
    }
});

// Menangani pengiriman form RSVP
document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form mengirim secara default

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const additionalOptions = Array.from(document.querySelectorAll('.checkbox-group input:checked')).map(checkbox => checkbox.value);
    const guestCount = document.getElementById("guestCount").value;

    // Buat pesan hasil RSVP
    let resultMessage = `<strong>RSVP Anda:</strong><br>
        Nama: ${name}<br>
        Nomor Telepon: ${phone}<br>
        Email: ${email}<br>
        Kehadiran: ${attendance}<br>
        Pilihan Tambahan: ${additionalOptions.length ? additionalOptions.join(', ') : 'Tidak ada'}<br>
        Jumlah Tamu: ${guestCount}`;

    document.getElementById("result").innerHTML = resultMessage; // Tampilkan hasil

    document.getElementById("rsvpForm").reset(); // Kosongkan form
});

// Menangani animasi pada kontainer teks dan peta
document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector('.text-container');
    const mapContainer = document.querySelector('.map-container');

    textContainer.classList.add('visible'); // Tampilkan kontainer teks
    mapContainer.style.opacity = '1'; // Ubah opasitas kontainer peta
});