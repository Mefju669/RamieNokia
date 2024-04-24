document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const roomCode = document.getElementById('roomCode').value;

        if (roomCode === '2222') {
            window.location.href = "room_page.html";
        } else {
            alert('Invalid room code. Please try again.');
        }
    });
});

