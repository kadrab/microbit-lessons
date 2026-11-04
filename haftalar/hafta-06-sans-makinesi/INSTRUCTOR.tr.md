# 6. hafta — Şans makinesini öğretmek

[English](INSTRUCTOR.md) · [Ders özeti ve dosyalar](README.tr.md)

micro:bit ve MakeCode kullanan **8–12 yaş aralığındaki çocuklar** içindir. Son bildirim, çocukların 5. haftayı tamamladığını ve eğlendiğini söylüyor. Bu, tamamlanma ve ilginin kanıtıdır; her çocuğun değişkenleri bağımsız olarak açıklayabildiğinin kanıtı değildir. Rastgeleliği eklemeden önce açılışta ve 01 numaralı görevde bu ayrımı kontrol edin.

**01–05 numaralı görevler sınıf çalışması, 06 numaralı görev ev ödevidir.** Tek yeni kavram rastgele tam sayı üretmektir. Her görevde `sayi` adlı tek görünür sayısal durum değişkeni kullanılır. Bildikleri düğme olayları, gösterimler, sabit sayılı döngüler ve IF/ELSE yeniden kullanılır. Ek durum, puan, özel fonksiyon, `while`, sensör veya ek donanım gerekmez.

## Ders planı ve roller

Isınma, beş ana görev, tartışma ve kısa mola için yaklaşık **75–90 dakika** ayırın. Bu bir tahmindir; bitirme süresi sınırı değildir. Çocuk saklanan sayıyı okumakla ona değer atamayı henüz ayıramıyorsa 01 numaralı göreve daha uzun zaman ayırın ve kalanları daha sonra sürdürün. 06 numaralı görev, 05 açıklanabildikten sonra verilecek yaklaşık **15–20 dakikalık** ayrı ev ödevidir.

Açılış için **5–8 dakika**, 01 numaralı görev için **8–10**, 02 için **10–12**, 03 için **12–15**, kısa mola, 04 için **12–15**, 05 için **15–18** ve kapanış için **5–7 dakika** planlayın. Bu aralıkları çocukların açıklamalarına göre ayarlayın.

**Tahmin et → taşı → dene → açıkla** sırasını kullanın. Bir çocuk yapar; diğeri tahmin eder ve kontrol eder. Görevler arasında rolleri değiştirin ve ikisinden de sonucu açıklamasını isteyin. İpuçlarını kademeli verin: önce soru, sonra kâğıt üzerinde gösterim, ardından küçük bir yer ipucu. Tam çözümü yetişkin projesinde tutun.

## Açılış: şanstan önce hafıza — 5–8 dakika

`sayi` adlı bir kutu ve ayrı bir ekran çizin. Kutuya 0 yazın. Bunun geçen hafta kullanılan sayısal hafızayla aynı türde olduğunu; adının artık artan bir toplam yerine son sayıyı anlattığını açıklayın.

Cevapları yazmadan önce çocuklardan şu adımları tahmin etmelerini isteyin:

1. Kutudaki sayıyı iki kez bir artırın. Ne saklanıyor? **2.**
2. Ekrana dokunmayın. Ekranın 2 göstermesi gerekir mi? **Hayır. Hafıza ve ekran farklı olabilir.**
3. Kutuyu okuyup değerini gösterin. Sonrasında ne saklanıyor? **Hâlâ 2.**
4. Ekrana kalp çizin. Şimdi ne saklanıyor? **Hâlâ 2.**

Kendi cümleleriyle açıklamalarını kabul edin. Ekranı hafıza sanıyorlarsa ilerlemeden önce etiketli bir tabakta taşlar ve ayrı bir kâğıt ekran kullanın. Yalnızca doğru sayıdan anladıkları sonucunu çıkarmayın.

01 numaralı görevden sonra yeni bloğu tanıtın: “PİKO 1'den 6'ya kadar bir tam sayı seçebilir. Sırada hangisinin geleceğini bilmiyoruz. Bu sonucu aynı hafıza kutusuna yazar.” MakeCode'un `randint(1, 6)` işleminde iki uç da kapsanır. [Resmî rastgele tam sayı başvurusu](https://makecode.microbit.org/reference/math/randint)

Yeni sonuç öncekiyle aynı olabilir. Yeni çekiliş, başka bir seçim demektir; farklı sayı sözü değildir. Üç çekiliş de aynı olabilir; altı çekilişte bütün yüzlerin görülmesi gerekmez. Bütün yüzlerin gelmesini şart koşmayın veya kısa bir denemeyle üretecin dağılımını değerlendirmeyin.

