# 4. hafta — PİKO'nun tekrar atölyesi

[English](INSTRUCTOR.md) · [Ders özeti](README.tr.md)

micro:bit ve MakeCode kullanan 8–12 yaş aralığındaki iki çocuk için hazırlanmıştır. Bu haftanın yeni kavramı **sabit sayıda tekrar etmektir**. İlk üç görev tekrar ve sıralamaya odaklanır; sonraki üç görev tekrarı bilinen IF/ELSE kararlarıyla birleştirir. Ek donanım gerekmez. **1–5. görevler dersin temel çalışmalarıdır; 6. görev ödevdir.**

## Derse başlarken

Önceki haftanın **Uzay kapısı vardiyaları** ödevi için 10–15 dakika ayırın. Çocuklar takılırsa hazır bloklu **Gece üssü** görevine dönüp bir karar yolunu birlikte izleyin. Yeni kavrama da zaman kalması için bu açılışı kısa tutun.

Beş temel görevi; tartışma ve 3. görevden sonraki mola dâhil, yaklaşık 75–90 dakikalık ders içi çalışma için bir görev havuzu olarak kullanın. 5. görev için başka bir rehberli oturum gerekiyorsa buna zaman tanıyın. 6. görevi ayrıca ödev olarak verin; altısının aynı gün bitirilmesi gerekmez.

Her görevde çocuklardan biri kurar, diğeri kontrol eder; sonraki görevde roller değişir. Kontrol eden çocuk, çalıştırmadan önce sonucu tahmin eder. İki çocuk da hangi parçaların tekrar ettiğini en az bir kez açıklamalıdır.

## Yeni kavramı iki dakikada anlatın

“Üç kez alkışla, sonra ellerini başına koy.” Birlikte yapın. “Üç kez alkışladık. Ellerimizi başımıza yalnızca bir kez koyduk. Robot da tekrar ettiği işi, sonrasında bir kez yaptığı işten ayırmalı.”

**Sürekli:** İçindeki işi yapmaya devam et. **3 kere tekrarla:** İçindeki işi üç tur yap, sonra altındaki bir sonraki bloğa geç. Bu dersteki her gösteri biter ve son simgesi ekranda kalır.

Çocuklar Bloklar görünümündeki **N kere tekrarla** bloğuyla çalışır. Bunun JavaScript karşılığı `for (let index = 0; index < 3; index++)` biçimindedir. Kaynaktaki `index`, tekrarın teknik sayacıdır; bu derste değişkenler, sayaçlar veya `index++` ayrıca öğretilmez. “Dosyalarda hiç değişken yok” demeyin; **çocuklar ayrı bir değişken oluşturmuyor** deyin.

