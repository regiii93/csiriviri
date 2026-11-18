# Csiriviri – design system

**Kezdőoldali irány (2026. november 18.):** A második prototípus szerkezete lett a további tervezés alapja. A címsor DM Serif Display, a törzsszöveg DM Sans; a Licorice rövid, személyes hangsúlyokhoz jelenik meg. A gomb hoverállapotában a gomb helyben marad, csak az eltolt árnyék rövidül. A kézműves rész barna háttere, rózsaszín és arany részletei, valamint a második változat értékelési és záró szakasza maradnak kiindulópontok. A fejlécben és láblécben Facebook- és Instagram-ikon is szerepel. A finomított változat: `csiriviri-kezdooldal.html`.

**Képforrás:** A kezdőoldal és a prototípusok tartalmi fotói a `képek/szerkesztett/` mappából származnak. Az `images/` alatti példányok ezek helyi másolatai. Kivétel a felhasználó által a szülinapi zsúrhoz külön kiválasztott `képek/inspiráció/pexels-pavel-danilyuk-7180276.jpg`. A logó a `képek/logo/` mappából származik.

Munkaváltozat a meglévő arculati képek, a `csiriviri-jegyzet.md` és a beszélgetésben rögzített döntések alapján. Az Eliza-féle minta az `eliza-design-system-minta.md` fájlban maradt meg. A konkrét betűpárosítás és méretezés tervezési javaslat. A gombok új iránya szögletes forma, jobbra-lefelé eltolt, éles árnyékkal, a felhasználó két képes referenciája alapján.

## Hangulat

Személyes, meleg, alkotó és ünnepi. A látogató ismerje meg Évit, a munkáit és a gyerekekkel közösen megélt pillanatokat. A rendezvényes szolgáltatások és a díszek ugyanahhoz a márkához tartozzanak.

Világos felületek, púder és bézs szakaszok, arany vonalas részletek, erős saját fotók. A hangulat legyen érezhetően játékos: visszatérő hullámok, kis szabadkézi formák, elfordított keretek és festékes textúrák kapcsolják össze a gyerekprogramokat az alkotással. Az elegancia csak kísérő jelleg, nem a teljes oldal fő karaktere. A szolgáltatást kereső szülő és a dekorációt vásárló felnőtt egyaránt otthonosan érezze magát.

**Kerülendő:** túl sok rajzfigura, szivárványszínű szolgáltatáskártyák, szétszórt csillámhatás, nagy arany színátmenetek, automatikusan mozgó dekorációk. A fotók maradjanak természetesek, visszafogott színtelítettséggel.

## Színek

Az első négy árnyalat a briefből származik. A sötétbarna az arculati képekhez igazított webes szövegszín; a többi funkcionális kiegészítés.

| Szerep | Név | Hex | Használat |
|---|---|---|---|
| Márkaszín | Púderrózsaszín | `#EFD1D5` | Kiemelt hátterek, bemutatkozás, finom jelölések |
| Semleges felület | Meleg tört bézs | `#EDE7E3` | Váltakozó szakaszok, galéria környezete |
| Másodlagos márkaszín | Homokbézs | `#D6C0AD` | Dekoratív foltok, kép mögötti felületek |
| Díszítő akcentus | Arany | `#C79D35` | Vékony keret, apró csillag, hangsúlyos vonal |
| Alapháttér | Fehér | `#FFFFFF` | Oldalalap, űrlapok, termékképek |
| Elsődleges szöveg és gomb | Sötétbarna | `#534642` | Törzsszöveg, címsor, fő gomb, lábléc |
| Másodlagos szöveg | Szürkésbarna | `#74645D` | Magyarázatok fehéren vagy tört bézsen |
| Sötét akcentus | Aranybarna | `#805C12` | Aláhúzott linkek, fókuszjelzés, kis ikonok |
| Hover | Mélybarna | `#403531` | Elsődleges gomb egérmutató alatt |
| Díszítő vonal | Világos bézs | `#D8CEC7` | Szakaszelválasztó; önmagában nem mezőkeret |

