var config = {
    style: 'mapbox://styles/ed1990/cli7afd9m02oe01pran963bf9',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsaTlkNm41aDQ0d3AzZW50bjY2YWI0N3AifQ.jUhXIR0aX5ZW4uT690N7SQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:sans-serif; padding: 0.5vh; border-radius: 10px; color:#926834; font-size:1.2rem" >Poveștile învârt lumea</span>',
    subtitle: '<span style=" font-family: playfair display, serif; color:#926834; font-size:2.3rem" >Dacă ar fi din povești, ce personaj ar fi copiii din statele UE </span>',
    byline: '<img src="./scroll.png"> </p> <p> scroll </p><p><img src="./heroimage.png"</p>',
    footer: '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Perioada copilăriei este caracterizata prin consumul cel mai mare de povești. Ne închipuim adesea în pielea personajelor. Pentru această experiență interactivă, am analizat peste 30 de indicatori care se concentrează pe viața, traiul și educația copiilor din Uniunea Europeană și din întreaga lume. Am selectat cei mai relevanți dintre acești indicatori. Fiecare tip de indicator a fost asociat cu un personaj din literatura pentru copii. Dacă un stat ocupă primul loc la un anumit indicator, acesta este reprezentat de personajul specific indicatorului.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp1',
            alignment: 'left',
            hidden: false,
            title: 'Fetița cu chibrituri',
            image: './fetita.png',
            description: 'Este o poveste emoționantă scrisă de Hans Christian Andersen. Povestea se învârte în jurul unei tinere fete sărace, care încearcă să vândă chibrituri într-o seară de Revelion înghețată. Este desculță, îmbrăcată prost și nu are adăpost. Disperată de frig, decide să aprindă chibriturile pentru a crea o sursă trecătoare de căldură. A doua dimineață, trupul înghețat al fetei este descoperit pe stradă.  Povestea servește ca o amintire emoționantă a asprimea vieții pentru cei săraci și vulnerabili și puterea imaginației de a găsi alinare în mijlocul disperării.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind1',
            alignment: 'right',
            hidden: false,
            title: 'Indicatorul: Rata mortalității la copiii până în vârsta de 5 ani ',
            image: '',
            description: 'Rata mortalității la copiii sub 5 ani se referă la probabilitatea ca un nou-născut să moară înainte de a atinge vârsta de exact 5 ani, exprimată per 1.000 de nașteri vii. În 2021, 5,0 milioane de copii sub vârsta de 5 ani au murit. La nivel global, bolile infecțioase, inclusiv pneumonie, diaree și malaria, rămân principalele cauze ale deceselor la copiii sub 5 ani, alături de nașterea prematură și complicațiile legate de naștere. Copiii din România și Bulgaria sunt fetițele cu chibrituri ale Europei. <iframe title="Rata mortalității la copiii până în vârsta de 5 ani (%)" aria-label="Map" id="datawrapper-chart-Y5Mo0" src="https://datawrapper.dwcdn.net/Y5Mo0/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp2',
            alignment: 'left',
            hidden: false,
            title: 'Oliver Twist',
            image: './oliver.png',
            description: '"Oliver Twist" este un roman clasic scris de Charles Dickens și publicat în anul 1838. Povestea urmărește viața unui tânăr orfan numit Oliver, care crește în condițiile aspre ale unei instituții de ocrotire din Anglia secolului al XIX-lea. După ce trece prin abuzuri și greutăți, Oliver evadează și se găsește în lumea infracțională a Londrei.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind2',
            alignment: 'right',
            hidden: false,
            title: 'Indicator: Rata mortalității materne',
            image: '',
            description: 'Mortalitatea maternă se referă la decesele cauzate de complicații în timpul sarcinii sau nașterii. Între 2000 și 2020, rata mortalității materne globale (MMR) a scăzut cu 34 la sută - de la 342 de decese la 223 de decese la 100.000 de nașteri vii, conform estimărilor interinstituționale ale ONU. În anul 2020, rata mortalității materne a fost foarte mare aici. <iframe title="Rata mortalității materne (%)" aria-label="Map" id="datawrapper-chart-SQyf0" src="https://datawrapper.dwcdn.net/SQyf0/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp3',
            alignment: 'left',
            hidden: false,
            title: 'Jane Eyre',
            image: './jane.png',
            description: 'Jane este o fată tânără cu visuri mari, născută într-o familie cu resurse limitate dintr-o comunitate rurală. Ea posedă un intelect ascuțit și o sete de cunoaștere și, prin determinarea și munca sa grea, urmărește educația și se străduiește să creeze o schimbare pozitivă în comunitatea ei.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind3',
            alignment: 'right',
            hidden: false,
            title: 'Rata deprivării materiale severe la copiii sub 18 ani',
            image: '',
            description: 'Eurostat numește deprivare materială severă cazurile în care cel puțin 7 din cele 13 privațiuni sunt întrunite la copii: nu își pot permite i) să plătească chirie sau facturile de utilități, ii) să își mențină locuința suficient de caldă, iii) să facă față cheltuielilor neprevăzute, iv) să consume carne sau echivalent proteic în fiecare a doua zi, v) să aibă o săptămână de vacanță,  vi) să aibă acces la un autoturism, vii) să înlocuiască mobilierul uzat; viii) să înlocuiască hainele uzate cu altele noi; ix) să aibă două perechi de pantofi potriviți; x) să aibă bani de buzunar, xi) să aibă activități de petrecere a timpului liber regulate; xii) să se întâlnească cu prietenii/familia o masă cel puțin o dată pe lună; și xiii) să aibă o conexiune la internet. <iframe title="Rata deprivării materiale severe (%)" aria-label="Map" id="datawrapper-chart-gfOQE" src="https://datawrapper.dwcdn.net/gfOQE/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();        </script> ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp4',
            alignment: 'left',
            hidden: false,
            title: 'Heidi',
            image: './heidi.png',
            description: 'Heidi este o fată orfană care merge să locuiască cu bunicul ei retras și aspru, Adolph Kramer, în Alpii Elvețieni. În ciuda reticenței sale inițiale, natura ei cu suflet cald și relația cu bunicul său înfloreșc treptat, iar el devine o figură iubitoare și grijulie în viața ei.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind4',
            alignment: 'right',
            hidden: false,
            title: 'Copii crescuți de bunici',
            image: '',
            description: 'În Portugalia, Spania, Italia și România, unde plățile de asistență socială pentru părinți și mamele care stau acasă sunt limitate, iar îngrijirea formală a copiilor și oportunitățile de muncă cu jumătate de normă pentru mame sunt puține, bunicii oferă o mare parte din îngrijirea intensivă a nepoților lor. <iframe title="Pocentul bunicelor care oferă ingrijire intensă a copiilor" aria-label="Map" id="datawrapper-chart-nE3eq" src="https://datawrapper.dwcdn.net/nE3eq/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();  </script>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp5',
            alignment: 'left',
            hidden: false,
            title: 'Peter Pevensie',
            image: './narnia.png',
            description: 'Peter, împreună cu frații săi, este transportat în ținutul magic Narnia. Părinții lor, profesorul Kirke și doamna Kirke, sunt prezentate ca figuri inteligente și susținătoare care îi ghidează pe copiii lor în aventurile și dezvoltarea lor.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind5',
            alignment: 'right',
            hidden: false,
            title: 'Educația părinților',
            image: '',
            description: 'Educația părinților se referă la procentul copiilor ai căror părinți au mai mult decât studii liceale. <iframe title="Procentul copiilor ai căror părinți au absolvit învățământul tertiar" aria-label="Map" id="datawrapper-chart-o69c3" src="https://datawrapper.dwcdn.net/o69c3/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="647" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp6',
            alignment: 'left',
            hidden: false,
            title: 'Alice',
            image: './alice.png',
            description: 'Alice este o fată extrem de educată și curioasă intelectual, provenind dintr-o familie înstărită din oraș. Ea caută constant cunoștințe și se adâncește în activități academice, servind ca model pentru colegii ei și folosindu-și inteligența pentru a rezolva probleme complexe.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind6',
            alignment: 'right',
            hidden: false,
            title: 'Rezultatele la testele PISA 2018',
            image: '',
            description: 'În anul 2018, la testele PISA, copii din Estonia, Finlanda, Polonia, Irlanda, Slovenia au înregistrat cele mai mari scoruri, de peste 500 de puncte. România a avut unul dintre cele mai mici punctaje, 428 de puncte. (aici vine harta care nu merge)',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp7',
            alignment: 'left',
            hidden: false,
            title: 'Huckleberry Finn',
            image: './huck.png',
            description: 'Huckleberry Finn, cunoscut sub numele de Huck, este un băiat neastâmpărat și independent care trăiește în St. Petersburg, Missouri. El este sub grija văduvei Douglas, o femeie cu inimă bună care încearcă să-l civilizeze. Cu toate acestea, Huck tânjește după libertate și resimte constrângerile societății. Într-o zi, tatăl abuziv și alcoolic al lui Huck, Pap, se întoarce în oraș și cere custodia lui Huck. Îngrijorat pentru siguranța sa, Huck decide să-și simuleze propria moarte și să fugă. ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind7',
            alignment: 'right',
            hidden: false,
            title: 'Indexul global care analizează mediul în care trăiesc coii din diverse state',
            image: '',
            description: 'Indexul Out of the Shadows este un indicator global care analizează modul în care țările abordează exploatarea și abuzul sexual al copiilor. Fiind un compus de date, indexul măsoară siguranța mediului sau lipsa acesteia pentru copii. Sunt luate în calcul peste 60 de state. La nivelul Uniunii Europene, italia înregistrează cel mai scăzut scor. ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp8',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Imaginea copiilor în Uniunea Europeană este influențată în mare măsură de condițiile de mediu și oportunitățile cu care aceștia se confruntă în procesul lor de creștere. Fiecare țară și regiune au caracteristici specifice care determină în mod direct percepția și atitudinea copiilor față de viață, dar și modul în care aceștia se comportă ca adulți. În plus, importanța părinților în modelarea imaginii copiilor și transmiterea valorilor este crucială. Prin urmare, în cele ce urmează vom explora modul în care părinții din diverse zone ale Europei se raportează la valorile pe care le inoculează copiilor lor. În Scandinavia, de exemplu, părinții acordă o importanță deosebită egalității de gen, libertății individuale și dezvoltării personale a copiilor lor. Pe de altă parte, în țările din Europa Centrală și de Est, valorile tradiționale și respectul față de autoritate ocupă un loc important în educația copiilor. Părinții din aceste regiuni tind să promoveze disciplina, respectul față de reguli și valorile conservatoare. ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp8',
            alignment: 'left',
            hidden: false,
            title: 'Cum se citește graficul',
            image: './howto.png',
            description: 'Graficele de mai jos sunt construite pornind de la ultimele date ale World Values Survey și se referă la procentul părinților din fiecare stat care văd anumite valori ca fiind importante.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

    






        {
            id: 'two-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './Cyprus.png',     
            description: '',
            location: {
                center: [32.989018, 35.039941],
                zoom: 8,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'three-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './cipru.png',    
            description: 'Peste 80% dintre părinții ciprioți susțin că bunele maniere sunt foarte importante și le privesc ca pe cea mai importantă deprindere pe care le-o dau mai departe copiilor lor. La fel de importante sunt toleranța și respectul și munca asiduă.',
            location: {
                center: [32.989018, 35.039941],
                zoom: 8,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    
        {
            id: 'four-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './Czechia.png',
            description: '',
            location: {
                center: [14.496911, 50.017777],
                zoom: 8,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'five-identifier',
            alignment: 'left',
            hidden: false,
            title: '', 
            image: './cehia.png',
            description: 'Pentru cehi, responsabilizarea copiilor este extrem de importantă. Puțin peste 60% dintre părinți o privesc ca pe cea mai importantă deprindere. La câteva procente distanță se găsesc toleranța și determinarea. Pentru cehi este important ca, încă de mici, copiii să fie perseverenți și determinați.',
            location: {
                center: [14.496911, 50.017777],
                zoom: 8,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'six-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './germany.png',
            description: '',
            location: {
                center: [9.464329, 48.817151],
                zoom: 8,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seven-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './germania.png',
            description: '84% dintre părinții din Germania pun bunele maniere în topul deprinderilor copiilor. 80% dintre ei pun responsabilizarea ca deprindere importantă în educația copiilor. Și independența joacă un rol important în educația nemților, fiind a treia cea mai intens selectată caracteristică de către părinți. ',
            location: {
                center: [9.464329, 48.817151],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './greece.png',
            description: '',
            location: {
                center: [23.764389, 37.951507],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nine-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './grecia.png',
            description: 'Pentru greci, munca asiduă și bunele maniere înregistrează procente aproape egale. Nici în cazul grecilor, ca și în cazul balcanicilor, imaginația sau cultura financiară nu par să primeze în valorile pe care părinții vor să le transmită.',
            location: {
                center: [23.764389, 37.951507],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ten-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './netherlands.png',
            description: '',
            location: {
                center: [4.860635, 52.370084],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleven-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './olanda.png',
            description: 'Responsabilitatea este cea mai importantă calitate pe care un părinte din Olanda i-o poate transmite copilului. Alte valori precum independența sau toleranța și respectul sunt și ele importante. Interesant este faptul că, după sârbi, olandezii sunt al doilea popor din Europa pentru care altruismul este important. ',
            location: {
                center: [4.860635, 52.370084],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelve-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './romanias.png',
            description: '',
            location: {
                center: [26.164705, 44.377613],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './romania.png',
            description: 'Pentru părinții români este importantă munca asiduă. Copilul trebuie să învețe să muncească din greu și să fie reponsabil. De asemenea, dintre statele analizate, aici jumătate dintre părinți consideră că credința religioasă este importantă în educația unui copil. Acesta este cel mai mare procent înregistrat în rândul statelor europene analizate.',
            location: {
                center: [26.164705, 44.377613],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'forteen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './russia.png',
            description: '',
            location: {
                center: [37.432584, 55.450047],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './rusia.png',
            description: 'La fel ca în cazul altor popoare est-europene, și părinții ruși plasează munca asiduă în prim planul caracteristicilor pe care un copil ar trebui să le deprindă. Spre deosebire însă de alte state din fostul bloc comunist, pentru ruși educația financiară pare să fie importantă. 45% dintre părinți susțin că este important să îi învețe pe copii să-și gestioneze banii.',
            location: {
                center: [37.432584, 55.450047],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixteen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './serbias.png',
            description: '',
            location: {
                center: [21.476411, 44.490322],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'seventeen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './serbia.png',
            description: 'Contrar credinței populare, pentru părinții sârbi, credința religioasă este cea mai puțin importantă în educația unui copil. În prim plan sunt bunele maniere și responsabilizarea. Și obediența este importantă pentru sârbi, prin comparație cu alte state europene, în Serbia, peste 40% dintre părinți susțin că obediența este importantă.',
            location: {
                center: [21.476411, 44.490322],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighteen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './slovakia.png',
            description: '',
            location: {
                center: [17.063918, 48.119981],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nineteen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './slovacia.png',
            description: 'Dup Rusia, Slovacia este un alt stat în care un procent ridicat dintre părinți susțin educația financiară. În prim plan însă, se află munca asiduă și torelanța și respectul.',
            location: {
                center: [17.063918, 48.119981],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './turkey.png',
            description: '',
            location: {
                center: [28.968874, 41.027248],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyone-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './turcia.png',
            description: 'Pentru părinții turci, cel mai important lucru pe care îl poate deprinde copilul lor este toleranța și respectul față de ceilalți. Munca asiduă se clasează pe planul doi.',
            location: {
                center: [28.968874, 41.027248],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentytwo-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './ukraine.png',
            description: '',
            location: {
                center: [30.612209, 50.273104],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'twentythree-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './ucraina.png',
            description: 'Capacitatea de a munci din greu și responsabilitatea sunt cele mai importante caracteristici pe care copiii din Ucraina trebuie să le aibă, potrivit părinților de aici.',
            location: {
                center: [30.612209, 50.273104],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyfour-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: 'În estul Europei și în Balcani există o realitate culturală și socio-economică care impune o atenție deosebită asupra muncii și efortului. Acest fapt se datorează în mare parte decalajului existent față de statele din vestul Europei, atât în termeni de dezvoltare economică, cât și de nivel de trai. Astfel, parinții din aceste regiuni își învață copiii încă de mici importanța muncii și responsabilitatea în îndeplinirea sarcinilor. <p> Motivul central pentru această atitudine față de muncă îl reprezintă nevoia de a depăși condiția dificilă în care se află multe țări din aceste regiuni. Decalajul economic și infrastructural dintre est și vest poate determina o abordare pragmatică în viață, unde munca devine un mijloc crucial pentru a-ți asigura un trai decent și pentru a te ridica deasupra limitărilor impuse de mediul înconjurător.</p> <p>există o tendință în aceste regiuni de a subestima sau de a neglija alte abilități și calități care nu sunt direct legate de munca asiduă. Caracteristici precum gestionarea banilor, altruismul sau imaginatia pot fi trecute pe plan secundar în fața priorității muncii și a realizărilor materiale. Acest lucru se datorează în mare parte necesității de a rezolva problemele imediate și de a construi o stabilitate financiară.</p>',
            location: {
                center: [26.10514, 44.43873],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyfive-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [21.34923, 45.80305],
                zoom: 7,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        

    ]
};
