# 4. hafta — Tekrar atölyesi

[English](README.md) · [Eğitmen yönergeleri](INSTRUCTOR.tr.md)

Sabit sayıda tekrar eden `for` döngülerini önce tek başına tanıtın, ardından bildikleri `if/else` bloklarıyla birleştirin. Çocuklar MakeCode'un “N kere tekrarla” bloğunu kullanır; ayrı bir sayaç değişkeni oluşturmazlar.

## Beş temel görev ve bir ödev

| Görev | Etkinlik | Odak | Biçim |
|---|---|---|---|
| 1 | Üç kalp, bir selam | Tekrarlanan iş ve bir kez yapılan kapanış | Ders içi; hazır bloklar |
| 2 | PİKO'nun dans provası | Açılış, tekrarlanan sıra ve final | Ders içi; hazır bloklar |
| 3 | İki parçalı uzay mesajı | Art arda iki döngü | Ders içi; hazır bloklar |
| 4 | Üç kez soran robot | Her turun başında B'yi kontrol etme | Ders içi; hazır bloklar |
| 5 | Rotayı bir kez seç | B'yi bir kez kontrol edip seçilen döngüyü tamamlama | Ders içi; hazır bloklar |
| 6 | Uzay devriyesi kontrol noktaları | İki döngüyü ve kararları bağımsız birleştirme | Ödev; yalnızca yönergeler |

1–5. görevlerde gereken bütün bloklar, yerleri bilerek yanlış olacak şekilde hazırdır. Çocuklar blok eklemeden, silmeden, çoğaltmadan veya değerleri değiştirmeden bunları taşır. 6. görevde yalnızca yönergeler vardır. 4 ve 5. görevler, B'yi her turda kontrol etmek ile rotayı bir kez seçmek arasındaki farkı gözle görülür hâle getirir.

## İlk dört haftanın tekrar ödevleri

Ayrı [10 görevlik tekrar paketi](../../odevler/ilk-04-hafta-10-seviye/README.tr.md), ilk dört haftanın konularını kolaydan zora tekrar ettirir. Bu haftanın 6. görevindeki ödeve ek olarak hazırlanmıştır; 5. hafta sayılmaz. 1–9. görevlerde gereken parçalar hazırdır; 10. görev bağımsız bir çalışmadır.

## Dosyalar

- [Eğitmen yönergeleri ve anlatım soruları](INSTRUCTOR.tr.md)
- [Çocuk etkinliklerinin kaynakları](etkinlikler/)
- [Tam çözümler](cozumler/)
- [Çocuk ZIP paketi](paketler/hafta-04-cocuklar.zip)
- [Çözüm ZIP paketi](paketler/hafta-04-cozumler.zip)

Yeni bir MakeCode projesinin JavaScript sekmesindeki varsayılan kodu silip bir çocuk JavaScript dosyasının içeriğinin tamamını yapıştırın; ardından Bloklar görünümüne geçin. Görev kartının açık görünmesi için baştaki görev yorumundan sonraki boş satırı koruyun. Kaynak dosya kartın boyutunu veya konumunu saklamaz; gerekirse kartı taşıyın veya boyutunu değiştirin.

## Doğrulama kapsamı

Korunan [mantık doğrulama betiği](verify_logic.cjs), sabit tekrar sayılarını, çıktı sırasını, değişen B girdilerini, hazır blokların listesini ve yalnızca yönerge içeren ödev kaynağını kontrol eder. Bu haftanın klasöründe `node verify_logic.cjs` komutuyla çalıştırın; sonuçları ekrana yazdırır. Taklit API testleri ve MakeCode blok dönüşümü, fiziksel cihaz veya zamanlama testlerinden ayrıdır. Bu belge güncellemesi yeni bir donanım testi yapıldığını iddia etmez.