Többnyire fehér és tört bézs felületek, kisebb púder szakaszokkal. Az arany és homokbézs kísérő szín. A három szolgáltatás nem kap külön márkapalettát.

**Kiszámított kontrasztok:**

| Szöveg / háttér | Arány |
|---|---|
| Sötétbarna / fehér | 9,04:1 |
| Sötétbarna / púder | 6,35:1 |
| Sötétbarna / tört bézs | 7,38:1 |
| Sötétbarna / homokbézs | 5,17:1 |
| Szürkésbarna / fehér | 5,64:1 |
| Szürkésbarna / tört bézs | 4,60:1 |
| Aranybarna / fehér | 6,07:1 |
| Aranybarna / tört bézs | 4,96:1 |

Normál szövegnél legalább 4,5:1 legyen a párosítás. Fehér az aranyon 2,53:1, sötétbarna az aranyon 3,57:1: ezért az arany díszítő szín, nem normál méretű feliratot hordozó gombháttér. Púder és homokbézs háttéren sötétbarna szöveget használjunk. Képre tett szövegnél külön kell biztosítani a kontrasztot.

## Betűtípusok

**Javaslat:** DM Serif Display + DM Sans. Az elegáns címek mellett a hosszabb személyes történetek könnyen olvashatók maradnak.

- **Címsor:** DM Serif Display 400, mondatkezdő nagybetűvel. A teljes címet egységesen kezeljük.
- **Törzsszöveg:** DM Sans 400; kiemelés 500–600.
- **Menü, gomb, mezőcímke:** DM Sans 500–600, normál kis- és nagybetűkkel, erős ritkítás nélkül.
- **Opcionális kézírásos részlet:** Licorice rövid mottóhoz vagy aláíráshoz. Oldalanként legfeljebb egy ilyen hangsúly, fontos információhoz ne használjuk.
- **Alternatívák:** Fraunces, Poppins és Cookie a briefben felmerült lehetőségek. Egy tervben ne keverjük az összes családot.
- Betöltéskor az ő/ű betűket is tartalmazó készletet válasszuk. Tartalék címbetű Georgia, törzsszöveghez sans-serif. Webfont nélkül is működjön a tördelés.

| Elem | Asztali / mobil | Sormagasság |
|---|---|---|
| H1 | 56 / 36 px | 1,15 |
| H2 | 42 / 30 px | 1,2 |
| H3 | 28 / 24 px | 1,25 |
| Törzsszöveg | 18 / 17 px | 1,7 |
| Súgó és kisebb szöveg | 15 / 15 px | 1,55 |
| Menü és gomb | 16 / 16 px | 1,4 |
| Opcionális mottó | 36 / 30 px | 1,3 |
| Kiemelt szám | 52 / 40 px | 1,1 |

A hosszabb szövegek balra zártak, sorkizárás nélkül, legfeljebb 60–70 karakteres sorokkal. A bemutatkozás több bekezdésben jelenjen meg. A történet hosszát ne egy előre megrajzolt kártyaméret szabja meg.

## Térközök és elrendezés

- Térközskála: 4, 8, 12, 16, 24, 32, 48, 64, 96 és 128 px.
- Tartalom maximum 1200 px; folyó szöveg maximum 640–700 px.
- Oldalsó margó mobilon 20 px, közepes képernyőn 32 px, nagy képernyőn legalább 48 px.
- Szakaszköz asztali nézetben 88–112 px, mobilon 56–72 px. Összetartozó cím és bekezdés között 16–24 px.
- Képes-szöveges szakasz oszlopköze 48–64 px, mobilon 24–32 px.
- A főoldal elején három egyenrangú, közvetlen belépés a szolgáltatásokhoz; nagy képernyőn három oszlop, mobilon egymás alatt. Nincs külön beléptető oldal.
- A főoldali bemutatkozás kétoszlopos: személyes kép, hosszabb szöveg és kiemelt adatok. Mobilon logikus sorrendű egy oszlop.
- A szakaszokat térköz, háttér és fotó vezesse. Nem minden szövegrész kap kártyát.

