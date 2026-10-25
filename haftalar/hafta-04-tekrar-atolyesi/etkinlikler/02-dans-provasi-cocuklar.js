/*
 * GÖREV 2 — PİKO'NUN DANS PROVASI
 * HİKÂYE: Dansın bir açılışı, tekrar eden hareketleri ve bir finali var.
 * HEDEF: A'ya kısa basıp bırak. Önce bir kez onay göster.
 * Sonra mutlu yüz → şaşkın yüz sırasını üç kez tekrarla.
 * Dans bitince bir kez uykulu yüz göster ve orada kal.
 * KURAL: A başlatıcısını koru. Yalnızca hazır parçaları taşı.
 * Blok veya bekleme ekleme; silme, çoğaltma, değer değiştirme.
 * DENEME: Üç mutlu ve üç şaşkın yüz say. Açılış ve final tek mi?
 *
 * TASK 2 — PİKO'S DANCE REHEARSAL
 * STORY: The dance has an opening, repeated moves and a finale.
 * GOAL: Press and release A briefly. First show a tick once.
 * Then repeat the sequence happy face → surprised face three times.
 * When the dance ends, show a sleeping face once and leave it on the screen.
 * RULE: Keep the A-button starter. Only move the prepared pieces.
 * Do not add blocks or pauses; do not delete, duplicate or change values.
 * TEST: Count three happy faces and three surprised faces. Do the opening and finale happen once each?
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Surprised)
    }
    basic.showIcon(IconNames.Happy)
})
