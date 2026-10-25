# 3. Hafta — IF/ELSE bulmacaları

[English](README.md)

2. haftada tanışılan tekli kararları, bağımsız ve iç içe koşullarla birleştirin. Programların hedefleri değişmedi; çocukların görev açıklamaları MakeCode'da açık yorum kartları olarak görünür.

## Beş temel görev ve bir ödev

| Görev | Etkinlik | Odak | Biçim |
|---|---|---|---|
| 1 | Gece ve gündüz robotu | Sensör ölçümünü sabit bir eşikle karşılaştırma | Ders içi; hazır bloklar |
| 2 | PİKO'nun iki ayrı işi | Birbirinden bağımsız iki karar | Ders içi; hazır bloklar |
| 3 | İki aşamalı kapı | Bir kararın içinde başka bir karar | Ders içi; hazır bloklar |
| 4 | PİKO'nun dört ruh hâli | Her dalda bir karar | Ders içi; hazır bloklar |
| 5 | Gece üssü | Işık ve iki düğmeyi birleştirme | Ders içi; hazır bloklar |
| 6 | Vardiyalı uzay kapısı | Tam bir karar ağacı kurma | Ödev; yalnızca görev açıklaması |

1–5. görevlerde gereken bütün bloklar hazırdır. Çocuklar blokları taşıyarak çözer; blok eklemez, silmez, çoğaltmaz ve değerleri değiştirmezler. 6. görevde yalnızca açıklamalar vardır: Blokları çocuklar kendileri seçer. 4. görevden önce ara verin ve gerektiğinde ders içi çalışmaları birden fazla oturuma yayın.

## Dosyalar

- [Eğitmen yönergeleri, anlatım önerileri ve denemeler](INSTRUCTOR.tr.md)
- [Çocuk etkinliklerinin kaynak dosyaları](etkinlikler/)
- [Tam çözümler](cozumler/)
- [Çocuk ZIP paketi](paketler/hafta-03-cocuklar.zip)
- [Çözüm ZIP paketi](paketler/hafta-03-cozumler.zip)

Bir çocuk JavaScript dosyasının tamamını yeni bir MakeCode projesinin JavaScript sekmesine, varsayılan kodun yerine yapıştırın; ardından Bloklar görünümüne geçin. Görev kartının açık görünmesi için baştaki `/* ... */` görev yorumu ile kod arasındaki boş satırı koruyun. Gerekirse kartı taşıyın veya boyutunu değiştirin. Çözümler yetişkinde kalsın.

Her görev kartında aynı yönergeler önce Türkçe, ardından İngilizce bulunur: görev numarası/başlığı ve hikâyesi, `HEDEF:` / `GOAL:`, `KURAL:` / `RULE:` ve `DENEME:` / `TEST:`. Çocuk ve çözüm dosyaları aynı kartı kullanır.

## Doğrulamanın kapsamı

Mevcut [mantık doğrulama betiği](verify_logic.cjs), çözümlerin davranışını taklit girdilerle, hazır blokların envanterini ve yalnızca açıklama içeren ödev dosyasını denetler. Bu hafta klasöründen `node verify_logic.cjs` komutuyla çalıştırın; sonuçları ekrana yazar. Bu yerel kontroller, fiziksel micro:bit davranışını, sesi veya zamanlamayı doğrulamaz. Bu belge güncellemesiyle yeni donanım testi yapıldığı iddia edilmemektedir.
