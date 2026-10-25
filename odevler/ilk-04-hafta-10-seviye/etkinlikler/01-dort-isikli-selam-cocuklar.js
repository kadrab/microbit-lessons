/*
 * GÖREV 1 / 10 — DÖRT IŞIKLI SELAM
 *
 * PİKO iniş yapan arkadaşına dört kez göz kırpacak.
 * HEDEF: A'ya kısa basıp bırak. Dört kez mutlu yüz göster.
 * Her yüzden sonra ekranı temizle ve 400 ms boş bekle.
 * Dört tur bitince bir kez onay göster ve orada kal.
 * İPUCU: Bir turda neler var? Final de dört kere mi olmalı?
 * DENE: Dört mutlu yüz, dört boşluk ve bir final say.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * Finale kadar A'ya tekrar basma; sonra yeni deneme yapabilirsin.
 */

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Yes)
    }
    basic.clearScreen()
    basic.pause(400)
})
