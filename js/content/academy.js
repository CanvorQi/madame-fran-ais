/*
 * Academy curriculum: units (bölüm) made of lessons (ders). A lesson borrows its rules from a
 * grammar group (`gram`, see grammar.js) and its words from a theme and/or that group; `levels`
 * overrides which word levels a theme contributes (default: the unit's level).
 * Quiz rows: [prompt, options, answerIndex, explanation]. Ids (`a1-1`, `l2`) key the saved progress: never change them.
 */
SEED.academy = [
    /* ---------------- A1 ---------------- */
    {
        id: "a1-1", level: "A1", title: "Bonjour !", name: "Tanışma ve Selamlaşma",
        desc: "Selamlaşmayı, kendini tanıtmayı ve özne zamirlerini öğren.", paragraphs: ["p1"],
        lessons: [
            {
                id: "l1", name: "Selamlaşma ve nezaket", theme: "greetings",
                quiz: [
                    ["Akşam birine selam verirken ne dersin?", ["Bonsoir", "Bonne nuit", "Bon appétit", "Au revoir"], 0, "Bonsoir: iyi akşamlar (karşılaşırken). Bonne nuit yatmadan önce söylenir."],
                    ["Tanımadığın birine kibarca « lütfen » demek için:", ["s'il te plaît", "s'il vous plaît", "de rien", "pardon"], 1, "vous kibar hitap; s'il vous plaît."],
                    ["« Merci ! » cevabı hangisi?", ["Bonjour", "De rien", "Salut", "Enchanté"], 1, "De rien: bir şey değil."],
                    ["Arkadaşına « nasılsın » demenin en samimi yolu:", ["Comment allez-vous ?", "Ça va ?", "Au revoir !", "Excusez-moi"], 1, "Ça va ? samimidir; comment allez-vous kibardır."],
                    ["« Hoşça kal, yarın görüşürüz »:", ["Au revoir, à demain !", "Bonjour, à bientôt !", "Merci, bonne nuit !", "Salut, ça va ?"], 0, "à demain: yarın görüşürüz."]
                ]
            },
            {
                id: "l2", name: "Özne zamirleri ve être", gram: "subject",
                quiz: [
                    ["Je ___ étudiant.", ["suis", "es", "est", "sommes"], 0, "je suis"],
                    ["Nous ___ turcs.", ["sont", "êtes", "sommes", "est"], 2, "nous sommes"],
                    ["Vous ___ français ?", ["es", "êtes", "sont", "suis"], 1, "vous êtes"],
                    ["Marie et Paul ? ___ sont au travail.", ["Elles", "Ils", "Il", "Nous"], 1, "Karışık grupta ils kullanılır."],
                    ["Konuşmada « nous » yerine sık kullanılan zamir:", ["on", "vous", "ils", "il"], 0, "On va au cinéma ? = Sinemaya gidelim mi?"],
                    ["Tanımadığın yaşlı bir kadına hitap ederken:", ["tu", "vous", "on", "elle"], 1, "Kibar hitap: vous."]
                ]
            },
            {
                id: "l3", name: "Ülkeler ve milliyetler", theme: "countries", levels: ["A1", "A2"],
                quiz: [
                    ["J'habite ___ France.", ["à", "en", "au", "aux"], 1, "Dişil ülke: en France."],
                    ["Il travaille ___ Canada.", ["en", "à", "au", "aux"], 2, "Eril ülke: au Canada."],
                    ["Elle habite ___ Paris.", ["en", "au", "à", "dans"], 2, "Şehir: à Paris."],
                    ["Elle est ___. (Türk)", ["turc", "turque", "turcs", "Turquie"], 1, "Dişil: turque."],
                    ["Milliyet sıfatları Fransızcada nasıl yazılır?", ["Büyük harfle: Français", "Küçük harfle: français", "Her zaman çoğul", "Artikelsiz yazılmaz"], 1, "Sıfat olarak küçük harf: il est français. İnsan anlamında isimse büyük: un Français."]
                ]
            }
        ]
    },
    {
        id: "a1-2", level: "A1", title: "Ma famille", name: "Aile ve İyelik",
        desc: "Aileni anlat, iyelik sıfatlarını ve sayıları kullan.", paragraphs: ["p4", "p19"],
        lessons: [
            {
                id: "l1", name: "Aile", theme: "family",
                quiz: [
                    ["Annenin annesi:", ["la tante", "la grand-mère", "la sœur", "la fille"], 1, "la grand-mère: büyükanne."],
                    ["« le frère » kimdir?", ["erkek kardeş", "kuzen", "amca", "oğul"], 0, "le frère: erkek kardeş."],
                    ["« les parents » ne demektir?", ["akrabalar", "anne ve baba", "çocuklar", "kardeşler"], 1, "les parents: anne-baba (ayrıca akrabalar)."],
                    ["J'ai deux ___ : un garçon et une fille.", ["enfants", "parents", "oncles", "voisins"], 0, "un enfant / des enfants."]
                ]
            },
            {
                id: "l2", name: "İyelik sıfatları", gram: "possessive",
                quiz: [
                    ["___ mère est professeur. (benim)", ["Mon", "Ma", "Mes", "Me"], 1, "mère dişil: ma mère."],
                    ["___ amie s'appelle Claire. (benim)", ["Ma", "Mon", "Mes", "Mi"], 1, "Sesli harfle başlayan dişil isimde mon: mon amie."],
                    ["Paul aime ___ mère.", ["son", "sa", "ses", "leur"], 1, "İsim dişil (mère) → sa; sahibin cinsiyeti önemli değil."],
                    ["Ce sont ___ livres. (bizim)", ["notre", "nos", "vos", "leurs"], 1, "Çoğul: nos."],
                    ["Ils aiment ___ enfants. (onların)", ["leur", "leurs", "ses", "son"], 1, "Çoğul isim: leurs enfants."]
                ]
            },
            {
                id: "l3", name: "Sayılar ve yaş", theme: "numbers",
                quiz: [
                    ["Yaşını söylerken hangi fiil kullanılır? « ___ vingt ans. »", ["Je suis", "J'ai", "Je fais", "Je vais"], 1, "Yaş avoir ile: j'ai vingt ans."],
                    ["70 Fransızca nasıl söylenir?", ["septante", "soixante-dix", "sept-dix", "soixante"], 1, "soixante-dix: altmış + on."],
                    ["80:", ["huitante", "quatre-vingts", "quatre-dix", "octante"], 1, "quatre-vingts: dört kere yirmi."],
                    ["« vingt et un » kaçtır?", ["12", "21", "20", "31"], 1, "21."],
                    ["Quel âge as-tu ? sorusu ne sorar?", ["Adını", "Yaşını", "Adresini", "Mesleğini"], 1, "âge: yaş."]
                ]
            }
        ]
    },
    {
        id: "a1-3", level: "A1", title: "Au café", name: "Artikeller ve Yiyecekler",
        desc: "Belirli, belirsiz ve bölüm artikellerini, olumsuz cümleyi öğren; kafede sipariş ver.", paragraphs: ["p3", "p16"],
        lessons: [
            {
                id: "l1", name: "Belirli ve belirsiz artikel", gram: "articles",
                quiz: [
                    ["J'aime ___ chocolat.", ["un", "le", "du", "de"], 1, "aimer + belirli artikel (genel beğeni)."],
                    ["Il y a ___ chat dans le jardin.", ["le", "un", "une", "du"], 1, "İlk kez söz edilen, sayılabilen: un chat."],
                    ["___ école est grande.", ["Le", "La", "L'", "Les"], 2, "Sesli harf önünde l'."],
                    ["Je vais ___ marché. (à + le)", ["à le", "au", "aux", "du"], 1, "à + le = au."],
                    ["C'est le livre ___ professeur. (de + le)", ["de le", "des", "du", "au"], 2, "de + le = du."],
                    ["Il est ___ médecin.", ["un", "le", "—  (artikel yok)", "du"], 2, "être + meslek: artikel gelmez. Il est médecin."]
                ]
            },
            {
                id: "l2", name: "Yiyecek, içecek ve bölüm artikeli", theme: "food",
                quiz: [
                    ["Je bois ___ lait.", ["le", "du", "de la", "des"], 1, "Belirsiz miktar, eril: du lait."],
                    ["Tu veux ___ eau ?", ["du", "de la", "de l'", "des"], 2, "Sesli harf önünde de l'."],
                    ["Elle mange ___ soupe.", ["du", "de la", "le", "un"], 1, "Dişil: de la soupe."],
                    ["Je voudrais un kilo ___ pommes.", ["des", "de", "du", "les"], 1, "Miktardan sonra de: un kilo de pommes."],
                    ["Restoranda kibarca sipariş:", ["Je veux un café.", "Je voudrais un café, s'il vous plaît.", "Donne café.", "Un café, merci beaucoup."], 1, "Kibar istek: je voudrais."]
                ]
            },
            {
                id: "l3", name: "Olumsuz cümle", gram: "negation",
                quiz: [
                    ["Je ___ parle ___ italien.", ["ne / pas", "pas / ne", "non / pas", "ne / plus"], 0, "ne + fiil + pas."],
                    ["Il ___ aime pas le café.", ["ne", "n'", "non", "pas"], 1, "Sesli harf önünde n'."],
                    ["J'ai une voiture. → Je n'ai pas ___ voiture.", ["une", "de", "la", "du"], 1, "Olumsuzda un/une → de."],
                    ["Tu ne viens pas ? — ___, je viens !", ["Oui", "Si", "Non", "Pas"], 1, "Olumsuz soruya evet: si."],
                    ["« Artık burada oturmuyorum »:", ["Je n'habite pas ici.", "Je n'habite plus ici.", "Je n'habite jamais ici.", "Je n'habite rien ici."], 1, "ne ... plus: artık ... değil."]
                ]
            }
        ]
    },
    {
        id: "a1-4", level: "A1", title: "Ma journée", name: "Günlük Hayat ve Şimdiki Zaman",
        desc: "Présent çekimi, günlük rutin, dönüşlü fiiller ve saat.", paragraphs: ["p2"],
        lessons: [
            {
                id: "l1", name: "Présent: -er ve -ir fiiller", gram: "present",
                quiz: [
                    ["Nous ___ français. (parler)", ["parle", "parlons", "parlez", "parlent"], 1, "nous -ons."],
                    ["Ils ___ à huit heures. (finir)", ["finit", "finissons", "finissent", "finis"], 2, "-ir fiil: ils finissent."],
                    ["Tu ___ où ? (habiter)", ["habite", "habites", "habitez", "habitent"], 1, "tu -es."],
                    ["Je ___ au travail en bus. (aller)", ["va", "vais", "vas", "allons"], 1, "je vais."],
                    ["« Je mange » Türkçede ne olabilir?", ["Sadece: yiyorum", "Sadece: yerim", "Hem yiyorum hem yerim", "Yedim"], 2, "Présent hem şimdiki hem geniş zamandır."]
                ]
            },
            {
                id: "l2", name: "Günlük rutin ve dönüşlü fiiller", theme: "daily", levels: ["A1", "A2"],
                quiz: [
                    ["Je ___ lève à sept heures.", ["me", "te", "se", "nous"], 0, "je me lève."],
                    ["Ils ___ couchent tard.", ["me", "se", "vous", "nous"], 1, "ils se couchent."],
                    ["Nous ___ habillons vite.", ["se", "nous", "vous", "me"], 1, "nous nous habillons."],
                    ["Tu t'___ comment ?", ["appelle", "appelles", "appelez", "appelons"], 1, "tu t'appelles (çift l)."],
                    ["« se laver » ne demektir?", ["yıkanmak", "kalkmak", "giyinmek", "yatmak"], 0, "se laver: yıkanmak."]
                ]
            },
            {
                id: "l3", name: "Saat ve zaman zarfları", theme: "time", gram: "adv-time",
                quiz: [
                    ["Saat kaç? sorusu:", ["Quelle heure est-il ?", "Quel temps fait-il ?", "Quel âge as-tu ?", "Combien ça coûte ?"], 0, "Quelle heure est-il ?"],
                    ["« Il est trois heures et demie »:", ["3:15", "3:30", "3:45", "2:30"], 1, "et demie: buçuk."],
                    ["D'abord je mange, ___ je sors.", ["hier", "ensuite", "jamais", "déjà"], 1, "Sıralama: d'abord, ensuite, enfin."],
                    ["Dünün karşılığı:", ["demain", "hier", "aujourd'hui", "maintenant"], 1, "hier: dün."],
                    ["Pazartesi günleri (her pazartesi):", ["lundi", "le lundi", "en lundi", "au lundi"], 1, "Alışkanlık: le lundi."]
                ]
            }
        ]
    },
    {
        id: "a1-5", level: "A1", title: "En ville", name: "Şehirde: Yer, Yön ve Sorular",
        desc: "Yer edatları, c'est / il y a ve soru sormak.", paragraphs: ["p5", "p13"],
        lessons: [
            {
                id: "l1", name: "Şehir ve yön tarifi", theme: "city", gram: "adv-place",
                quiz: [
                    ["« Sola dönün »:", ["Tournez à droite.", "Tournez à gauche.", "Allez tout droit.", "Traversez la rue."], 1, "à gauche: sola."],
                    ["« Dümdüz gidin »:", ["Allez tout droit.", "Allez à droite.", "Allez là-bas.", "Allez dehors."], 0, "tout droit."],
                    ["Uzaktaki bir yeri gösterirken:", ["ici", "là-bas", "dedans", "près"], 1, "là-bas: oradaki (uzak)."],
                    ["Tu vas à la poste ? — Oui, j'___ vais.", ["en", "y", "le", "la"], 1, "Yer: y."]
                ]
            },
            {
                id: "l2", name: "Yer edatları", gram: "prep-place",
                quiz: [
                    ["Le livre est ___ la table. (üzerinde)", ["sous", "sur", "dans", "devant"], 1, "sur: üzerinde."],
                    ["J'habite près ___ parc.", ["de le", "du", "de", "des"], 1, "près de + le = près du."],
                    ["La banque est ___ le musée et la poste.", ["entre", "chez", "contre", "sous"], 0, "entre ... et: arasında."],
                    ["Je vais ___ le médecin.", ["à", "chez", "dans", "en"], 1, "Kişiyle chez."],
                    ["Le chat dort ___ le lit. (altında)", ["sur", "sous", "devant", "entre"], 1, "sous: altında."]
                ]
            },
            {
                id: "l3", name: "C'est, il y a, voici", gram: "presentatives",
                quiz: [
                    ["___ des enfants dans le parc.", ["C'est", "Il y a", "Ce sont", "Il est"], 1, "Var olduğunu söylerken: il y a."],
                    ["___ mes amis.", ["C'est", "Ce sont", "Il y a", "Ils est"], 1, "Çoğul tanıtma: ce sont."],
                    ["Il est médecin. = ___ un médecin.", ["Il est", "C'est", "Il y a", "Voici"], 1, "Artikelli isimle c'est."],
                    ["Il n'y a pas ___ pain.", ["du", "de", "le", "un"], 1, "Olumsuzda de."],
                    ["Qui est là ? — C'est ___ !", ["je", "moi", "me", "mon"], 1, "c'est + vurgulu zamir: c'est moi."]
                ]
            },
            {
                id: "l4", name: "Soru sormak", gram: "question",
                quiz: [
                    ["___ est la gare ?", ["Quand", "Où", "Qui", "Combien"], 1, "Où: nerede."],
                    ["___ coûte ce livre ?", ["Combien", "Comment", "Pourquoi", "Quel"], 0, "Combien: ne kadar."],
                    ["___ heure est-il ?", ["Quel", "Quelle", "Quels", "Quelles"], 1, "heure dişil: quelle."],
                    ["___ tu apprends le français ? — Parce que j'aime la France.", ["Comment", "Pourquoi", "Où", "Quand"], 1, "Pourquoi / parce que."],
                    ["« Est-ce que tu viens ? » nasıl bir soru?", ["Evet-hayır sorusu", "Yer sorusu", "Zaman sorusu", "Kişi sorusu"], 0, "est-ce que cümleyi evet-hayır sorusu yapar."]
                ]
            }
        ]
    },

    /* ---------------- A2 ---------------- */
    {
        id: "a2-1", level: "A2", title: "Au passé", name: "Geçmişi Anlatmak",
        desc: "Passé composé (avoir / être), zaman edatları ve seyahat kelimeleri.", paragraphs: ["p10", "p12"],
        lessons: [
            {
                id: "l1", name: "Passé composé", gram: "passe-compose",
                quiz: [
                    ["Hier, j'___ mangé une pizza.", ["ai", "suis", "as", "a"], 0, "manger avoir ile: j'ai mangé."],
                    ["Elle ___ allée au cinéma.", ["a", "est", "ai", "es"], 1, "aller être ile çekilir."],
                    ["Nous sommes ___ tôt. (partir)", ["parti", "partis", "partie", "partir"], 1, "être + çoğul özne: partis."],
                    ["J'ai ___ un livre. (lire)", ["lisé", "lu", "lit", "lire"], 1, "lire → lu."],
                    ["Elle s'est ___ à sept heures. (lever)", ["levé", "levée", "levés", "lever"], 1, "Dönüşlü: être + uyum → levée."],
                    ["« Anlamadım »:", ["Je n'ai pas compris.", "Je ne pas compris.", "Je n'ai compris pas.", "Je ne suis pas compris."], 0, "ne + yardımcı fiil + pas + ortaç."]
                ]
            },
            {
                id: "l2", name: "Zaman edatları", gram: "prep-time",
                quiz: [
                    ["J'habite ici ___ trois ans. (hâlâ)", ["pendant", "depuis", "il y a", "dans"], 1, "Hâlâ süren: depuis."],
                    ["Je suis arrivé ___ deux jours. (önce)", ["depuis", "il y a", "dans", "pendant"], 1, "il y a: ... önce."],
                    ["Le train part ___ dix minutes. (sonra)", ["dans", "en", "depuis", "il y a"], 0, "dans + süre: ... sonra."],
                    ["Je me lave les mains avant ___ manger.", ["que", "de", "à", "—"], 1, "avant de + mastar."],
                    ["Je suis né ___ mai.", ["à", "en", "au", "le"], 1, "Ay: en mai."]
                ]
            },
            {
                id: "l3", name: "Ulaşım ve seyahat", theme: "travel",
                quiz: [
                    ["Je vais à Lyon ___ train.", ["à", "en", "au", "par"], 1, "Taşıtla en: en train, en bus."],
                    ["Je vais à l'école ___ pied.", ["en", "à", "par", "au"], 1, "à pied, à vélo."],
                    ["« le billet » nedir?", ["bilet", "bavul", "otel", "gar"], 0, "le billet: bilet."],
                    ["Tren istasyonu:", ["la gare", "l'aéroport", "la station-service", "le port"], 0, "la gare."]
                ]
            }
        ]
    },
    {
        id: "a2-2", level: "A2", title: "Souvenirs", name: "Anılar ve Alışkanlıklar",
        desc: "Imparfait, sıklık zarfları ve ev.", paragraphs: ["p11", "p14"],
        lessons: [
            {
                id: "l1", name: "Imparfait", gram: "imparfait",
                quiz: [
                    ["Quand j'___ petit, j'habitais à Izmir.", ["étais", "été", "suis", "serai"], 0, "être imparfait: j'étais."],
                    ["Nous ___ souvent au parc. (jouer)", ["jouions", "jouons", "jouerons", "avons joué"], 0, "nous -ions."],
                    ["Il ___ quand je suis sorti. (pleuvoir)", ["a plu", "pleuvait", "pleut", "pleuvra"], 1, "Arka plan: imparfait."],
                    ["Je dormais quand le téléphone ___.", ["sonnait", "a sonné", "sonne", "sonnera"], 1, "Tek ve bitmiş olay: passé composé."],
                    ["Imparfait hangi biçimden yapılır?", ["je biçiminden", "nous biçiminden", "mastardan", "ortaçtan"], 1, "nous parlons → parl- + ais."]
                ]
            },
            {
                id: "l2", name: "Sıklık zarfları", gram: "adv-freq",
                quiz: [
                    ["Je vais ___ au cinéma. (sık sık)", ["souvent", "jamais", "rarement", "toujours"], 0, "souvent: sık sık."],
                    ["Elle ne boit ___ de café.", ["pas jamais", "jamais", "toujours", "souvent"], 1, "ne ... jamais."],
                    ["J'ai ___ mangé ici. (sık sık; passé composé)", ["souvent", "souvents", "le souvent", "de souvent"], 0, "Zarf yardımcı fiilden sonra: j'ai souvent mangé."],
                    ["« ara sıra »:", ["de temps en temps", "tout le temps", "tous les jours", "jamais"], 0, "de temps en temps."]
                ]
            },
            {
                id: "l3", name: "Ev ve eşyalar", theme: "home",
                quiz: [
                    ["Yemek pişirilen oda:", ["la chambre", "la cuisine", "le salon", "la salle de bain"], 1, "la cuisine."],
                    ["« le loyer » nedir?", ["kira", "kiracı", "ev sahibi", "anahtar"], 0, "le loyer: kira."],
                    ["Uyuduğumuz eşya:", ["la chaise", "le lit", "la table", "l'armoire"], 1, "le lit: yatak."],
                    ["Je prends ___ ascenseur.", ["le", "la", "l'", "un'"], 2, "Sesli harf önünde l'."]
                ]
            }
        ]
    },
    {
        id: "a2-3", level: "A2", title: "Mes projets", name: "Gelecek ve Planlar",
        desc: "Futur proche, futur simple, passé récent ve hobiler.", paragraphs: ["p6", "p15"],
        lessons: [
            {
                id: "l1", name: "Yakın gelecek ve yakın geçmiş", gram: "futur-proche",
                quiz: [
                    ["Ce soir, je ___ regarder un film.", ["vais", "viens", "suis", "ai"], 0, "aller + mastar: yakın gelecek."],
                    ["Attention, il ___ pleuvoir !", ["va", "vient de", "est", "a"], 0, "il va pleuvoir."],
                    ["Je viens ___ manger. (az önce)", ["à", "de", "—", "pour"], 1, "venir de + mastar."],
                    ["Nous ___ partir demain.", ["allons", "allez", "vont", "va"], 0, "nous allons."],
                    ["« Je viens de Turquie » ne demek?", ["Az önce Türkiye'ydim", "Türkiye'den geliyorum", "Türkiye'ye gideceğim", "Türkiye'ye geldim"], 1, "venir de + yer: -den gelmek."]
                ]
            },
            {
                id: "l2", name: "Futur simple", gram: "futur-simple",
                quiz: [
                    ["Demain, il ___ beau. (faire)", ["fera", "faira", "fait", "va faire"], 0, "faire → fer-: il fera."],
                    ["Nous ___ en France l'été prochain. (aller)", ["allerons", "irons", "irions", "allons"], 1, "aller → ir-: nous irons."],
                    ["Quand je ___ grand, je serai médecin.", ["suis", "serai", "étais", "serais"], 1, "quand + futur."],
                    ["S'il pleut, je ___ à la maison.", ["reste", "resterai", "resterais", "restais"], 1, "si + présent, futur."],
                    ["Je ___ demain. (venir)", ["venirai", "viendrai", "viens", "viendrais"], 1, "venir → viendr-."]
                ]
            },
            {
                id: "l3", name: "Hobiler ve boş zaman", theme: "leisure",
                quiz: [
                    ["Je joue ___ football.", ["du", "au", "le", "de"], 1, "Spor oyunları: jouer à → au football."],
                    ["Je joue ___ piano.", ["au", "du", "le", "à"], 1, "Çalgılar: jouer de → du piano."],
                    ["Je fais ___ sport.", ["le", "du", "au", "un"], 1, "faire du sport."],
                    ["« se promener » ne demek?", ["gezinmek", "koşmak", "dans etmek", "yüzmek"], 0, "se promener: gezinmek."]
                ]
            }
        ]
    },
    {
        id: "a2-4", level: "A2", title: "Décrire et comparer", name: "Tanımlama, Karşılaştırma ve Zamirler",
        desc: "Karşılaştırma, giyim, nesne zamirleri ve emir kipi.", paragraphs: ["p17", "p20"],
        lessons: [
            {
                id: "l1", name: "Karşılaştırma", gram: "compare",
                quiz: [
                    ["Paul est ___ grand que Marc. (daha)", ["plus", "aussi", "très", "trop"], 0, "plus ... que."],
                    ["Elle est ___ gentille que sa sœur. (kadar)", ["plus", "aussi", "autant", "si que"], 1, "aussi ... que."],
                    ["Ce gâteau est ___ que l'autre. (daha iyi)", ["plus bon", "meilleur", "mieux", "bon plus"], 1, "bon → meilleur."],
                    ["Tu parles ___ que moi. (daha iyi)", ["meilleur", "mieux", "plus bien", "bon"], 1, "bien → mieux."],
                    ["C'est la ___ belle ville de France.", ["plus", "très", "meilleure", "trop"], 0, "En üstünlük: la plus belle."]
                ]
            },
            {
                id: "l2", name: "Giyim", theme: "clothes",
                quiz: [
                    ["Je ___ mon manteau. (giyiyorum)", ["mets", "porte à", "habille", "prends"], 0, "mettre: giymek (üstüne)."],
                    ["Elle porte une ___ rouge.", ["robe", "pantalon", "manteau", "chapeau"], 0, "une robe (dişil) — rouge uyar."],
                    ["Je peux ___ cette chemise ?", ["essayer", "acheter à", "porter de", "mettre à"], 0, "essayer: denemek."],
                    ["« la chaussure » nedir?", ["çorap", "ayakkabı", "şapka", "kemer"], 1, "la chaussure."]
                ]
            },
            {
                id: "l3", name: "Nesne zamirleri", gram: "object",
                quiz: [
                    ["Je vois Marie. → Je ___ vois.", ["le", "la", "lui", "les"], 1, "Doğrudan nesne, dişil: la."],
                    ["Je parle à Paul. → Je ___ parle.", ["le", "la", "lui", "leur"], 2, "à + kişi → lui."],
                    ["Je donne un cadeau à mes parents. → Je ___ donne un cadeau.", ["les", "leur", "lui", "leurs"], 1, "à + çoğul kişi → leur."],
                    ["Je ___ ai vu hier. (onu)", ["l'", "lui", "le", "y"], 0, "Sesli harf önünde l'."],
                    ["Tu veux du pain ? — Oui, j'___ veux.", ["y", "en", "le", "lui"], 1, "de + şey → en."]
                ]
            },
            {
                id: "l4", name: "Emir kipi", gram: "imperative",
                quiz: [
                    ["(tu) ___ la porte ! (fermer)", ["Fermes", "Ferme", "Fermez", "Fermer"], 1, "-er fiillerde tu biçiminde -s düşer."],
                    ["(nous) ___ au parc ! (aller)", ["Allons", "Allez", "Va", "Allons-nous"], 0, "nous: allons."],
                    ["(tu) ___ sage ! (être)", ["Es", "Sois", "Soit", "Être"], 1, "être: sois."],
                    ["(tu) Kalk! (se lever)", ["Te lève !", "Lève-toi !", "Lève-te !", "Lèves-toi !"], 1, "Olumlu emirde zamir sonra: lève-toi."],
                    ["(vous) Korkmayın!", ["N'ayez pas peur !", "Ne avez pas peur !", "N'ayez peur pas !", "Pas ayez peur !"], 0, "avoir: ayez; olumsuz: n'ayez pas."]
                ]
            }
        ]
    },
    {
        id: "a2-5", level: "A2", title: "Bien construire", name: "Sıfatlar, Dönüşlü Fiiller ve Edatlar",
        desc: "Sıfat uyumunu, dönüşlü fiilleri ve fiillerden sonra gelen à / de edatlarını öğren.",
        lessons: [
            {
                id: "l1", name: "Sıfatlar: uyum ve yer", theme: "description", levels: ["A1", "A2"], gram: "adjectives",
                quiz: [
                    ["Elle est très ___. (heureux)", ["heureux", "heureuse", "heureuxe", "heureuses"], 1, "-eux → -euse: heureuse."],
                    ["Doğru sıralama hangisi?", ["une rouge robe", "une robe rouge", "rouge une robe", "une robe la rouge"], 1, "Renkler isimden sonra gelir: une robe rouge."],
                    ["Hangisi doğru?", ["un grand chat noir", "un chat grand noir", "un noir grand chat", "un chat noir grand"], 0, "grand isimden önce, renk sonra gelir."],
                    ["C'est un ___ appartement.", ["beau", "bel", "belle", "beaux"], 1, "Sesli harfle başlayan eril tekil isimden önce: bel."],
                    ["des chaussures ___ (kahverengi)", ["marrons", "marron", "marronnes", "marronne"], 1, "Bir nesne adından gelen renk değişmez: marron."],
                    ["les monuments ___ (ulusal)", ["nationals", "nationales", "nationaux", "nationauxs"], 2, "-al → -aux: nationaux."],
                    ["Paul et Marie sont ___.", ["content", "contente", "contents", "contentes"], 2, "Eril ve dişil birlikteyse eril çoğul: contents."]
                ]
            },
            {
                id: "l2", name: "Dönüşlü fiiller", gram: "pronominal",
                quiz: [
                    ["Nous ___ levons à sept heures.", ["se", "nous", "vous", "me"], 1, "Zamir özneye uyar: nous nous levons."],
                    ["Je ___ appelle Ayşe.", ["me", "m'", "se", "je"], 1, "Sesli harf önünde me → m' : je m'appelle."],
                    ["Elle ___ levée tôt.", ["a", "s'est", "est", "s'a"], 1, "Dönüşlü fiiller passé composé'de être alır: elle s'est levée."],
                    ["Elle s'est ___ les mains.", ["lavée", "lavé", "lavées", "laver"], 1, "Ardından doğrudan nesne (les mains) gelince ortaç uymaz."],
                    ["« Kalk ! » (tu)", ["Lève-toi !", "Te lève !", "Lève-te !", "Toi lève !"], 0, "Olumlu emirde zamir sonra gelir ve te → toi olur."],
                    ["Je vais ___ coucher.", ["se", "me", "te", "nous"], 1, "Mastarda da zamir özneye uyar: je vais me coucher."],
                    ["« Ils s'aiment. » ne demek?", ["Kendilerini seviyorlar.", "Birbirlerini seviyorlar.", "Onu seviyorlar.", "Sevilmiyorlar."], 1, "Çoğulda dönüşlü zamir karşılıklı anlam verebilir."]
                ]
            },
            {
                id: "l3", name: "Fiil + edat (à / de)", gram: "verb-prep",
                quiz: [
                    ["J'apprends ___ nager.", ["de", "à", "—", "pour"], 1, "apprendre à + mastar."],
                    ["J'ai oublié ___ acheter du pain.", ["de", "d'", "à", "—"], 1, "oublier de; sesli harf önünde d'."],
                    ["J'aime ___ voyager.", ["à", "de", "—", "pour"], 2, "aimer mastarı doğrudan alır: j'aime voyager."],
                    ["Il joue ___ piano.", ["au", "du", "à la", "de"], 1, "Çalgı: jouer de → du piano."],
                    ["Il joue ___ football.", ["du", "au", "de", "à"], 1, "Spor ve oyun: jouer à → au football."],
                    ["Qu'est-ce que tu penses ___ ce film ?", ["à", "de", "sur", "pour"], 1, "Fikir sorarken penser de."],
                    ["« Otobüsü bekliyorum »:", ["J'attends le bus.", "J'attends au bus.", "J'attends pour le bus.", "J'attends du bus."], 0, "attendre edatsız kullanılır."]
                ]
            }
        ]
    },

    /* ---------------- B1 ---------------- */
    {
        id: "b1-1", level: "B1", title: "À mon avis", name: "Fikir Bildirmek",
        desc: "İlgi zamirleri, işaret zamirleri ve fikir kelimeleri.", paragraphs: ["p18", "p24"],
        lessons: [
            {
                id: "l1", name: "İlgi zamirleri", gram: "relative",
                quiz: [
                    ["L'homme ___ parle est mon père.", ["que", "qui", "où", "dont"], 1, "Özne: qui."],
                    ["Le livre ___ je lis est intéressant.", ["qui", "que", "où", "dont"], 1, "Nesne: que."],
                    ["La ville ___ j'habite est petite.", ["que", "qui", "où", "dont"], 2, "Yer: où."],
                    ["C'est le livre ___ je parle.", ["que", "qui", "dont", "où"], 2, "parler de → dont."],
                    ["Le jour ___ je suis arrivé, il pleuvait.", ["que", "où", "quand", "dont"], 1, "Zaman: où."]
                ]
            },
            {
                id: "l2", name: "Fikir ve tartışma", theme: "opinions", levels: ["A2", "B1"],
                quiz: [
                    ["« Bence »:", ["À mon avis", "Par exemple", "En fait", "De plus"], 0, "à mon avis."],
                    ["Il a mal au pied, ___ il court. (yine de)", ["donc", "pourtant", "parce que", "alors"], 1, "pourtant: yine de."],
                    ["Bien qu'il ___, nous sortons. (pleuvoir)", ["pleut", "pleuve", "pleuvait", "pleuvra"], 1, "bien que + subjonctif."],
                    ["« Haklısın »:", ["Tu as raison.", "Tu es raison.", "Tu as tort.", "Tu fais raison."], 0, "avoir raison."]
                ]
            },
            {
                id: "l3", name: "İşaret sıfat ve zamirleri", gram: "demonstrative",
                quiz: [
                    ["___ hôtel est cher.", ["Ce", "Cet", "Cette", "Ces"], 1, "Sesli harfle başlayan eril: cet."],
                    ["___ chaussures sont neuves.", ["Ce", "Cette", "Ces", "Cet"], 2, "Çoğul: ces."],
                    ["C'est le vélo de Paul ? — Non, c'est ___ de Marc.", ["celle", "celui", "ceux", "cela"], 1, "vélo eril tekil: celui."],
                    ["___ qui chante est ma sœur.", ["Celui", "Celle", "Ceux", "Ce"], 1, "Dişil tekil: celle."],
                    ["___ coûte combien ?", ["Ce", "Ça", "Cet", "Celui"], 1, "être dışındaki fiillerle ça."]
                ]
            }
        ]
    },
    {
        id: "b1-2", level: "B1", title: "Si j'étais…", name: "Dilek, Varsayım ve Duygular",
        desc: "Conditionnel, subjonctif ve duyguları anlatmak.", paragraphs: ["p15"],
        lessons: [
            {
                id: "l1", name: "Conditionnel", gram: "conditionnel",
                quiz: [
                    ["Je ___ un café, s'il vous plaît. (vouloir)", ["veux", "voudrais", "voudrai", "voulais"], 1, "Kibar istek: je voudrais."],
                    ["Si j'avais de l'argent, j'___ une maison.", ["achète", "achèterai", "achèterais", "achetais"], 2, "si + imparfait → conditionnel."],
                    ["Tu ___ dormir un peu. (devoir — öneri)", ["dois", "devrais", "devras", "devais"], 1, "Öneri: tu devrais."],
                    ["___-vous m'aider ? (pouvoir)", ["Pouvez", "Pourriez", "Pourrez", "Pouviez"], 1, "Kibar: pourriez-vous."],
                    ["Conditionnel nasıl yapılır?", ["Futur kökü + imparfait ekleri", "Présent + -ais", "Ortaç + être", "Mastar + -ons"], 0, "j'aimer + ais = j'aimerais."]
                ]
            },
            {
                id: "l2", name: "Subjonctif", gram: "subjonctif",
                quiz: [
                    ["Il faut que tu ___ maintenant. (partir)", ["pars", "partes", "partiras", "partais"], 1, "il faut que + subjonctif."],
                    ["Je veux que tu ___. (venir)", ["viens", "viennes", "venir", "viendras"], 1, "vouloir que + subjonctif."],
                    ["Je suis content que tu ___ là. (être)", ["es", "sois", "seras", "étais"], 1, "Duygu + que + subjonctif: sois."],
                    ["Je veux ___. (aynı özne: gelmek istiyorum)", ["que je vienne", "venir", "que viens", "viens"], 1, "Özne aynıysa mastar."],
                    ["Il faut que je ___ mes devoirs. (faire)", ["fais", "fasse", "ferai", "faisais"], 1, "faire → que je fasse."]
                ]
            },
            {
                id: "l3", name: "Duygular ve karakter", theme: "feelings", levels: ["A2", "B1"],
                quiz: [
                    ["Ne t'___ pas ! (s'inquiéter)", ["inquiète", "inquiètes", "inquiéter", "inquiété"], 0, "Olumsuz emir: ne t'inquiète pas."],
                    ["Je ___ ennuie à la maison.", ["me", "m'", "se", "te"], 1, "Sesli harf önünde m'."],
                    ["« avoir peur de » ne demek?", ["-den korkmak", "-i özlemek", "-e kızmak", "-den hoşlanmak"], 0, "avoir peur de: korkmak."],
                    ["« Sinirlenme! »:", ["Ne t'énerve pas !", "Ne te calme pas !", "Énerve-toi !", "Ne t'amuse pas !"], 0, "s'énerver: sinirlenmek."]
                ]
            }
        ]
    },
    {
        id: "b1-3", level: "B1", title: "Vivre en France", name: "Fransa'da Yaşamak",
        desc: "Resmi işler, acil durumlar ve belgisiz zamirler.", paragraphs: ["p21", "p22", "p23"],
        lessons: [
            {
                id: "l1", name: "Resmi işler", theme: "admin", levels: ["A2", "B1"],
                quiz: [
                    ["« Formu doldurun »:", ["Remplissez le formulaire.", "Remplir le formulaire vous.", "Faites le formulaire.", "Signez la demande."], 0, "remplir: doldurmak."],
                    ["Oturma izni:", ["le titre de séjour", "la carte d'identité", "le permis de conduire", "le visa touristique"], 0, "le titre de séjour."],
                    ["Mon passeport n'est plus ___.", ["valable", "obligatoire", "rempli", "fermé"], 0, "valable: geçerli."],
                    ["Gişede sıra beklemek:", ["faire la queue", "faire la cuisine", "prendre la queue", "attendre la file"], 0, "faire la queue."]
                ]
            },
            {
                id: "l2", name: "Acil durumlar", theme: "emergency", levels: ["A1", "A2", "B1"],
                quiz: [
                    ["Yardım çağırmak için bağırılan söz:", ["Au secours !", "Au revoir !", "Attention !", "Bon courage !"], 0, "Au secours: imdat."],
                    ["Yangında asansör yerine:", ["l'escalier", "la fenêtre", "le toit", "la cave"], 0, "Prenez l'escalier."],
                    ["« le témoin » kimdir?", ["tanık", "kurban", "hırsız", "polis"], 0, "le témoin: tanık."],
                    ["Karakola şikâyette bulunmak:", ["porter plainte", "faire une plainte à", "se plaindre la police", "donner plainte"], 0, "porter plainte."]
                ]
            },
            {
                id: "l3", name: "Belgisiz sıfat ve zamirler", gram: "indefinite",
                quiz: [
                    ["J'ai ___ amis à Lyon. (birkaç)", ["quelques", "chaque", "aucun", "quelqu'un"], 0, "quelques + çoğul."],
                    ["___ a appelé. (biri)", ["Quelque chose", "Quelqu'un", "Chacun", "Personne"], 1, "quelqu'un: biri."],
                    ["Je travaille ___ les jours.", ["tout", "toute", "tous", "toutes"], 2, "jours eril çoğul: tous."],
                    ["Je n'ai ___ idée.", ["aucun", "aucune", "quelque", "chaque"], 1, "idée dişil: aucune."],
                    ["Je voudrais quelque chose ___ chaud.", ["de", "du", "—", "le"], 0, "quelque chose de + sıfat."]
                ]
            }
        ]
    },
    {
        id: "b1-4", level: "B1", title: "Raconter", name: "Anlatmak ve Bağlamak",
        desc: "Fikirleri bağlayıcılarla bağla, geçmişi plus-que-parfait ile sırala, başkasının sözünü aktar.",
        lessons: [
            {
                id: "l1", name: "Bağlaçlar ve bağlayıcılar", gram: "connectors",
                quiz: [
                    ["Je reste à la maison ___ je suis malade.", ["donc", "parce que", "pourtant", "pour"], 1, "Neden: parce que."],
                    ["Il est riche, ___ il n'est pas heureux.", ["donc", "car", "pourtant", "parce que"], 2, "Karşıtlık: pourtant (yine de)."],
                    ["___ il pleut, je prends le bus. (cümle başında neden)", ["Car", "Comme", "Donc", "Pourtant"], 1, "car cümle başına gelmez; comme gelir."],
                    ["Même s'il ___, je sors.", ["pleut", "pleuve", "pleuvra", "pleuvrait"], 0, "même si + indicatif."],
                    ["Bien qu'il ___ fatigué, il travaille.", ["est", "soit", "était", "sera"], 1, "bien que + subjonctif."],
                    ["Le train est en retard ___ la neige.", ["grâce à", "à cause de", "parce que", "malgré"], 1, "Olumsuz neden + isim: à cause de."],
                    ["___ j'arrive, je t'appelle. (-er -mez)", ["Dès que", "Pendant que", "Alors que", "Avant"], 0, "dès que: -er -mez."]
                ]
            },
            {
                id: "l2", name: "Plus-que-parfait", gram: "plus-que-parfait",
                quiz: [
                    ["Quand je suis arrivé, le film ___ déjà commencé.", ["a", "avait", "était", "aura"], 1, "Daha önce olan: avait commencé (başlamıştı)."],
                    ["Elle ___ déjà partie.", ["avait", "était", "a", "est été"], 1, "partir être ile çekilir: elle était partie."],
                    ["Plus-que-parfait nasıl kurulur?", ["avoir / être présent + ortaç", "avoir / être imparfait + ortaç", "imparfait kökü + -ait", "futur kökü + -ais"], 1, "Yardımcı fiil imparfait'de: j'avais fini."],
                    ["Plus-que-parfait Türkçede hangi ekle karşılanır?", ["-ıyordu", "-mıştı", "-acaktı", "-ırdı"], 1, "-mıştı: j'avais mangé = yemiştim."],
                    ["Si j'___ su ! (Keşke bilseydim!)", ["ai", "avais", "aurais", "aurai"], 1, "Pişmanlık: si + plus-que-parfait."],
                    ["Nous nous ___ rencontrés à Lyon.", ["avions", "étions", "sommes", "avons"], 1, "Dönüşlü fiil: être imparfait + ortaç."]
                ]
            },
            {
                id: "l3", name: "Dolaylı anlatım", gram: "reported",
                quiz: [
                    ["« Je suis fatigué. » → Il dit qu'il ___ fatigué.", ["suis", "est", "était", "sera"], 1, "Aktaran fiil présent'te: zaman değişmez, kişi değişir."],
                    ["« Tu viens ? » → Il demande ___ je viens.", ["que", "si", "ce que", "qu'est-ce que"], 1, "Evet / hayır sorusu si ile aktarılır."],
                    ["« Qu'est-ce que tu veux ? » → Elle demande ___ je veux.", ["qu'est-ce que", "ce que", "que", "ce qui"], 1, "qu'est-ce que → ce que."],
                    ["« Ferme la porte ! » → Il me dit ___ fermer la porte.", ["de", "à", "que", "—"], 0, "Emir: dire de + mastar."],
                    ["« Je viendrai. » → Il a dit qu'il ___.", ["viendra", "viendrait", "vient", "est venu"], 1, "Geçmişte aktarma: futur → conditionnel."],
                    ["« J'ai fini. » → Il a dit qu'il ___ fini.", ["a", "avait", "aurait", "ait"], 1, "passé composé → plus-que-parfait."],
                    ["« Je pars demain. » → Elle a dit qu'elle partait ___.", ["demain", "le lendemain", "la veille", "hier"], 1, "Geçmişte aktarırken demain → le lendemain."]
                ]
            }
        ]
    },
    {
        id: "b1-5", level: "B1", title: "Autrement dit", name: "Gérondif ve Edilgen Çatı",
        desc: "en + -ant ile iki eylemi bağla, edilgen çatıyla eylemden etkileneni öne çıkar.",
        lessons: [
            {
                id: "l1", name: "Gérondif", gram: "gerondif",
                quiz: [
                    ["faire → en ___", ["faisant", "fasant", "faiant", "fant"], 0, "nous faisons → en faisant."],
                    ["Je chante ___ cuisinant.", ["en", "par", "à", "pour"], 0, "Gérondif: en + -ant."],
                    ["On apprend une langue en ___.", ["pratiquer", "pratiquant", "pratiqué", "pratique"], 1, "en pratiquant: pratik yaparak."],
                    ["être → en ___", ["étant", "êtant", "soyant", "ayant"], 0, "Düzensiz: être → étant."],
                    ["« En partant maintenant, tu arriveras à l'heure. » Gérondif burada ne anlatıyor?", ["koşul", "neden", "amaç", "karşıtlık"], 0, "Şimdi çıkarsan: koşul."],
                    ["Il mange ___ regardant la télé. (hem ... hem)", ["tout en", "en tout", "pendant", "alors"], 0, "tout en eşzamanlılığı vurgular."]
                ]
            },
            {
                id: "l2", name: "Edilgen çatı", gram: "passive",
                quiz: [
                    ["Cette maison a été ___ en 1900.", ["construit", "construite", "construits", "construire"], 1, "Ortaç özneye uyar: maison dişil → construite."],
                    ["La souris est mangée ___ le chat.", ["de", "par", "à", "pour"], 1, "Eylemi yapan par ile verilir."],
                    ["Ce professeur est aimé ___ ses élèves.", ["par", "de", "à", "avec"], 1, "Duygu fiillerinde de kullanılır."],
                    ["La lettre ___ écrite demain. (futur)", ["est", "a été", "sera", "était"], 2, "Zamanı être gösterir: sera écrite."],
                    ["« Burada Fransızca konuşulur »:", ["On parle français ici.", "Français est parlé ici par on.", "Il parle français ici.", "Le français parle ici."], 0, "Konuşmada edilgen yerine on tercih edilir."],
                    ["Ce vin ___ boit frais.", ["se", "on", "est", "le"], 0, "se + fiil edilgen anlam verir: soğuk içilir."]
                ]
            }
        ]
    }
];
