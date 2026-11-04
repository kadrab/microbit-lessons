/*
 * GÖREV 4 — ŞANSLI SAYI
 * HİKÂYE: PİKO 4, 5 veya 6 gelince seviniyor; küçük sayılarda üzgün bir yüz yapıyor.
 * HEDEF: Başlangıçta sayi 0 olsun ve 0 görünsün. A'ya kısa basınca bir kez
 * 1–6 arasında sayı seç, sakla ve göster. Aynı sayı 4'ten küçükse üzgün yüz,
 * değilse mutlu yüz göster. Yüz ekranda kalsın; karar için yeniden sayı seçme.
 * KURAL: Başlangıç yığınını ve A başlığını koru. Diğer hazır parçaları yalnızca taşı.
 * Ekleme, silme, çoğaltma, değer değiştirme. Gösteri bitince yeniden bas.
 * DENEME: 1, 2 veya 3 çıkarsa üzgün; 4, 5 veya 6 çıkarsa mutlu olmalı.
 * Özellikle 3 ve 4'ü düşün: hangi yüze gider? Sonuçlar tekrar edebilir.
 *
 * TASK 4 — THE LUCKY NUMBER
 * STORY: PIKO is happy with 4, 5, or 6 and makes a sad face for smaller numbers.
 * GOAL: At startup, set sayi to 0 and show 0. A brief A press chooses one number
 * from 1–6, stores it, and shows it. If that same number is less than 4, show a sad face;
 * otherwise show a happy face. Leave the face visible; do not draw again for the decision.
 * RULE: Keep the startup stack and A container. Only move the other supplied pieces.
 * Do not add, delete, duplicate, or change values. Wait for the sequence before pressing again.
 * TEST: If 1, 2, or 3 is drawn, show sad; if 4, 5, or 6 is drawn, show happy.
 * Think especially about 3 and 4: which face belongs to each? Results may repeat.
 */

let sayi = 0
input.onButtonPressed(Button.A, function () {
    sayi = randint(1, 6)
    basic.showNumber(sayi)
    if (sayi < 4) {
    } else {
    }
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
})
sayi = 0
basic.showNumber(sayi)
