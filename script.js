function generatePassword() {
    const passwordLength = document.getElementById('size').value;
    const password = generateRandomPassword(passwordLength);
    alert('Your Generated Password:\n' + password);
    const restart = confirm('Do you want to generate another password?');
            if (restart) {
                document.getElementById('size').value = ''; 
            }
}

function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

    const allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}