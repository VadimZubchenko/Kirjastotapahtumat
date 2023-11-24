\*\*\*\*# AvoimetRajapinnatProjekti_S2019

**NIMI**
Kirjastotapahtumat

**KUVAUS** <br>
Sovellus auttaa käyttäjää nopeasti ja havainnollisesti saada selville tietoa kaikista Helsingin alueen kirjastoissa tulevista tapahtumista.

**KÄYTTÖ** <br>
Sovelluksen pääsivulla käyttäjä näkee kaikin tulevin tapahtumin luettelun, josta hän pystyy valita häntä kiinnostavan. Tapahtumien nimet toimivat linkkeinä, joilla sivu vaihtuu toiseen.
Toisessa sivussa on esitetty kirjastojen yhteiskuva, kuten kirjaston nimi, tapahtuma, osoite, websivu, sekä sähköposti.

**KÄYNNISTÄMINEN** <br>
Sovelluksen toimivuus edellyttää MySql “library_project”-tietokannan ja sen Event-taulukon käyttöä. Taulukkon luomiseen
käytetään seuraava SQL-komentti <br><br>

CREATE DATABASE library_project; <br>

USE library_project; <br>

CREATE TABLE event (Event_Id int NOT NULL AUTO_INCREMENT, Event_Kirjasto varchar(255), Event_Name varchar(255), Event_Date DATE, Event_Time TIME, Event_Location varchar(255), PRIMARY KEY (Event_Id)); <br>

#1 Sovellus avautuu käynnistämällä app.js-tiedosto noden kautta: <br>
node app.js <br>
tai<br>
nodemon start<br>

#2 Menemellä selaimessa osoitteeseen http://localhost:8081/ <br>

**REST** <br>
Sovelluksen tiedot ovat saatavana ja päivitettävänä myös käyttäen seuraavia rest-kutsuja:

**Selite:Metodi:Rakenne** <br>
Tulevat tapahtumat: GET: /upcoming_events/ <br>
Hae kaikki tapahtumat: GET: /events/ <br>
Luo tapahtuma: POST: /event_create/ <br>

**AVOIN RAJAPINTA** <br>
Dokumentaatio rajapinnasta: https://api.kirjastot.fi/v3-doc.html

Esimerkkihaku <br>
Helsingin kirjostot <br>
https://api.kirjastot.fi/v3/organisation?branch_type=library&city.name=helsinki
<br>
Työtilojen typpi <br>
"https://api.kirjastot.fi/v3/service?parametrit"

**Käytetty tietotyyppi**<br>
organisation: Organisaatio eli kirjasto, kirjastoauto, osasto, jne.

**Käytetyt parametrit:Esimerkkiarvo:Selite** <br>
branch_type=: library: Kirjaston toimipiste -tyyppisten (branchlibrary) tietueiden alakategoria <br>
city.name=: helsinki: Kunta (Helsinki, Kuopio, Rovaniemi, ...)<br>
type=room
**KEHITTÄJÄT** <br>
Matti Närhi, Hannu Korhonen, Vadim Zubchenko
