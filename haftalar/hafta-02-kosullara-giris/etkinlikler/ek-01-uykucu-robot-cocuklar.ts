/*
 * GÖREV EK 1 — UYKUCU ROBOT
 * HİKÂYE: Robotumuz karanlıkta uyuyor, aydınlıkta mutlu oluyor.
 * HEDEF: Işık 100'den küçükse uykulu, değilse mutlu yüz göster.
 * Tam 100, DEĞİLSE yoludur. Sürekli bloğu ışığı tekrar tekrar kontrol etsin.
 * KURAL: Koşuldaki geçici 0'ı ve iki kafası karışık yüzü tamamla.
 * İlk yüzde uykulu, ikinci yüzde mutlu simgesini seç. Yeni değer ve simgeleri
 * araç kutusundan seçebilirsin; düğmeye basmana gerek yok.
 * DENEME: Işığı önce 50, sonra 150 yap. Yüz değişiyor mu?
 * Tam 100 olursa hangi yol seçilir? Önce tahmin et.
 * Kartı yeni açtığında ölçümün oturması için kısa bir süre bekle.
 *
 * TASK EXTRA 1 — SLEEPY ROBOT
 * STORY: Our robot sleeps in the dark and feels happy in the light.
 * GOAL: Show a sleeping face if the light level is below 100; otherwise show a
 * happy face. Exactly 100 takes the ELSE path. Keep checking the light in forever.
 * RULE: Fill in the temporary 0 in the condition and the two confused faces.
 * Choose sleeping for the first face and happy for the second. You may select
 * new values and icons from the toolbox; you do not need to press a button.
 * TEST: Set the light to 50, then 150. Does the face change?
 * Which path is chosen at exactly 100? Predict before testing.
 * After starting the board, allow a short time for the light reading to settle.
 */

basic.forever(function () {
    if (input.lightLevel() < 0) {
        basic.showIcon(IconNames.Confused)
    } else {
        basic.showIcon(IconNames.Confused)
    }
    basic.pause(200)
})
