const locations = {
    "강서구": "./Place_1.html",
    "금정구": "./Place_1.html#강서구",
    "기장군": "./Place_1.html#금정구",
    "남구": "./Place_1.html#남구",
    "동구": "./Place_2.html",
    "동래구": "./Place_2.html#동구",
    "부산진구": "./Place_2.html#동래구",
    "북구": "./Place_2.html#북구",
    "사상구": "./Place_3.html",
    "사하구": "./Restaurant_3.html#사상구",
    "서구": "./Place_3.html#사하구",
    "수영구": "./Place_3.html#수영구",
    "연제구": "./Place_4.html",
    "영도구": "./Place_4.html#연제구",
    "중구": "./Place_4.html#영도구",
    "해운대구": "./Place_4.html#해운대구"
};

function searchLocation() {
    const input = document.getElementById('main_sch').value.trim();
    const url = locations[input];
    
    if (url) {
        window.location.href = url;
        return false;
    } else {
        alert("올바른 구 이름을 입력해주세요.");
        return false;
    }
}

window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
});