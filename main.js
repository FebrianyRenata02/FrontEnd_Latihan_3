var angka1 = document.getElementById("angka1")
var angka2 = document.getElementById("angka2")
var hasil = document.getElementById("hasil")

function hitung(value) {
    var proses;
    switch (value) {
        case "*":
            proses = parseInt(angka1.value) * parseInt(angka2.value);
            hasil.innerHTML = proses;
            break;
        case "/":
            proses = parseInt(angka1.value) / parseInt(angka2.value);
            hasil.innerHTML = proses;
            break;
        case "+":
            proses = parseInt(angka1.value) + parseInt(angka2.value);
            hasil.innerHTML = proses;
            break;
        case "-":
            proses = parseInt(angka1.value) - parseInt(angka2.value);
            hasil.innerHTML = proses;
            break;
    }
}