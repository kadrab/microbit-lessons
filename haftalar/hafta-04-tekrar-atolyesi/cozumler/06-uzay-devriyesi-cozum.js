/*
 * GÖREV 6 — UZAY DEVRİYESİNİN İKİ KONTROL NOKTASI
 * HİKÂYE: PİKO önce üç kapıyı, sonra iki yolcuyu kontrol edecek.
 * Bu kez hazır blok yok. Programını araç kutusundan kendin kur!
 *
 * HEDEF: Görevi aşağıdaki sırayla tamamla.
 * BAŞLAT:
 * A'ya kısa basıp bırakınca görev başlasın.
 * Önce bir şaşkın yüz göster ve 1000 ms bekle. Bu hazırlık süren.
 *
 * BİRİNCİ BÖLÜM, ÜÇ KAPI:
 * Üç tur yap. Her turun BAŞINDA B'ye yeniden bak.
 * B basılıysa kalp; değilse çarpı göster.
 * Her turda simgeden sonra ekranı temizle ve 1000 ms boş bekle.
 *
 * ARA İŞARETİ:
 * Üç kapı bitince yalnız bir kez uykulu yüz göster ve 1000 ms bekle.
 *
 * İKİNCİ BÖLÜM, İKİ YOLCU:
 * İki tur yap. Her turun BAŞINDA B'ye yeniden bak.
 * B basılıysa mutlu; değilse üzgün yüz göster.
 * Her turda simgeden sonra ekranı temizle ve 1000 ms boş bekle.
 *
 * BİTİR:
 * İki bölüm de bitince bir kez onay işareti göster ve orada kal.
 *
 * KURAL: İki tekrar bloğu sırayla çalışsın; iç içe olmasın.
 * Her bölümde bir if/else kullan. Puan veya ayrı sayaç oluşturma.
 * Yeni deneme için finali bekle, iki tuşu bırak, sonra A'ya basıp bırak.
 *
 * DENEME: Önce B hep bırakılmışken, sonra hazırlıktan itibaren basılıyken dene.
 * Sonra beş tur için şu B sırasını uygula: bırak → bas → bırak | bas → bırak.
 * Beklenen kontrol simgeleri: çarpı → kalp → çarpı | mutlu → üzgün.
 * B'yi boş ekranlarda değiştir; seçimin sonraki turda okunacak.
 * Önce hangi işlerin tekrar edeceğini ve kaç tur olacağını kâğıda çiz.
 *
 * TASK 6 — THE SPACE PATROL'S TWO CHECKPOINTS
 * STORY: PİKO will check three gates first, then two passengers.
 * This time there are no prepared blocks. Build your program from the toolbox yourself!
 *
 * GOAL: Complete the mission in the order below.
 * START:
 * Start the mission when A is briefly pressed and released.
 * First show a surprised face and wait 1000 ms. This is your preparation time.
 *
 * FIRST PART, THREE GATES:
 * Run three rounds. Check B again at the START of each round.
 * If B is held, show a heart; otherwise show a cross.
 * In each round, clear the screen after the icon and leave it blank for 1000 ms.
 *
 * MIDDLE SIGNAL:
 * After the three gates, show a sleeping face just once and wait 1000 ms.
 *
 * SECOND PART, TWO PASSENGERS:
 * Run two rounds. Check B again at the START of each round.
 * If B is held, show a happy face; otherwise show a sad face.
 * In each round, clear the screen after the icon and leave it blank for 1000 ms.
 *
 * FINISH:
 * After both parts finish, show a tick once and leave it on the screen.
 *
 * RULE: Run the two repeat blocks one after the other; do not put one inside the other.
 * Use one if/else in each part. Do not create a score or a separate counter.
 * For another attempt, wait for the finale, release both buttons, then press and release A.
 *
 * TEST: First try keeping B released, then holding it from the preparation stage onwards.
 * Next, use this B sequence for the five rounds: release → hold → release | hold → release.
 * Expected checkpoint icons: cross → heart → cross | happy → sad.
 * Change B while the screen is blank; your choice will be read in the next round.
 * First draw on paper which jobs will repeat and how many rounds there will be.
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.No)
        }
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Asleep)
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Yes)
})
