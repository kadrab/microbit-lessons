/*
 * GÖREV 10 — PİKO'NUN KOMUTA MERKEZİ
 * HİKÂYE: Bu kez hazır blok yok. İstasyonun programını sen kur!
 * HEDEF: Program kendiliğinden çalışsın ve paketler göndersin.
 * Her paketin BAŞINDA ışığı yalnız bir kez kontrol et.
 * GECE: Işık 80'den küçükse üç kontrol turu yap.
 * Her tur başında B basılıysa kalp, değilse çarpı göster.
 * GÜNDÜZ: Işık 80 ve üstüyse iki kontrol turu yap.
 * Her tur başında B basılıysa mutlu, değilse üzgün yüz göster.
 * İki rotada da her simgeden sonra temizle ve 1000 ms boş bekle.
 * PAKET SONU: Bir onay göster, 1000 ms bekle; yeni pakete başla.
 * Paket sırasında ışık değişse bile o paketin tur sayısı değişmesin.
 * B her turda yeniden sorulsun; seçimin sonraki turda etkili olsun.
 * KURAL: Blokları kendin seç. Ayrı puan veya sayaç oluşturma.
 * İki sabit sayılı tekrar birbirinin içine girmeyecek.
 * DENEME: İlk açılış paketini hazırlık say. Gece B: bırak → bas → bırak;
 * çarpı → kalp → çarpı bekle. Gündüz B: bas → bırak;
 * mutlu → üzgün bekle. Her paketten sonra yalnız bir onay olsun.
 * Gece paketinin ortasında ışığı artır; önce üç tur bitsin,
 * sonraki paket gündüzün iki turunu yapsın. Tam 80'i de dene.
 * Önce kâğıda çiz, sonra kur. Çalıştırmadan önce sonucu tahmin et.
 *
 * TASK 10 — PIKO'S COMMAND CENTRE
 * STORY: This time there are no ready-made blocks. Build the station's program yourself!
 * GOAL: The program must run on its own and send packets.
 * Check the light just once at the START of each packet.
 * NIGHT: If the light is below 80, run three check-in rounds.
 * At the start of each round, show a heart if B is held, or a cross otherwise.
 * DAY: If the light is 80 or higher, run two check-in rounds.
 * At the start of each round, show a happy face if B is held, or a sad face otherwise.
 * On both routes, clear the screen after each icon and leave it blank for 1000 ms.
 * PACKET END: Show one check mark, wait 1000 ms, then start a new packet.
 * Even if the light changes during a packet, that packet's number of rounds must stay the same.
 * Check B again every round; your new choice must take effect in the next round.
 * RULE: Choose the blocks yourself. Do not create a separate score or counter.
 * The two fixed-count repeats must not be inside one another.
 * TEST: Treat the first startup packet as preparation. At night, use B: released → held → released;
 * expect cross → heart → cross. By day, use B: held → released;
 * expect happy → sad. Show only one check mark after each packet.
 * Increase the light midway through a night packet; finish all three rounds first,
 * then run the two daytime rounds in the next packet. Try exactly 80 too.
 * Draw it on paper first, then build it. Predict the result before running it.
 */

