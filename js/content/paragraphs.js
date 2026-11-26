/* Seed reading passages. `a` is the zero-based index of the correct option. */
SEED.paragraphs = [
    {
        id: "p1", title: "Je me présente", level: "A1", topic: "Tanışma",
        fr: "Bonjour ! Je m'appelle Ayşe. J'ai vingt-cinq ans et je viens de Turquie. J'habite à Lyon avec ma sœur. Je suis étudiante à l'université. J'apprends le français depuis un an. J'aime lire et écouter de la musique.",
        tr: "Merhaba! Adım Ayşe. Yirmi beş yaşındayım ve Türkiye'den geliyorum. Kız kardeşimle Lyon'da oturuyorum. Üniversitede öğrenciyim. Bir yıldır Fransızca öğreniyorum. Okumayı ve müzik dinlemeyi severim.",
        q: [
            { q: "Quel âge a Ayşe ?", o: ["Quinze ans", "Vingt ans", "Vingt-cinq ans", "Trente ans"], a: 2 },
            { q: "Où habite Ayşe ?", o: ["À Paris", "À Lyon", "À Ankara", "À Nice"], a: 1 },
            { q: "Avec qui habite-t-elle ?", o: ["Avec sa sœur", "Avec sa mère", "Avec son mari", "Avec une amie"], a: 0 }
        ]
    },
    {
        id: "p2", title: "Ma journée", level: "A1", topic: "Günlük Yaşam",
        fr: "Je me lève à sept heures tous les jours. D'abord, je prends une douche. Ensuite, je prends le petit déjeuner avec ma famille. Je mange du pain et je bois un café. Je vais au travail en métro. Mon bureau est au centre-ville. J'aime mon travail et mes collègues sont très sympas.",
        tr: "Her gün saat yedide kalkarım. Önce duş alırım. Sonra ailemle kahvaltı yaparım. Ekmek yer, bir kahve içerim. İşe metroyla giderim. Ofisim şehir merkezindedir. İşimi severim ve iş arkadaşlarım çok cana yakındır.",
        q: [
            { q: "À quelle heure se lève-t-il ?", o: ["À six heures", "À sept heures", "À huit heures", "À neuf heures"], a: 1 },
            { q: "Comment va-t-il au travail ?", o: ["En voiture", "En bus", "En métro", "À pied"], a: 2 },
            { q: "Où est le bureau ?", o: ["À la campagne", "Près de la mer", "À la gare", "Au centre-ville"], a: 3 }
        ]
    },
    {
        id: "p3", title: "À la boulangerie", level: "A1", topic: "Fransa",
        fr: "Tous les matins, Marie va à la boulangerie. Elle achète une baguette et deux croissants. La boulangère est très gentille. Marie dit : « Bonjour, madame. Une baguette, s'il vous plaît. » Le pain est encore chaud. Elle paie un euro et rentre à la maison.",
        tr: "Marie her sabah fırına gider. Bir baget ve iki kruvasan alır. Fırıncı kadın çok kibardır. Marie şöyle der: “Merhaba hanımefendi. Bir baget, lütfen.” Ekmek hâlâ sıcaktır. Bir euro öder ve eve döner.",
        q: [
            { q: "Qu'est-ce que Marie achète ?", o: ["Un gâteau", "Une baguette et deux croissants", "Du lait", "Un café"], a: 1 },
            { q: "Comment est le pain ?", o: ["Froid", "Vieux", "Chaud", "Cher"], a: 2 }
        ]
    },
    {
        id: "p4", title: "Ma famille", level: "A1", topic: "Tanışma",
        fr: "Ma famille n'est pas grande. Mon père s'appelle Marc et ma mère s'appelle Sophie. Mon père est médecin et ma mère est professeur. J'ai un frère et une sœur. Mon frère a dix ans et ma sœur a seize ans. Nous avons aussi un petit chien. Le dimanche, nous mangeons chez ma grand-mère.",
        tr: "Ailem büyük değil. Babamın adı Marc, annemin adı Sophie. Babam doktor, annem öğretmen. Bir erkek ve bir kız kardeşim var. Erkek kardeşim on, kız kardeşim on altı yaşında. Küçük bir köpeğimiz de var. Pazar günleri büyükannemin evinde yemek yeriz.",
        q: [
            { q: "Quel est le métier du père ?", o: ["Professeur", "Médecin", "Vendeur", "Étudiant"], a: 1 },
            { q: "Où mangent-ils le dimanche ?", o: ["Au restaurant", "Dans le jardin", "Chez la grand-mère", "À l'école"], a: 2 }
        ]
    },
    {
        id: "p5", title: "Une ville en France", level: "A1", topic: "Seyahat",
        fr: "Nice est une belle ville dans le sud de la France. Elle est près de la mer. Il fait souvent beau et il ne fait pas très froid en hiver. Il y a beaucoup de restaurants, de musées et de petites rues. Les touristes aiment marcher au bord de la mer.",
        tr: "Nice, Fransa'nın güneyinde güzel bir şehirdir. Denizin yakınındadır. Hava sık sık güzeldir ve kışın çok soğuk olmaz. Birçok restoran, müze ve küçük sokak vardır. Turistler deniz kıyısında yürümeyi sever.",
        q: [
            { q: "Où est Nice ?", o: ["Dans le nord", "Dans le sud", "À la montagne", "À Paris"], a: 1 },
            { q: "Comment est l'hiver à Nice ?", o: ["Très froid", "Pas très froid", "Très long", "Avec beaucoup de neige"], a: 1 }
        ]
    },
    {
        id: "p6", title: "Un samedi à Paris", level: "A2", topic: "Hava",
        fr: "Samedi dernier, je suis allée à Paris avec mon amie Claire. Nous voulions marcher au bord de la Seine, mais il faisait froid et il pleuvait. Alors, nous sommes entrées dans un petit café et nous avons pris une soupe chaude. Après le déjeuner, nous avons visité un musée. C'était calme et agréable. Nous sommes rentrées par le dernier train, fatiguées mais contentes.",
        tr: "Geçen cumartesi arkadaşım Claire ile Paris'e gittim. Sen kıyısında yürümek istiyorduk ama hava soğuktu ve yağmur yağıyordu. Bu yüzden küçük bir kafeye girdik ve sıcak çorba içtik. Öğle yemeğinden sonra bir müze gezdik. Sakin ve hoştu. Son trenle döndük; yorgun ama mutluyduk.",
        q: [
            { q: "Pourquoi n'ont-elles pas marché au bord de la Seine ?", o: ["Le musée était ouvert", "Il faisait mauvais", "Elles étaient en retard", "Claire était malade"], a: 1 },
            { q: "Qu'est-ce qu'elles ont fait après le déjeuner ?", o: ["Elles ont visité un musée", "Elles ont fait les courses", "Elles ont vu un film", "Elles sont rentrées"], a: 0 }
        ]
    },
    {
        id: "p7", title: "Le petit déjeuner français", level: "A2", topic: "Yemek",
        fr: "En France, le petit déjeuner est souvent simple. Les gens boivent un café, un thé ou un chocolat chaud. Ils mangent du pain avec du beurre et de la confiture. Le week-end, beaucoup de familles achètent des croissants à la boulangerie. Ce n'est pas un grand repas, parce que le déjeuner est plus important.",
        tr: "Fransa'da kahvaltı genellikle sadedir. İnsanlar kahve, çay veya sıcak çikolata içer. Tereyağı ve reçelle ekmek yerler. Hafta sonu birçok aile fırından kruvasan alır. Büyük bir öğün değildir, çünkü öğle yemeği daha önemlidir.",
        q: [
            { q: "Comment est le petit déjeuner en France ?", o: ["Très grand", "Souvent simple", "Très cher", "Toujours salé"], a: 1 },
            { q: "Quand achète-t-on des croissants ?", o: ["Le week-end", "Le lundi", "Le soir", "En été"], a: 0 }
        ]
    },
    {
        id: "p8", title: "Le 14 juillet", level: "A2", topic: "Fransa",
        fr: "Le 14 juillet est la fête nationale française. Ce jour-là, il y a un grand défilé à Paris, sur les Champs-Élysées. Le soir, les gens regardent les feux d'artifice et ils dansent dans la rue. Les écoles et les bureaux sont fermés. C'est une journée très joyeuse pour toute la France.",
        tr: "14 Temmuz Fransa'nın ulusal bayramıdır. O gün Paris'te, Champs-Élysées'de büyük bir geçit töreni olur. Akşam insanlar havai fişekleri izler ve sokakta dans eder. Okullar ve ofisler kapalıdır. Bütün Fransa için çok neşeli bir gündür.",
        q: [
            { q: "Où est le grand défilé ?", o: ["À Lyon", "À Marseille", "Sur les Champs-Élysées", "À la mer"], a: 2 },
            { q: "Que font les gens le soir ?", o: ["Ils travaillent", "Ils regardent les feux d'artifice", "Ils vont à l'école", "Ils restent au bureau"], a: 1 }
        ]
    },
    {
        id: "p9", title: "Chez le médecin", level: "A2", topic: "Sağlık",
        fr: "Hier matin, Paul ne se sentait pas bien. Il avait mal à la tête et au ventre. Il a pris un rendez-vous chez le médecin. Le médecin lui a dit : « Vous avez la grippe. Vous devez rester au lit pendant trois jours et boire beaucoup d'eau. » Paul est passé à la pharmacie et il a acheté des médicaments.",
        tr: "Dün sabah Paul kendini iyi hissetmiyordu. Başı ve karnı ağrıyordu. Doktordan randevu aldı. Doktor ona şöyle dedi: “Grip olmuşsunuz. Üç gün yatakta kalmalı ve bol su içmelisiniz.” Paul eczaneye uğradı ve ilaç aldı.",
        q: [
            { q: "Qu'est-ce que Paul a ?", o: ["La grippe", "Mal au pied", "Mal aux dents", "Sommeil"], a: 0 },
            { q: "Combien de temps doit-il rester au lit ?", o: ["Un jour", "Deux jours", "Trois jours", "Une semaine"], a: 2 }
        ]
    },
    {
        id: "p10", title: "Mes vacances en Bretagne", level: "A2", topic: "Seyahat",
        fr: "L'été dernier, je suis parti en Bretagne avec ma famille. Nous avons pris le train jusqu'à Rennes, puis une voiture. Nous avons loué une petite maison près de la mer. Tous les jours, nous marchions sur la plage et nous mangions des crêpes. Il a plu deux fois, mais ce n'était pas grave. L'année prochaine, nous voulons y retourner.",
        tr: "Geçen yaz ailemle Bretanya'ya gittim. Rennes'e kadar trenle, sonra arabayla gittik. Denizin yakınında küçük bir ev kiraladık. Her gün sahilde yürür, krep yerdik. İki kez yağmur yağdı ama önemli değildi. Gelecek yıl oraya geri dönmek istiyoruz.",
        q: [
            { q: "Comment sont-ils allés à Rennes ?", o: ["En avion", "En train", "À vélo", "En bus"], a: 1 },
            { q: "Qu'est-ce qu'ils mangeaient ?", o: ["Des crêpes", "Du riz", "Des pommes", "Du poulet"], a: 0 },
            { q: "Que veulent-ils faire l'année prochaine ?", o: ["Rester à la maison", "Aller à Paris", "Retourner en Bretagne", "Acheter une voiture"], a: 2 }
        ]
    },
    {
        id: "p11", title: "Trouver un appartement", level: "A2", topic: "Günlük Yaşam",
        fr: "Lucas cherche un appartement à Toulouse. Il veut habiter près de l'université parce qu'il n'a pas de voiture. Hier, il a visité un petit appartement au troisième étage. Il y a une chambre, une cuisine et une salle de bain. Le loyer n'est pas trop cher, mais il n'y a pas d'ascenseur. Lucas va réfléchir et il va appeler le propriétaire demain.",
        tr: "Lucas, Toulouse'da bir daire arıyor. Üniversitenin yakınında oturmak istiyor çünkü arabası yok. Dün üçüncü katta küçük bir daire gezdi. Bir yatak odası, bir mutfak ve bir banyo var. Kira çok pahalı değil ama asansör yok. Lucas düşünecek ve yarın ev sahibini arayacak.",
        q: [
            { q: "Pourquoi Lucas veut-il habiter près de l'université ?", o: ["Il n'a pas de voiture", "Il aime le bruit", "Il travaille à la gare", "Son ami habite là"], a: 0 },
            { q: "Quel est le problème de l'appartement ?", o: ["Il est trop cher", "Il n'y a pas d'ascenseur", "Il est trop loin", "Il n'y a pas de cuisine"], a: 1 }
        ]
    },
    {
        id: "p12", title: "Un nouveau travail", level: "A2", topic: "İş",
        fr: "La semaine dernière, Sophie a commencé un nouveau travail dans une entreprise à Bordeaux. Le premier jour, elle était un peu stressée. Ses collègues l'ont aidée et ils ont déjeuné ensemble à midi. Maintenant, elle connaît tout le monde et elle aime beaucoup son bureau. Elle finit à cinq heures et elle rentre à vélo.",
        tr: "Geçen hafta Sophie, Bordeaux'da bir şirkette yeni bir işe başladı. İlk gün biraz gergindi. İş arkadaşları ona yardım etti ve öğlen birlikte yemek yediler. Şimdi herkesi tanıyor ve ofisini çok seviyor. Saat beşte işi bitiriyor ve bisikletle eve dönüyor.",
        q: [
            { q: "Comment était Sophie le premier jour ?", o: ["Un peu stressée", "Très malade", "En colère", "En retard"], a: 0 },
            { q: "Comment rentre-t-elle à la maison ?", o: ["En voiture", "En métro", "À pied", "À vélo"], a: 3 }
        ]
    }
];

