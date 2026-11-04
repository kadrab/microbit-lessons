# 6. hafta — Şans makinesi: rastgele sayılar

[English](README.md) · [Eğitmen rehberi](INSTRUCTOR.tr.md)

**Hedef kitle:** micro:bit ve MakeCode kullanan **8–12 yaş aralığındaki çocuklar**. Son bildirim, çocukların 5. haftayı tamamladığını ve eğlendiğini söylüyor. Bu, sıradaki adımı destekler; ancak tek başına değişkenleri bağımsız olarak kavradıklarını göstermez. Kısa bir tahmin ve açıklama kontrolüyle başlayın.

**Öğrenme hedefi:** Bir rastgele tam sayıyı bir kez üretmek, `sayi` adlı tek bir sayısal değişkende saklamak ve gösterirken, hatırlarken veya kontrol ederken aynı değeri kullanmak. Tek yeni kavram rastgele tam sayılardır. Bildikleri düğme olayları, değişkenler, simgeler, sabit sayılı `for` döngüleri ve IF/ELSE yeniden kullanılır. Çocuklar Bloklar görünümünde çalışır; JavaScript dosyaları görev kartlarını ve hazır parçaları taşır.

## Beş ana görev ve bir ev ödevi

Tamamlanmış her görev, `sayi` değerini **0** yapıp göstererek başlar. Sıfır, bir işlemden önceki başlangıç durumudur; zar sonucu değildir. 02–06 numaralı görevler, **1 ve 6 dâhil olmak üzere 1'den 6'ya kadar** sonuç üretir. [MakeCode rastgele tam sayı başvurusu](https://makecode.microbit.org/reference/math/randint)

| Görev | Rolü | Hikâye ve gözlemlenebilir hedef | Dosyalar |
|---|---|---|---|
| 01 — Hafızayı hatırla | Sınıf çalışması | A, saklanan sayıyı göstermeden bir artırır. B, saklanan sayıyı değiştirmeden gösterir. | [Çocuk](etkinlikler/01-hafizayi-hatirla-cocuklar.js) · [Çözüm](cozumler/01-hafizayi-hatirla-cozum.js) |
| 02 — PİKO'nun zarı | Sınıf çalışması | A, 1–6 arasında bir sonuç üretip saklar; ardından bu yeni sonucu gösterir. | [Çocuk](etkinlikler/02-pikonun-zari-cocuklar.js) · [Çözüm](cozumler/02-pikonun-zari-cozum.js) |
| 03 — Sonucu unutma | Sınıf çalışması | A, yeni bir sonuç üretip gösterir; ardından kalp gösterir. B, saklanan sonucu hatırlatır ve sayıyı ekranda bırakır. | [Çocuk](etkinlikler/03-sonucu-unutma-cocuklar.js) · [Çözüm](cozumler/03-sonucu-unutma-cozum.js) |
| 04 — Şanslı sayı | Sınıf çalışması | A, bir sonuç üretip gösterir. Aynı saklanan değeri kontrol ederek 1–3 için üzgün, 4–6 için mutlu yüz gösterir. | [Çocuk](etkinlikler/04-sansli-sayi-cocuklar.js) · [Çözüm](cozumler/04-sansli-sayi-cozum.js) |
| 05 — Üç atış | Sınıf çalışması | A, [üret → sakla → göster → ekranı temizle → 400 ms bekle] sırasını üç kez tekrarlar. Döngüden sonra son saklanan sonucu bir kez daha gösterir. | [Çocuk](etkinlikler/05-uc-atis-cocuklar.js) · [Çözüm](cozumler/05-uc-atis-cozum.js) |
| 06 — Hazineci PİKO | Ev ödevi | A üç tur yapar: sonuç üretip saklar, gösterir, 4'ün altında çarpı veya diğer durumda onay gösterir, ardından 400 ms bekler. Döngüden sonra son sonucu gösterir. B, onu hatırlatır. | [Çocuk](etkinlikler/06-hazineci-piko-cocuklar.js) · [Çözüm](cozumler/06-hazineci-piko-cozum.js) |

**01–05** numaralı görevlerde gereken bütün bloklar bilerek yanlış yerlerde verilmiştir. **Yalnızca taşı:** blok eklemeyin, silmeyin veya çoğaltmayın; adları, değerleri, koşulları veya tekrar sayılarını değiştirmeyin. Hazır başlangıç atamasını ve ilk gösterimi yerinde tutun; düğme olayı kapsayıcılarını koruyun. **06** numaralı görev yalnızca iki dilli görev kartını içerir; çocuklar öğrendikleri blokları kendileri seçer.

Tek görünür durum değişkeni olarak `sayi` kullanın. 01 numaralı görevde önceki haftanın sayma fikrini hatırlatır; sonraki görevlerde en son rastgele sonucu saklar. Bildikleri tekrar bloğunun JavaScript'teki `index` değeri, gövdede kullanılmayan teknik döngü sayacıdır; öğretilecek ikinci bir durum değişkeni değildir. Özel fonksiyon, `while` döngüsü, sensör, ek donanım, puan veya ek durum yoktur.

## Burada rastgelelik ne demek?

Çocuk sıradaki zar sonucunu kesin olarak tahmin edemez. Yeni bir çekiliş **öncekiyle aynı sonucu verebilir**. Üç çekilişin üç farklı sayı vermesi gerekmez; altı çekilişte bütün zar yüzlerinin gelmesi de gerekmez. Bir sonucun tekrarlanması programın yanlış olduğunun kanıtı değildir.

Üretilen sonucu atamak, eski değerle aynı olsa bile `sayi` değişkenine yazar; okumak, kalp göstermek veya ekranı temizlemek ona yazmaz. 03 ve 06 numaralı görevlerde B yalnızca saklanan sayıyı okur. İlk A'dan önce B, **0** gösterir. B'den sonra aynı sayıyı görmek yararlıdır ama B'nin yeniden çekiliş yapmadığını kanıtlamaz: yanlışlıkla yapılan ek çekiliş tesadüfen aynı sonucu verebilir. Blokları da inceleyin.

Eğitmen rehberindeki rastgele çıktı dizileri, vaat edilen simülatör sıraları olarak değil, **örnek veya koşullu durum** olarak etiketlenmiştir. Sabit blokları değiştirmeden, sınır değerleri olan 3 ve 4'ü kâğıt üzerinde izleyin. 05 numaralı görevde boş ekran aralığı üç çekiliş gösterimini ayırır ve aynı sayıların tekrarını gözlemlenebilir kılar. Sondaki dördüncü sayı gösterimi üçüncü sonucu hatırlatır; dördüncü çekiliş değildir.

## Ders akışı ve tamamlanma

Isınma, beş ana görev, tartışma ve kısa mola için yaklaşık **75–90 dakika** ayırın. Bu bir planlama tahminidir; beşini tek oturuşta bitirmek için açıklamayı aceleye getirmeyin. 06 numaralı görev, 05 açıklanabildikten sonra verilecek yaklaşık **15–20 dakikalık** ayrı ev ödevidir.

**Tahmin et → taşı → dene → açıkla** sırasını kullanın; görevler arasında yapan ve kontrol eden rollerini değiştirin. **5–8 dakikalık** hafıza ısınmasıyla başlayın. Gösterilmese bile hangi değerin saklandığını, onu hangi bloğun değiştirdiğini ve simge göstermenin hatırlanan sayıyı değiştirip değiştirmediğini sorun. Bu ayrım net değilse rastgele çekilişi tanıtmadan önce 01 numaralı göreve daha fazla zaman ayırın.

**Her görev için düğme kuralı:** Bir seferde tek düğmeye kısa basıp bırakın. A veya B'ye yeniden basmadan önce bütün gösterimin ve beklemelerin bitmesini bekleyin. Bu bir öğretim kuralıdır; programlanmış kilit değildir. Olayların üst üste çalışması bu haftanın kapsamı dışındadır. B, bitmemiş bir animasyon sırasında değil, tamamlanmış denemeler arasında sonucu hatırlatır.

`sayi`, aynı program çalışması sırasında olaylar arasında değerini korur. Simülatörü yeniden başlatmak veya kartı sıfırlamak başlangıcı tekrar çalıştırır ve değeri 0'a döndürür. Bu kalıcı depolama değildir. 400 ms beklemeler, gösterim çağrılarına eklenir; geçen gerçek zamanı tam milisaniyesiyle değerlendirmeyin.

## Dosyalar ve MakeCode'da açma

- [Tam eğitmen rehberi, sorular, ipuçları ve denemeler](INSTRUCTOR.tr.md)
- [Çocuk kaynak dosyaları](etkinlikler/) ve [tam çözümler](cozumler/)
- [Çocuk ZIP'i — altı tamamlanacak kaynak](paketler/hafta-06-cocuklar.zip)
- [Çözüm ZIP'i — altı tamamlanmış kaynak](paketler/hafta-06-cozumler.zip)

Her görev için ayrı proje açın. Bir çocuk dosyasının tamamını mevcut kodun yerine MakeCode'un JavaScript sekmesine yapıştırın; ardından Bloklar'a geçin. Çözümü ayrı bir yetişkin projesinde tutun. Bu kaynaklar doğrudan micro:bit sürücüsüne kopyalanacak dosyalar değildir.

Her çocuk/çözüm çifti aynı görev kartıyla başlar: önce Türkçe, ardından eksiksiz İngilizce karşılığı. Görevin açık çalışma alanı yorumu olarak görünebilmesi için `*/` sonrasındaki, çalıştırılabilir koddan önceki boş satırı koruyun. Gerektiğinde kartı taşıyın veya büyütün; kaynak metni boyutu veya konumu sabitlemez. 06 numaralı görevde çalıştırılabilir başlangıç kodu yoktur; MakeCode dönüştürürken boş bir “başlangıçta” kapsayıcısı ekleyebilir.

## Doğrulama kapsamı

[Haftanın doğrulayıcısı](verify_logic.cjs), **taklit MakeCode API'leriyle yapılan 3.182 yerel kontrolü** geçti. [Depo görev kartı denetleyicisi](../../verify_task_comments.cjs), **40 eşleşen çocuk/çözüm çifti ve 80 kaynak kartı** için geçti. İkincisi yapısal kontroldür; çeviri kalitesi veya cihaz testi değildir.

**6. haftanın 12 kaynağının tamamı**, her birinde bir açık çalışma alanı görev yorumu bulunarak standart MakeCode bloklarına dönüştü. İlk beş çocuk/çözüm çiftinin görünür blok envanterleri eşleşti. Ödevin çocuk kaynağı yalnızca yorum olarak kaldı; düzenleyici boş bir “başlangıçta” kapsayıcısı ekledi.

Gerçek tarayıcı simülatöründe **03 numaralı çözümün** tek nokta kontrolü, başlangıçta **0**, A'dan önce B'de **0**, A'da **3 → kalp**, ardından B'de **3** ve ikinci B'de **3** gösterdi. Bu, gözlemlenen tek bir sıradır; altı görevin tamamını kapsayan işlevsel simülatör testi veya vaat edilen rastgele sonuç değildir.

İki ZIP de CRC bütünlük kontrollerini geçti; her biri kendi `etkinlikler/` veya `cozumler/` öneki altında amaçlanan tam altı JS dosyasını içeriyor ve bütün güncel kaynaklarla bayt düzeyinde eşleşiyor. Çocuk ZIP'inde çözüm yoktur. **Fiziksel cihaz, gerçek zamanlı süre veya istatistiksel rastgelelik testi yapılmadı.**

6. hafta, dört haftalık tekrar paketi hazırlama noktası değildir. Mevcut [1–4. haftalar tekrar paketi](../../odevler/ilk-04-hafta-10-seviye/README.tr.md) ayrı kalır. Sıradaki tekrar paketi, 8. hafta hazırlanırken 5–8. haftaları kapsar.
