/*
 * GÖREV 1 — DÖRT IŞIKLI SELAM
 * HİKÂYE: PİKO iniş yapan arkadaşına dört kez göz kırpacak.
 * HEDEF: A'ya kısa basıp bırak. Dört kez mutlu yüz göster.
 * Her yüzden sonra ekranı temizle ve 400 ms boş bekle.
 * Dört tur bitince bir kez onay göster ve orada kal.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * Finale kadar A'ya tekrar basma; sonra yeni deneme yapabilirsin.
 * İPUCU: Bir turda neler var? Final de dört kere mi olmalı?
 * DENEME: Dört mutlu yüz, dört boşluk ve bir final say.
 *
 * TASK 1 — FOUR-LIGHT GREETING
 * STORY: PIKO will wink four times at a friend who is landing.
 * GOAL: Briefly press and release A. Show a happy face four times.
 * After each face, clear the screen and leave it blank for 400 ms.
 * After all four rounds, show one check mark and leave it displayed.
 * RULE: All the pieces are ready. Only move them.
 * Do not add, delete, or duplicate blocks, or change the supplied values.
 * Keep the A starter in place.
 * Do not press A again before the ending; then you may try another run.
 * HINT: What happens in one round? Should the ending happen four times too?
 * TEST: Count four happy faces, four blank gaps, and one ending.
 */

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        basic.pause(400)
    }
    basic.showIcon(IconNames.Yes)
})