## Komponensek

### Gombok – szögletes forma, eltolt színes árnyék

**Referenciák:** `gomb ötlet.png`, `gomb ötlet1.png`. Szögletes téglalap, jobbra és lefelé eltolt, elmosás nélküli színes réteggel. A hatás a logó egymás mögé helyezett kereteire és felületeire rímel. A logó teljes rajzát nem kell minden gombon megismételni.

- **Elsődleges javaslat:** púder háttér, sötétbarna felirat, sötétbarna eltolt árnyék; az első referencia Csiriviri-színekkel. Például „Ajánlatot kérek”.
- **Másodlagos javaslat:** fehér háttér, sötétbarna felirat, púder eltolt árnyék, mint a második referencián. Fehér oldalfelületen finom sötétbarna keret tegye felismerhetővé a gomb körvonalát.
- **Erősebb alternatíva:** sötétbarna háttér, fehér felirat és púder árnyék, ha a környező szakasz ezt kívánja. Egy szakaszon belül egy fő gombváltozat domináljon.
- **Geometria:** `border-radius: 0`; induló árnyék `6px 6px 0 0`, mobilon 4 px eltolással. Az árnyék éles és tömör, nem puha térbeli hatás.
- Belső térköz 14–16 px függőlegesen és 28–32 px vízszintesen. Legalább 48 px magas kattintható felület, szükség esetén több soros felirat.
- Fókusz világos felületen 3 px aranybarna külső vonal, 3 px eltolással; sötét felületen fehér vonal.
- Hoverkor finom színváltás vagy 1 px elmozdulás lehetséges, lenyomáskor legfeljebb 2 px mozduljon az árnyék felé, csökkenő árnyékkal. A környező elrendezés ne változzon; ne legyen ugráló vagy nagyító hatás. Csökkentett mozgásnál az elmozdulás kikapcsol.
- A térközökbe az eltolt réteg is számítson bele: ne vágja le a szülőelem, ne érjen másik gombhoz. A fókuszjelzés az árnyéktól megkülönböztethető külső vonal maradjon.

### Fejléc és navigáció

Világos fejléc a meglévő általános Csiriviri-logóval és jól olvasható menüvel. Menü: Főoldal · Szülinapi zsúr · Arcfestés és csillámtetoválás · Kézműves díszek · Kapcsolat. Külön Rólam oldal jelenleg nincs.

Mobilon feliratozott menügomb; a menü legyen billentyűzettel is használható. Az aktív oldal aláhúzással is felismerhető legyen. A hosszú menüfeliratok elférése szabja meg a mobilmenüre váltás pontját.

### Szolgáltatási belépők

Mindhárom saját fotót, egyértelmű szolgáltatásnevet, néhány mondatot és linket kapjon. Egyenrangú méret és tipográfia. A szöveg ne kizárólag a fotóra írt feliratként jelenjen meg. A kézműves terület gazdag képanyaga ne szorítsa háttérbe a zsúrokat és az arcfestést.

### Kártyák és képek

Kártyák: szögletes fehér/tört bézs/púder felület. Belső térköz 24–32 px, mobilon 20–24 px. Kiemelt szolgáltatási vagy ajánló kártyák mögött 8–12 px-rel jobbra-lefelé eltolt, éles púder vagy homokbézs réteg használható. A sötétbarna árnyék kisebb elemeknél erősebb hangsúly. Az egyszerű információs és GYIK-felületek maradhatnak árnyék nélkül, hogy a megjelenés szellős legyen.

Képek: többnyire 4:5 vagy 1:1 képarány. A teljes díszt bemutató képnél `object-fit: contain`; hangulatképnél lehet kitöltő kivágás, fontos részletek levágása nélkül. A portré induló aránya 4:5. A bemutatkozó kép és néhány kiemelt fotó mögé 12–20 px-rel eltolt púder vagy homokbézs háttérlap kerülhet, az Eliza-képeknél kedvelt rétegzett hatást követve. Mobilon 8–12 px eltolás. Vékony arany körvonal külön alternatíva lehet.

