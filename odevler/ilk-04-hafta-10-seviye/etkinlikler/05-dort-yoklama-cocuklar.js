/*
 * GÖREV 5 / 10 — DÖRT KEZ YOKLAMA
 *
 * PİKO her kontrolde cevabını yeniden duymak istiyor.
 * HEDEF: A'yı basıp bırak; hazırlık yüzünde B'yi seç.
 * Dört tur yap. HER TURUN BAŞINDA B basılıysa mutlu,
 * değilse üzgün yüz göster. Ardından temizle, 1000 ms boş bekle.
 * Dört turun sonunda bir kez onay göster ve orada kal.
 * DENE: B sırası bırak → bas → bırak → bas olsun.
 * Beklenen yüzler: üzgün → mutlu → üzgün → mutlu.
 * B'yi boş ekranda değiştir; yeni seçim sonraki turda okunur.
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