## Dosyaları açma ve ortak kurallar

1. Her görev için ayrı MakeCode projesi açın.
2. [etkinlikler/](etkinlikler/) klasöründeki çocuk kaynağının tamamını mevcut kodun yerine JavaScript sekmesine yapıştırın.
3. Bloklar'a geçin; JavaScript teslim biçimidir, kod yazma alıştırması değildir.
4. Görev kartını birlikte okuyun; blokları örtüyorsa taşıyın veya büyütün.
5. Eşleşen [çözümü](cozumler/) ayrı bir yetişkin projesinde tutun.

Her çocuk/çözüm çiftinde aynı başlangıç kartı bulunur: satırları yıldızlı `/* ... */` yorumunda hikâye, hedef, kural ve deneme dâhil önce eksiksiz Türkçe, ardından eksiksiz İngilizce vardır. Kartın açık çalışma alanı yorumu olarak görünebilmesi için `*/` ile çalıştırılabilir kod arasındaki boş satırı koruyun. Kaynak metni boyutu veya konumu belirleyemez.

**01–05** numaralı görevlerde gereken bütün parçalar bilerek yanlış yerlerde verilmiştir. Şöyle söyleyin: “Parçaları yalnızca taşıyın. Blok eklemeyin, silmeyin veya kopyalamayın; adları, sayıları, koşulları veya tekrar sayılarını değiştirmeyin.” **Başlangıç yığınının tamamını** ve hazır A/B olay başlıklarını koruyun. İzin verilen blokları olay gövdeleri, döngüler ve dallar içinde veya bunlar arasında taşıyın. Araç kutusu teknik olarak kilitli değildir; bu görev kuralıdır. Bağlı blokları sürüklerken gereken en alttaki parçayı önce ayırın.

Başlangıç yığınının tamamı `sayi` değerini **0** yapıp gösterir. Sıfır, başlangıç durumunu anlatır; zar sonucu değildir. Başlangıcı A'nın içine taşımayın. 03 ve 06 numaralı görevlerde ilk A'dan önce B, 0 gösterir. Simülatörü veya kartı sıfırlamak başlangıcı yeniden çalıştırır; değer tek çalışma sırasında olaylar arasında korunur, sıfırlamalar arasında korunmaz.

JavaScript'teki `for`, bildikleri sabit sayılı tekrar bloğuna dönüşür. Gövdede kullanılmayan `index`, teknik döngü sayacıdır. Gövdede kullanmayın veya ikinci saklanan sonuç olarak öğretmeyin.

**06** numaralı görevde **yalnızca görev kartı** vardır. Hazır olay, değişken, döngü, koşul veya sabit başlangıç yığını verilmez. Çocuklar gereken başlangıcı ve davranışı öğrendikleri bloklarla kendileri kurar. MakeCode, yorumu dönüştürürken kendi boş “başlangıçta” kapsayıcısını ekleyebilir; bu verilmiş cevap değildir.

## Düğme kullanımı ve doğru gözlem

Bir seferde tek düğmeye **kısa basıp bırakın**. Sonraki A veya B basışından önce bütün gösterimin ve her beklemenin bitmesini bekleyin. B, tamamlanmış denemeler arasında değeri hatırlatır; bitmemiş animasyon sırasında kullanmayın. Bu bir öğretim sınırıdır, programlanmış kilit değildir; kaynaklar olayların üst üste çalışması için davranış vaat etmez.

Açıkça eklenen 400 ms beklemeler, gösterim çağrılarına eklenir. 05 numaralı görevde bekleme, **ekran temizlendikten sonraki boş aralıktır**; 06 numaralı görevde çarpı veya onaydan sonra gelir. Gerçek geçen süreyi tam milisaniyesiyle değerlendirmeyin veya bütün turun 400 ms sürdüğünü varsaymayın.

Rastgele görevlerde sıradaki kesin sayıyı değil; izin verilen aralığı, işlem sırasını ve karar kuralını tahmin edin. **“Örnek”** veya **“bu sonuç gelirse”** diye verilen her dizi koşulludur; vaat edilen simülatör çıktısı değildir. Kâğıt üzerinde izleme, sabit blokları değiştirmeden 3 ve 4'ü kontrol edebilir.

İki aynı gösterim tek başına hafızanın yeniden okunduğunu kanıtlamaz: hatalı ikinci çekiliş aynı değeri döndürebilir. Çıktıya bakmanın yanında rastgele bloklarının yerini de inceleyin. Aynı durum 05 numaralı görevdeki üç eşit değer için geçerlidir; üç geçerli çekiliş olabilirler.

