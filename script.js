function generatePassword() {
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    const numbers = "0123456789";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    let password = "";

    while (password.length < 24) {
        for (let i = 0; i < 3; i++) {
            password += specialChars[Math.floor(Math.random() * specialChars.length)];
        }
        for (let i = 0; i < 3; i++) {
            password += numbers[Math.floor(Math.random() * numbers.length)];
        }
        for (let i = 0; i < 3; i++) {
            password += uppercase[Math.floor(Math.random() * uppercase.length)];
        }
        for (let i = 0; i < 3; i++) {
            password += lowercase[Math.floor(Math.random() * lowercase.length)];
        }
    }

    // Ensure the password is exactly 24 characters long
    return password.slice(0, 24);
}

document.getElementById("generate-btn").addEventListener("click", () => {
    const password = generatePassword();
    document.getElementById("password").textContent = password;
});

document.getElementById("copy-btn").addEventListener("click", () => {
    const password = document.getElementById("password").textContent;
    const copyBtn = document.getElementById("copy-btn");
    
    navigator.clipboard.writeText(password).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied ✓";
        copyBtn.disabled = true;
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.disabled = false;
        }, 5000);
    });
});
