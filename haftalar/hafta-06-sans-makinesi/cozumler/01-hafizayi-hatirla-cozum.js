/*
 * GÖREV 1 — HAFIZAYI HATIRLA
 * HİKÂYE: PİKO selamlarını sessizce sayıyor. Sayıyı ancak sorunca söylüyor.
 * HEDEF: Başlangıçta sayi 0 olsun ve 0 görünsün. A'ya kısa basınca sayi 1 artsın;
 * ekran değişmesin. B'ye kısa basınca saklanan sayı görünsün; sayı değişmesin.
 * KURAL: Başlangıç yığınını ve A/B başlıklarını koru. Diğer hazır parçaları yalnızca taşı.
 * Ekleme, silme, çoğaltma, değer değiştirme. Her gösteri bitince sonraki tuşa bas.
 * DENEME: Yeniden başlat. A, A sırasında ekranda hâlâ 0; B'ye basınca 2.
 * Tekrar B: 2. Sonra A ekranı değiştirmez; B: 3. Önce tahmin et!
 *
 * TASK 1 — REMEMBER THE MEMORY
 * STORY: PIKO silently counts your greetings. It only tells you the number when asked.
 * GOAL: At startup, set sayi to 0 and show 0. A brief A press increases sayi by 1;
 * the screen stays unchanged. A brief B press shows the stored number without changing it.
 * RULE: Keep the startup stack and A/B containers. Only move the other supplied pieces.
 * Do not add, delete, duplicate, or change values. Let each display finish before the next press.
 * TEST: Restart. During A, A the screen still shows 0; pressing B shows 2.
 * B again: 2. Then A leaves the display unchanged; B: 3. Predict first!
 */

let sayi = 0
input.onButtonPressed(Button.A, function () {
    sayi += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(sayi)
})
sayi = 0
basic.showNumber(sayi)
