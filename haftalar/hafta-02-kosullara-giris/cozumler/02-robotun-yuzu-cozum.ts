basic.forever(function () {
    // ROBOTUN YÜZÜ — ÇÖZÜM
    // IF soruyu sorar. Evetse ilk kol, hayırsa ELSE kolu çalışır.
    // THEN: "o zaman" demektir; ayrıca aranacak bir blok değildir.
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
