const wikiArticles = [
    {
        id: 1,
        slug: "wiki-ye-merhaba",
        title: "Wiki'ye Merhaba👋🏻",
        summary: "TAO Studios'un resmi Wiki / blog yazısı hoş geldin bölümü!",
        author: "SilaFriztche",
        authorRole: "Yönetici",
        date: "2 Ekim 2025 21:13",
        category: "Duyurular",
        isEdited: false,
        isPinned: true, // SABİTLENMİŞ: EN BAŞTA GÖRÜNÜR
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>Hoş Geldiniz!</h2>
            <p>TAO Studios'un resmi Wiki ve Blog sayfasına hoş geldiniz! Bu platform, hem stüdyomuz hakkındaki en son duyuruları, hem de oyunlarımızla ilgili derinlemesine rehberleri, arka plan hikayelerini ve topluluk bilgilerini bulabileceğiniz merkezi bir kaynaktır.</p>
            
            <h3>Wiki'nin Amacı Nedir?</h3>
            <p>Amacımız, oyuncu topluluğumuzun merak ettiği her şeyi şeffaf bir şekilde sunmaktır. Burada sadece resmi duyurular değil, aynı zamanda uzun soluklu oyunlarımızın tarihçesi ve lider kadromuz hakkındaki bilgileri de bulacaksınız.</p>
            <ul>
                <li><strong>Duyurular:</strong> Yeni oyunlar, güncellemeler ve etkinlikler.</li>
                <li><strong>Etkinlikler:</strong> Oyun içerisinde yapılan etkinlik ve törenler.</li>
                <li><strong>Tarihçe:</strong> Stüdyomuzun nasıl gelişip yükseldiği hakkında bilgilendirmeler.</li>

            </ul>
            
            <p>Keyifli okumalar dileriz!</p>
            
            <p>Saygılarımızla, <h3>TAO Studios Ekibi</h3>
        `
    },
    {
        id: 2,
        slug: "jandarma-liderleri",
        title: "TAO | Jandarma Liderleri",
        summary: "TAO içerisinde tarihler boyunca Jandarma Liderliği yapmış kişilerin bulunduğu bölüm.",
        author: "SilaFriztche",
        authorRole: "Yönetici",
        date: "2 Ekim 2025 21.18",
        category: "Wiki",
        isEdited: true,
        editedBy: "SilaFriztche",
        editorRole: "Yönetici",
        editedDate: "2 Ekim 2025 21.18",
        isPinned: false,
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>TAO | Jandarma Liderleri Tarihi</h2>
            <p>Bu liste, TAO içerisinde Jandarma Liderliği görevini üstlenmiş tüm değerli kişileri kronolojik sırayla göstermektedir. Bu görev, organizasyonun düzenini ve disiplinini sağlamak açısından büyük önem taşımaktadır.</p>
            
            <h3>Tarihsel Dönemler</h3>
            <p>Jandarma Liderliği, her dönemde farklı zorluklarla mücadele etmiş ve organizasyonun temel direklerinden biri olmuştur.</p>
            
            <ol>
                <li>sametreyiz_3</li>
                <li>SilaFriztche</li>
                <li>mertbaba_450</li>
                <li>AYAZ_ECERBERFN</li>
                <li>YeTeK01</li>
                <li>EmirBey2172
</li>
            </ol>
            
            <p>Onların çabaları ve liderlikleri sayesinde TAO'nun asayişi ve trafik düzeni her zaman daha güçlü kalmıştır.</p>
        `
    },
    {
        id: 3,
        slug: "sm-liderleri",
        title: "TAO | Sınır Müfettişleri Liderleri",
        summary: "TAO içerisinde tarihler boyunca Sınır Müfettişleri Liderliği yapmış kişilerin bulunduğu bölüm.",
        author: "SilaFriztche",
        authorRole: "Yönetici",
        date: "3 Ekim 2025 18.42",
        category: "Wiki",
        isEdited: true,
        editedBy: "SilaFriztche",
        editorRole: "Yönetici",
        editedDate: "18 Ekim 2025 20.25",
        isPinned: false,
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>TAO | Sınır Müfettişleri Liderleri Tarihi</h2>
            <p>Bu liste, TAO içerisinde Jandarma Liderliği görevini üstlenmiş tüm değerli kişileri kronolojik sırayla göstermektedir. Bu görev, sivillerimizin kampı tanımasına ve sınırın müdafaa edilmesine destek sağlamıştır..</p>
            
            <h3>Tarihsel Dönemler</h3>
            <p>Sınır Müfettişleri Liderliği, her dönemde farklı zorluklarla mücadele etmiş ve sınırın temel direklerinden biri olmuştur.</p>
            
            <ol>
                <li>sametreyiz_3</li>
                <li>SilaFriztche</li>
                <li>TR_MERHABA31</li>
                <li>MUHAMETMERT23</li>
                <li>arda_guler58587</li>
                <li>alper23442</li>
                <li>mertbaba_450</li>
                <li>osyahya0</li>
                <li>alper23442</li>
            </ol>
            
            <p>Onların çabaları ve liderlikleri sayesinde TAO sınırı her zaman daha iyileşmiştir.</p>
        `
    },
    {
       id: 4,
        slug: "özel-kuvvetler-liderleri",
        title: "TAO | Özel Kuvvetler Komutanlığı Liderleri",
        summary: "TAO içerisinde tarihler boyunca Özel Kuvvetler Liderliği yapmış kişilerin bulunduğu bölüm.",
        author: "SilaFriztche",
        authorRole: "Yönetici",
        date: "3 Ekim 2025 18.49",
        category: "Wiki",
        isEdited: false,
        editedBy: "SilaFriztche",
        editorRole: "Yönetici",
        editedDate: "3 Ekim 2025 18.49",
        isPinned: false,
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>TAO | Özel Kuvvetler Komutanlığı Liderleri Tarihçesi</h2>
            <p>TAO bünyesinde Özel Kuvvetler'e komuta etmiş liderlerin listesi aşağıdadır. Bu liderler, TAO'nun operasyonel yönetim ve harekatlarına büyük etki etmiştir..</p>
            
            <h3>Tarihsel Dönemler</h3>
            <p>Özel Kuvvetler, TAO'yu en iyi şekilde korumuştur..</p>
            
            <ul>
                <li>sametreyiz_3</li>
                <li>SilaFriztche</li>
                <li>Eymenerken34</li>
                <li>Babaprosaplar_4</li>
                <li>TekKralbjk75</li>
            </ul>
            
            <p>Operasyonel taktiklerimiz, bu liderler sayesinde güçlenmiştir.</p>
        `
    },
    {
       id: 5,
        slug: "kara-kuvvetleri-liderleri",
        title: "TAO | Kara Kuvvetleri Komutanlığı Liderleri",
        summary: "TAO içerisinde tarihler boyunca Kara Kuvvetleri Liderliği yapmış kişilerin bulunduğu bölüm.",
        author: "SilaFriztche",
        authorRole: "Yönetici",
        date: "3 Ekim 2025 18.53",
        category: "Wiki",
        isEdited: true,
        editedBy: "SilaFriztche",
        editorRole: "Yönetici",
        editedDate: "18 Ekim 2025 20.25",
        isPinned: false,
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>TAO | Kara Kuvvetleri Komutanlığı Liderleri Tarihçesi</h2>
            <p>TAO bünyesinde Kara Kuvvetleri'ne komuta etmiş liderlerin listesi aşağıdadır. Bu liderler, TAO'nun kara günücü yükseltmiştir.</p>
            
            <h3>Tarihsel Dönemler</h3>
            <p>Kara Kuvvetleri, TAO'nun kara gücünü en iyi şekilde korumuştur..</p>
            
            <ul>
                <li>sametreyiz_3</li>
                <li>SilaFriztche</li>
                <li>vadaaa013</li>
                <li>Yusuffriztche312</li>
                <li>SalihFriztche47</li>
                <li>Meto_312YT</li>
            </ul>
            
            <p>Karadaki gücümüz, bu liderler sayesinde güçlenmiştir.</p>
        `
    },
    {
       id: 6,
        slug: "hava-kuvvetleri-liderleri",
        title: "TAO | Hava Kuvvetleri Komutanlığı Liderleri",
        summary: "TAO içerisinde tarihler boyunca Hava Kuvvetleri Liderliği yapmış kişilerin bulunduğu bölüm.",
        author: "SilaFriztche",
        authorRole: "Yönetici",
        date: "3 Ekim 2025 18.57",
        category: "Wiki",
        isEdited: true,
        editedBy: "SilaFriztche",
        editorRole: "Yönetici",
        editedDate: "3 Ekim 2025 18.57",
        isPinned: false,
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>TAO | Hava Kuvvetleri Liderleri Tarihçesi</h2>
            <p>TAO bünyesinde Hava Kuvvetleri'ne komuta etmiş liderlerin listesi aşağıdadır. Bu liderler, havadaki gücümüze ve havamıza hava katmıştır.</p>
            
            <h3>Tarihsel Dönemler</h3>
            <p>Hava Kuvvetleri, TAO'nun hava gücünü arttırmıştır..</p>
            
            <ul>
                <li>sametreyiz_3</li>
                <li>arda5ei</li>
                <li>mertbaba_450</li>
                <li>Celil611610</li>
                <li>yunm1232</li>
                <li>SEFA443315244tercYY</li>
            </ul>
            
            <p>Havadaki denge ve karizmamız, Hava Kuvvetleri branşındaki liderler sayesinde güçlenmiştir.</p>
        `
    },
    {
       id: 7,
        slug: "eski-yklar",
        title: "TAO | Eski Yönetim Kurulu Üyeleri",
        summary: "TAO içerisinde tarihler boyunca yönetimde bulunmuş kişilerin bulunduğu bölüm.",
        author: "SilaFriztche",
        authorRole: "Yönetici",
        date: "3 Ekim 2025 19.02",
        category: "Wiki",
        isEdited: true,
        editedBy: "SilaFriztche",
        editorRole: "Yönetici",
        editedDate: "18 Ekim 2025 20.30",
        isPinned: false,
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>TAO | Eski Yönetim Üyelerinin Tarihçesi</h2>
            <p>TAO bünyesinde yönetimde bulunmuş kişilerin olduğu liste aşağıdadır. Bu üyeler, TAO'nun gelişiminde büyük roller oynamışlardır.</p>
            
            <h3>Tarihsel Dönemler</h3>
            <p>Yönetim üyelerimiz, TAO'ya birçok katkı sağlamıştır.</p>
            
            <ul>
                <li>sametreyiz_3</li>
                <li>SilaFriztche</li>
                <li>tahakod</li>
                <li>Emrehack6</li>
                <li>PofiTTN</li>
                <li>arda5ei</li>
                <li>yunm1232</li>
                <li>ZyonX</li>
                <li>BayHexra</li>
                <li>tasm483</li>
                <li>OznFriztche</li>
                <li>mertbaba_450</li>
                <li>Only_Salih9</li>
                <li>EYOF_KRAL125127</li>
                <li>TR_MERHABA31</li>
                <li>leararda36</li>
                <li>Xpro_trader</li>
                <li>bluewfox1</li>
                <li>Q7_BJK19037JK</li>
                <li>Azman67TR</li>
                <li>Ardax3232</li>
                <li>wqUYAGFEQF</li>
                <li>xokingxom</li>
                <li>Babaprosaplar_4</li>
                <li>Celil611610</li>
                <li>mahmutorg</li>
                <li>Mod_Toji</li>
                <li>Realrewnzsn</li>
                <li>SalihFriztche47</li>
                <li>Realrewnzsn</li>
                <li>alper23442</li>
                <li>RealBaconYT1256</li>
                <li>tuglukerim</li>
                <li>Emirxxcxx</li>
                <li>mehmet62540</li>
            </ul>
            
            <p>TAO'nun gelişimini, bu personellere borçluyuz.</p>
        `
    },
    {
       id: 8,
        slug: "askeri-inzibat-liderleri",
        title: "TAO | Askeri İnzibat Liderleri",
        summary: "TAO içerisinde tarihler boyunca İnzibat Liderliği yapmış kişilerin bulunduğu bölüm.",
        author: "SilaFriztche",
        authorRole: "Yönetici",
        date: "2 Ekim 2025 21.23",
        category: "Wiki",
        isEdited: true,
        editedBy: "SilaFriztche",
        editorRole: "Yönetici",
        editedDate: "18 Ekim 2025 20.26",
        isPinned: false,
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>TAO | Askeri İnzibat Liderleri Tarihçesi</h2>
            <p>TAO bünyesinde Askeri İnzibat'a komuta etmiş liderlerin listesi aşağıdadır. Bu liderler, TAO'nun disiplin yönetiminde büyük roller almışlardır.</p>
            
            <h3>Tarihsel Dönemler</h3>
            <p>Askeri İnzibat, TAO'nun disiplinini en usta şekilde yönlendirmiştir..</p>
            
            <ul>
                <li>sametreyiz_3</li>
                <li>EYO_KRAL125127</li>
                <li>31_Berkc</li>
                <li>tasm483</li>
                <li>xokingxom</li>
                <li>EmirBey2172</li>
                <li>LAVKRALI_46</li>
            </ul>
            
            <p>Disiplin gücümüz, İnzibat tarihimiz sayesinde kuvvetlenmiştir.</p>
        `
    }
    // YENİ MAKALELERİNİZİ BURAYA EKLEYİN.
];
