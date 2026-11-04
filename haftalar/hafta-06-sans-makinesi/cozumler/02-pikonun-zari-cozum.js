/*
 * GÖREV 2 — PİKO'NUN ZARI
 * HİKÂYE: PİKO'nun zarı 1, 2, 3, 4, 5 veya 6 seçebilir. Sırada ne var, bilmiyoruz!
 * HEDEF: Başlangıçta sayi 0 olsun ve 0 görünsün; henüz zar atılmadı.
 * A'ya her kısa basışta bir kez 1–6 arasında rastgele sayı seç, sayi içine kaydet,
 * sonra bu yeni sayıyı göster ve ekranda bırak.
 * KURAL: Başlangıç yığınını ve A başlığını koru. Diğer hazır parçaları yalnızca taşı.
 * Ekleme, silme, çoğaltma, değer değiştirme. Gösteri bitince yeniden bas.
 * DENEME: İlk A'dan itibaren her sonuç 1–6 arasında mı? 0 bir zar sonucu değildir.
 * Aynı sayı art arda gelebilir. Altı basışta bütün sayıları görmek zorunda değilsin.
 *
 * TASK 2 — PIKO'S DIE
 * STORY: PIKO's die can choose 1, 2, 3, 4, 5, or 6. We do not know what comes next!
 * GOAL: At startup, set sayi to 0 and show 0; no die has been rolled yet.
 * On each brief A press, choose one random number from 1–6, store it in sayi,
 * then show this new number and leave it visible.
 * RULE: Keep the startup stack and A container. Only move the other supplied pieces.
 * Do not add, delete, duplicate, or change values. Wait for the display before pressing again.
 * TEST: From the first A onward, is every result between 1 and 6? 0 is not a die result.
 * The same number may appear consecutively. Six presses do not have to show all six numbers.
 */

let sayi = 0
input.onButtonPressed(Button.A, function () {
    sayi = randint(1, 6)
    basic.showNumber(sayi)
})
sayi = 0
basic.showNumber(sayi)
