# 5. hafta — Robotun hafızasını anlatmak

[English](INSTRUCTOR.md) · [Ders özeti ve dosyalar](README.tr.md)

micro:bit ve MakeCode kullanan **8–12 yaş aralığındaki çocuklar** içindir. Son ilerleme bilgisine göre çocuklar, sabit sayıda tekrarı ve IF'in döngü içinde veya dışında olmasının farkını açıklayabiliyor. Bu, değişkenlerdeki önceki zorluğun tamamen ortadan kalktığını varsaymadan, **saklanan tek bir sayıya** geçmek için dayanak sağlıyor.

**01–05 numaralı görevler sınıf çalışması, 06 numaralı görev ev ödevidir.** Bütün görevlerde `sayac` adlı tek bir görünür durum değişkeni kullanılır. Ek donanım gerekmez. Bildikleri düğme olayları, simgeler, beklemeler, sabit sayılı döngüler ve IF/ELSE yeniden kullanılır; tek yeni konu bir değeri saklamak ve değiştirmektir.

## Ders planı ve öğretim kararları

Giriş, beş ana görev, tartışma ve kısa mola için yaklaşık **75–90 dakika** ayırın. Bu bir planlama tahminidir. 03 numaralı görevden sonra açıklama hâlâ belirsizse döngülere acele etmek yerine taşlarla yeniden çalışın. 06 numaralı görev, 05 açıklanabildikten sonra verilecek yaklaşık **15–20 dakikalık** ayrı ev ödevidir.

Giriş için yaklaşık 8–10 dakika, 01 için 6–8, 02 için 8–10, 03 için 10–12, kısa mola, 04 için 10–12, 05 için 12–15 ve kapanış konuşması için 5–8 dakika kullanın. Aralıklar farklı çalışma hızlarına yer bırakır; beşini bir oturuşta bitirmek başarı koşulu değildir.

Bir çocuk kurarken diğeri tahmin etsin ve kontrol etsin. Sonraki görevde rolleri değiştirin. Kontrol edenden kodu çalıştırmadan **önce** tahmin isteyin. Denemeden sonra iki çocuk da değeri hangi bloğun değiştirdiğini ve hafızada hangi sayının kaldığını açıklasın.

Çalışma sırası **tahmin et → taşı → dene → açıkla** olsun. Önce soru şeklinde ipucu, sonra fiziksel gösterim, ancak gerekirse küçük bir blok konumu ipucu verin. Tam çözümleri çocuk projesinden ayrı tutun.

## Değişkeni taşlarla anlat

Üzerinde `sayac` yazan bir tabağa üç taş koyun. “Robotun bir sayıyı hatırladığı tek bir yeri var. Ona `sayac` adını verdik. Şu anda üçü hatırlıyor” deyin. Bir çocuktan ayrı bir kâğıda kalp çizmesini isteyin: “Kalp çizmek tabaktaki taş sayısını değiştirdi mi?”

Sonra ayrımı gösterin:

- **3 yap:** Tabaktakileri, tam üç taş kalacak şekilde değiştir.
- **1 artır:** İçindekileri koru ve bir taş ekle.
- **Değeri göster:** Sayıyı değiştirmeden oku.
- **0 yap:** Bütün taşları kaldır; sonraki artış sıfırdan başlar.

“Ekran, sayıya baktığımız bir pencere; onu hatırlayan yer değil” deyin. Kalp göstermek, ekranı temizlemek veya başka bir simge göstermek, tek başına `sayac` değerini değiştirmez. Aynı anda başka değişken veya puanla canın birlikte kullanıldığı bir oyun eklemeyin.

Değişken, **aynı çalışma sırasında** düğme olayları arasında değerini korur. Simülatörü yeniden başlatmak veya kartı sıfırlamak başlangıcı yeniden çalıştırır: 01 numaralı görev 3'e, 02–06 numaralı görevler 0'a döner. Bu derste kalıcı depolama öğretilmez.

Çocuklar Bloklar görünümünde çalışır. JavaScript'teki `for`, yine bildikleri **N kez tekrarla** bloğuna dönüşür. Teknik `index` sayacı öğretilecek ikinci bir durum değişkeni değildir; çocuklar onu döngü içinde kullanmaz veya saklanan toplam yerine koymaz.

