/*
 * GÖREV 3 — BÜYÜYEN KALP MAKİNESİ
 * HİKÂYE: PİKO küçük bir kalbi büyütmeyi öğreniyor.
 * HEDEF: A ile başlat. Bir kez şaşkın yüz göster.
 * Küçük kalp → büyük kalp çiftini üç kez tekrarla.
 * Sonunda bir kez uykulu yüz göster ve orada kal.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * Finale kadar A'ya tekrar basma; sonra yeni deneme yapabilirsin.
 * İPUCU: Bir tur iki resimden oluşabilir. Başlangıç ve final birer kez.
 * DENEME: Üç küçük, üç büyük kalp gördün mü? Sıraları doğru mu?
 *
 * TASK 3 — GROWING HEART MACHINE
 * STORY: PIKO is learning to make a small heart grow.
 * GOAL: Start with A. Show one surprised face.
 * Repeat the small heart → large heart pair three times.
 * At the end, show one sleeping face and leave it displayed.
 * RULE: All the pieces are ready. Only move them.
 * Do not add, delete, or duplicate blocks, or change the supplied values.
 * Keep the A starter in place.
 * Do not press A again before the ending; then you may try another run.
 * HINT: One round can contain two pictures. The opening and ending happen once each.
 * TEST: Did you see three small hearts and three large hearts? Is their order correct?
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Surprised)
    }
    basic.showIcon(IconNames.SmallHeart)
})