**Játékos fotókeret:** a kiemelt portré vagy egy képpár egyik tagja 2–3 fokban megdönthető, fehér, 6–10 px széles fotókerettel. Mögötte egy kissé más szögű, vékony arany négyzet/téglalap visszautalhat a logóra. Az alapforma szögletes, a fotókeret legfeljebb 4 px kerekítést kaphat. A szöveg és a gombok maradjanak egyenesek. Mobilon legfeljebb 1–2 fok, elegendő helyet hagyva a széleken. Ez kiemelt elemekre való, nem a teljes galéria minden képére.

Egy teljes galéria minden képére vagy egy már árnyékolt kártyán belüli képre nem szükséges újabb árnyék. A nagyobb hátlapok visszafogottak maradjanak, a gombok erősebb kontrasztja segítse a cselekvés felismerését.

### Bemutatkozás és kiemelt számok

A Rafina személyes bemutatkozása erős referencia: Évi saját alkotással vagy munka közben készült képe mellé hosszabb, több bekezdéses történet kerül. A főoldali szöveg összeköti a három szolgáltatást; az aloldalakon rövidebb, témához illő bemutatkozás szerepel.

A számok a kép alatt vagy külön szellős sorban jelenhetnek meg: nagy sötétbarna szám, rövid normál betűs magyarázat. Biztos kiindulópont a **2012-es indulás**. További számokhoz tényleges adatok kellenek; nem szükséges kitalált darabszámokkal három helyet kitölteni. A díjak ne tapasztalati számként jelenjenek meg.

### Facebookra vezető hangulati szakasz

A Rafina mesevilágos szakaszához hasonlóan nagy, saját díszeket bemutató kép vagy csendélet, rövid hangulati szöveg és egy fő gomb. Púder vagy tört bézs háttér, legfeljebb egy finom hullámvonallal. A szöveg saját, jól olvasható felületet kapjon.

A téma lehet szezonálisan változó vagy egész évben használható alkotói világ. Nem szükséges egész évre karácsonyi megjelenést készíteni. Gomb: „Nézz körül a Facebook-oldalamon” → https://www.facebook.com/Csiriviri.Kezmuves.Ajandekok

### Galéria és közösségi tartalom

- Saját képek természetes fénnyel; a minták, bőrtónusok és díszek színei maradjanak hűek az eredetihez.
- A fehér hátterű termékfotó és enteriőrös változat váltása érintéssel és billentyűzettel is működjön; ne csak hoverre. Javasolt felirat: „Dísz közelről / Enteriőrben”.
- AI-val készült környezeti látványképnél legyen világos, hogy a környezet illusztráció.
- Az Instagram-galéria kiegészítés: a szolgáltatás megértése ne függjön a külső tartalom betöltésétől. Hiba esetén is maradjon profillink.

### Értékelések

Olvasható, több soros idézetek névvel és ismert szolgáltatással, visszafogott idézőjellel. Nincs automatikusan lapozó karusszel. Ne adjunk a szöveges ajánlásokhoz kitalált csillagszámot vagy átlagpontszámot. Különböző értékelésekből ne állítsunk össze egyetlen idézetet.

### Árak és GYIK

Az ár jól látható szövegblokkban kapjon helyet az egységgel, minimum időtartammal és az egyedi egyeztetés feltételeivel. Nem szükséges nem létező csomagokat készíteni árkártyák kedvéért.

A GYIK lehet lenyitható: egyértelmű kérdés, plusz/mínusz jel, billentyűzettel működő gomb és jelzett nyitottsági állapot. A válasz normál szöveg, megfelelő sorközzel; az oldal tényleges tartalmának része legyen.

### Kapcsolati űrlap

