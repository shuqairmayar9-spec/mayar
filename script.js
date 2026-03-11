document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('bookingForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`شكرًا ${name}! تم إرسال طلب الحجز. سنتواصل معك قريبًا.`);
            form.reset();
        });
    }
})