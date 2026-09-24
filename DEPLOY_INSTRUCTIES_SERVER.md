# Stap-voor-stap handleiding: Routekaart op de O&O Server (`postulate.hro.nl`)

> **Speciaal geschreven voor niet-programmeurs:**  
> Je hoeft **geen** Node.js te installeren en **geen** commando's zoals `npm run build` uit te voeren.  
> Alle serverbestanden staan al kant-en-klaar in de map **`httpdocs_routekaart`**!

---

## 1. Is GitHub beter dan een ZIP-bestand?

**Ja, 100%!** Om drie redenen:
1. **Veilig bewaard in de cloud:** Je raakt nooit iets kwijt en je hele team kan erbij.
2. **Altijd makkelijk aanpassen:** Als er over 3 maanden een tekst, telefoonnummer of link verandert, pas je het hier in AI Studio aan en staat het met één klik ook op GitHub.
3. **Versiebeheer:** Als iemand een foutje maakt, kun je met één klik altijd terug naar een vorige versie.

---

## 2. Hoe koppel je AI Studio aan GitHub?

Kijk in het scherm van **Google AI Studio** (meestal helemaal bovenaan of rechtsboven):
1. Zoek naar het **GitHub-icoon** (of een knop met de naam van je repository of **Connect repository / Push changes**).
2. Klik hierop en log in met je GitHub-account als daarom gevraagd wordt.
3. Kies of maak een repository aan (bijvoorbeeld `routekaart-stagediscriminatie`).
4. Bevestig de synchronisatie. Alle bestanden (inclusief de kant-en-klare servermap) staan nu direct veilig op GitHub!

---

## 3. Hoe haal je de bestanden van GitHub naar je pc? (Zónder te programmeren!)

1. Ga in je browser naar je repository op **GitHub.com**.
2. Klik op de groene knop **`<> Code`** (rechtsboven de bestandenlijst).
3. Klik in het menuutje op **`Download ZIP`**.
4. Pak het ZIP-bestand uit op je computer (rechtermuisknop > *Alles uitpakken*).

---

## 4. De bestanden op de O&O server zetten (volgens de instructie van je collega)

In de uitgepakte map zie je een mapje genaamd:
📁 **`httpdocs_routekaart`**

Binnen dit mapje vind je:
- 📄 `index.html` (het startbestand)
- 📁 `assets/` (de stijlen en interactieve onderdelen)
- 🖼️ `hr-logo.png`

### Nu volg je de 4 stappen uit de PDF van je collega:
1. **VPN aanzetten (als je thuiswerkt):**  
   Zorg dat je verbonden bent met de HR-VPN: `vpn-mobielewerkplek.hro.nl`.

2. **Plaats de map in jouw `httpdocs` op je pc:**  
   - Hernoem de map eventueel naar hoe je de url wilt hebben, bijvoorbeeld gewoon `routekaart` of `stagediscriminatie`.
   - Zet deze map in jouw lokale map `httpdocs/` op je pc (zoals te zien op pagina 1 van de instructie van je collega).

3. **Uploaden naar `postulate.hro.nl`:**  
   - Open Visual Studio Code met je SFTP-verbinding (of FileZilla / WinSCP).
   - Klik met de rechtermuisknop op de map `routekaart` en kies **Upload**.

4. **Klaar! Direct bekijken in je browser:**  
   Open in je browser:  
   `https://postulate.hro.nl/routekaart/`  
   *(of de interne url van de O&O-server).*

---

## Belangrijke geruststelling over de database (MySQL / AVG)
Op pagina 2 van de collega-instructies staat een heel stuk over inloggen via SSH en MySQL (`mysql -u oeo -p`).  
👉 **Dit heb je voor de routekaart NIET nodig!**  
De routekaart slaat geen persoonsgegevens op de server op. Het meldpunt linkt direct door naar het officiële Microsoft Forms formulier van Hogeschool Rotterdam. Het is dus direct **AVG-veilig** en vereist **geen database-onderhoud**.
