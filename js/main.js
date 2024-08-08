document.addEventListener('DOMContentLoaded', function() {
    // Pengecekan URL untuk memastikan pengguna berada di index.html
    const pathname = window.location.pathname;

    if (pathname !== '/' && !pathname.endsWith('index.html')) {
        // Redirect ke index.html jika tidak berada di halaman yang benar
        window.location.href = '/index.html';
        return; // Hentikan eksekusi lebih lanjut
    }

    // Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const city = document.getElementById('city').value;
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || city === '' || message === '') {
            // Show SweetAlert notification for empty fields
            swal({
                title: 'Oops!',
                text: 'Mohon lengkapi semua form sebelum mengirim.',
                icon: 'error',
            });
        } else {
            // Form is valid, submit it
            form.submit();
            // Example success message with SweetAlert
            swal({
                title: 'Terima kasih!',
                text: 'Form berhasil dikirim.',
                icon: 'success',
            });
        }
    });

    // Pengecekan jika file diakses langsung
    if (pathname.startsWith('/js/') || pathname.startsWith('/css/')) {
        swal({
            title: 'Akses Ditolak!',
            text: 'Anda tidak diizinkan mengakses file ini langsung.',
            icon: 'error',
        }).then(() => {
            window.location.href = '/index.html'; // Redirect ke index.html
        });
    }
});

// jQuery Document Ready
$(document).ready(function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const promoPopup = $('#promo-popup');

    // Mobile menu handling
    $('#menu-button').on('click', function () {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
    });

    $('#close-button').on('click', function () {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
    });

    // Close popup
    $('#close-popup').click(function() {
        promoPopup.fadeOut();
    });

    // Hide popup after 5 seconds
    promoPopup.fadeIn().delay(5000).fadeOut();

    // Close menu on link click
    $('#mobile-menu').on('click', '.menu-link', function () {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
    });

    // Responsive handling
    $(window).on('resize', function () {
        if (window.innerWidth >= 640) {
            mobileMenu.classList.add('translate-x-full');
        }
    });

    // Initialize AOS
    AOS.init();

    // Google Tag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-C4151F8V38');
});