## 01. Hafızayı hatırla — 8–10 dakika

**Şöyle anlat:** “PİKO bir değişikliği söylemeden hatırlayabilir. A sessizce bir ekler; B bize hatırladığı sayıyı söyler.”

**Hedef:** Başlangıç `sayi` değerini 0 yapıp gösterir. A, hiçbir şey göstermeden `sayi` değerini bir artırır. B, `sayi` değerini değiştirmeden gösterir. Bu görevde rastgelelik yoktur.

**Başlangıç hatası:** A değeri gösterir; B artırır. Gereken parçalar vardır ama işler diğer düğmeye aittir. Başlangıç sabit kalır.

**Tahmin:** “A, A sonrasında hafızada ne var? Ekranda hâlâ ne görünüyor? B ne gösterecek?” Beklenen: hafıza 2, ekran hâlâ başlangıçtaki 0, ardından B 2 gösterir.

**İpuçları:** Önce hangi işlemin hafızayı değiştirdiğini, hangisinin yalnızca okuduğunu sorun. Sonra kâğıt ekrana dokunmadan kâğıt kutuda iki A basışını izleyin. Ancak bundan sonra artırma ve gösterme bloklarını işaret edin.

**Deneme:** Yeniden başlat → 0; B → 0. Yeniden başlatın; A, A ekranı 0'da bırakır; B → 2; B → yeniden 2; A ekranı 2'de bırakır; B → 3. Ayrı ve tamamlanmış basışlar kullanın.

**Tamamlanma:** Çocuk, ekran değişmeden A'nın hafızayı nasıl değiştirebildiğini ve art arda B basışlarının sayıyı neden artırmadığını açıklar. Yalnızca ekran doğru görünene kadar taşımayı deniyorsa 02 numaralı görevden önce kâğıt izlemesini tekrarlayın.

## 02. PİKO'nun zarı — 10–12 dakika

**Şöyle anlat:** “PİKO A ile zar atıyor. Bize önceden hatırladığını değil, az önce seçtiği sayıyı söylemeli.”

**Hedef:** 0 ile başla ve göster. Her A, 1–6 arasında bir tam sayı üretip `sayi` değişkenine atar; ardından `sayi` değerini gösterir. Bu görevde B işlemi yoktur.

**Başlangıç hatası:** A, sıradaki sonucu üretip atamadan önce saklanan değeri gösterir. Çekilişin kendisi 1–6 aralığında olsa da ilk A başlangıçtaki 0'ı gösterir.

**Tahmin:** “Yeni sayıyı kutuya koymadan kutuyu okursak hangi sonucu söyleriz?” Sıradaki doğru A çıktısının aralığını sorun; kesin sayı istemeyin.

**İpuçları:** “Seç → hatırla → söyle” sözünü kullanın. Kâğıt ekrana kopyalamadan önce kâğıt kutudaki sayıyı değiştirmeyi gösterin. Hâlâ gerekiyorsa A içindeki atama ve gösterim sırasını işaret edin.

**Deneme:** Yeniden başlatma 0 gösterir. İlk A ve daha sonraki her tamamlanmış A, 1–6 arasında değer göstermelidir. Her basışta tek rastgele bloğunun gösterimden önce çalıştığını inceleyin. Tekrarlanan değerler geçerlidir. **Yalnızca örnek:** çekilişler 4, 4 ve 1 ise üç A basışı 4, 4 ve 1 gösterir.

**Tamamlanma:** Çocuk, başlangıçtaki 0'a neden izin verildiğini ama tamamlanmış A'nın neden 0 göstermemesi gerektiğini ve ikinci 4'ün neden yeni geçerli bir çekiliş olabileceğini açıklar. Tek saklanan sonuç vardır; ekran için ayrı bir rastgele değer yoktur.

## 03. Sonucu unutma — 12–15 dakika

**Şöyle anlat:** “PİKO zar sonucunu gösterip kalp gönderiyor. Kalp ekranı kaplıyor ama sonucu silmemeli. B, PİKO'dan onu hatırlamasını istiyor.”

**Hedef:** 0 ile başla ve göster. A, sonuç üretip saklar, gösterir ve ardından `Heart` (kalp) gösterir. B yalnızca saklanan sonucu gösterip sayıyı ekranda bırakır. A kalple, B sayıyla biter.

