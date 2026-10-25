/*
 * GÖREV 4 — İKİ BÖLÜMLÜ ŞİFRELİ MESAJ
 * HİKÂYE: Uzay alıcısı iki onay, sonra üç çarpı bekliyor.
 * HEDEF: A ile başlat. İki kez onay → temizle → 400 ms boşluk.
 * Ardından üç kez çarpı → temizle → 800 ms boşluk.
 * En sonda bir kez kalp göster ve orada kal.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * Finale kadar A'ya tekrar basma; sonra yeni deneme yapabilirsin.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 * İPUCU: İki tekrar yan yana çalışacak; iç içe olmayacak.
 * DENEME: Onay, onay, çarpı, çarpı, çarpı, kalp sırasını say.
 * İki bölümün boş bekleme süreleri aynı mı?
 *
 * TASK 4 — TWO-PART CODED MESSAGE
 * STORY: The space receiver expects two check marks, then three crosses.
 * GOAL: Start with A. Twice: check mark → clear screen → 400 ms blank gap.
 * Then three times: cross → clear screen → 800 ms blank gap.
 * At the very end, show one heart and leave it displayed.
 * RULE: All the pieces are ready. Only move them.
 * Do not add, delete, or duplicate blocks, or change the supplied values.
 * Keep the A starter in place.
 * Do not press A again before the ending; then you may try another run.
 * Do not put fixed-count repeats inside one another.
 * HINT: The two repeats run one after the other, not inside one another.
 * TEST: Count check mark, check mark, cross, cross, cross, heart in that order.
 * Are the blank-screen waiting times in the two parts the same?
 */

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        basic.pause(400)
    }
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.pause(800)
    }
    basic.showIcon(IconNames.Heart)
})
