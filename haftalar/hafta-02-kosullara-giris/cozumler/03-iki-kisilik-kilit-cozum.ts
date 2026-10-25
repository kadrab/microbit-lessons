basic.forever(function () {
    // İKİ KİŞİLİK KİLİT — ÇÖZÜM
    // Her iki düğme de o anda basılı olmalı. Tek bir düğme yetmez.
    // LED simgesi kapının kararını temsil eder.
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