/* Passages written for grammar groups (`gram`, see grammar.js) and for the newer themes (`topic` = theme name). */
SEED.paragraphs.push(
    {
        id: "p13", title: "Mon quartier", level: "A1", topic: "Dilbilgisi", gram: ["prep-place", "adv-place", "presentatives"],
        fr: "J'habite dans un petit quartier près du centre-ville. Il y a une boulangerie en face de ma maison et une pharmacie à côté de la boulangerie. Au bout de la rue, il y a un parc. C'est mon endroit préféré. Au milieu du parc, il y a une fontaine et les enfants jouent autour. La gare n'est pas loin : elle est là-bas, derrière l'église.",
        tr: "Şehir merkezine yakın küçük bir mahallede oturuyorum. Evimin karşısında bir fırın, fırının yanında da bir eczane var. Sokağın sonunda bir park var. Orası en sevdiğim yer. Parkın ortasında bir çeşme var ve çocuklar etrafında oynuyor. Gar uzak değil: orada, kilisenin arkasında.",
        q: [
            { q: "Où est la boulangerie ?", o: ["Derrière l'église", "En face de la maison", "Au bout de la rue", "Dans le parc"], a: 1 },
            { q: "Qu'est-ce qu'il y a au milieu du parc ?", o: ["Une fontaine", "Une gare", "Une pharmacie", "Une église"], a: 0 },
            { q: "Où est la gare ?", o: ["À côté de la boulangerie", "Dans le parc", "Derrière l'église", "En face de la maison"], a: 2 }
        ]
    },
    {
        id: "p14", title: "Autrefois et aujourd'hui", level: "A2", topic: "Dilbilgisi", gram: ["imparfait", "passe-compose", "adv-time"],
        fr: "Quand j'étais petite, j'habitais dans un village. Il n'y avait pas de supermarché, alors ma mère allait au marché tous les samedis. Nous n'avions pas de télévision, mais nous jouions souvent dehors. Un jour, mon père a trouvé un travail en ville et nous sommes partis. Aujourd'hui, j'habite à Lyon. La vie est différente, mais je pense souvent à mon village.",
        tr: "Küçükken bir köyde otururdum. Süpermarket yoktu, bu yüzden annem her cumartesi pazara giderdi. Televizyonumuz yoktu ama sık sık dışarıda oynardık. Bir gün babam şehirde bir iş buldu ve taşındık. Bugün Lyon'da oturuyorum. Hayat farklı ama köyümü sık sık düşünüyorum.",
        q: [
            { q: "Où allait sa mère le samedi ?", o: ["Au supermarché", "Au marché", "En ville", "Au travail"], a: 1 },
            { q: "Pourquoi sont-ils partis ?", o: ["Le village était triste", "Ils n'avaient pas de télévision", "Le père a trouvé un travail en ville", "La mère était malade"], a: 2 },
            { q: "Où habite-t-elle aujourd'hui ?", o: ["Dans son village", "À Paris", "À Lyon", "À la campagne"], a: 2 }
        ]
    },
    {
        id: "p15", title: "Mes projets", level: "A2", topic: "Dilbilgisi", gram: ["futur-proche", "futur-simple", "conditionnel"],
        fr: "Ce soir, je vais préparer ma valise, parce que demain je vais partir en France. Je vais suivre un cours de français à Nice pendant trois mois. Quand je parlerai bien, je chercherai un travail là-bas. L'année prochaine, mes parents viendront me voir. J'aimerais aussi visiter Paris, mais ce sera peut-être pour un autre voyage.",
        tr: "Bu akşam bavulumu hazırlayacağım, çünkü yarın Fransa'ya gidiyorum. Üç ay boyunca Nice'te bir Fransızca kursuna katılacağım. İyi konuşunca orada iş arayacağım. Gelecek yıl annemle babam beni görmeye gelecek. Paris'i de gezmek isterdim ama bu belki başka bir yolculuğa kalır.",
        q: [
            { q: "Quand part-il en France ?", o: ["Ce soir", "Demain", "L'année prochaine", "Dans trois mois"], a: 1 },
            { q: "Combien de temps dure le cours ?", o: ["Une semaine", "Un mois", "Trois mois", "Un an"], a: 2 },
            { q: "Qui viendra le voir ?", o: ["Ses parents", "Ses amis", "Son professeur", "Sa sœur"], a: 0 }
        ]
    },
    {
        id: "p16", title: "Au café", level: "A1", topic: "Dilbilgisi", gram: ["articles", "conditionnel", "negation"],
        fr: "— Bonjour, madame. Je voudrais un café et de l'eau, s'il vous plaît. — Vous voulez du lait dans votre café ? — Non merci, je ne prends pas de lait. Vous avez des croissants ? — Ah non, il n'y a plus de croissants, mais nous avons du pain et de la confiture. — Très bien, alors un peu de pain avec de la confiture. J'adore la confiture de fraises !",
        tr: "— Merhaba hanımefendi. Bir kahve ve su rica ediyorum lütfen. — Kahvenize süt ister misiniz? — Hayır teşekkürler, süt almıyorum. Kruvasanınız var mı? — Ah hayır, kruvasan kalmadı ama ekmeğimiz ve reçelimiz var. — Çok iyi, o zaman biraz ekmek ve reçel. Çilek reçelini çok severim!",
        q: [
            { q: "Qu'est-ce qu'il commande d'abord ?", o: ["Un thé", "Un café et de l'eau", "Du lait", "Un croissant"], a: 1 },
            { q: "Pourquoi il ne prend pas de croissant ?", o: ["Il n'aime pas ça", "C'est trop cher", "Il n'y en a plus", "Il n'a pas faim"], a: 2 },
            { q: "Qu'est-ce qu'il adore ?", o: ["Le lait", "Le café", "La confiture de fraises", "Le pain"], a: 2 }
        ]
    },
    {
        id: "p17", title: "Deux frères", level: "A2", topic: "Dilbilgisi", gram: ["compare", "possessive", "stressed"],
        fr: "Mon frère Karim et moi, nous sommes très différents. Il est plus grand que moi, mais je suis plus âgé que lui. Il parle mieux anglais, mais moi, je cuisine mieux. Sa chambre est toujours propre ; la mienne est moins rangée. Nos parents disent que nous sommes aussi gentils l'un que l'autre. Pour moi, c'est le meilleur frère du monde.",
        tr: "Kardeşim Karim ve ben çok farklıyız. O benden daha uzun ama ben ondan daha büyüğüm. O daha iyi İngilizce konuşuyor ama ben daha iyi yemek yapıyorum. Onun odası hep temiz; benimki daha az derli toplu. Annemle babam ikimizin de eşit derecede iyi kalpli olduğunu söylüyor. Bana göre o dünyanın en iyi kardeşi.",
        q: [
            { q: "Qui est le plus grand ?", o: ["Karim", "Le narrateur", "Les deux", "Le père"], a: 0 },
            { q: "Qui cuisine mieux ?", o: ["Karim", "La mère", "Le narrateur", "Personne"], a: 2 },
            { q: "Comment est la chambre de Karim ?", o: ["Petite", "Toujours propre", "Moins rangée", "Sale"], a: 1 }
        ]
    },
    {
        id: "p18", title: "Le jour où j'ai perdu mon chien", level: "B1", topic: "Dilbilgisi", gram: ["relative", "question", "passe-compose", "imparfait"],
        fr: "C'était un dimanche matin. Je me promenais au parc avec Filou, le chien que mes parents m'ont offert pour mes dix ans. Tout à coup, il a vu un chat et il est parti en courant. Je l'ai cherché partout. J'ai demandé à une dame qui lisait sur un banc : « Vous avez vu un petit chien noir ? » Elle m'a montré la rue où il était allé. Enfin, je l'ai trouvé devant la boulangerie dont il connaît bien l'odeur !",
        tr: "Bir pazar sabahıydı. Annemle babamın on yaşıma hediye ettiği köpek Filou ile parkta geziniyordum. Birdenbire bir kedi gördü ve koşarak gitti. Onu her yerde aradım. Bankta kitap okuyan bir kadına sordum: \"Küçük siyah bir köpek gördünüz mü?\" Bana onun gittiği sokağı gösterdi. Sonunda onu, kokusunu çok iyi bildiği fırının önünde buldum!",
        q: [
            { q: "Pourquoi Filou est-il parti ?", o: ["Il avait faim", "Il a vu un chat", "Il avait peur", "Il voulait rentrer"], a: 1 },
            { q: "Qui a aidé le narrateur ?", o: ["Un policier", "Le boulanger", "Une dame sur un banc", "Ses parents"], a: 2 },
            { q: "Où était Filou ?", o: ["Au parc", "À la maison", "Devant la boulangerie", "Chez la dame"], a: 2 }
        ]
    },
    {
        id: "p19", title: "C'est qui ?", level: "A1", topic: "Dilbilgisi", gram: ["presentatives", "demonstrative", "subject"],
        fr: "Regarde cette photo. Voici ma famille. Là, c'est mon père. Il est boulanger. À côté de lui, c'est ma mère. Elle est très drôle. Ces deux garçons, ce sont mes cousins. Et cette petite fille avec le chat, qui est-ce ? C'est moi ! Il y a aussi mon grand-père, mais il n'est pas sur la photo : c'est lui qui a pris la photo.",
        tr: "Şu fotoğrafa bak. İşte ailem. Şurada babam var. O fırıncı. Onun yanındaki annem. Çok komiktir. Bu iki oğlan kuzenlerim. Peki kediyle duran bu küçük kız kim? Benim! Bir de dedem var ama fotoğrafta değil: fotoğrafı çeken o.",
        q: [
            { q: "Quel est le métier du père ?", o: ["Médecin", "Professeur", "Boulanger", "Policier"], a: 2 },
            { q: "Qui sont les deux garçons ?", o: ["Ses frères", "Ses cousins", "Ses amis", "Ses voisins"], a: 1 },
            { q: "Qui a pris la photo ?", o: ["La mère", "Le grand-père", "Le père", "Un cousin"], a: 1 }
        ]
    },
    {
        id: "p20", title: "Les règles de la maison", level: "A2", topic: "Dilbilgisi", gram: ["imperative", "object", "adv-freq"],
        fr: "Bienvenue chez nous ! Voici quelques règles. Enlève tes chaussures à l'entrée. Ne laisse jamais la porte du jardin ouverte : le chien sort toujours. Si tu as faim, prends ce que tu veux dans le frigo, mais ferme-le bien. Le soir, ne fais pas de bruit après dix heures. Et surtout, sens-toi comme chez toi !",
        tr: "Evimize hoş geldin! İşte birkaç kural. Ayakkabılarını girişte çıkar. Bahçe kapısını asla açık bırakma: köpek hep kaçar. Acıkırsan buzdolabından istediğini al ama kapağını iyice kapat. Akşamları saat ondan sonra gürültü yapma. Ve en önemlisi, kendini evinde hisset!",
        q: [
            { q: "Où faut-il enlever ses chaussures ?", o: ["Dans la chambre", "À l'entrée", "Dans le jardin", "Dans la cuisine"], a: 1 },
            { q: "Pourquoi faut-il fermer la porte du jardin ?", o: ["Il fait froid", "Le chien sort", "Il y a des voleurs", "C'est la règle des voisins"], a: 1 },
            { q: "Après quelle heure ne faut-il pas faire de bruit ?", o: ["Huit heures", "Neuf heures", "Dix heures", "Minuit"], a: 2 }
        ]
    },
    {
        id: "p21", title: "Un appel aux pompiers", level: "B1", topic: "Acil Durumlar ve Güvenlik", gram: ["question", "present"],
        fr: "— Allô, les pompiers ? — Oui, qu'est-ce qui se passe ? — Il y a de la fumée dans l'appartement de mon voisin ! — Où habitez-vous ? — Au 12, rue Victor-Hugo, au troisième étage. — Il y a quelqu'un dans l'appartement ? — Je ne sais pas, personne ne répond. — Restez calme et sortez de l'immeuble. Ne prenez pas l'ascenseur, prenez l'escalier. Nous arrivons dans cinq minutes.",
        tr: "— Alo, itfaiye mi? — Evet, ne oluyor? — Komşumun dairesinde duman var! — Nerede oturuyorsunuz? — Victor-Hugo Sokağı 12 numara, üçüncü kat. — Dairede biri var mı? — Bilmiyorum, kimse cevap vermiyor. — Sakin olun ve binadan çıkın. Asansöre binmeyin, merdiveni kullanın. Beş dakikaya oradayız.",
        q: [
            { q: "Qu'est-ce qu'il y a chez le voisin ?", o: ["De l'eau", "De la fumée", "Un voleur", "Un chien"], a: 1 },
            { q: "À quel étage habite-t-il ?", o: ["Au premier", "Au deuxième", "Au troisième", "Au cinquième"], a: 2 },
            { q: "Que faut-il prendre pour sortir ?", o: ["L'ascenseur", "L'escalier", "La fenêtre", "La voiture"], a: 1 }
        ]
    },
    {
        id: "p22", title: "Le titre de séjour", level: "B1", topic: "Resmi İşler", gram: ["presentatives", "passe-compose"],
        fr: "Mehmet habite en France depuis un an. Son titre de séjour n'est plus valable le mois prochain, alors il doit le renouveler. Il a pris rendez-vous à la préfecture sur internet. Il faut apporter beaucoup de documents : le passeport, des photos, un justificatif de domicile et une attestation de travail. Le jour du rendez-vous, il a fait la queue pendant deux heures. Heureusement, son dossier était complet.",
        tr: "Mehmet bir yıldır Fransa'da yaşıyor. Oturma izni gelecek ay geçerliliğini yitiriyor, bu yüzden yenilemesi gerekiyor. İnternetten valilikte randevu aldı. Birçok belge götürmek gerekiyor: pasaport, fotoğraflar, ikametgâh belgesi ve çalışma belgesi. Randevu günü iki saat sıra bekledi. Neyse ki dosyası eksiksizdi.",
        q: [
            { q: "Depuis combien de temps Mehmet habite-t-il en France ?", o: ["Un mois", "Six mois", "Un an", "Deux ans"], a: 2 },
            { q: "Comment a-t-il pris rendez-vous ?", o: ["Par téléphone", "Sur internet", "À la mairie", "Par lettre"], a: 1 },
            { q: "Combien de temps a-t-il attendu ?", o: ["Dix minutes", "Une heure", "Deux heures", "Toute la journée"], a: 2 }
        ]
    },
    {
        id: "p23", title: "La fête du Sacrifice à Lyon", level: "A2", topic: "Bayram ve Kutlamalar", gram: ["indefinite", "object"],
        fr: "Chaque année, pour la fête du Sacrifice, toute la famille se réunit chez ma tante à Lyon. Le matin, tout le monde met de beaux vêtements. Nous rendons visite aux grands-parents et nous leur souhaitons une bonne fête. Ma tante prépare plusieurs plats et quelques desserts. Les enfants reçoivent de l'argent et des bonbons. Chacun apporte quelque chose : moi, j'apporte toujours des fleurs.",
        tr: "Her yıl Kurban Bayramı'nda bütün aile Lyon'da teyzemin evinde toplanır. Sabah herkes güzel kıyafetler giyer. Büyükanne ve büyükbabamızı ziyaret eder, bayramlarını kutlarız. Teyzem birçok yemek ve birkaç tatlı hazırlar. Çocuklar para ve şeker alır. Herkes bir şey getirir: ben hep çiçek getiririm.",
        q: [
            { q: "Où se réunit la famille ?", o: ["Chez les grands-parents", "Chez la tante", "Au restaurant", "Chez le narrateur"], a: 1 },
            { q: "Que reçoivent les enfants ?", o: ["Des livres", "Des fleurs", "De l'argent et des bonbons", "Des vêtements"], a: 2 },
            { q: "Qu'est-ce que le narrateur apporte ?", o: ["Un gâteau", "Des fleurs", "Du vin", "Des bonbons"], a: 1 }
        ]
    },
    {
        id: "p24", title: "Le déménagement", level: "B1", topic: "Malzemeler ve Nesneler", gram: ["demonstrative", "relative"],
        fr: "Samedi, nous déménageons. Il faut mettre toutes nos affaires dans des cartons. Ce carton-ci est pour les livres, celui-là pour la vaisselle. Attention, les verres sont fragiles : il faut les envelopper dans du papier. La vieille table en bois que mon grand-père a construite vient avec nous. Les outils dont nous avons besoin pour monter les meubles sont dans la boîte rouge.",
        tr: "Cumartesi taşınıyoruz. Bütün eşyalarımızı kolilere koymak gerekiyor. Bu koli kitaplar için, şu da tabak çanak için. Dikkat, bardaklar kırılgan: onları kâğıda sarmak gerekiyor. Dedemin yaptığı eski tahta masa da bizimle geliyor. Mobilyaları kurmak için ihtiyacımız olan aletler kırmızı kutuda.",
        q: [
            { q: "Quand déménagent-ils ?", o: ["Lundi", "Vendredi", "Samedi", "Dimanche"], a: 2 },
            { q: "Qui a construit la table ?", o: ["Le père", "Le grand-père", "Un voisin", "Le narrateur"], a: 1 },
            { q: "Où sont les outils ?", o: ["Dans le garage", "Dans la boîte rouge", "Dans le carton des livres", "Sous la table"], a: 1 }
        ]
    },
    {
        id: "p25", title: "Une journée au zoo", level: "A2", topic: "Hayvanlar",
        fr: "Dimanche, nous sommes allés au zoo avec les enfants. D'abord, nous avons vu les singes : ils sautaient partout et ils mangeaient des bananes. Ensuite, nous avons regardé les lions. Ils dormaient sous un arbre. Ma fille a adoré la girafe parce qu'elle a un très long cou. Mon fils, lui, préfère les animaux de la ferme : il a nourri une chèvre et un âne. À la fin de la journée, tout le monde était fatigué mais content.",
        tr: "Pazar günü çocuklarla hayvanat bahçesine gittik. Önce maymunları gördük: her yerde zıplıyor ve muz yiyorlardı. Sonra aslanlara baktık. Bir ağacın altında uyuyorlardı. Kızım zürafaya bayıldı çünkü çok uzun bir boynu var. Oğlum ise çiftlik hayvanlarını tercih ediyor: bir keçiyi ve bir eşeği besledi. Günün sonunda herkes yorgun ama mutluydu.",
        q: [
            { q: "Que faisaient les singes ?", o: ["Ils dormaient", "Ils sautaient et mangeaient", "Ils nageaient", "Ils criaient"], a: 1 },
            { q: "Quel animal la fille a-t-elle adoré ?", o: ["Le lion", "Le singe", "La girafe", "La chèvre"], a: 2 },
            { q: "Qu'a fait le fils ?", o: ["Il a nourri des animaux", "Il a dessiné un lion", "Il a dormi", "Il a acheté une glace"], a: 0 }
        ]
    },
    {
        id: "p26", title: "Mes couleurs préférées", level: "A1", topic: "Renkler ve Şekiller",
        fr: "J'adore les couleurs vives. Ma chambre est jaune et orange. Mon lit est bleu et j'ai un grand tapis rouge et rond. Sur le mur, il y a un miroir carré et une photo de la mer. La mer est turquoise. Mon frère, lui, préfère les couleurs foncées : sa chambre est grise et noire. Il dit que c'est plus calme.",
        tr: "Canlı renklere bayılırım. Odam sarı ve turuncu. Yatağım mavi ve büyük, kırmızı, yuvarlak bir halım var. Duvarda kare bir ayna ve denizin bir fotoğrafı var. Deniz turkuaz. Erkek kardeşim ise koyu renkleri tercih ediyor: odası gri ve siyah. Bunun daha sakin olduğunu söylüyor.",
        q: [
            { q: "De quelle couleur est la chambre ?", o: ["Grise et noire", "Jaune et orange", "Bleue et blanche", "Verte"], a: 1 },
            { q: "Quelle est la forme du tapis ?", o: ["Carré", "Rond", "Ovale", "Rectangulaire"], a: 1 },
            { q: "Quelles couleurs le frère préfère-t-il ?", o: ["Les couleurs vives", "Les couleurs foncées", "Le rose", "Le turquoise"], a: 1 }
        ]
    },
    {
        id: "p27", title: "Un week-end à Cannes", level: "B1", topic: "Sanat ve Kültür",
        fr: "L'année dernière, j'ai eu la chance d'aller au festival de Cannes avec une amie journaliste. Nous avons vu trois films en deux jours. Le premier était un chef-d'œuvre : à la fin, le public a applaudi pendant dix minutes et la réalisatrice était très émue. En revanche, le deuxième film était un peu compliqué et je n'ai pas tout compris. Le soir, nous nous promenions sur la Croisette en espérant voir des acteurs célèbres. Je n'ai vu personne, mais ça valait la peine !",
        tr: "Geçen yıl gazeteci bir arkadaşımla Cannes Festivali'ne gitme şansım oldu. İki günde üç film izledik. İlki bir başyapıttı: sonunda seyirciler on dakika alkışladı ve yönetmen çok duygulandı. Buna karşılık ikinci film biraz karmaşıktı ve her şeyi anlamadım. Akşamları ünlü oyuncuları görme umuduyla Croisette'te geziniyorduk. Kimseyi görmedim ama zahmetine değdi!",
        q: [
            { q: "Combien de films ont-ils vus ?", o: ["Un", "Deux", "Trois", "Dix"], a: 2 },
            { q: "Comment était le deuxième film ?", o: ["Un chef-d'œuvre", "Un peu compliqué", "Très drôle", "Trop long"], a: 1 },
            { q: "Le narrateur a-t-il vu des acteurs ?", o: ["Oui, beaucoup", "Oui, un seul", "Non, personne", "On ne sait pas"], a: 2 }
        ]
    },
    {
        id: "p28", title: "Ville ou campagne ?", level: "B1", topic: "Fikir ve Tartışma",
        fr: "Beaucoup de gens se demandent s'il vaut mieux vivre en ville ou à la campagne. En ville, on trouve facilement du travail et les transports sont pratiques. En revanche, la vie est chère et il y a souvent du bruit. À la campagne, l'air est pur et les gens sont plus tranquilles ; cependant, il faut une voiture pour tout faire. À mon avis, il n'y a pas de bonne réponse : tout dépend de l'âge et du travail de chacun. Moi, je préfère la ville, à condition d'avoir un parc près de chez moi.",
        tr: "Birçok insan şehirde mi yoksa kırsalda mı yaşamanın daha iyi olduğunu merak eder. Şehirde kolayca iş bulunur ve ulaşım pratiktir. Buna karşılık hayat pahalıdır ve sık sık gürültü olur. Kırsalda hava temizdir ve insanlar daha sakindir; ancak her şey için araba gerekir. Bence doğru bir cevap yok: her şey kişinin yaşına ve işine bağlı. Ben, evimin yakınında bir park olması şartıyla şehri tercih ediyorum.",
        q: [
            { q: "Quel est un avantage de la ville ?", o: ["L'air pur", "Le calme", "Les transports pratiques", "La vie pas chère"], a: 2 },
            { q: "Qu'est-ce qu'il faut à la campagne ?", o: ["Un vélo", "Une voiture", "Un grand appartement", "Beaucoup d'argent"], a: 1 },
            { q: "Que préfère l'auteur ?", o: ["La campagne", "La ville avec un parc", "La montagne", "La mer"], a: 1 }
        ]
    },
    {
        id: "p29", title: "Les soldes", level: "A2", topic: "Giyim ve Aksesuar",
        fr: "En janvier, c'est la période des soldes en France. Samedi, je suis allée en ville avec ma sœur. Dans la vitrine d'une petite boutique, j'ai vu un manteau beige magnifique. Sur l'étiquette, le prix était de cent euros, mais avec les soldes, il coûtait seulement soixante euros ! Je l'ai essayé : la taille était parfaite. Ma sœur a acheté une jupe rayée et un pull uni. Nous avons dépensé beaucoup d'argent, mais nous étions très contentes.",
        tr: "Ocakta Fransa'da indirim dönemidir. Cumartesi kız kardeşimle şehre gittim. Küçük bir butiğin vitrininde harika bej bir palto gördüm. Etikette fiyat yüz euroydu ama indirimle sadece altmış euroya geliyordu! Denedim: beden mükemmeldi. Kız kardeşim çizgili bir etek ve düz bir kazak aldı. Çok para harcadık ama çok mutluyduk.",
        q: [
            { q: "Quand sont les soldes ?", o: ["En janvier", "En mai", "En août", "En décembre"], a: 0 },
            { q: "Combien coûtait le manteau avec les soldes ?", o: ["Cent euros", "Quatre-vingts euros", "Soixante euros", "Quarante euros"], a: 2 },
            { q: "Qu'a acheté la sœur ?", o: ["Un manteau", "Une jupe et un pull", "Des chaussures", "Une robe"], a: 1 }
        ]
    },
    {
        id: "p30", title: "Protéger la planète", level: "B1", topic: "Toplum ve Çevre",
        fr: "Dans notre immeuble, nous avons décidé de faire des efforts pour l'environnement. Désormais, nous trions nos déchets et nous évitons les sacs en plastique. Pour économiser l'électricité, nous éteignons la lumière quand nous quittons une pièce. Beaucoup de voisins prennent les transports en commun au lieu de la voiture. Bien sûr, ce ne sont que de petits gestes ; néanmoins, si tout le monde fait un effort, la situation peut changer. Il ne faut pas attendre que les autres le fassent.",
        tr: "Apartmanımızda çevre için çaba göstermeye karar verdik. Artık çöplerimizi ayrıştırıyor ve plastik poşetlerden kaçınıyoruz. Elektrikten tasarruf etmek için bir odadan çıkarken ışığı kapatıyoruz. Komşuların çoğu araba yerine toplu taşıma kullanıyor. Elbette bunlar küçük davranışlar; yine de herkes çaba gösterirse durum değişebilir. Başkalarının yapmasını beklememek gerekir.",
        q: [
            { q: "Qu'est-ce qu'ils évitent ?", o: ["Les transports", "Les sacs en plastique", "Les voisins", "La lumière"], a: 1 },
            { q: "Que font-ils pour économiser l'électricité ?", o: ["Ils éteignent la lumière", "Ils achètent des bougies", "Ils déménagent", "Ils dorment tôt"], a: 0 },
            { q: "Selon le texte, que faut-il faire ?", o: ["Attendre les autres", "Ne rien changer", "Faire un effort soi-même", "Acheter une voiture"], a: 2 }
        ]
    },
    {
        id: "p31", title: "Une lettre à mon amie", level: "B1", topic: "Duygular ve Karakter",
        fr: "Chère Julie, je t'écris de Lyon, où je vis depuis trois mois. Au début, je me sentais un peu seule et j'avais du mal à comprendre l'accent des gens. J'étais souvent épuisée et parfois déçue. Mais petit à petit, je me suis habituée. Mes collègues sont très gentils et ma voisine, une dame âgée, m'invite souvent à prendre le thé. Je suis reconnaissante pour leur patience. Maintenant, je suis heureuse ici, même si tu me manques beaucoup. Viens me voir dès que tu peux ! Je t'embrasse, Zeynep.",
        tr: "Sevgili Julie, sana üç aydır yaşadığım Lyon'dan yazıyorum. Başta kendimi biraz yalnız hissediyordum ve insanların aksanını anlamakta zorlanıyordum. Sık sık bitkin, bazen de hayal kırıklığına uğramış oluyordum. Ama yavaş yavaş alıştım. İş arkadaşlarım çok iyi ve yaşlı bir hanım olan komşum beni sık sık çaya davet ediyor. Sabırları için minnettarım. Şimdi burada mutluyum, seni çok özlesem de. Olabildiğince çabuk beni görmeye gel! Sevgiler, Zeynep.",
        q: [
            { q: "Depuis combien de temps Zeynep vit-elle à Lyon ?", o: ["Un mois", "Trois mois", "Un an", "Trois ans"], a: 1 },
            { q: "Qu'est-ce qui était difficile au début ?", o: ["Trouver un travail", "Comprendre l'accent", "Faire la cuisine", "Prendre le métro"], a: 1 },
            { q: "Qui invite Zeynep à prendre le thé ?", o: ["Sa collègue", "Julie", "Sa voisine", "Sa mère"], a: 2 }
        ]
    },
    {
        id: "p32", title: "Un nouveau téléphone", level: "A2", topic: "Teknoloji ve Medya",
        fr: "Mon vieux téléphone est tombé en panne la semaine dernière, alors j'en ai acheté un nouveau. Il est très rapide et l'écran est grand. Le matin, je lis les informations en prenant mon petit déjeuner. Le soir, je regarde des vidéos ou j'envoie des messages à mes amis. Mais il y a un problème : je passe trop de temps sur mon téléphone ! Maintenant, je le laisse dans le salon quand je vais dormir. Le sommeil, c'est important.",
        tr: "Eski telefonum geçen hafta bozuldu, ben de yeni bir tane aldım. Çok hızlı ve ekranı büyük. Sabahları kahvaltımı yaparken haberleri okuyorum. Akşamları video izliyor ya da arkadaşlarıma mesaj gönderiyorum. Ama bir sorun var: telefonda çok fazla zaman geçiriyorum! Artık uyumaya giderken onu salonda bırakıyorum. Uyku önemlidir.",
        q: [
            { q: "Pourquoi a-t-il acheté un nouveau téléphone ?", o: ["Il l'a perdu", "Le vieux est tombé en panne", "C'était son anniversaire", "Il voulait un grand écran"], a: 1 },
            { q: "Que fait-il le matin ?", o: ["Il regarde des vidéos", "Il lit les informations", "Il envoie des messages", "Il dort"], a: 1 },
            { q: "Où laisse-t-il son téléphone la nuit ?", o: ["Dans sa chambre", "Dans la cuisine", "Dans le salon", "Au bureau"], a: 2 }
        ]
    }
);
