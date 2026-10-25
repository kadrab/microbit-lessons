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
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.showIcon(IconNames.SmallDiamond)

/*
 * EĞİTMEN NOTU: Sallandığında olayı bir kontrol başlatır; IF o anda A'yı okur.
 * Tuş yok / yalnız B / A'ya basıp bırakmış: sallayınca çarpı.
 * A basılı / A ve B basılı: sallayınca mutlu. A basılı ama sallama yok:
 * yeni kontrol yok; önceki simge kalır. A'yı bırakmak sonucu değiştirmez;
 * yeniden sallamak gerekir. Önceki görüntüleme bitince yeni denemeye geçin.
 * TEACHER NOTE: The shake event starts a check; IF reads A at that moment.
 * No buttons / only B / A pressed then released: shaking shows a cross.
 * A held / both A and B held: shaking shows happy. A held with no shake:
 * no new check; the previous icon stays. Releasing A does not change the result;
 * another shake is needed. Let the previous display finish before the next test.
 * Kaynak / Source: https://makecode.microbit.org/reference/input/on-gesture
 * Kaynak / Source: https://makecode.microbit.org/reference/input/button-is-pressed
 */
