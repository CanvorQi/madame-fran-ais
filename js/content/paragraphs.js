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