## Dosyaları açma, görev kartları ve ortak kurallar

1. Her görev için ayrı MakeCode projesi açın.
2. JavaScript sekmesindeki kodu [etkinlikler/](etkinlikler/) klasöründeki ilgili çocuk dosyasının tamamıyla değiştirin.
3. Bloklar'a geçin. JavaScript bir teslim biçimidir; kod yazma alıştırması değildir.
4. Ayrı görev yorum kartını birlikte okuyun. Blokları örtüyorsa taşıyın veya boyutunu değiştirin.
5. Eşleşen [çözümü](cozumler/) ayrı bir yetişkin projesinde tutun.

Her çocuk dosyasında ve eşleşen çözümde aynı başlangıç `/* ... */` kartı bulunur; satırlar yıldızlıdır. Hikâye, hedef, kural ve deneme dâhil görevin eksiksiz Türkçesi önce, İngilizce karşılığı sonra gelir. Açıklamanın açık çalışma alanı yorumu olarak görünebilmesi için `*/` sonrasındaki, çalıştırılabilir koddan önceki boş satırı koruyun. Kaynak metni yorumun boyutunu ve konumunu sabitlemez.

01–05 numaralı görevlerde şunu söyleyin: “Gereken bütün parçalar burada. Onları taşıyarak hedefe ulaşın. Blok eklemeyin, silmeyin, kopyalamayın ve değerlerini değiştirmeyin.” Araç kutusu teknik olarak kilitli değildir; bu görev kuralıdır.

Hazır başlangıç ve düğme olayı kapsayıcılarını koruyun. 01 numaralı görevde, başlangıçtaki `sayac = 3` ataması da yerinde kalır. Taşınmasına izin verilen diğer parçalar bilerek yanlış konmuştur. Bir blok, altına bağlı blokları da sürükleyebilir; gereken en alttaki parçayı önce ayırın.

06 numaralı görevde **yalnızca görev kartı** bulunur; hazır değişken, olay, döngü veya IF verilmez. Çocuklar yalnızca öğrendikleri kavramlarla ve tek durum değişkeniyle blokları kendileri seçer. MakeCode, yalnızca yorum içeren dosyayı dönüştürürken boş bir “başlangıçta” kapsayıcısı ekleyebilir; bu verilmiş bir cevap değildir.

## Düğme kullanımı ve gözlem

Basılı tutma koşulları yerine **kısa basıp bırakma** olaylarını kullanın. Bir basış bir denemeyi başlatır. Bir seferde tek düğmeye basın ve sonraki A veya B basışından önce **bütün gösterimlerin ve beklemelerin** bitmesini bekleyin. Uzun görevlerde B, animasyonu kesmek için değil, **tamamlanmış denemeler arasında** sıfırlamak içindir.

Bu kural, çocuklar hafızayı öğrenirken düğme olaylarının üst üste çalışmasını önler. Programlanmış bir kilit değil, öğretim sınırıdır. Bu hafta bunu yönetmek için başka değişken veya “meşgul mü?” durumu eklemeyin. Kaynaklar, üst üste basışlar için öngörülebilir sonuç vaat etmez.

Önce belirtilen küçük deneme değerlerini kullanın. Çok basamaklı sayılar kayarak gösterilir; “sayı göster” süresi, açıkça eklenen beklemeyle aynı değildir. 05 numaralı görevdeki 200 ms, **ekran temizlendikten sonraki boş aralığı** anlatır; kalbin toplam gösterim süresini değil. 04 ve 06 numaralı görevlerde 400 ms bekleme, öncesindeki gösterim çağrılarına eklenir. Gerçek geçen süreyi milisaniye doğruluğuyla notlandırmayın.

## 01. Hatırlanan sayı — 6–8 dakika

**Şöyle anlat:** “PİKO üçü hatırlıyor. A ile selam verdiğinde önce kalp gönderiyor, sonra hâlâ hatırladığı sayıyı söylüyor.”

**Hedef:** Başlangıç `sayac` değerini 3 yapıp gösterir. A, bir kalp gösterir ve sonra `sayac` değerini gösterir. Her yeni A basışı aynısını yapar; A değeri artırmaz veya sıfırlamaz.

**Tahmin:** “Ekranda kalp görünürken robotun hafızasında hangi sayı var?”

