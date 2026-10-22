let body = 0;
let klik = 1;

susenka.onclick = function() {
    body = body + klik;
    document.getElementById('body').innerText = body;
};

function kup(cena, bonus) {
    if (body >= cena) {
        body = body - cena;
        klik = klik + bonus;
        document.getElementById('body').innerText = body;
    }
}
