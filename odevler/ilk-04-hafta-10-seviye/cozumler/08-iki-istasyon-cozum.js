/*
 * GÖREV 8 — KAPI VE YOLCU İSTASYONU
 * HİKÂYE: PİKO iki kapıyı ve ardından üç yolcuyu kontrol edecek.
 * HEDEF: A ile hazırlığı başlat. Önce iki tur: B basılıysa kalp,
 * değilse çarpı. Sonra bir uykulu yüz göster, 1000 ms bekle.
 * Ardından üç tur: B basılıysa mutlu, değilse üzgün yüz.
 * Her kontrol turunda B'ye yeniden bak; simgeden sonra temizle,
 * 1000 ms boş bekle. İki bölüm bitince onayda kal.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * İlk şaşkın yüz + 1000 ms hazırlığı da sabit kalsın.
 * İki tuş boşken A'yı basıp bırak; hazırlıkta B'yi seç.
 * Finale kadar A'ya tekrar basma.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 * DENEME: B sırası bırak → bas | bas → bırak → bas olsun.
 * Beklenen: çarpı → kalp | mutlu → üzgün → mutlu.
 * Ara işareti ve final birer kez. B'yi boş ekranlarda değiştir.
 *
 * TASK 8 — DOOR AND PASSENGER STATIONS
 * STORY: PIKO will check two doors and then three passengers.
 * GOAL: Start preparation with A. First, run two rounds: if B is held, show a heart;
 * otherwise, show a cross. Then show one sleeping face and wait 1000 ms.
 * Next, run three rounds: if B is held, show a happy face; otherwise, show a sad face.
 * Check B again in every check-in round; after the icon, clear the screen
 * and leave it blank for 1000 ms. When both parts finish, leave a check mark displayed.
 * RULE: All the pieces are ready. Only move them.
 * Do not add, delete, or duplicate blocks, or change the supplied values.
 * Keep the A starter in place.
 * Keep the initial surprised face + 1000 ms preparation in place too.
 * With both buttons released, press and release A; choose B's state during preparation.
 * Do not press A again before the ending.
 * Do not put fixed-count repeats inside one another.
 * TEST: Let B's states be released → held | held → released → held.
 * Expected: cross → heart | happy → sad → happy.
 * The intermission icon and ending each happen once. Change B during blank screens.
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.No)
        }
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Asleep)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Yes)
})
