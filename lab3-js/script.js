var karty = document.querySelectorAll(".karta-przepisu");

karty.forEach(karta => {
    var opis_karty = karta.querySelector(".karta-opis");
    var przepis_karty = opis_karty.querySelector(".skladniki-przepis");
    przepis_karty.classList.add('hidden');
});

karty.forEach(karta => {

    var opis_karty = karta.querySelector(".karta-opis");
    var skladniki_header = opis_karty.querySelector(".skladniki-h");
    var skladniki_karty = opis_karty.querySelector(".skladniki-karta");
    var przepis_karty = opis_karty.querySelector(".skladniki-przepis");
    var zdjecie_przepisu = karta.querySelector(".zdjecie-przepisu-karty");
    var button = zdjecie_przepisu.querySelector("button");

    button.addEventListener("mouseover", ()=> {
        console.log("on object");
    })

    button.addEventListener("mouseout", ()=> {
        console.log("out of object");
    })

    button.addEventListener("click", function () {
        if(skladniki_header.innerHTML == "Składniki"){
            karty.forEach(karta => {
                var opis_karty = karta.querySelector(".karta-opis");
                var skladniki_header = opis_karty.querySelector(".skladniki-h");
                var skladniki_karty = opis_karty.querySelector(".skladniki-karta");
                var przepis_karty = opis_karty.querySelector(".skladniki-przepis");
                if(skladniki_header.innerHTML == "Przepis"){
                    skladniki_header.innerHTML = "Składniki";
                    przepis_karty.classList.add('visuallyhidden');    
                    przepis_karty.addEventListener('transitionend', function(e) {
                        przepis_karty.classList.add('hidden');
                    }, {
                    capture: false,
                    once: true,
                    passive: false
                    });
                    setTimeout(function () {
                    skladniki_karty.classList.remove('hidden');
                    skladniki_karty.classList.remove('visuallyhidden');
                    }, 1200);
                } 
            })
            skladniki_header.innerHTML = "Przepis";

            skladniki_karty.classList.add('visuallyhidden');    
            skladniki_karty.addEventListener('transitionend', function(e) {
                skladniki_karty.classList.add('hidden');
            }, {
            capture: false,
            once: true,
            passive: false
            });
            setTimeout(function () {
            przepis_karty.classList.remove('hidden');
            przepis_karty.classList.remove('visuallyhidden');
            }, 1200);
        }else{
            skladniki_header.innerHTML = "Składniki";

            przepis_karty.classList.add('visuallyhidden');    
            przepis_karty.addEventListener('transitionend', function(e) {
                przepis_karty.classList.add('hidden');
            }, {
            capture: false,
            once: true,
            passive: false
            });
            setTimeout(function () {
            skladniki_karty.classList.remove('hidden');
            skladniki_karty.classList.remove('visuallyhidden');
            }, 1200);
        }
    }, false);
});

var logowanie_button = document.querySelector("#logowanie-button");
logowanie_button.addEventListener("click", () => {
    person = prompt("Podaj swój login");
    if (person == null) cake_button.innerHTML = "Zaloguj się";
    logowanie_button.innerHTML = "Zalogowano jako " + person;
});

var newsletter_button = document.querySelector("#newsletter-button");
newsletter_button.addEventListener("click", () => {
    person = prompt("Podaj swój e-mail");
    if (person == null) cake_button.innerHTML = "Zapisz się do naszego newslettera";
    newsletter_button.innerHTML = person + " będziemy informować cię o nowych przepisach!";
});

