const generateBtn = document.getElementById('generate-btn');
const passwordLengthInput = document.getElementById('password-length');
const passwordInput = document.getElementById('password');

const includeLowercase = document.getElementById('include-lowercase');
const includeUppercase = document.getElementById('include-uppercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSpecial = document.getElementById('include-special');
const specialCharCountInput = document.getElementById('special-char-count');

function generatePassword() {
    const length = parseInt(passwordLengthInput.value);
    const specialCharCount = parseInt(specialCharCountInput.value);
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+;<>?';

    let allChars = '';
    let password = '';
    
    if (includeLowercase.checked) {
        allChars += lowercaseChars;
    }
    if (includeUppercase.checked) {
        allChars += uppercaseChars;
    }
    if (includeNumbers.checked) {
        allChars += numberChars;
    }

    if (includeSpecial.checked) {
        allChars += specialChars;
    }

    if (allChars.length === 0) {
        passwordInput.value = 'Selecione ao menos uma opção!';
        return;
    }

    let specialCharPart = '';
    if (includeSpecial.checked) {
        for (let i = 0; i < specialCharCount; i++) {
            const randomIndex = Math.floor(Math.random() * specialChars.length);
            specialCharPart += specialChars[randomIndex];
        }
    }
    
    for (let i = 0; i < length - specialCharCount; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    password = shuffleString(password + specialCharPart);

    passwordInput.value = password;
}

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
    return arr.join('');
}

generateBtn.addEventListener('click', generatePassword);

// Slider
const slider = document.getElementById("myRange");
const numberInput = document.getElementById("password-length")

slider.oninput = function() {
    numberInput.value = slider.value;
}
numberInput.oninput = function() {
    slider.value = numberInput.value;
}

// Hidden
const specialCharCount = document.getElementById("special-char-count-div");
function toggleSpecialCharCount(){
    includeSpecial.addEventListener("change", function() {
        if (includeSpecial.checked) {
            console.log("NOT HIDDEN")
            includeSpecial.classList.remove("hidden");
        } else {
            console.log("not check")
            includeSpecial.classList.add("hidden");
        }
    });
}