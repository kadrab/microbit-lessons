// GIZLI SELAM - TAM COZUM
// MakeCode > JavaScript: dosyanin tamamini yapistir, sonra Bloklar'a gec.
// NE ZAMAN? SALLANDIGINDA olayi yeni bir kontrol baslatir.
// HANGI DURUMDA? EGER o anda A tusu basiliysa mutlu yuz goster.
// DEGILSE carpi goster. Sadece bir yol calisir.

input.onGesture(Gesture.Shake, function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})

basic.showIcon(IconNames.SmallDiamond)

// CEVAPLAR:
// Tus yok + sallama -> carpi.
// A basili + sallamaxq -> mutlu.
// A'ya basip birak, sonra salla -> carpi.
// Yalniz B basili + sallama -> carpi.
// A basili, sallama yok -> yeni kontrol yok; onceki simge kalir.
// A ve B birlikte basili + sallama -> mutlu; A hala basilidir.
// Sonuc kalicidir: A'yi birakmak simgeyi degistirmez, tekrar sallamak gerekir.
// Onceki animasyon bitince yeni denemeye gec.
// Kaynak: https://makecode.microbit.org/reference/input/on-gesture
// Kaynak: https://makecode.microbit.org/reference/input/button-is-pressed
