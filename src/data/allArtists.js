const allArtists = [
    {
        artist_id: 1,
        artist_name: 'Vincent Van Gogh',
        artist_short_biography: 'Najpoznatiji holandski slikar iz 19. veka.',
        artist_biography: 'Vinsent Vilem van Gog (hol. Vincent Willem van Gogh; Zindert, 30. mart 1853 — Over sir Oaz, 29. jul 1890) bio je slikar holandskog porekla. Jedan je od trojice najvećih slikara postimpresionizma i jedan od najcenjenijih slikara uopšte. Van Gog je bio sin protestantskog sveštenika, a i on sam je neko vreme bio propovednik. Njegova dela su zapažena po svojoj gruboj lepoti, emotivnoj iskrenosti i hrabrim bojama, te je zahvaljujući tome postao jedan od vodećih umetnika 19. veka. Nakon dugog i bolnog problema sa anksioznošću i učestalim problemima mentalnih bolesti, umro je od prostrelne rane metkom u svojoj 37. godini. Opšte je prihvaćeno mišljenje da je izvršio samoubistvo, iako pištolj iz koga je pucano, nikada nije pronađen. Njegov rad je za vreme njegovog života bio poznat samo nekolicini ljudi, a samo par ga je cenilo i poštovalo.',
        artist_wiki: 'https://sr.wikipedia.org/sr-el/Винсент_ван_Гог'
    },
    {
        artist_id: 2,
        artist_name: 'Claude Monet',
        artist_short_biography: 'Poznati francuski slikar, tvorac impresionizma.',
        artist_biography: 'Klod Mone (franc. Claude Monet; 14. novembar 1840 — 5. decembar 1926) je bio impresionistički slikar. Impresionizam je dobio ime po njegovoj slici „Impresija, rađanje sunca“, 1874.',
        artist_wiki: 'https://sr.wikipedia.org/wiki/Клод_Моне'
    },
    {
        artist_id: 3,
        artist_name: 'Salvador Dalí',
        artist_short_biography: 'Čuveni španski umetnik, tvorac iluzionizma.',
        artist_biography: 'Salvador Felipe Hasinto Dali, 1. markiz od Pubola (kat. Salvador Felip Jacint Dalí Domènech, šp. Salvador Felipe Jacinto Dalí Domènech; Figeras, 11. maj 1904 — Figeras, 23. januar 1989) bio je katalonski i španski nadrealistički umetnik, jedan od najznačajnijih umetnika 20. veka. Bavio se slikanjem, pisanjem, vajanjem, scenografijom i glumom.\n\nOn je jedan od najznačajnijih umetnika 20. veka, a često ga nazivaju i velikim majstorom nadrealizma. Njegova umetnička dela pokazala su da je on jedan od najkreativnijih slikara svog vremena. Dalijeva česta tematika je svet prostora, pijanstva, groznice i religije.\nOvaj slavni slikar je čitavog svog života verovao u svoju posebnost. Jedni su ga smatrali genijem, dok su drugi govorili o njemu kao poremećenom egocentriku, čija dela nemaju nikakvu vrednost. Mada su ga španski likovni kritičari uvek smatrali za nadobudnog i netalentovanog šarlatana, popularnost i prodajna cena njegovih dela neprestano su rasli. Danas, svetski kolekcionari plaćaju milione dolara kako bi u svojoj kolekciji imali bar jednu Dalijevu sliku.',
        artist_wiki: 'https://sr.wikipedia.org/wiki/Салвадор_Дали'
    },
    {
        artist_id: 4,
        artist_name: 'Pablo Picasso',
        artist_short_biography: 'Najupečatljiviji španski slikar 20. veka.',
        artist_biography: 'Pablo Ruiz Pikaso (šp. Pablo Ruiz Picasso, Malaga, 25. oktobar 1881 — Mužin, 8. april 1973) bio je svestrani španski umetnik. Pikaso je jedan od vodećih i najpoznatijih slikara, vajara, crtača i grafičara 20. veka, koji je najveći deo svoje karijere proveo živeći i radeći u Francuskoj. Bio je dominantna ličnost u likovnim umetnostima prve polovine 20. veka i pokrenuo je inicijative za mnoge revolucionarne promene u modernoj umetnosti. Mada se njegovo delo obično deli na više perioda, te podele su donekle arbitrarne, pošto je njegova stvaralačka energija i mašta bila takva da je često istovremeno radio na bogatom repertoaru tema i u različitim stilovima. Sam Pikaso je to ovako objasnio: „Mnoge različite načine koje sam koristio u mojoj umetnosti ne treba smatrati evolucijom, niti koracima prema nekom nepoznatom idealu slikarstva. Kada sam imao nešto da izrazim, to sam radio bez razmišljanja o prošlosti ili budućnosti. Ne verujem da sam koristio radikalno različite elemente u različitim načinima moga slikarstva. Ako je predmet kojim sam se u datom trenutku bavio sugerisao drukčije tipove izraza, nisam oklevao da ih usvojim.” Uz Žorža Braka, jedan je od osnivača likovnog pravca kubizam.',
        artist_wiki: 'https://sr.wikipedia.org/wiki/Пабло_Пикасо'
    },
    {
        artist_id: 5,
        artist_name: 'Michelangelo Buonarroti',
        artist_short_biography: 'Italijanski skulptor, slikar i arhitekta iz doba renesanse.',
        artist_biography: 'Mikelanđelo di Lodoviko di Lionardo di Buonarroti Simoni (ital. Michelangelo di Lodovico di Lionardo di Buonarroti Simoni; 6. mart 1475 — 18. februar 1564), poznatiji kao Mikelanđelo (ital. Michelangelo), bio je italijanski skulptor, slikar i arhitekta iz doba renesanse. Smatra se jednim od najvećih umetnika u istoriji zapadne umetnosti. Njegova najpoznatija dela obuhvataju skulpture, poput Davida i Pieta, freske u Sikstinskoj kapeli, kao i arhitektonske projekte kao što je bazilika Svetog Petra u Rimu. Mikelanđelova umetnost odlikuje se snagom i emotivnom snagom, te je ostavila dubok uticaj na umetnost i kulturu.',
        artist_wiki: 'https://sr.wikipedia.org/wiki/Микеланђело_Буонароти'
    },
    {
        artist_id: 6,
        artist_name: 'Auguste Rodin',
        artist_short_biography: 'Francuski vajar, jedan od najpoznatijih predstavnika modernističke skulpture.',
        artist_biography: 'François-Auguste-René Roden (franc. François-Auguste-René Rodin; 12. novembar 1840 — 17. novembar 1917) bio je francuski vajar, jedan od najpoznatijih predstavnika modernističke skulpture. Njegova dela su se isticala po inovativnom pristupu formi, emotivnom izražaju i prirodnom realizmu. Roden je stvorio neke od najpoznatijih skulptura, uključujući "Mislioca" (Le Penseur) i "Poljubac" (Le Baiser). Njegova umetnost je imala značajan uticaj na savremenu skulpturu i vajarstvo uopšte.',
        artist_wiki: 'https://sr.wikipedia.org/wiki/Огист_Роден'
    },
    {
        artist_id: 7,
        artist_name: 'Donatello',
        artist_short_biography: 'Italijanski renesansni skulptor i jedan od pionira moderne skulpture.',
        artist_biography: 'Donatello (1386. - 1466.) bio je italijanski renesansni skulptor i jedan od pionira moderne skulpture. Njegova umjetnička djela su se istaknula po inovativnom pristupu, eksperimentiranju sa materijalima i izražavanju realističnih detalja. Donatello je bio iznimno utjecajan na razvoj renesansne skulpture svojim revolucionarnim stilom i tehnikama. Njegova djela, poput "David" i "Sveti Juraj", predstavljaju vrhunac njegovog stvaralaštva. Donatello je bio poznat po svom talentu za oblikovanje mramora i brončanog lijeva. Njegov rad je ostavio neizbrisiv trag u povijesti umjetnosti, a njegovo naslijeđe i danas se divi.',
        artist_wiki: 'https://hr.wikipedia.org/wiki/Donatello'
    },
    {
        artist_id: 8,
        artist_name: 'Gian Lorenzo Bernini',
        artist_short_biography: 'Italijanski barokni kipar, arhitekt i slikar.',
        artist_biography: 'Gian Lorenzo Bernini (1598. - 1680.) bio je istaknuti talijanski barokni kipar, arhitekt i slikar. Smatra se jednim od najvećih majstora barokne umjetnosti. Njegova djela su obuhvaćala širok spektar stilova i tehnika, a poznat je po svom izražajnom i emotivnom prikazu ljudskih figura. Bernini je bio ključna figura u oblikovanju barokne arhitekture u Rimu, a njegovi monumentalni skulpturalni radovi, kao što su "Apolon i Dafne", "Ekstaza Sv. Terezije" i "David", smatraju se vrhuncima njegovog stvaralaštva. Njegova umjetnost je odražavala dramu, pokret i intenzitet, a njegov utjecaj na svijet skulpture ostaje neizbrisiv.',
        artist_wiki: 'https://hr.wikipedia.org/wiki/Gian_Lorenzo_Bernini'
    },
    {
        artist_id: 9,
        artist_name: 'Coco Chanel',
        artist_short_biography: 'Francuska modna dizajnerica i osnivačica brenda Chanel.',
        artist_biography: 'Coco Chanel (1883. - 1971.) bila je francuska modna dizajnerica i osnivačica brenda Chanel. Smatra se jednom od najutjecajnijih figura u svijetu mode 20. stoljeća. Chanel je revolucionirala modnu industriju svojim inovativnim dizajnom, uključujući popularizaciju malene crne haljine, parfema Chanel No. 5 i ikoničnog Chanelovog kostima s tweed tkaninom. Njen stil se odlikovao jednostavnošću, elegancijom i funkcionalnošću. Chanel je utjecala na modu svojeg vremena i ostavila trajni pečat na industriju mode. Njeno nasljeđe i brend Chanel nastavljaju biti simbol luksuza, sofisticiranosti i klasičnog stila.',
        artist_wiki: 'https://hr.wikipedia.org/wiki/Coco_Chanel'
    },
    {
        artist_id: 10,
        artist_name: 'Giorgio Armani',
        artist_short_biography: 'Italijanski modni dizajner i osnivač brenda Armani.',
        artist_biography: 'Giorgio Armani (rođen 1934.) je poznati italijanski modni dizajner i osnivač brenda Armani. Armani je postao poznat po svom elegantnom i suptilnom stilu, koji kombinuje luksuz i minimalizam. Njegov brend obuhvaća širok spektar odjeće, od formalne do ležerne mode, kao i modne dodatke, parfeme i luksuzne interijere. Armani je postao sinonim za sofisticirani talijanski dizajn i njegovi kreacije su često viđene na crvenom tepihu i među slavnim osobama. Njegov utjecaj na modnu industriju je ogroman, a njegov brend Armani ostaje jedan od najprepoznatljivijih i najcjenjenijih brendova u svijetu mode.',
        artist_wiki: 'https://sr.wikipedia.org/sr-ec/Ђорђо_Армани'
    },
    {
        artist_id: 11,
        artist_name: 'Alexander McQueen',
        artist_short_biography: 'Britanski modni dizajner poznat po svojoj inovativnoj estetici.',
        artist_biography: 'Alexander McQueen (1969. - 2010.) bio je britanski modni dizajner poznat po svojoj inovativnoj estetici i provokativnom pristupu modi. Njegovi dizajni su bili eksperimentalni, dramatični i često kontroverzni, preispitujući tradicionalne ideje o ljepoti i obliku. McQueen je poznat po svojoj strasti prema ručnoj izradi i tehničkoj virtuoznosti. Njegovi revolucionarni modni showovi su bili spektakularni događaji koji su miješali mode, performanse i umjetnost. McQueenova vizija mode je bila izuzetno utjecajna i ostavila je dubok trag u industriji. Nažalost, preminuo je 2010. godine, ali njegovo naslijeđe živi kroz njegove ikonične dizajne.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Alexander_McQueen'
    },
    {
        artist_id: 12,
        artist_name: 'Yves Saint Laurent',
        artist_short_biography: 'Francuski modni dizajner koji je revolucionirao svijet mode.',
        artist_biography: 'Yves Saint Laurent (1936. - 2008.) bio je francuski modni dizajner koji je revolucionirao svijet mode svojim inovativnim pristupom i izvanrednim dizajnom. Bio je poznat po svojim sofisticiranim, elegantnim i progresivnim dizajnima koji su kombinirali muške i ženske elemente, te su istovremeno bili moderni i nosivi. Saint Laurent je lansirao ikonične komade poput "Le Smoking" (žensko odijelo), "Safari" jakne i "Trapeze" haljine. Tijekom svoje karijere osnovao je vlastitu modnu kuću Yves Saint Laurent, koja je postala simbol luksuza i elegancije. Njegov utjecaj na modnu industriju i dizajn ne može se osporiti.',
        artist_wiki: 'https://en.wikipedia.org/wiki/Yves_Saint_Laurent_(designer)'
    }
];

export default allArtists;