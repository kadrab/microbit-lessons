/*
 * GÖREV EK 2 — GİZLİ SELAM
 * HİKÂYE: Robotun gizli selamı var. Sadece sallamak yetmiyor!
 * HEDEF: Robot sallandığında o anda A basılıysa mutlu yüz, değilse çarpı göster.
 * Önce A'yı basılı tut, sonra salla. Bir kez basıp bırakmak yetmez.
 * Yalnız A'ya basmak yeni sonuç üretmez; kontrolü sallama başlatır.
 * KURAL: false yerine Girdi'den “A düğmesine basılı mı?” bloğunu seç.
 * JavaScript karşılığı: input.buttonIsPressed(Button.A).
 * İlk kafası karışık yüzü mutlu yüz, ikincisini çarpı olarak tamamla.
 * Araç kutusunu kullanabilirsin. Başlangıçtaki küçük elması koru; bu sonuç değildir.
 * DENEME: Tuş yokken / A basılıyken / A'ya basıp bıraktıktan sonra / yalnız B
 * basılıyken salla. Her denemede sonuç yüzünün görünmesini bekle.
 * A'ya basıp bırakmak ile basılı tutmak neden farklı?
 *
 * TASK EXTRA 2 — SECRET GREETING
 * STORY: The robot has a secret greeting. Shaking it alone is not enough!
 * GOAL: When the robot is shaken, show a happy face if A is held at that moment;
 * otherwise show a cross. Hold A first, then shake. Pressing and releasing it
 * beforehand is not enough. Pressing A alone does not produce a new result;
 * shaking starts the check.
 * RULE: Replace false with “button A is pressed” from Input.
 * In JavaScript: input.buttonIsPressed(Button.A).
 * Replace the first confused face with happy, and the second with a cross.
 * You may use the toolbox. Keep the small startup diamond; it is not a result.
 * TEST: Shake with no buttons / with A held / after pressing and releasing A /
 * with only B held. Wait for the result face after each test.
 * Why is pressing and releasing A different from holding it?
 */

input.onGesture(Gesture.Shake, function () {
    if (false) {
        basic.showIcon(IconNames.Confused)
    } else {
        basic.showIcon(IconNames.Confused)
    }
})
basic.showIcon(IconNames.SmallDiamond)
