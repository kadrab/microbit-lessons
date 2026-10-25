/*
 * GÖREV 6 — UZAY DEVRİYESİNİN İKİ KONTROL NOKTASI
 *
 * PİKO önce üç kapıyı, sonra iki yolcuyu kontrol edecek.
 * Bu kez hazır blok yok. Programını araç kutusundan kendin kur!
 *
 * HEDEF — BAŞLAT:
 * A'ya kısa basıp bırakınca görev başlasın.
 * Önce bir şaşkın yüz göster ve 1000 ms bekle. Bu hazırlık süren.
 *
 * HEDEF — BİRİNCİ BÖLÜM, ÜÇ KAPI:
 * Üç tur yap. Her turun BAŞINDA B'ye yeniden bak.
 * B basılıysa kalp; değilse çarpı göster.
 * Her turda simgeden sonra ekranı temizle ve 1000 ms boş bekle.
 *
 * HEDEF — ARA İŞARETİ:
 * Üç kapı bitince yalnız bir kez uykulu yüz göster ve 1000 ms bekle.
 *
 * HEDEF — İKİNCİ BÖLÜM, İKİ YOLCU:
 * İki tur yap. Her turun BAŞINDA B'ye yeniden bak.
 * B basılıysa mutlu; değilse üzgün yüz göster.
 * Her turda simgeden sonra ekranı temizle ve 1000 ms boş bekle.
 *
 * HEDEF — BİTİR:
 * İki bölüm de bitince bir kez onay işareti göster ve orada kal.
 *
 * KURAL: İki tekrar bloğu sırayla çalışsın; iç içe olmasın.
 * Her bölümde bir if/else kullan. Puan veya ayrı sayaç oluşturma.
 * Yeni deneme için finali bekle, iki tuşu bırak, sonra A'ya basıp bırak.
 *
 * DENE: Önce B hep bırakılmışken, sonra hazırlıktan itibaren basılıyken dene.
 * Sonra beş tur için şu B sırasını uygula: bırak → bas → bırak | bas → bırak.
 * Beklenen kontrol simgeleri: çarpı → kalp → çarpı | mutlu → üzgün.
 * B'yi boş ekranlarda değiştir; seçimin sonraki turda okunacak.
 * Önce hangi işlerin tekrar edeceğini ve kaç tur olacağını kâğıda çiz.
 */
