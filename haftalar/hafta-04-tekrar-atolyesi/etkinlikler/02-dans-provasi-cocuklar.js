/*
 * GÖREV 2 — PİKO'NUN DANS PROVASI
 * Dansın bir açılışı, tekrar eden hareketleri ve bir finali var.
 * HEDEF: A'ya kısa basıp bırak. Önce bir kez onay göster.
 * Sonra mutlu yüz → şaşkın yüz sırasını üç kez tekrarla.
 * Dans bitince bir kez uykulu yüz göster ve orada kal.
 * KURAL: A başlatıcısını koru. Yalnızca hazır parçaları taşı.
 * Blok veya bekleme ekleme; silme, çoğaltma, değer değiştirme.
 * DENE: Üç mutlu ve üç şaşkın yüz say. Açılış ve final tek mi?
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Surprised)
    }
    basic.showIcon(IconNames.Happy)
})
