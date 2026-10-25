// GIZLI SELAM - COCUKLAR TAMAMLA
// MakeCode > JavaScript: dosyanin tamamini yapistir, sonra Bloklar'a gec.
// HIKAYE: Robotun gizli selami var. Sadece sallamak yetmiyor!
// KURAL: Robot sallandiginda A tusu basiliysa mutlu yuz gostersin.
// A basili degilse carpi gostersin.
// Once A'yi basili tut, sonra karti salla. Bir kez basip birakmak yetmez.
// Sadece A'ya basmak yeni bir sonuc gostermez; kontrolu sallama baslatir.

input.onGesture(Gesture.Shake, function () {
    // GOREV 1: false yerine Girdi'den "A dugmesine basili mi?" blogunu koy.
    // JavaScript ile: input.buttonIsPressed(Button.A)
    if (false) {
        // GOREV 2: Gizli selam dogruysa mutlu yuz sec.
        basic.showIcon(IconNames.Confused)
    } else {
        // GOREV 3: Gizli selam yanlissa carpi sec.
        basic.showIcon(IconNames.Confused)
    }
})

// HAZIR: Baslangicta kucuk bir elmas goster. Bu bir sonuc degil.
basic.showIcon(IconNames.SmallDiamond)

// DENE 1: Hicbir tusa basmadan salla.
// DENE 2: A'yi basili tutarak salla.
// DENE 3: A'ya basip birak, SONRA salla.
// DENE 4: Yalniz B'yi basili tutarak salla.
// Her denemeden sonra sonuc yuzunun gorunmesini bekle.
// SORU: A'ya basip birakmak ile basili tutmak neden farkli?