Mezők: legördülő téma (a három szolgáltatás és Egyéb), név, kötelező e-mail, opcionális telefonszám, üzenet. A név és üzenet kötelezősége még külön rögzíthető. Ne adjunk hozzá külön kötelező dátum-, létszám- és helyszínmezőket; a témánkénti súgószövegek az ügyféljegyzetben szerepelnek.

Fehér mező, 1 px `#74645D` keret, 8–12 px kerekítés, legalább 48 px magasság; üzenetmezőnél 160 px induló magasság. Mindig látható mezőcímke és jól látható fókusz. A helykitöltő nem helyettesíti a címkét. Hiba esetén szöveg is mondja meg a javítandó adatot; sikertelen küldéskor a beírt üzenet maradjon meg.

### Lábléc

Lehet sötétbarna háttér fehér szöveggel, apró arany díszítéssel. Kapcsolatadatok, navigáció, Facebook- és Instagram-link, később a ténylegesen elkészült adatkezelési tájékoztató. A közösségi ikonokhoz hozzáférhető felirat tartozzon.

## Dekoratív elemek és mozgás

### Visszatérő motívumkészlet

A dekoráció tudatosan ismétlődjön az oldalakon, azonos vonalvezetéssel és palettával. Ez a Csiriviri játékos vizuális nyelve; ne minden szakasz kapjon új, egymástól független motívumot.

| Motívum | Megjelenés | Javasolt hely |
|---|---|---|
| Nagy hullámvonal-csoport | A saját `hullám.png` és `Hullám 2.svg` alapján; púder, homokbézs vagy arany változat | Szakaszok széle, kép mögötti sarok, bemutatkozás környezete |
| Kis hullám / hullámos vonás | 2–3 ívből álló rövid vonal, lekerekített véggel | Cím közelében, kártya mellett, képpár között |
| Eltolt keretpár | Két vékony, kissé elfordított arany négyzet vagy téglalap, a logó kereteire rímelve | Portré és kiemelt fotó mögött |
| Apró csillanás | Egyszerű négyágú csillag, a logó díszeihez igazítva | Arcfestés/csillámtetoválás ajánlója, Facebook-hangulatblokk |
| Kézi hurok / nyitott kör | Egyetlen laza vonalból, nem szabályos pecsétként | Bemutatkozás képének sarka, alkotói részletek |
| Festékfolt vagy ecsetes textúra | Halvány, nagyobb felület; a logó ecsetes világához kapcsolódva | Workshop, rendelés menete vagy Facebookra vezető szakasz háttere |

**Színek:** fehéren púder, homokbézs és arany; púder vagy bézs felületen fehér vagy arany. Sötétbarna vonal kisebb hangsúlyként használható. A nagy motívumok halkabbak, az apró jelek lehetnek telítettebbek. Arany dekorációra megengedett ott is, ahol szöveghez nem lenne elegendő a kontrasztja.

**Méretjavaslatok:** kis jelek 20–48 px; rövid hullámok 48–120 px; keretek 160–360 px; nagy hullámcsoport 240–600 px, részben a szakasz szélére kifutva. A képernyőn érzékelt vonalvastagság kis jeleknél 2–3 px, nagyobb hullámoknál 3–5 px; a méretváltozás ne eredményezzen túl vastag kontúrt.

Az eredeti arculati fájlok maradjanak meg; a dekorációk színváltozatai külön SVG-ként vagy CSS-sel színezhető változatként készülhetnek el. A logó színeit és rajzát ez nem módosítja. A hullámot ne torzítsuk aránytalanul: kisebb változathoz egyszerűsített, rövidebb vonal készüljön.

### Ritmus és elhelyezés

Egy tartalmi blokkban egy nagy motívum mellé legfeljebb néhány apró jel társuljon. Nem szükséges minden szakaszhoz minden motívum. A három szolgáltatási belépőnél például ugyanaz a kis hullám vagy csillanás ismétlődhet eltérő elhelyezéssel, azonos színrendszerben.

