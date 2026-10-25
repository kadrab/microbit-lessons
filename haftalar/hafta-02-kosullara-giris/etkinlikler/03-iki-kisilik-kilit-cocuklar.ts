/*
 * İKİ KİŞİLİK KİLİT: Kapı için iki arkadaşın da onayı gerekli!
 * A VE B birlikte basılıysa onay, diğer durumlarda çarpı göster.
 * Yeni blok ekleme. İki hazır simgeyi doğru yerlere taşı.
 * Dene: Hiçbir tuş / yalnız A / yalnız B / ikisi birlikte basılı.
 */

basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.No)
})