**Kademeli ipucu:** Sırayı sesli okuyun: “Önce selam, sonra hatırlanan sayı.” Yalnızca gerekirse A içindeki iki gösterim bloğunu işaret edin. Başlangıç ataması sabittir.

**Deneme:** Başlangıçta 3 görünür. A, kalp → 3 verir; başka bir A yine kalp → 3 verir. Sondaki 3 ekranda kalır. Çocuktan `sayac` değerini okuyan bloğu bulmasını ve neden artış olmadığını açıklamasını isteyin.

**Tamamlanma:** Çocuk, bir değeri göstermeyi değiştirmekten ayırır. Bu bilerek küçük tutulan bir giriş görevidir; sayma bulmacası değildir.

## 02. Her basışı hatırla — 8–10 dakika

**Şöyle anlat:** “PİKO bütün A selamlarını hatırlamalı. Şu anda sürekli bir diyor. Önceki selamları da hatırlamasına yardım edin.”

**Hedef:** 0 ile başla ve 0 göster. Her A, mevcut değeri bir artırıp gösterir. Bu görevde B ile sıfırlama yoktur.

**Tahmin:** Önce başlangıç dosyasını çalıştırın. “İkinci A neden yine birde bitiyor? Eski sayı okunuyor mu, yoksa üzerine başka değer mi yazılıyor?” Blokları taşımadan önce kâğıt üzerinde üç taşın izini sürün.

**Kademeli ipucu:** “Hangi işlem yalnızca program başlarken olmalı?” Gerekirse 0 yapmayı 1 eklemekle karşılaştırın. Çözümde açık sıfırlama işlemi A'dan alınır ve başlangıçtaki sayı gösteriminin öncesine taşınır.

**Deneme:** Yeniden başlat → 0; ilk A → 1; ikinci A → 2; üçüncü A → 3. Her gösterimi bekleyerek ayrı ayrı basıp bırakın. Bir kez daha yeniden başlatın: 0, sonra A → 1 beklenir.

**Tamamlanma:** Çocuk, `1 yap` işleminin neden `1 artır` anlamına gelmediğini ve her A'da sıfırlamanın önceki basışları neden unutturduğunu açıklar. Bu ayrım netleşmeden B'yi eklemeyin.

## 03. Yeni tur — 10–12 dakika

**Şöyle anlat:** “PİKO bir turu sayıp yeni bir tura başlayabilir. A bir selam ekler. B eski sayımı bitirip boş bir tur hazırlar.”

**Hedef:** 0 ile başla ve göster. A bir artırıp yeni değeri gösterir. B değeri 0 yapıp gösterir. İki olay da aynı `sayac` değerini okur; ayrı hafızaları yoktur.

**Tahmin:** “A, A, B, A sonrasında hangi dört sayı görünmeli? Yalnızca 0 göstermek hatırlanan sayıyı siler mi?”

**Kademeli ipucu:** Sırayı taşlarla uygulayın. Sonra “Hangi düğme, göstermeden önce saklanan değeri değiştirmeli?” diye sorun. Sıfırlama B'ye, artırma A'ya aittir; her gösterim kendi değişikliğinden sonra gelir.

**Deneme:** Başlangıçtaki 0'dan A → 1, A → 2, B → 0, A → 1. Sonra B → 0 ve tekrar B → 0. Tekrarlanan sıfırlamalar sayıyı eksiye düşürmemeli veya artırmamalı.

**Tamamlanma:** Çocuk ayarlamakla artırmayı ve saklanan sayıyla o anda görünen sayıyı ayırır. Parçaları yalnızca rastgele deneyerek taşıyorsa döngü eklemeden önce bu göreve dönün.

## 04. Üçlü paket — 10–12 dakika

**Şöyle anlat:** “Bir A basışı üç paketi birlikte getiriyor. PİKO her birini saymalı ve teslimat bitince toplamı hatırlamalı.”

**Hedef:** 0 ile başla ve göster. A, [bir artır → `sayac` değerini göster → 400 ms bekle] sırasını üç tur çalıştırır. B, deneme bittikten sonra değeri 0 yapıp gösterir.

**Tahmin:** “Döngü üç turdan sonra bitiyor. Hatırlanan sayı da sıfıra dönmek zorunda mı? Sonraki paket neleri gösterecek?”