A nagyobb hullámok a szakasz széléhez vagy képhez kapcsolódjanak, a kisebb jelek a cím és kép környezetében kapjanak helyet. Ne fussanak a hosszabb szöveg, mező vagy gomb mögött. A dekoratív SVG-k ne foglalják el a kattintható felületeket (`pointer-events: none`), és ne kerüljenek be felolvasandó tartalomként (`aria-hidden="true"`). A túlcsordulást helyben kezeljük, ne keletkezzen vízszintes görgetés.

Mobilon a díszítés ritkuljon: az apró motívumok egy része elhagyható, a szöveg és a gomb helye elsőbbséget kap. Az enyhén megdöntött kép ne lógjon az olvasási területbe.

### Hullámos szakaszváltások

Egyenes szakaszhatárok között néhány hangsúlyos váltás lehet széles, alacsony hullám vagy szabálytalan papírszél. Asztali nézetben 32–64 px, mobilon 20–32 px magas átmenet legyen. A váltás a két szomszédos háttérszín között működjön, extra szivárványszínek nélkül.

Egy oldalon kiindulásként 1–2 ilyen szakaszhatár elegendő, például a főoldali bemutatkozás vagy a Facebook-blokk mellett. A saját vékony hullámvonal-csoport és a kitöltött hullámos szakaszszél két külön elem: nem kell mindkettőt ugyanarra a határra tenni.

### Festékes és papíros textúrák

A `képek/inspiráció/` rózsaszín festékfotói valódi háttéranyag-jelöltek:

- `pexels-polina-kovaleva-6108929.jpg` és `pexels-polina-kovaleva-6108930.jpg`: nagyobb, rózsaszínes ecsetnyomok, jó kiindulópont szakaszháttérhez.
- `pexels-polina-kovaleva-6108843.jpg`: élénkebb, részletesebb felület; erősebb halványítással.
- `pexels-polina-kovaleva-6108852.jpg`: önálló festékfolt, kisebb hangsúlyként vagy nagyobb üres felület mellett.
- `pexels-vlad-deep-29415806-7408155.jpg`: rózsaszín papírtextúra, alternatív háttéranyag.

**Rétegek:** alapszín → külön halványított textúraréteg → tömör fehér/tört bézs kártya vagy szövegpanel. Induló textúra-erősség 10–20%, a konkrét képtől függően; ezt a tényleges elrendezésben kell beállítani. Csak a háttérréteg kapjon áttetszőséget, a szöveg és kártya ne.

A tömör kártyákon marad a normál szövegkontraszt, a részletes kép pedig a kártyák körüli térben látszik. Közvetlenül textúrára kerülő címnél külön ellenőrizni kell a teljes háttér olvashatóságát. A kép ne ismétlődjön csempeszerűen; inkább egy nagy, gondosan kivágott részlet legyen. Erős textúra mellett a hullámok és díszkeretek száma csökkenjen.

Javasolt első alkalmazás: a kézműves rendelés menetének világos kártyái mögött vagy a workshopot bemutató szakasznál. A hosszú bemutatkozó történet és az űrlap maradhat nyugodt, tömör háttéren. A stock képek hangulat- és háttéranyagok; nem Évi saját munkájának vagy rendezvényének dokumentumai.

Rövid, felhasználói művelethez kapcsolódó átmenetek; folyamatosan mozgó csillagok, számok és dekorációk nélkül. A csökkentett mozgás beállítását tiszteletben kell tartani.

## Helyi képes inspirációk és alkalmazásuk

A `képek/inspiráció/` képei részletreferenciák; a megjelenített idegen márkák szövegeit, fotóit és logóit nem vesszük át Csiriviri-tartalomként.