**Başlangıç hatası:** A eski değeri ve kalbi gösterir; B sonuç üretip gösterir. Rastgele atamayı yeni çekilişi başlatan olaya, onun gösteriminden önce taşıyın. İki gösterimi ve kalbi koruyun.

**Tahmin:** “Kalp görünüyor. Kutudaki sayı değişti mi? B'ye iki kez sormak yeniden zar atmalı mı?”

**İpuçları:** Hafıza kutusunu görünür tutarken kâğıt ekranı çizilmiş kalple örtün. Hangi düğmenin seçtiğini, hangisinin hatırlattığını sorun. Ancak ardından yanlış olaydaki rastgele atamayı bulun.

**Deneme:** Yeniden başlat → 0; herhangi bir A'dan önce B → 0. A'ya basıp kalpten önce görünen sayıyı hatırlayın; B o sayıyı göstermeli, bir B daha yine onu göstermelidir. B'nin yalnızca gösterim içerdiğini ve rastgele çekiliş yapmadığını inceleyin. **Yalnızca örnek:** A'da 5 gelirse sıra 5 → kalp; B → 5; B → 5 olur. Sonraki bir A'da yine 5 gelebilir; bu geçerlidir.

**Tamamlanma:** Çocuk, son gösterilen simgeyi saklanan sayıdan ayırır ve aynı B çıktılarının tek başına kodun doğru olduğunu neden kanıtlamadığını açıklar. Yanlışlıkla yapılan ek çekiliş aynı sonucu verebilse de bir değeri hatırlatmak başka bir değer üretmemelidir.

## 04. Şanslı sayı — 12–15 dakika

**Şöyle anlat:** “PİKO 4, 5 ve 6'ya şanslı diyor. Önce sonucu gösteriyor, sonra aynı sonuca tepki veriyor.”

**Hedef:** 0 ile başla ve göster. A, 1–6 arasındaki tek rastgele sonucu `sayi` değişkenine atar, gösterir, sonra `sayi < 4` koşulunu kontrol eder. 1–3 için `Sad` (üzgün), 4–6 için `Happy` (mutlu) gösterir. Sonda yüz görünür kalır. B işlemi yoktur.

**Başlangıç hatası:** Atama, gösterim ve boş IF/ELSE hazırdır; mutlu ve üzgün simgeler dalların dışında durur. Her dala doğru simgeyi taşıyın. Koşulu, aralığı ve başlangıcı değiştirmeyin.

**Tahmin:** “Saklanan sayı 3 ise 4'ten küçük müdür? Peki tam 4 ise?” Görevin sabit değerlerini değiştirmeden iki durumu kâğıt üzerinde izleyin.

| Bu sonuç gelirse | Kontrol | Beklenen çıktı |
|---|---|---|
| 1, 2 veya 3 | `sayi < 4` doğru | Sayı → üzgün yüz |
| 4, 5 veya 6 | `sayi < 4` yanlış | Sayı → mutlu yüz |

**İpuçları:** Numaralı altı kâğıt kartı “4'ten küçük” ve “diğer durum” olarak ayırın. 4'ün nereye girdiğini sorun. Ardından iki boş dalı işaret edin. Koşulda ayrı rastgele sayı üretmeyin.

**Deneme:** Tamamlanmış birkaç A basışını gözlemleyin ve görünen her sayıyı yüzüyle karşılaştırın. Sınır için **3 → üzgün** ve **4 → mutlu** kâğıt örneklerini kullanın; garanti edilmiş rastgele sıra beklemeyin veya zorlamak için sabit blokları değiştirmeyin. Gösterimin ve IF'in aynı tek atamadan sonra `sayi` değerini okuduğunu inceleyin.

**Tamamlanma:** Çocuk, 4'ün neden mutlu dala gittiğini ve IF'in içinde yeniden çekiliş yapmanın yüzü gösterilen sayıyla neden tutarsız hâle getirebileceğini açıklar.

## 05. Üç atış — 15–18 dakika

**Şöyle anlat:** “Bir A basışı PİKO'ya üç kez zar attırıyor. Her turda yeni bir seçim, sonunda da sonucun hatırlatılmasını istiyoruz.”

**Hedef:** 0 ile başla ve göster. A tam üç tur [üret ve `sayi` değişkenine ata → `sayi` değerini göster → ekranı temizle → 400 ms bekle] sırasını tekrarlar. Döngüden sonra `sayi` değerini bir kez daha gösterip ekranda bırakır.