**Kademeli ipucu:** Her tur için bir taş koyun. “Hangi üç işlem her tura ait? Bir sıfırlama nerede olursa önceki paketleri kaybederiz?” Tekrar sayısını 3 olarak koruyun.

**Deneme:** İlk A, her gösterimin ardından 400 ms beklemeyle 1 → 2 → 3 gösterir. Tamamlandıktan sonraki A, 4 → 5 → 6 gösterir. B, 0 gösterir; sonraki A yeniden 1 → 2 → 3 gösterir. Son 3 veya 6, bekleme bittikten sonra da ekranda kalır.

**Tamamlanma:** Çocuk **bu olayın içindeki** üç turu, **olaylar arasında** hatırlanan toplamdan ayırır. Döngünün bitmesi `sayac` değerini silmez.

## 05. Beşinci sinyal — 12–15 dakika

**Şöyle anlat:** “PİKO sinyal topluyor. Beşten önce uykulu bekliyor. Beşinci sinyalden itibaren her yeni sinyali üç kalple kutluyor. Toplamı hatırlamayı da sürdürüyor.”

**Hedef:** 0 ile başla ve göster. A bir artırır, ardından yeni değeri kontrol eder. 5'in altında uykulu yüz gösterir. 5 ve üzerindeyse [kalp → ekranı temizle → 200 ms bekle] sırasını üç kez tekrarlar. Her iki yolun ardından `sayac` değerini gösterir. B değeri 0 yapıp gösterir.

**Tahmin:** “Beşinci A'da karar için eski dört mü, yeni beş mi kullanılmalı? Kutlama üç yeni sinyal daha sayar mı?”

**Kademeli ipucu:** Bir A'nın öncesindeki ve sonrasındaki saklanan değeri yazın. “Bir basış bir yeni sinyal demek. Hangi iş yalnızca kutlama için tekrarlanıyor?” Artış, A başına bir kez ve IF'ten önce yapılır; üç kalplik döngünün içinde olmamalıdır.

**Sınır denemeleri:** 0'dan başlayınca 1–4. A basışlarının her biri uykulu yüz → yeni sayı gösterir. Beşinci, üç ayrı kalp → 5; altıncı, üç ayrı kalp → 6 verir. Her kalpten sonra ekranı temizleyin ve boşken 200 ms bekleyin. B → 0, sonra A → uykulu yüz → 1.

**Tamamlanma:** Çocuk, 5'in neden kutlama yoluna girdiğini, 6'da neden yine kutlandığını ve üç kalbe rağmen sayının neden yalnızca bir arttığını açıklar. **Beş bir eşiktir; üst sınır değildir.** Daha fazla saymayı engelleyen blok yoktur.

## 06. Sayım istasyonu — ev ödevi, 15–20 dakika

**Şöyle anlat:** “İstasyon paketleri üçerli gruplar hâlinde alıyor. PİKO her paketten sonra toplamı gösterip beşe ulaşıp ulaşmadığını kontrol ediyor. Bu kez bütün istasyonu siz kurun.”

**Hedef:** 0 ile başla ve göster. A tam üç tur yapar: bir artır → `sayac` değerini göster → 5'in altındaysa çarpı, değilse onay göster → 400 ms bekle. Üç tur bittikten sonra `sayac` değerini yeniden göster ve son toplamı ekranda bırak. B, tamamlanmış denemeler arasında değeri 0 yapıp gösterir.

Tek durum değişkeni yeterlidir. Saklanan toplam ne olursa olsun döngü üç kez tekrarlar. Kararın her yeni artırılmış değeri kullanabilmesi için IF döngünün içindedir. Bu görevde kalp kutlaması yoktur.

**Kurmadan önce:** Çocuktan tek A basışı için üç kutu çizmesini ve her kutunun sayısıyla simgesini yazmasını isteyin. Blokların dizilişini vermeyin. Araç kutusundan blok seçebilirler; bu görev hazır malzemelerle sınırlı değildir.

| Tamamlanan deneme | Sırayla tur çıktıları | Son ekran |
|---|---|---|
| 0'dan başlayan ilk A | 1 sonra çarpı; 2 sonra çarpı; 3 sonra çarpı | 3 |
| 3'ten başlayan ikinci A | 4 sonra çarpı; 5 sonra onay; 6 sonra onay | 6 |
| 6'dan başlayan üçüncü A | 7 sonra onay; 8 sonra onay; 9 sonra onay | 9 |
| Denemeden sonra B | Sıfırla ve 0 göster | 0 |
| B'den sonra A | 1 sonra çarpı; 2 sonra çarpı; 3 sonra çarpı | 3 |

