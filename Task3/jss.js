const panels = document.querySelectorAll(".panel");
const dots = document.querySelectorAll(".dot");
const loginContainer = document.querySelectorAll (".loginContainer");

panels.forEach((panel, index) => {
    panel.addEventListener("click", () => {
        removeActive();
        panel.classList.add("active");
        updateDots(index);
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        removeActive();
        panels[index].classList.add("active");
        updateDots(index);
    });
});


function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}

function updateDots(index) {
    dots.forEach(dot => {
        dot.classList.remove("active");
    });
    dots[index].classList.add("active");
}

//Login ekranına giriş kısmı
function openLogin() {
    var loginContainer = document.getElementById("loginContainer");
    loginContainer.style.display = "block";
}

function closeLogin() {
    var loginContainer = document.getElementById("loginContainer");
    loginContainer.style.display = "none";
}

    // Eğer kullanıcı giriş penceresi dışına tıklarsa pencereyi kapat
    window.onclick = function(event) {

    var loginContainer = document.getElementById("loginContainer");
    if (event.target == loginContainer) {
        loginContainer.style.display = "none";
    }
}
var correctUsername = "username"; // Doğru kullanıcı adı
var correctPassword = "password"; // Doğru şifre

// Giriş yapma işlemi
function login() {

    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        alert("Giriş yapıldı");
        closeLogin();
    } else {
        alert("Kullanıcı adı veya şifre yanlış. Tekrar deneyin.");
    }
}

/*
Bu JavaScript kodu, bir web sayfasında panellerin ve bu panellerin altında bulunan noktaların (dots) etkileşimini yöneten bir dizi işlevi içerir. İşlevlerin açıklamaları aşağıda verilmiştir:

1. `const panels = document.querySelectorAll(".panel");` ve `const dots = document.querySelectorAll(".dot");`: Sayfadaki panelleri ve noktaları seçmek için CSS sınıf seçicilerini kullanarak DOM'dan bu öğeleri alır. Paneller `.panel` sınıfıyla işaretlenmişken, noktalar `.dot` sınıfıyla işaretlenmiştir.

2. `panels.forEach((panel, index) => { ... });`: Panelleri döngüye alır ve her bir panele bir tıklama olayı (click event) ekler.

   - `panel.addEventListener("click", () => { ... });`: Panele tıklama olayını dinler.

   - `removeActive();`: Tüm panellerden "active" sınıfını kaldıran `removeActive` işlevini çağırır. Bu, mevcut aktif paneli temizler.

   - `panel.classList.add("active");`: Tıklanan panele "active" sınıfını ekler. Bu, tıklanan paneli aktif hale getirir.

   - `updateDots(index);`: `updateDots` işlemini çağırarak, noktaları günceller ve tıklanan panele karşılık gelen noktayı aktif hale getirir.

3. `dots.forEach((dot, index) => { ... });`: Noktaları döngüye alır ve her bir noktaya bir tıklama olayı ekler.

   - `dot.addEventListener("click", () => { ... });`: Noktaya tıklama olayını dinler.

   - `removeActive();`: Tüm panellerden "active" sınıfını kaldıran `removeActive` işlevini çağırır. Bu, mevcut aktif paneli temizler.

   - `panels[index].classList.add("active");`: Tıklanan noktaya karşılık gelen paneli aktif hale getirir.

   - `updateDots(index);`: `updateDots` işlemini çağırarak, noktaları günceller ve tıklanan noktayı aktif hale getirir.

4. `function removeActive() { ... }`: Bu işlev, tüm panellerden "active" sınıfını kaldırarak mevcut aktif paneli temizler.

5. `function updateDots(index) { ... }`: Bu işlev, tüm noktalardan "active" sınıfını kaldırır ve belirli bir noktayı (index'e göre) aktif hale getirir. Bu, tıklanan panel veya noktaya karşılık gelen noktanın veya panelin vurgulanmasını sağlar. */
