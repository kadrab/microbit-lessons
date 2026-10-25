/*
 * GÖREV 8 / 10 — KAPI VE YOLCU İSTASYONU
 *
 * PİKO iki kapıyı ve ardından üç yolcuyu kontrol edecek.
 * HEDEF: A ile hazırlığı başlat. Önce iki tur: B basılıysa kalp,
 * değilse çarpı. Sonra bir uykulu yüz göster, 1000 ms bekle.
 * Ardından üç tur: B basılıysa mutlu, değilse üzgün yüz.
 * Her kontrol turunda B'ye yeniden bak; simgeden sonra temizle,
 * 1000 ms boş bekle. İki bölüm bitince onayda kal.
 * DENE: B sırası bırak → bas | bas → bırak → bas olsun.
 * Beklenen: çarpı → kalp | mutlu → üzgün → mutlu.
 * Ara işareti ve final birer kez. B'yi boş ekranlarda değiştir.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * İlk şaşkın yüz + 1000 ms hazırlığı da sabit kalsın.
 * İki tuş boşken A'yı basıp bırak; hazırlıkta B'yi seç.
 * Finale kadar A'ya tekrar basma.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Yes)
    }
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Asleep)
    }
    basic.showIcon(IconNames.Sad)
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(1000)
})
