/*
 * ŞARTLI ZİL: PİKO'nun zili kimse dokunmasa da çalıyor!
 * Yalnız A basılıyken çalsın. Ses bloğunu doğru yere taşı.
 * Yeni blok ekleme; hazır ses ayarlarını değiştirme.
 * Dene: Hiçbir tuş / A basılı / A bırakıldı / yalnız B basılı.
 */

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    }
    music.playTone(523, 200)
})
