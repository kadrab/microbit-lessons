# 5. hafta — Robotun hafızası

[English](README.md) · [Eğitmen rehberi](INSTRUCTOR.tr.md)

**Hedef kitle:** micro:bit ve MakeCode kullanan **8–12 yaş aralığındaki çocuklar**. Öğrenciler sabit sayıda tekrarı ve IF'in döngünün içinde veya dışında olmasının farkını açıklayabiliyor. Bu hafta **tek bir değişkeni: robotun hatırladığı ve değiştirebildiği bir sayıyı** tanıtıyoruz. Değişkenlerde daha önce yaşanan zorluğu, tek bir görünür durum değişkeni olan `sayac` ve küçük, gözlemlenebilir adımlarla ele alıyoruz.

Önce saklanan değeri okuyacağız, sonra bir değeri ayarlamakla artırmayı ayıracağız; son olarak bu hafızayı bildikleri tekrar ve koşullarla birleştireceğiz. Çocuklar Bloklar görünümünde çalışır; JavaScript dosyaları görev kartlarını ve hazır parçaları yükler.

## Beş ana görev ve bir ev ödevi

| Görev | Rolü | Hikâye ve gözlemlenebilir hedef | Dosyalar |
|---|---|---|---|
| 01 — Hatırlanan sayı | Sınıf çalışması | 3 ile başla. A önce bir kalp, sonra hatırlanan 3'ü göstersin; simge göstermek sayıyı değiştirmez. | [Çocuk](etkinlikler/01-hatirlanan-sayi-cocuklar.js) · [Çözüm](cozumler/01-hatirlanan-sayi-cozum.js) |
| 02 — Her basışı hatırla | Sınıf çalışması | 0 ile başla. Her A basışında bir artır ve yeni değeri göster: 1, 2, 3. Her basışta 1 gösterilmesine neden olan sıfırlamayı düzelt. | [Çocuk](etkinlikler/02-her-basisi-hatirla-cocuklar.js) · [Çözüm](cozumler/02-her-basisi-hatirla-cozum.js) |
| 03 — Yeni tur | Sınıf çalışması | A bir artırıp göstersin; B değeri 0 yapıp 0 göstersin. Sıfırlamadan sonra A yeniden 1'den saysın. | [Çocuk](etkinlikler/03-yeni-tur-cocuklar.js) · [Çözüm](cozumler/03-yeni-tur-cozum.js) |
| 04 — Üçlü paket | Sınıf çalışması | A, [bir artır → değeri göster → 400 ms bekle] sırasını üç kez tekrarlasın. Ardışık A basışları 3'e, sonra 6'ya ulaşsın. B sıfırlasın. | [Çocuk](etkinlikler/04-uclu-paket-cocuklar.js) · [Çözüm](cozumler/04-uclu-paket-cozum.js) |
| 05 — Beşinci sinyal | Sınıf çalışması | A bir artırsın. 5'in altında uykulu yüz; 5 ve üzerindeyse her birinin ardından ekranın 200 ms boş kaldığı üç yanıp sönen kalp göstersin. Sonunda değeri göstersin. B sıfırlasın. | [Çocuk](etkinlikler/05-besinci-sinyal-cocuklar.js) · [Çözüm](cozumler/05-besinci-sinyal-cozum.js) |
| 06 — Sayım istasyonu | Ev ödevi | A üç tur yapsın: bir artır, göster, 5'in altındaysa çarpı veya 5 ve üzerindeyse onay göster, ardından 400 ms bekle. Sonunda değeri göster. B sıfırlasın. | [Çocuk](etkinlikler/06-sayim-istasyonu-cocuklar.js) · [Çözüm](cozumler/06-sayim-istasyonu-cozum.js) |

01–05 numaralı görevlerde gereken bütün bloklar, bilerek yanlış yerlerde verilmiştir. **Yalnızca taşı:** ekleme, silme, çoğaltma veya değer değiştirme yok. Hazır başlangıç ve düğme olayı kapsayıcılarını koruyun; 01 numaralı görevin başlangıçtaki 3 ataması sabittir. 06 numaralı görev yalnızca iki dilli görev kartını içerir; çocuklar gereken blokları kendileri seçer.

Tek yeni öğretim konusu `sayac`tır: bir sayıyı ayarla, oku, artır ve sıfırla. Sabit sayılı döngülerde bildikleri “N kez tekrarla” bloğu kullanılır. JavaScript'teki `index`, tekrarın teknik sayacıdır; öğretilecek ikinci bir durum değişkeni değildir. Yeni sensör, ek donanım, özel fonksiyon, rastgele değer veya `while` döngüsü yoktur.

## Ders akışı ve tamamlanma

