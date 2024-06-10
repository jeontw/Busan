const locations = {
    "강서구": "Gangseo.html",
    "금정구": "Geumjeong.html",
    "기장군": "Gijang.html",
    "남구": "Nam.html",
    "동구": "Dong.html",
    "동래구": "Dongnae.html",
    "부산진구": "Busanjin.html",
    "북구": "Buk.html",
    "사상구": "Sasang.html",
    "사하구": "Saha.html",
    "서구": "Seo.html",
    "수영구": "Suyeong.html",
    "연제구": "Yeonje.html",
    "영도구": "Yeongdo.html",
    "중구": "Jung.html",
    "해운대구": "Haeundae.html"
};

function searchLocation() {
    const input = document.getElementById('sch').value.trim();
    const url = locations[input];
    
    if (url) {
        window.location.href = url;
        return false;
    } else {
        alert("올바른 구 이름을 입력해주세요.");
        return false;
    }
}