document.addEventListener('DOMContentLoaded', function() {
    const connectButton = document.getElementById('connect-btn');

    connectButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to finish the session?')) {
            console.log('Session finished');

            window.location.href = "login.html";
        }
    });
});