Giriş, beş ana görev, tartışma ve kısa mola için yaklaşık **75–90 dakika** ayırın. Bu bir tahmindir; beşini tek oturuşta bitirme zorunluluğu değildir. 06 numaralı görev, çocuk 05'i açıklayabildikten sonra verilecek yaklaşık **15–20 dakikalık** ayrı ev ödevidir. Görevler arasında yapan ve kontrol eden rollerini değiştirin.

**Tahmin et → taşı → dene → açıkla** sırasını kullanın. Fiziksel taşlarla başlayın: bir tabağa tam üç taş koymak, içindeki taşlara bir tane daha eklemekten farklıdır. Doğru ekran tek başına yeterli değildir; robotun hangi değeri hatırladığını ve hangi bloğun onu değiştirdiğini sorun.

**Her görev için düğme kuralı:** Bir seferde tek düğmeye kısa basıp bırakın. A veya B'ye yeniden basmadan önce bütün gösterimin bitmesini bekleyin. B, tamamlanan denemeler arasında sıfırlar; animasyon sırasında kullanılan bir acil durdurma değildir. Düğme olaylarının üst üste çalışması bu haftanın kapsamı dışındadır.

Program çalışırken `sayac`, düğme olayları arasında değerini korur. Simülatörü yeniden başlatmak veya kartı sıfırlamak başlangıç kodunu yeniden çalıştırır; bu kalıcı depolama değildir. Sayı 5 ile sınırlanmaz: 05 numaralı görev 6'da da kutlar; 06 numaralı görev 7, 8 ve 9'a devam eder. Çok basamaklı sayılar kayarak gösterilir; önce rehberdeki küçük deneme değerlerini kullanın.

## Dosyalar ve MakeCode'da açma

- [Tam eğitmen rehberi, sorular ve beklenen denemeler](INSTRUCTOR.tr.md)
- [Çocuk kaynak dosyaları](etkinlikler/) ve [tam çözümler](cozumler/)
- [Çocuk ZIP'i — altı tamamlanacak kaynak](paketler/hafta-05-cocuklar.zip)
- [Çözüm ZIP'i — altı tamamlanmış kaynak](paketler/hafta-05-cozumler.zip)

Her görev için ayrı proje açın. Bir çocuk dosyasının tamamını mevcut kodun yerine MakeCode'un JavaScript sekmesine yapıştırın, ardından Bloklar'a geçin. Çözümü ayrı bir yetişkin projesinde tutun. Bu kaynak dosyalar doğrudan micro:bit sürücüsüne kopyalanacak dosyalar değildir.

Her kaynak, eşleşen çözümüyle aynı görev kartıyla başlar: önce Türkçe, ardından eksiksiz İngilizce çevirisi. Görevin açık çalışma alanı yorumu olarak görünebilmesi için kapanıştaki `*/` ile çalıştırılabilir kod arasındaki boş satırı koruyun. Gerektiğinde kartı taşıyın veya büyütün; kaynak metni kartın boyutunu ve yerini sabitleyemez. Ödev dosyasında çalıştırılabilir başlangıç kodu yoktur; MakeCode dönüştürürken boş bir “başlangıçta” kapsayıcısı ekleyebilir.

## Doğrulama kapsamı

[Haftanın doğrulayıcısı](verify_logic.cjs), **taklit MakeCode API'leriyle yapılan 63 yerel kontrolü** geçti. [Depo görev kartı denetleyicisi](../../verify_task_comments.cjs), **34 eşleşen çocuk/çözüm çifti ve 68 kaynak kartı** için geçti. **5. haftanın 12 kaynağının tamamı**, her birinde bir açık çalışma alanı yorumu ve hiç bağlı veya kapalı görev yorumu olmadan normal MakeCode bloklarına dönüştü; ilk beş çocuk/çözüm çiftinin görünür parça envanterleri eşleşti. Yalnızca yorum içeren ödev, MakeCode'un kendisinin eklediği boş “başlangıçta” kapsayıcısıyla dönüştü.

Tarayıcı simülatöründe 03 numaralı görevin çözümü, başlangıçta **0**, ardından A, A, B, A için **1, 2, 0, 1** gösterdi. Bu, daha geniş yerel taklit testlerden ayrı, gözlemlenen tek bir simülatör sırasıdır. **Fiziksel cihaz testi veya gerçek zamanlı süre testi yapılmadı.**

İki ZIP de bütünlük kontrollerini geçti; her biri kendi çocuk veya çözüm klasöründe tam altı dosya içeriyor ve güncel 12 kaynak dosyayla bayt düzeyinde eşleşiyor. Çocuk ZIP'inde çözüm yoktur.

5. hafta, dört haftalık tekrar paketi hazırlama noktası değildir. Mevcut [1–4. haftalar tekrar paketi](../../odevler/ilk-04-hafta-10-seviye/README.tr.md) bu haftanın ödevinden ayrı kalır.
