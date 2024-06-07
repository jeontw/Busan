var signupButton = document.getElementById('회원가입');
var modal = document.getElementById('signupModal');
var span = document.getElementsByClassName('닫기')[0];

signupButton.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

function checkLogin() {
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    var email2 = document.getElementById("email2").value;
    var password2 = document.getElementById("password2").value;


    if (email1.trim() === "" || password1.trim() === "") {
        alert("이메일 또는 비밀번호를 입력하세요!");
        return;
    }
    
    if (email1 === email2 && password1 === password2) {
        window.location.href = "success.html";
    } else {
        alert("이메일 또는 비밀번호가 일치하지 않습니다!");
    }
}

function checkSignup() {
    var email2 = document.getElementById("email2").value;
    var password2 = document.getElementById("password2").value;
    var passwordConfirm = document.getElementById("passwordConfirm").value;
    if (email2.trim() === "" || password2.trim() === "") {
        alert("이메일 또는 비밀번호를 입력하세요!");
        return;
    }
    if (password2 === passwordConfirm) {
        alert("회원가입이 완료되었습니다!");
        modal.style.display = 'none';
    } else {
        alert("비밀번호가 일치하지 않습니다!");
    }
}

// 서버를 만들지 않고 배운내용대로 최대한 기능만 구현 해봤습니다.