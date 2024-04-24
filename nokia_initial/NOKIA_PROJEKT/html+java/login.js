document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'blob' && password === '1111') {
            window.location.href = "join_room.html";
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    });
});
