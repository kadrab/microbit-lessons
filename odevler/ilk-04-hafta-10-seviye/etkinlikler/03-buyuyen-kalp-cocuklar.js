/*
 * GÖREV 3 / 10 — BÜYÜYEN KALP MAKİNESİ
 *
 * PİKO küçük bir kalbi büyütmeyi öğreniyor.
 * HEDEF: A ile başlat. Bir kez şaşkın yüz göster.
 * Küçük kalp → büyük kalp çiftini üç kez tekrarla.
 * Sonunda bir kez uykulu yüz göster ve orada kal.
 * İPUCU: Bir tur iki resimden oluşabilir. Başlangıç ve final birer kez.
 * DENE: Üç küçük, üç büyük kalp gördün mü? Sıraları doğru mu?
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * Finale kadar A'ya tekrar basma; sonra yeni deneme yapabilirsin.
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Surprised)
    }
    basic.showIcon(IconNames.SmallHeart)
})
