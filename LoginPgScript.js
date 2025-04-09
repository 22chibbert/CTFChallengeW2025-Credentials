document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const correctUsername = "Awesomeminers3";
    const correctPassword = "PoisonousPotato";
    
    // Basic client-side validation
    if (username != correctUsername && password != correctPassword) {
        message.textContent = 'Invalid username or password';
        message.style.color = 'red';
    } else {
        if (password === correctPassword) {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
            setTimeout(redirect, 3000);
        } else {
            message.textContent = 'Invalid password';
            message.style.color = 'red';
        }
    }
});

function redirect() {
    window.location.href = "DashboardPg.html";
}