/*
 * GÖREV 4 / 10 — İKİ BÖLÜMLÜ ŞİFRELİ MESAJ
 *
 * Uzay alıcısı iki onay, sonra üç çarpı bekliyor.
 * HEDEF: A ile başlat. İki kez onay → temizle → 400 ms boşluk.
 * Ardından üç kez çarpı → temizle → 800 ms boşluk.
 * En sonda bir kez kalp göster ve orada kal.
 * İPUCU: İki tekrar yan yana çalışacak; iç içe olmayacak.
 * DENE: Onay, onay, çarpı, çarpı, çarpı, kalp sırasını say.
 * İki bölümün boş bekleme süreleri aynı mı?
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * Finale kadar A'ya tekrar basma; sonra yeni deneme yapabilirsin.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 */

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Yes)
        basic.pause(800)
    }
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        basic.pause(400)
        basic.showIcon(IconNames.No)
    }
    basic.clearScreen()
})