**Başlangıç hatası:** Rastgele atama döngüden öncedir. Döngü üç kez gösterir, temizler ve bekler; son gösterim zaten döngüden sonradır. Bu, bir kez çekip aynı çekilişi tekrar tekrar sunar. Atamayı döngünün içine, onun gösteriminden önce taşıyın; başka rastgele bloğu eklemeyin.

**Tahmin:** “Hangi işlem üç turun her birinde olmalı? Rastgele bloğu tekrarın önünde kalırsa kaç rastgele seçim olur?”

**İpuçları:** Kâğıda üç tur kutusu çizip her birine bir seçim işaretleyin. Üç kez kopyalanan bir seçimle tesadüfen aynı gelen üç seçimi karşılaştırın. Sonra rastgele atamanın tekrar sınırının içinde olup olmadığını sorun.

**Koşullu örnekler:** Üç çekiliş **1, 6, 2** ise 1 → boş, 6 → boş, 2 → boş, ardından son 2 görünür. Çekilişler **4, 4, 2** ise 4 → boş, 4 → boş, 2 → boş, ardından son 2 görünür. Her boş aralıkta açıkça eklenen 400 ms bekleme vardır. 4, 4, 4 çekiliş sırası da geçerlidir.

**Deneme:** Boş aralıklarla ayrılmış üç çekiliş gösterimini ve ardından tek son hatırlatma gösterimini sayın. Tek rastgele bloğunun üç tekrarlı döngünün içinde, son gösterimin ise dışında olduğunu inceleyin. Başka bir tamamlanmış A çalıştırın: önceki değerlerle eşleşebilen üç yeni çekiliş başlar. B işlemi yoktur.

**Tamamlanma:** Çocuk, **üç çekilişin üç farklı sayı olmak zorunda olmadığını** ve **dört sayı gösterimine rağmen yalnızca üç çekiliş olduğunu** açıklar. Dördüncü gösterim üçüncü sonucu okur. Tekrarlanan çıktı tek başına atamanın döngünün içinde doğru yerde olup olmadığını kanıtlamaz; blokları inceleyin.

## 06. Hazineci PİKO — ev ödevi, 15–20 dakika

**Şöyle anlat:** “PİKO A ile üç sandığı kontrol ediyor. Her sandık için bir sayı geliyor. 4'ün altında hazine yok; 4'ten itibaren hazine var. Makineyi kendiniz kurun; B de son sandığın sayısını hatırlatsın.”

**Hedef:** `sayi` değerini 0 yapıp gösteren başlangıcı kurun. A tam üç tur yapar: 1–6 arasında sonuç üretip ata → `sayi` değerini göster → `sayi < 4` ise `No` (çarpı), diğer durumda `Yes` (onay) göster → 400 ms bekle. Döngüden sonra son `sayi` değerini bir kez göster. B, saklanan değeri değiştirmeden ve yeniden çekiliş yapmadan gösterir. İlk A'dan önce B, 0 gösterir.

Yalnızca görev kartı verilir. Çocuklar araç kutusundan blok seçebilir; yalnızca taşıma kuralı bu bağımsız görevde geçerli değildir. Sadece tek durum değişkenini ve öğrenilmiş kavramları kullanın. Biriktirilecek puan ve üç sonucu birden hatırlama gereği yoktur: `sayi` yalnızca en sonuncuyu saklar.

**Kurmadan önce:** Her tur için bir tane olmak üzere üç kâğıt kutu ve ayrı bir son gösterim kutusu isteyin. Çocuğun yeni sonucun nerede saklandığını ve koşulun hangi sonucu okuması gerektiğini anlatmasını sağlayın. Blok dizilişini vermeyin. Gerekirse “Hangi işlemler üç kez, hangileri sonrasında bir kez oluyor?” diye sorun.

| Koşullu örnek; vaat edilen çekiliş sırası değildir | Tur çıktıları | Son gösterim ve sonraki B |
|---|---|---|
| Çekilişler 3, 4, 6 | 3 → çarpı; 4 → onay; 6 → onay | 6; B yeniden 6 gösterir |
| Çekilişler 3, 3, 4 | 3 → çarpı; 3 → çarpı; 4 → onay | 4; B yeniden 4 gösterir |
| Çekilişler 5, 5, 5 | 5 → onay; 5 → onay; 5 → onay | 5; B yeniden 5 gösterir |
| İlk A'dan önce B | Çekiliş yok | 0 |

400 ms bekleme her simgeden sonra gelir; 05 numaralı görevden farklı olarak burada boş aralık istenmez. Son gösterim üç turun tamamından sonra gelir ve üçüncü sonucu okur. Dördüncü çekiliş değildir. Sonraki A başka üç çekiliş başlatır; sayıları önceden belirli değildir.