| Fájl | Megtartandó ötlet |
|---|---|
| `ez naaagyon jó.jpg` | Kiemelt összhatási referencia: világos-púder oldal, kép és eltolt színes felület a bemutatkozásnál, könnyed vonalas hurkok, három szolgáltatási egység, nagy képes hangulati sáv |
| `ezena  képek formája és megdöntése, keret tetszik.jpg` | Fehér keretes, kissé megdöntött fotó és mögötte eltolt vonalkeret; kis rajzolt díszek |
| `ezen tetszenek  szakaszváltások átmeneti hátterei.jpg` | Hullámos/szabálytalan szakaszváltások ritmusa, a saját palettára átültetve |
| `ez a 3 kártya szakasz jó ötletnek tűnik a szolgálatások bemutatására.png` | Három egyenrangú képes szolgáltatási belépő, hangsúlyos kép és rövid leírás; a köríves képtető kipróbálható szolgáltatáskártya-változat, nem kötelező minden képre |
| `bemutatkozas resz otlet.png` | Személyes alkotói kép és történet, mellette valós kiemelt számok |
| `facebook oldalra vivő rész ötlet.png` | Nagy képes, hangulatos szakasz a Facebook-oldalhoz vezető gombbal |
| `lépések szakasz ötlet.png` | Jól olvasható, ikonokkal tagolt folyamat; nálunk a rendelés vagy ajánlatkérés tényleges lépéseivel |
| `tetszik hogy középen van a logo jobb oldalt a social media.jpg` | Asztali fejléc-alternatíva középre helyezett logóval és jobb oldali közösségi ikonokkal; a hosszú menühöz külön navigációs sor is kipróbálható |

A középre helyezett logó fejlécelrendezési alternatíva, nem új menüszerkezet. Mobilon az olvasható logó, menügomb és a közvetlen navigáció fontosabb a teljes asztali elrendezés másolásánál.

## Logó és meglévő anyagok

- Általános logó: `képek/logo/Csiriviri Logo.svg` és `.png`.
- További általános változat: `képek/logo/Csiriviri Logo 4 3.svg` és `.png`.
- Kézműves változat: `képek/logo/Csiriviri kézműves Logo.svg` és `.png`.
- Arculati kiindulópontok: `képek/arculat/paletta.png`, `névjegykártya.png`, `hullám.png`, `Hullám 2.svg`.

A logó arányát, betűrajzát és színeit meg kell őrizni. A teljes weboldalon az általános változatot használjuk; a kézműves logó saját aloldalán kiegészítőként szerepelhet. Elsősorban a megfelelő meglévő SVG használható, az export megjelenésének ellenőrzésével. Nincs igazolt fehér logó vagy külön favicon: ilyen fájlt ne hivatkozzunk létezőként.

## Közös CSS-változók a későbbi kivitelezéshez

```css
:root {
  --color-bg: #ffffff;
  --color-surface: #ede7e3;
  --color-pink: #efd1d5;
  --color-sand: #d6c0ad;
  --color-gold: #c79d35;
  --color-text: #534642;
  --color-muted: #74645d;
  --color-link: #805c12;
  --color-primary: #efd1d5;
  --color-primary-hover: #ede7e3;
  --color-on-primary: #534642;
  --color-field-border: #74645d;
  --font-heading: "DM Serif Display", Georgia, serif;
  --font-body: "DM Sans", sans-serif;
  --radius-button: 0;
  --radius-card: 0;
  --radius-field: 10px;
  --radius-image: 0;
  --shadow-button: 6px 6px 0 0 #534642;
  --shadow-button-secondary: 6px 6px 0 0 #efd1d5;
  --shadow-card: 10px 10px 0 0 #efd1d5;
  --shadow-image: 16px 16px 0 0 #d6c0ad;
  --container-max: 1200px;
  --text-max: 680px;
}
```

## Még kipróbálandó vizuális döntések

- A szögletes, eltolt árnyékú gomb két színváltozatának szerepe, valamint az eltolás végleges mértéke. A levélformát ez az irány felváltotta.
- A javasolt betűpárosítás vagy a brief másik párosa.
- Az általános logó fejlécben használt változata és esetleges kis méretű jel.
- A bemutatkozó kép kivágása, a kiemelt adatok végleges mennyisége és a Facebook-hangulatkép.

A következő vizuális terv ezeket valódi Csiriviri-fotókkal és személyes szövegekkel mutassa meg. A rendszer ne írja felül Évi történetének hangját vagy a szükséges tartalom hosszát.
