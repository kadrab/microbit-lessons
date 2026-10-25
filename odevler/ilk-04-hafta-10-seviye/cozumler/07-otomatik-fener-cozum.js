/*
 * GÖREV 7 — DURMADAN PAKET GÖNDEREN FENER
 * HİKÂYE: Uzay feneri paket gönderir, sonra yeni bir paket seçer.
 * HEDEF: Her paket BAŞINDA ışığı bir kez kontrol et.
 * 80'den küçükse üç büyük kalp; 80 ve üstüyse iki küçük kalp.
 * Her kalpten sonra temizle ve 400 ms boş bekle.
 * Paket sonunda bir onay göster, 1000 ms bekle, yeni pakete başla.
 * Bu görev kendiliğinden sürer; A'ya basmak gerekmiyor.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * Her zaman başlatıcısı sabit kalsın.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 * DENEME: İlk açılış paketini hazırlık say. Sonra ışığı 20 ve 160 yap.
 * Büyük kalplerin ortasında ışığı artır: paket tamamlanmalı;
 * sonraki paket iki küçük kalp olmalı. Tam 80'i de dene.
 *
 * TASK 7 — A BEACON THAT KEEPS SENDING PACKETS
 * STORY: The space beacon sends a packet, then chooses a new one.
 * GOAL: Check the light once at the START of each packet.
 * If it is below 80, send three large hearts; if it is 80 or higher, send two small hearts.
 * After each heart, clear the screen and leave it blank for 400 ms.
 * At the packet's end, show one check mark, wait 1000 ms, then start a new packet.
 * This task keeps running on its own; you do not need to press A.
 * RULE: All the pieces are ready. Only move them.
 * Do not add, delete, or duplicate blocks, or change the supplied values.
 * Keep the forever starter in place.
 * Do not put fixed-count repeats inside one another.
 * TEST: Treat the first startup packet as preparation. Then set the light to 20 and 160.
 * Increase the light midway through the large hearts: that packet must finish;
 * the next packet must contain two small hearts. Try exactly 80 too.
 */

basic.forever(function () {
    if (input.lightLevel() < 80) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(400)
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.SmallHeart)
            basic.clearScreen()
            basic.pause(400)
        }
    }
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
})
