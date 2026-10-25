/*
 * GÖREV 5 — DÖRT KEZ YOKLAMA
 * HİKÂYE: PİKO her kontrolde cevabını yeniden duymak istiyor.
 * HEDEF: A'yı basıp bırak; hazırlık yüzünde B'yi seç.
 * Dört tur yap. HER TURUN BAŞINDA B basılıysa mutlu,
 * değilse üzgün yüz göster. Ardından temizle, 1000 ms boş bekle.
 * Dört turun sonunda bir kez onay göster ve orada kal.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * İlk şaşkın yüz + 1000 ms hazırlığı da sabit kalsın.
 * İki tuş boşken A'yı basıp bırak; hazırlıkta B'yi seç.
 * Finale kadar A'ya tekrar basma.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 * DENEME: B sırası bırak → bas → bırak → bas olsun.
 * Beklenen yüzler: üzgün → mutlu → üzgün → mutlu.
 * B'yi boş ekranda değiştir; yeni seçim sonraki turda okunur.
 *
 * TASK 5 — FOUR CHECK-INS
 * STORY: PIKO wants to hear your answer again at every check.
 * GOAL: Press and release A; choose B's state during the preparation face.
 * Run four rounds. AT THE START OF EACH ROUND, show a happy face if B is held,
 * or a sad face otherwise. Then clear the screen and leave it blank for 1000 ms.
 * After the four rounds, show one check mark and leave it displayed.
 * RULE: All the pieces are ready. Only move them.
 * Do not add, delete, or duplicate blocks, or change the supplied values.
 * Keep the A starter in place.
 * Keep the initial surprised face + 1000 ms preparation in place too.
 * With both buttons released, press and release A; choose B's state during preparation.
 * Do not press A again before the ending.
 * Do not put fixed-count repeats inside one another.
 * TEST: Let B's states be released → held → released → held.
 * Expected faces: sad → happy → sad → happy.
 * Change B while the screen is blank; the new choice is read in the next round.
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Yes)
    }
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
