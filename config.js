var config = {
    style: 'mapbox://styles/ed1990/clia8096n00uy01qubqs38h82',
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
    title: '<span style="font-family:sans-serif; padding: 0.5vh; border-radius: 10px; color:#926834; font-size:1.2rem" >Copiii României, copiii Europei</span>',
    subtitle: '<span style=" font-family: playfair display, serif; color:#926834; font-size:2.3rem" >Cum arăta povestea vieții copilului tău, dacă s-ar fi născut în altă țară</span>',
    byline: '<a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a> <p> <img src="./scroll.png"> </p> <p> scroll </p> <p><img src="./copii.png" </p>',
    footer: '<br> 1 iunie 2023 <br> <a href="https://panorama.ro/author/andrei-luca-popescu/" target="_blank">Editor: Andrei Luca Popescu</a> <br> Creat folosind <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling </a> <p>Ilustrația este făcută cu Microsoft Bing Image creator</p>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Nu toți copiii pleacă în viață de la aceeași linie de start. Nici măcar în UE. Cum arată și cum crește un copil, în funcție de țara Uniunii Europene în care se naște? Nu la chip și nici la trup. Cum îl „programează” familia, social și cultural? Cu ce șanse pleacă el la drum, în viață, și în ce țară o duce cel mai rău? Nu e vorba doar de lucruri materiale, ci uneori de însăși șansa lui la supraviețuire.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
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
            id: 'slug-style-id5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Copiii învață și se bucură cel mai mult cu povești. În această experiență interactivă Panorama, am analizat mai mulți indicatori sociali, care marchează puternic startul în viață al unui copil. Și am asociat fiecare indicator cu un personaj de poveste. Copiii din țările care stau cel mai prost la acești indicatori au șansele statistice cele mai mari să se asemene cu personajele respective.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            id: 'slug-style-id3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'În funcție de țara unde se naște, sunt șanse mai mari sau mai mici ca un copil să fie o „fetiță cu chibrituri”, care nici măcar nu apucă să supraviețuiască primilor ani. Sau un „Oliver Twist” care trăiește o viață viciată de sărăcia familiei. Poate că e o Cenușăreasă orfană sau o Heidi crescută de bunici.<img src="./foh.png" class="center">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            id: 'slug-style-id4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Poate că e un copil ca eroul din Narnia, ai cărui părinți sunt educați și îl formează după chipul și asemănarea lor. Sau o Alice într-o țară a minunilor educației, unde are șansa la o educație care să-i dezvolte competențele și abilitățile așa cum trebuie. În fine, poate că e un Huck Finn, expus abuzurilor de toate felurile. <img src="./nah.png" class="center">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            id: 'slug-style-id6',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'În partea a doua a acestei povești vizuale despre copiii lumii în care trăim, ne concentrăm pe formarea primită în primii ani de viață, de la părinți. În fiecare țară, se pune accent pe diverse valori și lucruri pe care părinții le consideră importante în viață, fără ca micii copii să aibă vreun cuvânt de spus. Plecând de la un studiu World Values Survey, facem o incursiune printre copiii din câteva țări reprezentative pentru regiunile Europei, să vedem cum îi modelează cultural și social părinții lor, încă de mici.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Fetița cu chibrituri </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De Hans Christian Andersen </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Moartea  </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./fetita.png"></div> Povestea emoționantă, scrisă de Hans Christian Andersen, se învârte în jurul unei tinere fete sărace, care încearcă să vândă chibrituri într-o seară de Revelion înghețată. Este desculță, îmbrăcată prost și nu are adăpost. Încearcă să se încălzească cu focul de la chibrituri, însă moare de frig până a doua zi dimineață.',
            location: {
                center: [24.233145, 45.976924],
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem"  >Indicator: Rata mortalității la copiii până în vârsta de 5 ani </span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: România, Bulgaria, Malta </p>',
            image: '',
            description: 'E vorba de probabilitatea ca un nou-născut să moară înainte de a atinge vârsta de 5 ani, exprimată per 1.000 de nașteri vii. În 2021, 5 milioane de copii sub vârsta de 5 ani au murit, în toată lumea. În UE mor, în medie, 3,7 copii din 1000 cu vârsta sub 5 ani.  La nivel global, bolile infecțioase, inclusiv pneumonie, diaree și malarie, rămân principalele cauze ale deceselor la copiii sub 5 ani, alături de nașterea prematură și complicațiile legate de naștere. Copiii din România și Bulgaria sunt fetițele cu chibrituri ale Europei. Acestea sunt țările UE unde mor cei mai mulți copii sub 5 ani.',
            location: {
                center: [24.233145, 45.976924],
                zoom: 6,
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
            id: 'ind1.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Rata mortalității la copiii până în vârsta de 5 ani (%)" aria-label="Map" id="datawrapper-chart-Y5Mo0" src="https://datawrapper.dwcdn.net/Y5Mo0/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>',
            location: {
                center: [24.233145, 45.976924],
                zoom: 7,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Cenușăreasa </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De Frații Grimm, Charles Perrault </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Orfanii </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./cenusareasa.png"></div>Cenușăreasa este o tânără fată orfană care trăiește cu o mamă vitregă și surori vitrege crude. În ciuda dificultăților, ea rămâne amabilă și plină de speranță. Cu ajutorul Zânei Bune, Cenușăreasa participă la un bal regal, unde cucerește inima prințului.',
            location: {
                center: [33.177598, 35.103830],
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Rata mortalității materne</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: Cipru, Letonia, Ungaria </p>',
            image: '',
            description: 'E vorba de mamele care mor din cauza unor complicații de sănătate, în timpul sarcinii sau nașterii. Între 2000 și 2020, rata mortalității materne globale (MMR) a scăzut cu 34% - de la 342 de decese la 223 de decese la 100.000 de nașteri vii, conform estimărilor interinstituționale ale ONU.',
            location: {
                center: [33.177598, 35.103830],
                zoom: 6,
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
            id: 'ind2.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Rata mortalității materne (%)" aria-label="Map" id="datawrapper-chart-SQyf0" src="https://datawrapper.dwcdn.net/SQyf0/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [33.177598, 35.103830],
                zoom: 7,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Oliver Twist </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De Charles Dickens </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Sărăcie </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./oliver.png"></div>Romanul clasic al lui Charles Dickens urmărește viața unui tânăr orfan, care crește în condițiile aspre ale unei instituții de ocrotire din Anglia secolului al XIX-lea. După ce trece prin abuzuri și greutăți, Oliver evadează și ajunge să fie exploatat în lumea infracțională a Londrei. ',
            location: {
                center: [24.233145, 45.976924],
                zoom: 4,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Rata deprivării materiale severe la copiii sub 18 ani</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: România, Bulgaria, Grecia </p>',
            image: '',
            description: 'Sărăcia nu e doar un cuvânt generic pentru cei care nu au bani. Se traduce în situații extrem de concrete, în statisticile UE. Conform Eurostat, deprivarea materială severă apare atunci când cel puțin 7 din 13 privațiuni există în viața unui copil.',
            location: {
                center: [24.233145, 45.976924],
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
            id: 'ind3.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Rata deprivării materiale severe (%)" aria-label="Map" id="datawrapper-chart-gfOQE" src="https://datawrapper.dwcdn.net/gfOQE/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();        </script> ',
            location: {
                center: [24.233145, 45.976924],
                zoom: 6,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Heidi </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De Johanna Spyri </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Cei crescuți de bunici </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./heidi.png"></div>Povestea lui Heidi este cea a unei fete orfane, care locuiește cu bunicul ei retras și aspru, în Alpii Elvețieni. În ciuda reticenței sale inițiale, firea ei cu suflet cald și relația cu bunicul său înfloresc împreună, iar bătrânul ursuz devine o figură iubitoare și grijulie în viața ei.',
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Copiii crescuți de bunici</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: România, Italia, Spania </p>',
            image: '',
            description: 'În Portugalia, Spania, Italia și România, unde plățile de asistență socială pentru părinți și pentru mamele care stau acasă sunt limitate, iar îngrijirea formală a copiilor și oportunitățile de muncă cu jumătate de normă pentru mame sunt puține, bunicile oferă o mare parte din îngrijirea intensivă a nepoților lor. Tot în grija bunicilor ajung și copiii ai căror părinți sunt plecați la muncă în alte țări sau orașe, așa cum este cazul atât de des în România.',
            location: {
                center: [24.233145, 45.976924],
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
            id: 'ind4.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Pocentul bunicelor care oferă ingrijire intensă a copiilor" aria-label="Map" id="datawrapper-chart-nE3eq" src="https://datawrapper.dwcdn.net/nE3eq/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();  </script>',
            location: {
                center: [24.233145, 45.976924],
                zoom: 6,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Peter Pevensie </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De C. S. Lewis </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Părinții educați </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./narnia.png"></div>Peter și frații săi sunt transportați în ținutul magic Narnia. Profesorul Kirke și doamna Kirke sunt prezentate ca figuri inteligente și susținătoare, care îi ghidează pe copiii lor în aventurile și dezvoltarea lor.',
            location: {
                center: [5.289564, 52.121422],
                zoom: 4,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Educația părinților</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: Danemarca, Olanda, Irlanda </p>',
            image: '',
            description: 'Educația părinților se referă la procentul copiilor ai căror părinți au mai mult decât studii liceale.',
            location: {
                center: [5.289564, 52.121422],
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
            id: 'ind5.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Procentul copiilor ai căror părinți au absolvit învățământul tertiar" aria-label="Map" id="datawrapper-chart-o69c3" src="https://datawrapper.dwcdn.net/o69c3/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="647" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [5.289564, 52.121422],
                zoom: 6,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Alice </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De Lewis Carroll </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Capacitatea de a rezolva probleme complexe </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./alice.png"></div>Alice este o fată educată și curioasă intelectual. Ea caută constant cunoștințe și se adâncește în activități academice, servind ca model pentru colegii ei și folosindu-și inteligența pentru a rezolva probleme complexe.',
            location: {
                center: [24.838502, 59.323163],
                zoom: 4,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Rezultatele la testele PISA</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: Estonia, Finlanda, Irlanda </p>',
            image: '',
            description: 'În anul 2018, la testele PISA, copiii din Estonia, Finlanda, Polonia, Irlanda, Slovenia au înregistrat cele mai mari scoruri, de peste 500 de puncte. Elevii din România au avut unul dintre cele mai mici punctaje, 428 de puncte.',
            location: {
                center: [24.838502, 59.323163],
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
            id: 'ind6.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Rezultate la testele PISA în UE" aria-label="Map" id="datawrapper-chart-48z94" src="https://datawrapper.dwcdn.net/48z94/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="647" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [24.838502, 59.323163],
                zoom: 6,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Huckleberry Finn </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De Mark Twain </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Copiii abuzați </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./huck.png"></div>Huck este un băiat neastâmpărat și independent din Missouri, care trăiește în grija văduvei Douglas, o femeie cu inimă bună, care încearcă să-l civilizeze. Într-o zi, tatăl său abuziv și alcoolic se întoarce în oraș și cere custodia lui Huck. Îngrijorat pentru siguranța sa, băiatul decide să-și simuleze propria moarte.',
            location: {
                center: [11.487853, 43.663277],
                zoom: 4,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Indexul global care analizează exploatarea și abuzul asupra copiilor</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: Italia, România </p>',
            image: '',
            description: 'Indexul Out of the Shadows este un indicator global care analizează modul în care țările abordează exploatarea și abuzul sexual al copiilor. Indexul măsoară siguranța sau lipsa acesteia în mediul în care trăiesc copiii. Sunt luate în calcul peste 60 de state. La nivelul Uniunii Europene, Italia înregistrează cel mai scăzut scor. ',
            location: {
                center: [11.487853, 43.663277],
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
            title: '',
            image: '',
            description: '<iframe title="Indexul global ”Out of the Shadows”" aria-label="Map" id="datawrapper-chart-hn6hy" src="https://datawrapper.dwcdn.net/hn6hy/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="717" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [11.487853, 43.663277],
                zoom: 6,
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >După chipul și asemănarea lor. Cum își modelează părinții propriii copii</span> ',
            image: '',
            description: 'Copiii sunt influențați în mare măsură de mediul în care trăiesc și de oportunitățile sau obstacolele de care se lovesc în procesul lor de creștere. Fiecare țară și regiune are caracteristici specifice, care determină în mod direct percepția și atitudinea copiilor față de viață, dar și modul în care aceștia se comportă ca adulți. Iar importanța părinților în modelarea imaginii copiilor și transmiterea valorilor este crucială. Vom explora modul în care părinții din diverse țări reprezentative pentru marile zone ale Europei se raportează la valorile pe care le inoculează copiilor lor. ',
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
            id: 'exp8.1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'În Scandinavia, de exemplu, părinții acordă o importanță deosebită egalității de gen, libertății individuale și dezvoltării personale a copiilor lor. Pe de altă parte, în țările din Europa Centrală și de Est, valorile tradiționale și respectul față de autoritate ocupă un loc important în educația copiilor. Părinții din aceste regiuni tind să le bage în cap copiilor disciplina, respectul față de reguli și valorile conservatoare.',
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
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Cum se citește graficul</span> ',
            image: './howto.png',
            description: 'Graficele de mai jos sunt construite pornind de la ultimele date ale World Values Survey și se referă la procentul părinților din fiecare stat care văd anumite valori ca fiind importante. ',
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
            description: 'Pentru părinții români este importantă munca asiduă. Copilul trebuie să învețe, să muncească din greu și să fie responsabil. De asemenea, dintre statele analizate, aici jumătate dintre părinți consideră credința religioasă ca fiind importantă în educația unui copil. Părinții români au cel mai mare procent la acest capitol, din statele europene analizate.     ',
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
            description: 'Peste 80% dintre părinții ciprioți susțin că bunele maniere sunt foarte importante și le privesc ca pe cea mai importantă deprindere pe care le-o dau mai departe copiilor. La fel de importante sunt toleranța, respectul și munca asiduă.    ',
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
            description: 'Pentru cehi, responsabilizarea copiilor este extrem de importantă. Puțin peste 60% dintre părinți o privesc ca pe cea mai importantă deprindere. La câteva procente distanță se găsesc toleranța și determinarea.',
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
            description: '84% dintre părinții din Germania pun bunele maniere în topul deprinderilor copiilor. 80% dintre ei consideră responsabilizarea ca deprindere importantă în educația copiilor. Și independența joacă un rol important în educația micilor nemți, fiind a treia cea mai intens selectată caracteristică de către părinți. ',
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
            description: 'Pentru greci, munca asiduă și bunele maniere înregistrează procente aproape egale. Ca în cazul mai multor popoare balcanice, și la greci imaginația sau cultura financiară nu se numără printre cele mai importante valori pe care părinții vor să le transmită copiilor.',
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
            description: 'Responsabilitatea este cea mai importantă calitate pe care un părinte din Olanda i-o poate transmite copilului. Alte valori, precum independența sau toleranța și respectul, sunt și ele importante. Interesant este faptul că, după sârbi, olandezii sunt al doilea popor din Europa pentru care altruismul este important.',
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
            description: 'La fel ca în cazul altor popoare est-europene, și părinții ruși plasează munca asiduă în prim-planul caracteristicilor pe care un copil ar trebui să le deprindă. Spre deosebire însă de alte state din fostul bloc comunist, pentru ruși educația financiară pare să fie importantă. 45% dintre părinți susțin că este important să îi învețe pe copii să-și gestioneze banii.',
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
            description: 'Contrar percepției populare, pentru părinții sârbi credința religioasă este cea mai puțin importantă în educația unui copil. În prim-plan sunt bunele maniere și responsabilizarea. Și obediența este importantă pentru sârbi. Prin comparație cu alte state europene, în Serbia, peste 40% dintre părinți susțin că obediența este importantă. ',
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
            description: 'După Rusia, Slovacia este un alt stat în care un procent ridicat dintre părinți susțin educația financiară. În prim plan se află însă munca asiduă, toleranța și respectul. ',
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
            id: 'fin1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'În Estul Europei și în Balcani, există o realitate culturală și socio-economică care impune o atenție deosebită asupra muncii și efortului. Acest fapt se datorează în mare parte decalajului existent față de statele din Vestul Europei, atât în termeni de dezvoltare economică, cât și de nivel de trai. Astfel, părinții din aceste regiuni își învață copiii încă de mici importanța muncii și responsabilitatea în îndeplinirea sarcinilor.',
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
            id: 'fin2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Motivul central pentru această atitudine față de muncă îl reprezintă nevoia de a depăși condiția dificilă în care se află multe țări din aceste regiuni. Decalajul economic și infrastructural dintre Est și Vest poate determina o abordare pragmatică în viață, unde munca devine un mijloc crucial pentru a-ți asigura un trai decent și pentru a te ridica deasupra limitărilor impuse de mediul înconjurător.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 3,
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
            id: 'fin3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Există o tendință în aceste regiuni de a subestima sau de a neglija alte abilități și calități care nu sunt direct legate de munca asiduă. Caracteristici precum gestionarea banilor, altruismul sau imaginația pot fi trecute pe plan secundar, prioritate având munca și realizările materiale. Acest lucru se datorează în mare parte necesității de a rezolva problemele imediate și de a construi o stabilitate financiară.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
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
            id: 'fin4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'În 2023, pe întreg globul trăiau 2,2 miliarde de copii, iar aproximativ 80 de milioane dintre ei trăiau în Uniunea Europeană. Fiecare s-a născut și va crește în condiții și cu șanse diferite, în funcție de țara și familia unde a venit pe lume.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
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


        
        

    ]
};