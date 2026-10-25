/*
 * GÖREV 6 — MESAJ PAKETİNİ BİR KEZ SEÇ
 * HİKÂYE: PİKO gönderime başlarken tek bir paket seçecek.
 * HEDEF: A'yı basıp bırak. Hazırlık bitince B'ye BİR KEZ bak.
 * B basılıysa üç kalp; değilse iki çarpı gönder.
 * Her simgeden sonra temizle ve 500 ms boş bekle.
 * Paket bitince bir onay göster ve orada kal.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * İlk şaşkın yüz + 1000 ms hazırlığı da sabit kalsın.
 * İki tuş boşken A'yı basıp bırak; hazırlıkta B'yi seç.
 * Finale kadar A'ya tekrar basma.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 * DENEME: İlk kalpten sonra B'yi bırak; üç kalp yine tamamlanmalı.
 * Yeni denemede ilk çarpıdan sonra B'ye bas; iki çarpı tamamlanmalı.
 * Gösteri başladıktan sonra B değişse bile paket değişmesin.
 *
 * TASK 6 — CHOOSE THE MESSAGE PACKET ONCE
 * STORY: PIKO will choose just one packet when starting a transmission.
 * GOAL: Press and release A. When preparation ends, check B ONCE.
 * If B is held, send three hearts; otherwise, send two crosses.
 * After each icon, clear the screen and leave it blank for 500 ms.
 * When the packet ends, show one check mark and leave it displayed.
 * RULE: All the pieces are ready. Only move them.
 * Do not add, delete, or duplicate blocks, or change the supplied values.
 * Keep the A starter in place.
 * Keep the initial surprised face + 1000 ms preparation in place too.
 * With both buttons released, press and release A; choose B's state during preparation.
 * Do not press A again before the ending.
 * Do not put fixed-count repeats inside one another.
 * TEST: Release B after the first heart; all three hearts must still finish.
 * In a new run, hold B after the first cross; both crosses must still finish.
 * Once the display starts, the packet must not change even if B changes.
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(500)
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            basic.pause(500)
        }
    }
    basic.showIcon(IconNames.Yes)
})