**Denemeler ve tamamlanma:** Başlangıcı ve A'dan önce B'nin 0 göstermesini; A başına üç turu; her turda sayıyla simgenin uyumunu; kâğıt sınırları 3 → çarpı ve 4 → onayı; döngüden sonra tek son sayıyı; art arda B basışlarının aynı sayıyı hatırlatmasını kontrol edin. Rastgele üretim ve IF'in döngünün içinde olduğunu, IF'in gösterilen saklı değeri kullandığını ve B'de rastgele atama olmadığını inceleyin. Çocuk yeni çekilişin neden tekrarlanabileceğini, koşulun neden döngü içinde olduğunu ve ikinci değişkenin neden gerekmediğini açıklamalıdır.

## Kapanış ve paketler

Her çocuktan şunları tamamlamasını isteyin: “Yeni bir çekiliş … olabilir”, “Kalp göstermek … değiştirmez”, “Sayı ve IF … kullanır”, “Üç çekiliş … verebilir”, “B … yaparak hatırlar”. Kendi cümleleriyle açık anlatımlarını kabul edin. Yalnızca bitmiş koda değil, tahmin ve açıklamaya göre ilerleyin.

- [Çocuk ZIP'i](paketler/hafta-06-cocuklar.zip): yalnızca altı çocuk kaynağı; 06 numaralı görev yalnızca yorum içerir.
- [Çözüm ZIP'i](paketler/hafta-06-cozumler.zip): yalnızca altı tamamlanmış çözüm.

Eğitmen belgelerini iki kaynak ZIP'inin de dışında, çözümleri çocuklar görevleri deneyene kadar yetişkinde tutun. 6. hafta tekrar paketi hazırlama noktası değildir. [1–4. haftalar tekrar paketi](../../odevler/ilk-04-hafta-10-seviye/README.tr.md) ayrı kalır; sıradaki paket, 8. hafta hazırlanırken 5–8. haftaları kapsar.

## Doğrulama kapsamı

[Haftanın doğrulayıcısı](verify_logic.cjs), **taklit MakeCode API'leriyle yapılan 3.182 yerel kontrolü** geçti. Tekrarlamak için bu hafta klasöründe `node verify_logic.cjs` çalıştırın. Bu kontroller; aynı ardışık sonuçlar, sınır kararları ve rastgele çağrı sayısı dâhil, verilen çekiliş dizilerini kapsar; gerçek üretecin dağılımını, gerçek zamanlı süreyi veya fiziksel cihaz davranışını kanıtlamaz.

[Depo görev kartı denetleyicisi](../../verify_task_comments.cjs), **40 eşleşen çocuk/çözüm çifti ve 80 kaynak kartı** için geçti. Bu yapısal kontrol için depo kökünde `node verify_task_comments.cjs` çalıştırın. Gerekli başlıklar ve eşleşen kartlar, tek başına çeviri kalitesini veya cihaz davranışını kanıtlamaz.

**6. haftanın 12 kaynağının tamamı**, her birinde bir açık çalışma alanı görev yorumu bulunarak standart MakeCode bloklarına dönüştü. İlk beş çocuk/çözüm çiftinin görünür blok envanterleri eşleşti. Ödevin çocuk kaynağı yalnızca yorum olarak kaldı; düzenleyici kendi boş “başlangıçta” kapsayıcısını ekledi.

Gerçek tarayıcı simülatöründe **03 numaralı çözümün** tek nokta kontrolü, başlangıçta **0**, herhangi bir A'dan önce B'de **0**, ardından A'da **3 → kalp**, B'de **3** ve ikinci B'de **3** gösterdi. Bu, daha geniş taklit kontrollerden ve dönüşüm kontrollerinden ayrı, gözlemlenen tek bir sıradır. Altı görevin tamamını kapsayan işlevsel simülatör testi veya vaat edilen rastgele sonuç değildir. **Fiziksel cihaz, gerçek zamanlı süre veya istatistiksel rastgelelik testi yapılmadı.**

İki ZIP de CRC bütünlük ve tam dosya listesi kontrollerini geçti: çocuk ZIP'inde `etkinlikler/` altında amaçlanan altı JS kaynağı, çözüm ZIP'inde `cozumler/` altında altı kaynak bulunuyor. Her dosya güncel kaynağıyla bayt düzeyinde eşleşti. Çocuk ZIP'inde çözüm yoktur.
