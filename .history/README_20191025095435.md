****# AvoimetRajapinnatProjekti_S2019

**NIMI** 
Kirjastotapahtumat

**KUVAUS** <br>
Sovellus auttaa käyttäjälle nopeasti ja havainnollisesti saada selville tietoa kaikista Helsingin alueen kirjastoissa tulevista tapahtumista. 

**KÄYTTÖ** <br>
Sovelluksen pääsivulla käyttäjä näkee kaikin tulevin tapahtumin luettelun, josta hän pystyy valita häntä kiinnostavan. Tapahtumien nimet toimivat linkkeinä, joilla sivu vaihtuu toiseen.
Toisessa sivussa on esitetty kirjastojen yhteiskuva, kuten kirjaston nimi, tapahtuma, osoite, websivu, sekä sähköposti. 

**KÄYNNISTÄMINEN** <br>
Sovellus avautuu käynnistämällä app.js-tiedosto noden kautta ja menemellä selaimessa osoitteeseen http://localhost:8081/

**REST** <br>
Sovelluksen tiedot ovat saatavana ja päivitettävänä myös käyttäen seuraavia rest-kutsuja:

**Selite:Metodi:Rakenne**  <br>
Tulevat tapahtumat:     GET:         /upcoming_events/ <br>
Hae kaikki tapahtumat:  GET:         /events/              <br>
Luo tapahtuma:          POST:        /event_create/      <br>    


**AVOIN RAJAPINTA** <br>
Dokumentaatio rajapinnasta: https://api.kirjastot.fi/v3-doc.html

Esimerkkihaku <br>
https://api.kirjastot.fi/v3/organisation?branch_type=library&city.name=helsinki

**Käytetty tietotyyppi**<br>
organisation:            Organisaatio eli kirjasto, kirjastoauto, osasto, jne.

**Käytetyt parametrit:Esimerkkiarvo:Selite** <br>
branch_type=:            library:        Kirjaston toimipiste -tyyppisten (branchlibrary) tietueiden alakategoria <br>
city.name=:              helsinki:        Kunta (Helsinki, Kuopio, Rovaniemi, ...)

**KEHITTÄJÄT** <br>
Matti Närhi, Hannu Korhonen, Vadim Zubchenko



