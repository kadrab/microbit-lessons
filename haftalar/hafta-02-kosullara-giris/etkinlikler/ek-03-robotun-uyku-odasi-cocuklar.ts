/*
 * GÖREV EK 3 — ROBOTUN UYKU ODASI
 * HİKÂYE: Robot önce odanın ışığına, sonra kendi duruşuna bakıyor.
 * Karanlıkta yatağını arıyor, aydınlıkta kalkmaya hazırlanıyor.
 * HEDEF: Işık 80'den küçükse karanlık; tam 80 ve üstüyse aydınlık kabul et.
 * Karanlık + ekran yukarı: uykulu yüz. Karanlık + ekran yukarı değil: üzgün yüz.
 * Aydınlık + ekran yukarı: mutlu yüz. Aydınlık + ekran yukarı değil: şaşkın yüz.
 * Her turda tek yüz seçilsin; ışık ve duruş değişince yeniden karar verilsin.
 * KURAL: Bir 0, iki false ve dört kafası karışık yüzü tamamla. 0'ı karanlık sınırıyla,
 * iki false'u Girdi'deki “ekran yukarı hareketi mi?” kontrolüyle değiştir.
 * JavaScript karşılığı: input.isGesture(Gesture.ScreenUp).
 * Araç kutusunu kullanabilirsin. Değişken, düğme veya ek donanım ekleme.
 * DENEME: Işık 40 / 150 ve ekran yukarı / yukarı değil durumlarını ayrı ayrı dene.
 * Sonra 79 ve 80'i aynı duruşta karşılaştır; önce sonucu tahmin et.
 * Dış eğer odayı, iç eğer duruşu kontrol eder. Ekran yukarı değil, sadece ekran
 * aşağı demek değildir; dik duruş da dahildir. İlk ışık okuması 0 olabilir;
 * açılışta görüntü oturana kadar bekle.
 *
 * TASK EXTRA 3 — THE ROBOT'S BEDROOM
 * STORY: The robot checks the room's light, then its own position.
 * It looks for its bed in the dark and gets ready to wake up in the light.
 * GOAL: Treat light below 80 as dark, and exactly 80 or above as light.
 * Dark + screen up: sleeping face. Dark + screen not up: sad face.
 * Light + screen up: happy face. Light + screen not up: surprised face.
 * Choose one face each round; decide again when the light or position changes.
 * RULE: Fill in one 0, two false values and four confused faces. Replace 0 with
 * the darkness threshold and both false values with “is screen up gesture”
 * from Input. In JavaScript: input.isGesture(Gesture.ScreenUp).
 * You may use the toolbox. Do not add variables, buttons or extra hardware.
 * TEST: Try light 40 / 150 with screen up / not up as four separate cases.
 * Then compare 79 and 80 with the same position; predict before testing.
 * The outer if checks the room; the inner if checks the position. Screen not up
 * does not only mean screen down; an upright board also counts. The first light
 * reading may be 0; after startup, wait for the display to settle.
 */

basic.forever(function () {
    if (input.lightLevel() < 0) {
        if (false) {
            basic.showIcon(IconNames.Confused)
        } else {
            basic.showIcon(IconNames.Confused)
        }
    } else {
        if (false) {
            basic.showIcon(IconNames.Confused)
        } else {
            basic.showIcon(IconNames.Confused)
        }
    }
    basic.pause(200)
})
