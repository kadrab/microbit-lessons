// UYKUCU ROBOT - TAM COZUM
// MakeCode > JavaScript: dosyanin tamamini yapistir, sonra Bloklar'a gec.
// IF / EGER: Isik seviyesi 100'den kucuk mu?
// THEN / O ZAMAN: Evetse uykulu yuz goster.
// ELSE / DEGILSE: Hayirsa mutlu yuz goster.
// THEN ayri bir blok degildir; eger blogunun ilk ic bolumudur.
// SUREKLI yeniden kontrol eder. IF her kontrolde yalnizca bir yol secer.

basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(200)
})

// KONTROL: 50 ve 99 -> uykulu; 100 ve 150 -> mutlu.
// 100 bir ogretim esigidir, her odanin gercek gece-gunduz siniri degildir.
// Isik olcegi 0..255'tir. Kart ilk okumada 0 verebilir;
// dongu sonraki okumalarla gercek isiga gore goruntuyu gunceller.
// Kaynak: https://makecode.microbit.org/reference/input/light-level
