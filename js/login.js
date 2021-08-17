
document.getElementById('login-submit').addEventListener

('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    // password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    if (userEmail == 'nafi@gmail.com' &&      userPassword == 'nafi') {
        window.location.href = "banking.html";
    }
})
