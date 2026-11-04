/*
 * GÖREV 3 — SONUCU UNUTMA
 * HİKÂYE: PİKO zar sonucunu gösterip kalp gönderiyor. Kalbin arkasındaki sayıyı hatırla!
 * HEDEF: Başlangıçta sayi 0 olsun ve 0 görünsün. A'ya kısa basınca bir kez
 * 1–6 arasında sayı seçip sakla; sayıyı, ardından kalbi göster. Kalp ekranda kalsın.
 * B'ye kısa basınca son saklanan sayıyı göster ve ekranda bırak; yeni sayı seçme.
 * KURAL: Başlangıç yığınını ve A/B başlıklarını koru. Diğer hazır parçaları yalnızca taşı.
 * Ekleme, silme, çoğaltma, değer değiştirme. B'ye basmadan önce A gösterisi bitsin.
 * DENEME: İlk A'dan önce B: 0. A'da gördüğün sayıyı not et. B, B aynı sayıyı göstermeli.
 * Sonraki A yine bir çekiliş yapar; aynı sayı çıkabilir. B yalnızca hatırlar.
 *
 * TASK 3 — REMEMBER THE RESULT
 * STORY: PIKO shows a die result and sends a heart. Remember the number behind the heart!
 * GOAL: At startup, set sayi to 0 and show 0. A brief A press chooses and stores
 * one number from 1–6, shows the number, then a heart. Leave the heart visible.
 * A brief B press shows the last stored number and leaves it visible; do not draw again.
 * RULE: Keep the startup stack and A/B containers. Only move the other supplied pieces.
 * Do not add, delete, duplicate, or change values. Let A's display finish before pressing B.
 * TEST: B before the first A: 0. Note the number shown by A. B, B must show that same number.
 * The next A draws again; the same number may occur. B only recalls.
 */

let sayi = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(sayi)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    sayi = randint(1, 6)
    basic.showNumber(sayi)
})
sayi = 0
basic.showNumber(sayi)