Her görevden önce üç soru sorun: “Bir turda ne oluyor? Kaç tur var? Tekrar bitince ne oluyor?” İlk üç görevde IF yoktur. Bilinen karar blokları 4. görevde geri gelir. [MakeCode tekrar kaynağı](https://makecode.microbit.org/blocks/loops/repeat)

## Dosyaları açma ve ortak kurallar

1. Her görev için ayrı bir MakeCode projesi açın.
2. [etkinlikler/](etkinlikler/) içindeki ilgili `-cocuklar.js` dosyasının **içeriğinin tamamını**, mevcut kodun hepsini silerek JavaScript sekmesine yapıştırın.
3. **Bloklar** görünümüne geçin. Çocukların JavaScript yazması gerekmez; dosya hazırlanmış parçaları yükler.
4. Görev açıklaması ayrı ve açık bir yorum kartı olarak görünür. Okuduktan sonra kapatabilirsiniz. Blokların üstüne gelirse kartı üst çubuğundan tutup boş bir yere sürükleyin; gerekirse sağ alt köşesinden boyutunu değiştirin.
5. [Çözüm dosyasını](cozumler/) yetişkine ait ayrı bir projede tutun.

Her çocuk dosyası bir `/* ... */` görev yorumuyla başlar. İlk beş dosyada `*/` ile kod arasında **bir boş satır** vardır; bunu koruyun. Böylece MakeCode açıklamayı, bir bloğa bağlı kapalı yorum yerine açık çalışma alanı yorumu olarak gösterebilir. JavaScript kartın ekrandaki konumunu veya boyutunu sabitlemez.

**1–5. görevlerde şunu söyleyin:** “Bütün parçalar burada. Blok eklemeyin, silmeyin, çoğaltmayın ve hazır sayıları değiştirmeyin. Parçaları taşıyarak hedefe ulaşın.” Araç kutusu teknik olarak kilitli değildir; bu, etkinliğin kuralıdır.

İlk beş görevde A düğmesi başlatıcısını koruyun. **4 ve 5. görevlerde baştaki şaşkın yüz ve ardından gelen 1000 ms bekleme de sabit hazırlık bölümüdür.** Diğer parçalar yanlış yerleştirilmiştir. Bir bloğu sürüklemek altındaki parçaları da birlikte getirebilir; çoğu zaman önce en alttaki parçayı ayırmak yardımcı olur.

**6. görevde yalnızca görev yorumu vardır.** Başlatıcı, döngü veya IF verilmez; çocuklar her bloğu araç kutusundan seçer. MakeCode, yalnızca yorum içeren dosyayı Bloklar görünümüne dönüştürürken boş bir `başlangıçta` bloğu ekleyebilir. Bu, verilmiş bir çözüm parçası değildir.

## A başlatır; B seçim yapar

İlk üç görevde yalnızca A kullanılır. Gösteriyi başlatmak için **A'ya kısa basıp bırakın**. Aynı gösteriyi A ile yeniden başlatmadan önce finali bekleyin.

4–6. görevlerde her deneme için:

1. İki düğmeyi de bırakın.
2. A'ya kısa basıp bırakın.
3. Şaşkın hazırlık yüzü görünürken B'yi basılı tutmaya veya bırakmaya karar verin.
4. Gösteri bitene kadar A'ya yeniden basmayın. Son simgeden sonra yeni bir denemeye başlayın.

A, gösteriyi başlatan olaydır. B kontrolü, “B şu anda basılı mı?” diye sorar. Önceden B'yi basılı tutup A+B ile başlatmaya çalışmayın. [A düğmesi olayı kaynağı](https://makecode.microbit.org/reference/input/on-button-pressed), [düğmenin basılı olması kaynağı](https://makecode.microbit.org/reference/input/button-is-pressed)

4 ve 6. görevlerde B'nin durumunu **ekranın boş olduğu bekleme sırasında** değiştirin; sonraki tur, başlarken yeni seçimi okur. Bir simge görünürken B'yi değiştirmek o simgeyi hemen değiştirmez. Fiziksel kartta bir çocuk gösteriyi başlatabilir, diğeri B'yi yönetebilir; sonra rolleri değiştirin.

## 1. Üç kalp, bir selam — ders içi, 6–8 dakika

**Şöyle anlatın:** “PİKO üç kalp gönderecek. Her kalp sönmeli ve ardından kısa bir boşluk olmalı. Üç kalbin hepsinden sonra bir onay işareti gösterip mesajı bitirin.”

**Hedef:** [Kalp → ekranı temizle → boş ekranda 400 ms bekle] sırasını üç kez tekrarlayın, ardından tek bir onay işareti gösterin. Hazır onay işareti yanlışlıkla döngünün içindedir.

**Sorun:** “Onay işareti döngünün içinde kalsaydı kaç onay görürdük? Üç ayrı kalp sayabilmek için kalplerin arasında ne olmalı?”

**Deneyin:** Üç kalp, üç boşluk ve bir son onay sayın. Final kendiliğinden yeniden kalbe dönmemeli. A'ya yeniden basmak aynı gösteriyi tekrar başlatmalı.

## 2. PİKO'nun dans provası — ders içi, 7–10 dakika

**Şöyle anlatın:** “Önce PİKO bir kez hazır olduğunu söylüyor. Sonra mutlu ve şaşkın yüzlerden oluşan dansını üç kez yapıyor. Dans bitince uyuyor.”

**Hedef:** Bir onay → üç kez [mutlu → şaşkın] → bir uykulu yüz. Bu görevde bekleme bloğu eklemeyin.

**Sorun:** “Bir turda bir yüz mü, iki yüz mü var? Üç turdan sonra toplam kaç dans yüzü göreceğiz?”

**Deneyin:** Bir açılış onayı, üç mutlu yüz, üç şaşkın yüz ve bir kapanış uykulu yüzü görün. Mutlu ve şaşkın yüzler sırayla gelmeli. Döngüden önceki ve sonraki işler yalnızca birer kez yapılmalı.

## 3. İki parçalı uzay mesajı — ders içi, 8–12 dakika

**Şöyle anlatın:** “Uzay alıcısı önce iki büyük kalp, sonra üç küçük kalp bekliyor. Sıraları, sayıları kadar önemli. Mesaj bitince bir onay işareti gösterin.”

**Hedef:** İki kez [büyük kalp → temizle → boş ekranda 300 ms bekle], ardından üç kez [küçük kalp → temizle → boş ekranda 700 ms bekle], sonra bir onay. İki döngü birbirinin içinde değil, art arda çalışır.

**Sorun:** “Bir döngüyü diğerinin içine koymakla onları art arda koymak aynı şey mi? Birinci bölüm bitmeden ikinci bölüm başlayabilir mi?”

**Deneyin:** Büyük, büyük, küçük, küçük, küçük: toplam beş kalp sayın. Küçük kalpler arasındaki boşluklar daha uzun olmalı. Onay, ancak iki bölüm de bittikten sonra görünmeli.

## 4. Üç kez soran robot — ders içi, 10–15 dakika

**Şöyle anlatın:** “PİKO üç turun her birinde size yeniden soruyor. O turun başında B basılıysa kalp, değilse çarpı gösteriyor. Turlar arasında cevabınızı değiştirebilirsiniz.”

**Hedef:** Sabit hazırlıktan sonra üç tur çalıştırın. Her tur B'yi kontrol eder → kalp veya çarpı gösterir → ekranı temizler → boş ekranda 1000 ms bekler. Üç turun hepsinden sonra bir onay gösterin.

**Sorun:** “B sorusu döngünün içinde mi olmalı? İkinci tur için fikrimizi değiştirirsek robot bunu ne zaman öğrenir?”

**Deneyin:** B sürekli bırakılmışken üç çarpı, ardından B hazırlıktan itibaren basılı tutulurken üç kalp bekleyin. Sonra şu değişen seçimleri uygulayın:

| Tur | Tur başında B | Beklenen simge |
|---|---|---|
| 1 | Bırakılmış | Çarpı |
| 2 | Basılı | Kalp |
| 3 | Bırakılmış | Çarpı |

B'yi ekran boşken değiştirin. **Değişen girdi denemesi gereklidir:** B hiç değişmezse IF'i döngünün dışına koyan yanlış bir çözüm de doğruymuş gibi görünebilir.

## 5. Rotayı bir kez seç — ders içi, 12–15 dakika

**Şöyle anlatın:** “Bu robot her turda sormuyor. Hazırlıktan sonra rotasını bir kez seçiyor. B basılıysa üç kalp, değilse iki üzgün yüz gönderiyor. B'yi sonradan değiştirseniz de seçtiği gösteriyi bitiriyor.”

**Hedef:** Sabit hazırlık → bir IF/ELSE → seçilen dalda üç kalp veya iki üzgün yüz → ortak bir son onay. Her simgeden sonra ekranı temizleyip boş ekranda 700 ms bekleyin. Döngüler iç içe değildir; **her denemede yalnızca bir döngü çalışır**.

**Sorun:** “4. görevde B sorusunu üç kez sorduk. Burada neden yalnızca bir kez sormalıyız? Diğer rota neden çalışmıyor?”

**Deneyin:** Hazırlık sırasında B'yi basılı tutun, sonra ilk kalpten sonra bırakın; yine de üç kalbin hepsi görünmeli. Yeni bir denemede hazırlık sırasında B'yi bırakılmış tutun, sonra ilk üzgün yüzden sonra basılı tutun; yine de iki üzgün yüz görünmeli. İki deneme de bir onayla bitmeli.

Burada IF, **döngülerin dışındadır**. Seçilen daldaki döngü tamamlanır; B yeniden okunmadığı için rota değişmez. Seçimi saklamak için ayrı bir değişken gerekmez.

## 6. Uzay devriyesi kontrol noktaları — ödev, 15–20 dakika

**Şöyle anlatın:** “PİKO önce üç kapıyı, sonra iki yolcuyu kontrol ediyor. Her kontrolde yeniden karar veriyor. Bu kez programı kendiniz kuracaksınız. Önce iki bölümünü kâğıda çizin.”

**Hedef:** A ile başlat → şaşkın yüz ve 1000 ms hazırlık → üç kapı kontrolü → bir uykulu yüz ve 1000 ms ara → iki yolcu kontrolü → bir son onay.

Her kapı turunun başında, B basılıysa kalp, değilse çarpı gösterin. Yolcular için, B basılıysa mutlu, değilse üzgün yüz gösterin. Her kontrol simgesinden sonra ekranı temizleyip boş ekranda 1000 ms bekleyin. Her birinin içinde bir IF/ELSE olacak şekilde iki döngüyü art arda çalıştırın. Ayrı bir puan veya sayaç oluşturmayın.

**Sorun:** “Toplam kaç karar vereceğiz? Uykulu yüzlü ara, hangi iki bölümü ayırmalı? Son onay hangi döngünün içinde olmalı?” Son sorunun cevabı hiçbiridir; onay iki bölümden sonra gelir.

**Deneyin:** B sürekli bırakılmışken üç çarpının ardından iki üzgün yüz bekleyin. B hazırlıktan itibaren basılı tutulurken üç kalbin ardından iki mutlu yüz bekleyin. Sonra seçimleri değiştirerek deneyin:

| Bölüm | Ardışık tur başlangıçlarında B | Kontrol simgeleri |
|---|---|---|
| Üç kapı | Bırakılmış → basılı → bırakılmış | Çarpı → kalp → çarpı |
| İki yolcu | Basılı → bırakılmış | Mutlu → üzgün |

Toplam **beş B kontrolü** vardır. Hazırlık, ara veya final simgelerini bu sayıya dâhil etmeyin. Ara ve final birer kez görünür. B'yi boş ekranlar sırasında değiştirin; uykulu yüzlü ara da ikinci bölüme hazırlanmak için zaman verir.

## Süreler ve tamamlama ölçütleri

Bu dosyalarda `simge göster`, yaklaşık **600 ms** olan varsayılan süresini kullanır; ardından gelen bekleme buna eklenir. Örneğin 1. görevde kalp yaklaşık 600 ms görünür, sonra temizlenen ekran 400 ms boş kalır. “Kalp 400 ms yanıyor” demeyin. 4 ve 6. görevlerde bir kontrol turu yaklaşık 600 + 1000 = 1600 ms sürer. Hazırlık yüzü de ek 1000 ms bekleme boyunca görünür kalır. [Simge gösterme kaynağı](https://makecode.microbit.org/reference/basic/show-icon), [bekleme kaynağı](https://makecode.microbit.org/reference/basic/pause)

Kronometreyle milisaniye doğruluğunu notlandırmayın. **Doğru sayılara, sıraya, yalnızca bir kez yapılan işlere, kararın kaç kez sorulduğuna ve ekranda kalan bir final simgesine** bakın. Çocuk açıklayamıyorsa tek başına doğru çıktı görevi tamamlamaya yetmez.

## Paketler ve doğrulama kapsamı

- [Çocuk ZIP paketi](paketler/hafta-04-cocuklar.zip): yalnızca altı çocuk JavaScript dosyası.
- [Çözüm ZIP paketi](paketler/hafta-04-cozumler.zip): yalnızca altı tam çözüm JavaScript dosyası.

Bu kılavuz iki ZIP'in de dışında kalır. Çocuk paketinde cevaplar veya eğitmen açıklamaları bulunmaz.

Korunan [verify_logic.cjs](verify_logic.cjs); tekrar sayılarını, çıktı sırasını, ilk beş görevin hazır parça listelerinin eşleşmesini, yalnızca yorum içeren ödev kaynağını ve görev kartlarını açık tutan boş satırı kontrol eder. 4. görevde B'nin sekiz olası diziliminin tamamını, 6. görevde 32 dizilimin tamamını ve 5. görevde B'nin bir kez kontrol edilmesinden sonra rotanın sabit kalmasını kapsar. Güncel sonuçları ekrana yazdırmak için bu haftanın klasöründe `node verify_logic.cjs` komutunu çalıştırın.

Yerel testler, taklit MakeCode API'leri kullanır; gerçek cihaz davranışını veya zamanlamasını kanıtlamaz. MakeCode dönüşümü ve açık yorum kontrolleri, tarayıcıda yapılan ayrı kontrollerdir. Bu belge güncellemesi yeni bir tarayıcı veya fiziksel micro:bit testi yapıldığını iddia etmez.