Her turda 400 ms bekleme, simgeden sonra gelir. Sondaki sayı gösterimi döngüden sonra bir kez yapılır. **İkinci A zorunlu denemedir:** çarpı → onay → onay sonucu, IF'in grup başına bir kez yerine her paket için kontrol edilip edilmediğini ortaya çıkarır.

**Tamamlanma:** Toplam altı olduğunda da grubun neden üç tur yaptığını, ikinci grubun simgelerinin neden değiştiğini ve B'nin hem hafızayı hem ekranı neden değiştirdiğini sorun. Açıklamasız doğru çıktı, başka kavram eklemek için değil, birlikte daha küçük bir örneğe dönmek için gerekçedir.

## Kapanış ve paketler

Her çocuktan şu cümleleri tamamlamasını isteyin: “Sayı göstermek … değiştirmez”, “Bir artırmak demek …”, “Sıfır yapmak demek …”, “Döngü biter ama sayı …”. Kendi cümlelerini kabul edin; terim ezberi istemeyin.

Kısa bir A/B sırasını tahmin edebiliyor ve sıfırlamayla artırmanın farkını açıklayabiliyorlarsa ilerleyin. Bu haftaki ek zorluk, ikinci durum değişkeni, iç içe döngü veya daha büyük bir oyundan değil, bildikleri blokların sırasından gelir.

- [Çocuk ZIP'i](paketler/hafta-05-cocuklar.zip): yalnızca altı çocuk kaynağı; 06 numaralı görev yalnızca yorum içerir.
- [Çözüm ZIP'i](paketler/hafta-05-cozumler.zip): yalnızca altı tam çözüm kaynağı.

Eğitmen belgeleri iki paketin de dışındadır. Çocuklar görevleri deneyene kadar çözümleri yetişkinde tutun. Mevcut [1–4. haftalar tekrar paketi](../../odevler/ilk-04-hafta-10-seviye/README.tr.md) ayrıdır; 5. hafta yeni bir dört haftalık tekrar paketi hazırlama noktası değildir.

## Doğrulama kapsamı

[Haftanın doğrulayıcısı](verify_logic.cjs), **taklit MakeCode API'leriyle yapılan 63 yerel kontrolü** geçti. Bu kontrolleri tekrarlamak için hafta klasöründe `node verify_logic.cjs` çalıştırın. [Depo görev kartı denetleyicisi](../../verify_task_comments.cjs), **34 eşleşen çocuk/çözüm çifti ve 68 kaynak kartı** için geçti; yapısal kart kontrolü için depo kökünde `node verify_task_comments.cjs` çalıştırın.

**5. haftanın 12 kaynağının tamamı** normal MakeCode bloklarına dönüştü. Her birinde bir açık çalışma alanı yorumu vardı; bağlı veya kapalı görev yorumu yoktu. İlk beş çocuk/çözüm çiftinin görünür parça envanterleri eşleşti. Bağımsız ödevin kaynağı yalnızca yorum olarak kaldı; Bloklar'da MakeCode kendi boş “başlangıçta” kapsayıcısını ekledi.

Gerçek tarayıcı simülatörü, 03 numaralı görevin çözümünde başlangıçta **0**, ardından A, A, B, A için **1, 2, 0, 1** gösterdi. Gözlemlenen bu sıra, daha geniş taklit test kümesinden ayrıdır. **Fiziksel cihaz testi veya gerçek zamanlı süre testi yapılmadı.** Kaynak dönüşümünü veya taklit çıktı izlerini fiziksel kart kanıtı olarak değerlendirmeyin.

İki ZIP de bütünlük ve tam dosya listesi kontrollerini geçti: çocuk ZIP'inde `etkinlikler/` altında altı tamamlanacak kaynak, çözüm ZIP'inde `cozumler/` altında altı tamamlanmış kaynak bulunuyor. Paketlerdeki 12 dosyanın tamamı güncel kaynaklarıyla bayt düzeyinde eşleşiyor. Çocuk paketinde çözüm yoktur.
