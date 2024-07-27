let captchaCode = '';

function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 5;
    captchaCode = '';
    
    for (let i = 0; i < codeLength; i++) {
        captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    const background = new Image();
    background.src = 'other/lock/cbg.jpg';  // Ensure 'bg.jpg' is in the correct path

    background.onload = function() {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        
        ctx.font = '30px Arial';
        ctx.fillStyle = '#000';
        
        const spacing = 30;
        for (let i = 0; i < captchaCode.length; i++) {
            const x = 10 + i * spacing;
            const y = 30;
            ctx.fillText(captchaCode[i], x, y);
        }
        
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(5, 15);
        ctx.lineTo(canvas.width - 5, 30);
        ctx.stroke();
    };
}

window.onload = function() {
    generateCaptcha();
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const captchaInput = document.getElementById('captchaInput').value;
    const message = document.getElementById('message');
    const loginContainer = document.querySelector('.login-container');
    const loginButton = document.querySelector('.lbutton');
    const body = document.querySelector('body');

    if (username === 'Aarav' && password === 'AP1311' && captchaInput === captchaCode) {
        message.style.color = 'green';
        message.textContent = 'Login Successful';
        loginContainer.classList.remove('error');
        loginButton.classList.remove('error');
        body.classList.remove('error');
		generateCaptcha();
        document.getElementById('captchaInput').value = '';
		document.getElementById('password').value = '';
        window.location.href = "e-shop.html";
    } else {
        message.style.color = 'red';
        message.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg> Login Unsuccessful 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
        `;
        loginContainer.classList.add('error');
        loginButton.classList.add('error');
        body.classList.add('error');
		generateCaptcha();
        document.getElementById('captchaInput').value = '';
		document.getElementById('password').value = '';
        erpopup('!!Login Unsuccessful!!');
    }
});

function erpopup(message, popupIconUrl = 'shop.ico', name = 'E-Shop') {
    const blurredBackground = document.createElement('div');
    blurredBackground.className = 'blurred-background';
    document.body.appendChild(blurredBackground);
    
    const popupBox = document.createElement('div');
    popupBox.className = 'ercustom-popup';
    
    const popupHeader = document.createElement('div');
    popupHeader.className = 'ercustom-popup-header';
    const img = document.createElement('img');
    img.src = popupIconUrl;
    const span = document.createElement('span');
    span.textContent = name;
    popupHeader.appendChild(img);
    popupHeader.appendChild(span);
    
    const popupBody = document.createElement('div');
    popupBody.className = 'ercustom-popup-body';
    popupBody.textContent = message;
    
    const popupFooter = document.createElement('div');
    popupFooter.className = 'ercustom-popup-footer';
    const button = document.createElement('button');
    button.textContent = 'OK';
    button.onclick = function() {
        document.body.removeChild(popupBox);
        document.body.removeChild(blurredBackground);
    };
    popupFooter.appendChild(button);
    
    popupBox.appendChild(popupHeader);
    popupBox.appendChild(popupBody);
    popupBox.appendChild(popupFooter);
    
    document.body.appendChild(popupBox);
    
    popupBox.style.display = 'block';
    blurredBackground.style.display = 'block';
}

function serch() {
    erpopup('!!Please Login First!!');
}

function cart() {
    erpopup('!!Please Login First!!');
}
