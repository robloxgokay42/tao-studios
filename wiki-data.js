const wikiArticles = [
    {
        id: 1,
        slug: "wiki-ye-merhaba",
        title: "Wiki'ye Merhaba",
        summary: "TA Studios'un resmi Wiki / blog yazısı hoş geldin bölümü ve platformun amacına dair bilgiler.",
        author: "spaceleafs",
        authorRole: "Yönetici",
        date: "19 Eylül 2025 21:56",
        category: "Duyurular",
        isEdited: true,
        isPinned: true, // SABİTLENMİŞ: EN BAŞTA GÖRÜNÜR
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>Hoş Geldiniz!</h2>
            <p>TAO Studios'un resmi Wiki ve Blog sayfasına hoş geldiniz! Bu platform, hem stüdyomuz hakkındaki en son duyuruları, hem de oyunlarımızla ilgili derinlemesine rehberleri, arka plan hikayelerini ve topluluk bilgilerini bulabileceğiniz merkezi bir kaynaktır.</p>
            
            <h3>Wiki'nin Amacı Nedir?</h3>
            <p>Amacımız, oyuncu topluluğumuzun merak ettiği her şeyi şeffaf bir şekilde sunmaktır. Burada sadece resmi duyurular değil, aynı zamanda uzun soluklu oyunlarımızın tarihçesi ve lider kadromuz hakkındaki bilgileri de bulacaksınız.</p>
            <ul>
                <li><strong>Duyurular:</strong> Yeni oyunlar, güncellemeler ve etkinlikler.</li>
                <li><strong>Rehberler:</strong> Oynanış, harita ipuçları ve taktikler.</li>
                <li><strong>Tarihçe:</strong> Oyun içi liderlerin ve grupların geçmişi.</li>
            </ul>
            
            <p>Keyifli okumalar dileriz!</p>
            
            <p>Saygılarımızla, <br>TAO Studios Ekibi</p>
        `
    },
    {
        id: 2,
        slug: "jandarma-liderleri",
        title: "TA | Jandarma Liderleri",
        summary: "TA içerisinde tarihler boyunca Jandarma Liderliği yapmış kişilerin bulunduğu bölüm.",
        author: "sbagarry",
        authorRole: "Medya Ekibi",
        date: "22 Eylül 2025 04:58",
        category: "Wiki",
        isEdited: true,
        editedBy: "sbagarry",
        editorRole: "Medya Ekibi",
        editedDate: "26 Eylül 2025 02:51",
        isPinned: false,
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>TA | Jandarma Liderleri Tarihi</h2>
            <p>Bu liste, TA (Team Arena) içerisinde Jandarma Liderliği görevini üstlenmiş tüm değerli kişileri kronolojik sırayla göstermektedir. Bu görev, organizasyonun düzenini ve disiplinini sağlamak açısından büyük önem taşımaktadır.</p>
            
            <h3>Tarihsel Dönemler</h3>
            <p>Jandarma Liderliği, her dönemde farklı zorluklarla mücadele etmiş ve organizasyonun temel direklerinden biri olmuştur.</p>
            
            <ol>
                <li><strong>Kişi A</strong> - (2018-2019): İlk dönem lideri, temel kuralları belirledi.</li>
                <li><strong>Kişi B</strong> - (2019-2021): Savaş dönemi boyunca disiplini korudu.</li>
                <li><strong>Kişi C</strong> - (2021-2023): Modernizasyon ve eğitim programlarını başlattı.</li>
                <li><strong>Kişi D</strong> - (2023-Günümüz): Mevcut liderlik, yenilikçi yaklaşımlarla liderliği sürdürüyor.</li>
            </ol>
            
            <p>Onların çabaları ve liderlikleri sayesinde TA topluluğu her zaman daha güçlü ve düzenli kalmıştır.</p>
        `
    },
    {
        id: 3,
        slug: "deniz-kuvvetleri-liderleri",
        title: "TA | Deniz Kuvvetleri Liderleri",
        summary: "TA içerisinde tarihler boyunca Deniz Kuvvetleri Liderliği yapmış kişilerin bulunduğu bölüm.",
        author: "sbagarry",
        authorRole: "Medya Ekibi",
        date: "22 Eylül 2025 04:52",
        category: "Wiki",
        isEdited: false,
        isPinned: false,
        // MAKALENİN İÇERİĞİ
        content: `
            <h2>TA | Deniz Kuvvetleri Liderleri Tarihçesi</h2>
            <p>TA (Team Arena) bünyesinde Deniz Kuvvetleri'ne komuta etmiş liderlerin listesi aşağıdadır. Bu liderler, deniz operasyonlarında ve kıyı güvenliğinde hayati rol oynamışlardır.</p>
            
            <h3>Operasyonel Başarılar</h3>
            <p>Deniz Kuvvetleri, stratejik deniz operasyonlarımızda her zaman öncü rol oynamıştır.</p>
            
            <ul>
                <li><strong>Lider 1</strong> - (2019): Büyük Mavi Operasyonunu yönetti.</li>
                <li><strong>Lider 2</strong> - (2020-2022): Güvenlik alanını iki katına çıkaran genişleme projesine liderlik etti.</li>
                <li><strong>Lider 3</strong> - (2022-2024): Modern deniz araçları entegrasyonunu tamamladı.</li>
            </ul>
            
            <p>Denizdeki gücümüz, bu liderlerin vizyonu sayesinde büyümüştür.</p>
        `
    }
    // YENİ MAKALELERİNİZİ BURAYA EKLEYİN.
];