var dodaj_przepis = document.querySelector("#button_dodaj_przepis");
dodaj_przepis.addEventListener("click", ()=>{

    nazwa_ciasta = document.querySelector("#d_nazwa_ciasta").value;
    document.querySelector("#d_nazwa_ciasta").value = "";

    link_ciasta = document.querySelector("#d_link_do_zdj").value;
    document.querySelector("#d_link_do_zdj").value = "";

    skladniki_ciasta = document.querySelector("#d_skladniki").value;
    document.querySelector("#d_skladniki").value = "";

    przepis_ciasta = document.querySelector("#d_przepis").value;
    document.querySelector("#d_przepis").value = "";

    var ilosc_ciast = 1;

    var kartyAktualne = document.querySelectorAll(".karta-przepisu");

    kartyAktualne.forEach(karta => {
        ilosc_ciast++;
    });
    var id_poprzednika = "karta" + (ilosc_ciast-1);

    var id_ciasta = "karta" + ilosc_ciast + "";

    console.log(id_poprzednika);
    console.log(id_ciasta);

    var stareCiasto = document.getElementById(id_poprzednika);

    var noweCiasto = document.createElement('div');
    noweCiasto.id = id_ciasta;
    noweCiasto.classList.add("karta-przepisu");

    var nCZdjecie = document.createElement('div');
    nCZdjecie.classList.add("zdjecie-przepisu-karty");
    nCZdjecie.style.backgroundImage = 'url('+link_ciasta+')';

    var button = document.createElement('button');
    button.innerHTML = "Zobacz przepis";
    var n_ciasta = document.createElement('h1');
    n_ciasta.innerHTML = nazwa_ciasta;
    nCZdjecie.appendChild(n_ciasta);
    nCZdjecie.appendChild(button);

    var nCSkladnikiKarta = document.createElement('div');
    nCSkladnikiKarta.classList.add("skladniki-karta");
    nCSkladnikiKarta.innerHTML = skladniki_ciasta;

    var nCSkladnikiPrzepis = document.createElement('div');
    nCSkladnikiPrzepis.classList.add("skladniki-przepis");
    nCSkladnikiPrzepis.innerHTML = przepis_ciasta;

    var nCSkladniki = document.createElement('h3');
    nCSkladniki.classList.add("skladniki-h");
    nCSkladniki.innerHTML = "Składniki";

    var nCOpis = document.createElement('div');
    nCOpis.classList.add("karta-opis");

    var del_button = document.createElement('button');
    del_button.innerHTML = "Usuń przepis";
    del_button.classList.add("centered")

    nCOpis.appendChild(nCSkladniki);
    nCOpis.appendChild(nCSkladnikiKarta);
    nCOpis.appendChild(nCSkladnikiPrzepis);
    nCOpis.appendChild(del_button);

    noweCiasto.appendChild(nCZdjecie);
    noweCiasto.appendChild(nCOpis);

    stareCiasto.parentNode.insertBefore(noweCiasto, stareCiasto.nextSibling);
    
    var karta = document.querySelector("#"+id_ciasta);
    var opis_karty = karta.querySelector(".karta-opis");
    var skladniki_header = opis_karty.querySelector(".skladniki-h");
    var skladniki_karty = opis_karty.querySelector(".skladniki-karta");
    var przepis_karty = opis_karty.querySelector(".skladniki-przepis");
    var zdjecie_przepisu = karta.querySelector(".zdjecie-przepisu-karty");
    var button = zdjecie_przepisu.querySelector("button");
    przepis_karty.classList.add('hidden');

    button.addEventListener("click", function () {
        if(skladniki_header.innerHTML == "Składniki"){
            karty.forEach(karta => {
                var opis_karty = karta.querySelector(".karta-opis");
                var skladniki_header = opis_karty.querySelector(".skladniki-h");
                var skladniki_karty = opis_karty.querySelector(".skladniki-karta");
                var przepis_karty = opis_karty.querySelector(".skladniki-przepis");
                if(skladniki_header.innerHTML == "Przepis"){
                    skladniki_header.innerHTML = "Składniki";
                    przepis_karty.classList.add('visuallyhidden');    
                    przepis_karty.addEventListener('transitionend', function(e) {
                        przepis_karty.classList.add('hidden');
                    }, {
                    capture: false,
                    once: true,
                    passive: false
                    });
                    setTimeout(function () {
                    skladniki_karty.classList.remove('hidden');
                    skladniki_karty.classList.remove('visuallyhidden');
                    }, 1200);
                } 
            })
            skladniki_header.innerHTML = "Przepis";

            skladniki_karty.classList.add('visuallyhidden');    
            skladniki_karty.addEventListener('transitionend', function(e) {
                skladniki_karty.classList.add('hidden');
            }, {
            capture: false,
            once: true,
            passive: false
            });
            setTimeout(function () {
            przepis_karty.classList.remove('hidden');
            przepis_karty.classList.remove('visuallyhidden');
            }, 1200);
        }else{
            skladniki_header.innerHTML = "Składniki";

            przepis_karty.classList.add('visuallyhidden');    
            przepis_karty.addEventListener('transitionend', function(e) {
                przepis_karty.classList.add('hidden');
            }, {
            capture: false,
            once: true,
            passive: false
            });
            setTimeout(function () {
            skladniki_karty.classList.remove('hidden');
            skladniki_karty.classList.remove('visuallyhidden');
            }, 1200);
        }
    }, false);

    del_button.addEventListener("click", function () {
        del_button.parentNode.parentNode.remove();
    })

});