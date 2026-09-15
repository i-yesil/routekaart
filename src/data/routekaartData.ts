import { Actor, ResourceInfo } from '../types';

export interface StepStyle {
  bg: string;
  text: string;
  badgeBg: string;
  badgeText: string;
  bulletColor: string;
  borderColor: string;
  hoverBorder: string;
}

/**
 * WCAG 2.1 AA compliant color pairings.
 * Minimum contrast ratio: > 4.5:1 for normal text, > 3:1 for large text and UI components.
 */
export const STEP_STYLES: StepStyle[] = [
  {
    bg: '#00587A', // Diep Blauw - Herkenning / Bewustwording (Contrast 6.2:1 met wit)
    text: '#FFFFFF',
    badgeBg: 'rgba(255, 255, 255, 0.22)',
    badgeText: '#FFFFFF',
    bulletColor: '#00587A',
    borderColor: '#B8D8E6',
    hoverBorder: '#00587A'
  },
  {
    bg: '#BA093F', // HR Karmijnrood - Signaal / Signaleren (Contrast 5.4:1 met wit)
    text: '#FFFFFF',
    badgeBg: 'rgba(255, 255, 255, 0.22)',
    badgeText: '#FFFFFF',
    bulletColor: '#BA093F',
    borderColor: '#E8B6C5',
    hoverBorder: '#BA093F'
  },
  {
    bg: '#003340', // Diep Petrol - Gespreksvoering (Contrast 13.6:1 met wit)
    text: '#FFFFFF',
    badgeBg: 'rgba(255, 255, 255, 0.22)',
    badgeText: '#FFFFFF',
    bulletColor: '#003340',
    borderColor: '#9EC2CA',
    hoverBorder: '#003340'
  },
  {
    bg: '#D99B00', // Diep Okergeel - Aanpak / Afspraken (Contrast 8.5:1 met #00222B)
    text: '#00222B',
    badgeBg: 'rgba(0, 34, 43, 0.16)',
    badgeText: '#00222B',
    bulletColor: '#A87500',
    borderColor: '#F0D488',
    hoverBorder: '#A87500'
  },
  {
    bg: '#006E66', // Diep Jade/Teal - Borgen / Nazorg (Contrast 5.4:1 met wit)
    text: '#FFFFFF',
    badgeBg: 'rgba(255, 255, 255, 0.22)',
    badgeText: '#FFFFFF',
    bulletColor: '#006E66',
    borderColor: '#A6D8D3',
    hoverBorder: '#006E66'
  }
];

export const ACTOREN: Actor[] = [
  {
    id: 'student',
    naam: 'Student',
    rol: 'Ik ervaar of vermoed het',
    icoon: 'GraduationCap',
    vraag: 'Wat doe ik als ik stagediscriminatie ervaar of vermoed?',
    letOp: 'Niet jouw schuld. Erkenning gaat altijd vóór bewijs. Je hoeft het niet alleen op te lossen.',
    stappen: [
      {
        id: 'student-1',
        titel: 'Herken het',
        kern: 'Neem je gevoel serieus.',
        detail: '<p>Lees meer over stagediscriminatie.</p><p>Praat met iemand die je vertrouwt: vriend, ouder, medestudent of docent.</p>',
        actie: 'Naar de HINT-pagina',
        actieType: 'hint'
      },
      {
        id: 'student-2',
        titel: 'Geef een signaal',
        kern: 'Meld het. Anoniem mag ook.',
        detail: '<p>Vraag ook een gesprek aan bij je begeleider. Dit kan zijn: je studentcoach, stagebegeleider of stagecoördinator.</p>',
        actie: 'Naar het meldpunt',
        actieType: 'meldpunt'
      },
      {
        id: 'student-3',
        titel: 'Voer het gesprek',
        kern: 'Jij houdt de regie.',
        detail: '<p>Wil je weten hoe je hiermee om kan gaan? Of, alleen erover praten? Een gesprek oefenen? Voer het gesprek en bespreek je opties.</p>',
        actie: 'Mail je begeleider',
        actieType: 'mail'
      },
      {
        id: 'student-4',
        titel: 'Bepaal: wat nu?',
        kern: 'Wat voelt goed voor jou?',
        detail: '<ul class="space-y-1.5">' +
          '<li class="flex items-baseline gap-2"><strong class="font-bold text-[#A87500] shrink-0">A.</strong><span>(Nog) niets doen</span></li>' +
          '<li class="flex items-baseline gap-2"><strong class="font-bold text-[#A87500] shrink-0">B.</strong><span>Zelf het gesprek voeren</span></li>' +
          '<li class="flex items-baseline gap-2"><strong class="font-bold text-[#A87500] shrink-0">C.</strong><span>Driehoeksgesprek met stagebedrijf</span></li>' +
          '<li class="flex items-baseline gap-2"><strong class="font-bold text-[#A87500] shrink-0">D.</strong><span>Officiële melding doen</span></li>' +
          '</ul>'
      },
      {
        id: 'student-5',
        titel: 'Koppel terug',
        kern: 'Na 2 à 3 weken check je in met je begeleider.',
        detail: '<p>Hoe gaat het nu? Heb je nog steun nodig? Je staat er nooit alleen voor.</p>' +
          '<p class="mt-2 pt-2 border-t border-[#E4DDD2]">Heb je er toch last van en beïnvloedt het jouw studie? Neem dan contact op met het <a href="https://www.hogeschoolrotterdam.nl/voorlichting/begeleiding-en-voorzieningen/decaan/" target="_blank" rel="noopener noreferrer" class="font-bold text-[#006E66] underline hover:text-[#004D47] inline-flex items-center gap-0.5">decanaat <svg class="w-3 h-3 inline shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>.</p>'
      }
    ],
    blokken: [
      {
        t: 'Studentcoach, stagebegeleider, stagecoördinator',
        i: 'Je eerste aanspreekpunt. Plant binnen 5 werkdagen een gesprek.',
        b: true
      },
      {
        t: 'Vertrouwenspersoon',
        i: 'Onafhankelijk en vertrouwelijk. Ook buiten de opleiding om. Kies zelf een vertrouwenspersoon via de <a href="https://www.hogeschoolrotterdam.nl/voorlichting/begeleiding-en-voorzieningen/vertrouwenspersonen/" target="_blank" rel="noopener noreferrer" class="font-bold text-[#00587A] underline hover:text-[#003340]">website van Hogeschool Rotterdam</a>.'
      },
      {
        t: 'Centraal meldpunt',
        i: 'Anoniem of op naam. Helpt patronen zichtbaar maken en aanpakken.'
      }
    ]
  },
  {
    id: 'begeleider',
    naam: 'Begeleider',
    rol: 'Studentcoach, stagebegeleider, docent',
    icoon: 'UserCheck',
    vraag: 'Wat doe ik als een student stagediscriminatie ervaart of vermoedt?',
    letOp: 'Acuut onveilig? Schakel direct op naar de opleidingsmanager. · Twijfel is genoeg: een vermoeden rechtvaardigt al een gesprek.',
    stappen: [
      {
        id: 'begeleider-1',
        titel: 'Bewustwording en preventie',
        kern: 'Gelijke stagekansen is een gezamenlijke verantwoordelijkheid.',
        detail: '<p>De HR-brede aanpak laat zien wat er van jou wordt verwacht aan kennis, handelen en houding.</p>',
        actie: 'Naar de aanpak',
        actieType: 'aanpak'
      },
      {
        id: 'begeleider-2',
        titel: 'Signaleren',
        kern: 'Vraag actief door tijdens gesprekken en terugkomdagen.',
        detail: '<p>Vraag actief door tijdens gesprekken en terugkomdagen en let op signalen in de sollicitatiefase én tijdens de stage. Bij een signaal: plan binnen 5 werkdagen een gesprek. Bevestig dat je het serieus neemt.</p>',
        actie: 'Naar de aanpak',
        actieType: 'aanpak'
      },
      {
        id: 'begeleider-3',
        titel: 'Gespreksvoering',
        kern: 'Er is geen bewijs nodig om het gesprek te voeren.',
        detail: '<p>Wat wil de student? Erover praten? Oefenen? Officiële melding?</p><p>De student houdt regie over de stappen.</p>',
        actie: 'Naar de aanpak',
        actieType: 'aanpak'
      },
      {
        id: 'begeleider-4',
        titel: 'Begeleiding',
        kern: 'Wat wil de student?',
        detail: '<p><b>Wat wil de student?</b></p><ul class="space-y-1 mt-1 text-[12px]"><li><b>A.</b> (Nog) niets doen</li><li><b>B.</b> Zelf het gesprek voeren</li><li><b>C.</b> Driehoeksgesprek met stagebedrijf</li><li><b>D.</b> Officiële melding doen</li></ul>'
      },
      {
        id: 'begeleider-5',
        titel: '(Na)zorg',
        kern: 'Hoe gaat het nu?',
        detail: '<p>Hoe gaat het nu? Heeft de student er aanhoudend last van en beïnvloedt het de studie? Verwijs door naar het <a href="https://www.hogeschoolrotterdam.nl/voorlichting/begeleiding-en-voorzieningen/studentendecanen/" target="_blank" rel="noopener noreferrer">decanaat</a>.</p>'
      }
    ],
    blokken: [
      { t: 'Regie bij de student', i: 'De student bepaalt de vervolgstappen, behalve bij acute onveiligheid.' },
      { t: 'Empathie vóór bewijs', i: 'Erkenning en luisteren gaan altijd vóór waarheidsvinding of bewijslast.' },
      { t: 'Onafhankelijkheid', i: 'Het belang en welzijn van de student gaat vóór de relatie met het stagebedrijf. Altijd.' },
      { t: 'Documenteer met toestemming', i: 'Leg feiten en afspraken vast, alleen met instemming van de student.', b: true }
    ]
  },
  {
    id: 'coordinator',
    naam: 'Stagecoördinator',
    rol: 'Stagebureau / Praktijkbureau',
    icoon: 'Network',
    vraag: 'Wat doe ik als er een signaal over stagediscriminatie binnenkomt?',
    letOp: 'Termijnen: registratie binnen 2 werkdagen, besluit binnen 10 werkdagen. Plaatsing op rode lijst vraagt schriftelijke onderbouwing.',
    stappen: [
      {
        id: 'coordinator-1',
        titel: 'Preventie',
        kern: 'Werk aan gelijke kansen aan de voorkant.',
        detail: '<p>Informeer stagebedrijven over de Stagecode hbo. Zorg dat begeleiders de aanpak kennen.</p>',
        actie: 'Stagecode hbo normen',
        actieType: 'aanpak'
      },
      {
        id: 'coordinator-2',
        titel: 'Patronen herkennen',
        kern: 'Registreer elk signaal binnen 2 werkdagen.',
        detail: '<p>Eén incident is een casus. Drie incidenten zijn een patroon. Let op terugkerende bedrijven of afdelingen.</p>',
        actie: 'Registratieprotocol',
        actieType: 'registratie'
      },
      {
        id: 'coordinator-3',
        titel: 'Gespreksvoering',
        kern: 'Voer het gesprek met de organisatie.',
        detail: '<p>Met of namens de student. Jij bent bemiddelaar, geen aanklager. Houd de opleidingsmanager op de hoogte.</p>',
        actie: 'Gesprek voorbereiden',
        actieType: 'tips'
      },
      {
        id: 'coordinator-4',
        titel: 'Afspraken maken',
        kern: 'Concrete afspraken, besluit binnen 10 werkdagen.',
        detail: '<p>Zorg dat de student niet de dupe is. Geen verandering? Overweeg de samenwerking op te schorten.</p>',
        actie: 'Handelingskader & besluit',
        actieType: 'kader'
      },
      {
        id: 'coordinator-5',
        titel: 'Borgen',
        kern: 'Koppel terug en houd het dossier bij.',
        detail: '<p>Naar student, begeleider en bedrijf. Bij een patroon: rode lijst met schriftelijke onderbouwing.</p>',
        actie: 'Beleid rode lijst',
        actieType: 'rodelijst'
      }
    ],
    blokken: [
      { t: 'Registratie is bescherming', i: 'Wat niet wordt vastgelegd, wordt vergeten en herhaalt zich bij volgende studenten.' },
      { t: 'Onafhankelijkheid', i: 'Langdurige relaties of sponsoring mogen nooit signalen van ongelijke behandeling vergoelijken.' },
      { t: 'Escaleer op tijd', i: 'Bij herhaling of weigering van meewerken: schakel direct de opleidingsmanager in.', b: true }
    ]
  },
  {
    id: 'manager',
    naam: 'Onderwijsmanager',
    rol: 'Opleidingsmanager / Bestuur',
    icoon: 'Building2',
    vraag: 'Wat doe ik als stagediscriminatie escaleert of structureel wordt?',
    letOp: 'Jij neemt positie in namens de opleiding. Verantwoordelijk voor de norm, het besluit en de borging in beleid.',
    stappen: [
      {
        id: 'manager-1',
        titel: 'De norm uitdragen',
        kern: 'Maak professionalisering mogelijk.',
        detail: '<p>Agendeer gelijke stagekansen in teamoverleg. Geef begeleiders tijd voor de aanpak.</p>',
        actie: 'Naar de beleidsnormen',
        actieType: 'aanpak'
      },
      {
        id: 'manager-2',
        titel: 'Zicht op patronen',
        kern: 'Houd overzicht op alle meldingen.',
        detail: '<p>Bespreek de registratie periodiek. Welke bedrijven komen terug? Anonieme meldingen tellen mee.</p>',
        actie: 'Monitoring & trends',
        actieType: 'monitoring'
      },
      {
        id: 'manager-3',
        titel: 'Gesprek bij escalatie',
        kern: 'Voer het formele gesprek namens HR.',
        detail: '<p>Benoem de norm, de signalen en de consequenties. Ondersteun je medewerkers.</p>',
        actie: 'Formeel kader directie',
        actieType: 'tips'
      },
      {
        id: 'manager-4',
        titel: 'Besluiten',
        kern: 'Besluit over de samenwerking.',
        detail: '<p>Opschorten of beëindigen, schriftelijk onderbouwd. Of doorverwijzen naar klachtencommissie of ELBHO.</p>',
        actie: 'Klachtenprocedure & sancties',
        actieType: 'klacht'
      },
      {
        id: 'manager-5',
        titel: 'Borgen in beleid',
        kern: 'Evalueer en stel bij.',
        detail: '<p>Wat leren casussen ons over onze processen? Koppel structurele signalen terug naar het stagebureau.</p>',
        actie: 'HR-breed beleid borgen',
        actieType: 'rodelijst'
      }
    ],
    blokken: [
      { t: 'Jij bent de rugdekking', i: 'Docenten en begeleiders moeten weten dat jij onvoorwaardelijk achter hen staat bij het stellen van grenzen.' },
      { t: 'Norm boven relatie', i: 'Stageplaatsing of zakelijke banden wegen nooit zwaarder dan sociale en fysieke veiligheid van studenten.' },
      { t: 'Van casus naar beleid', i: 'Zonder structurele registratie en evaluatie verandert er op opleidingsniveau niets.', b: true }
    ]
  },
  {
    id: 'vertrouwens',
    naam: 'Vertrouwenspersoon',
    rol: 'Centraal meldpunt / Onafhankelijk',
    icoon: 'ShieldCheck',
    vraag: 'Wat doe ik als meldpunt bij stagediscriminatie?',
    letOp: 'Vertrouwelijk en onafhankelijk. Geen actie zonder instemming van de student, behalve bij acute onveiligheid.',
    stappen: [
      {
        id: 'vertrouwens-1',
        titel: 'Zichtbaar zijn',
        kern: 'Studenten moeten je kunnen vinden.',
        detail: '<p>Zorg dat het meldpunt vindbaar is op HINT en in de communicatie van de opleiding.</p>',
        actie: 'Vindbaarheid & contact',
        actieType: 'meldpunt'
      },
      {
        id: 'vertrouwens-2',
        titel: 'Meldingen ontvangen',
        kern: 'Anoniem of op naam, via het systeem.',
        detail: '<p>Elke melding komt binnen bij het meldpunt. Ook anonieme meldingen worden geregistreerd.</p>',
        actie: 'Naar het meldsysteem',
        actieType: 'meldpunt'
      },
      {
        id: 'vertrouwens-3',
        titel: 'Het gesprek',
        kern: 'Luister en valideer. Geen bewijs nodig.',
        detail: '<p>De student vertelt wat hij of zij kwijt wil. Erkenning gaat vóór waarheidsvinding.</p>',
        actie: 'Gesprekstips vertrouwenspersoon',
        actieType: 'tips'
      },
      {
        id: 'vertrouwens-4',
        titel: 'Toeleiden naar de opleiding',
        kern: 'Het doel is een gesprek met de opleiding.',
        detail: '<p>Bespreek de opties en moedig contact met de studentbegeleider aan. Je kunt meegaan als steun.</p>',
        actie: 'Meldingsroute & begeleiding',
        actieType: 'route'
      },
      {
        id: 'vertrouwens-5',
        titel: 'Nazorg en signalering',
        kern: 'Check in en koppel patronen geanonimiseerd terug.',
        detail: '<p>Na 2 à 3 weken opnieuw contact. Geef geanonimiseerde patronen door aan het stagebureau.</p>',
        actie: 'Monitoring & beleid',
        actieType: 'monitoring'
      }
    ],
    blokken: [
      { t: 'Onafhankelijk', i: 'Je staat buiten de opleiding, docentenkorps en beoordelingsrelaties van de student.' },
      { t: 'Vertrouwelijk', i: 'Wat de student deelt blijft strikt vertrouwelijk, tenzij de student expliciet schriftelijk instemt met delen.' },
      { t: 'Anonieme meldingen tellen', i: 'Ook als een student geen actie wil, helpt de registratie om structurele patronen zichtbaar te maken.', b: true }
    ]
  }
];

export const RESOURCE_DETAILS: Record<string, ResourceInfo> = {
  mail: {
    id: 'mail',
    title: 'Mail je begeleider',
    subtitle: 'Standaard e-mailbericht voor je studentcoach, stagebegeleider of vertrouwenspersoon',
    badge: 'Standaardmail Outlook',
    emailTemplate: {
      subject: 'Zorgen over mijn (zoektocht naar een) stage',
      body: `Beste [Naam Studentcoach/vertrouwenspersoon],\n\n` +
        `Ik neem contact met je op omdat ik het gevoel heb dat ik te maken heb (gehad) met stagediscriminatie/ ongelijk behandeld wordt op mijn stageplek. Ik vind het lastig om hierover te praten en ik maak me zorgen over de impact op mijn studie/beoordeling. Zouden we hier op korte termijn (vertrouwelijk) over in gesprek kunnen gaan, zodat ik kan ontdekken wat mijn opties zijn?\n\n` +
        `Met vriendelijke groet,\n\n` +
        `[Jouw naam]\n` +
        `[Je opleiding/studentnummer]`,
      mailtoUrl: `mailto:?subject=${encodeURIComponent('Zorgen over mijn (zoektocht naar een) stage')}&body=${encodeURIComponent(
        `Beste [Naam Studentcoach/vertrouwenspersoon],\n\n` +
        `Ik neem contact met je op omdat ik het gevoel heb dat ik te maken heb (gehad) met stagediscriminatie/ ongelijk behandeld wordt op mijn stageplek. Ik vind het lastig om hierover te praten en ik maak me zorgen over de impact op mijn studie/beoordeling. Zouden we hier op korte termijn (vertrouwelijk) over in gesprek kunnen gaan, zodat ik kan ontdekken wat mijn opties zijn?\n\n` +
        `Met vriendelijke groet,\n\n` +
        `[Jouw naam]\n` +
        `[Je opleiding/studentnummer]`
      )}`
    },
    content: {
      inleiding: 'Hieronder staat het standaard e-mailconcept. De geadresseerde (Aan:) is bewust leeg gelaten zodat je zelf je studentcoach, stagebegeleider of stagecoördinator kunt selecteren in Outlook.',
      punten: [
        {
          kop: 'Direct in Outlook openen',
          tekst: 'Klik op de knop "Open direct in Outlook" om de mail automatisch als concept in je Outlook (of standaard mail-app) te openen met onderwerp en tekst al ingevuld.'
        },
        {
          kop: 'Aanhef en geadresseerde zelf invullen',
          tekst: 'Vul bij "Aan:" het e-mailadres in van je begeleider en pas de aanhef aan naar diens naam (bijv. "Beste Sandra" of "Beste docent").'
        },
        {
          kop: 'Volledig vertrouwelijk',
          tekst: 'Een gesprek dient om rustig te verkennen hoe je hiermee om kunt gaan, te oefenen of samen opties te bespreken. Jij houdt altijd de regie.'
        }
      ],
      tips: [
        'Gebruik je liever webmail? Klik op "Kopieer e-mailtekst" en plak het direct in je browser-mail.',
        'Vergeet niet je eigen naam, opleiding en studentnummer onderaan de e-mail in te vullen.',
        'Binnen 5 werkdagen na je bericht plant je begeleider een gesprek met je in.'
      ],
      contactInfo: {
        naam: 'Studentcoach, stagebegeleider of stagecoördinator',
        contact: 'hint.hr.nl · Opleidingspagina',
        toelichting: 'Jouw opleiding biedt binnen 5 werkdagen een vertrouwelijk gesprek aan.'
      }
    }
  },
  hint: {
    id: 'hint',
    title: 'HINT-pagina Stagediscriminatie',
    subtitle: 'Officiële informatie- en meldpagina van Hogeschool Rotterdam',
    badge: 'HINT Portaal',
    content: {
      inleiding: 'Op de officiële HINT-themapagina van Hogeschool Rotterdam vind je uitgebreide achtergrondinformatie over gelijke stagekansen, herkenning van discriminatie en veilige meldroutes.',
      punten: [
        {
          kop: 'Lees meer over stagediscriminatie',
          tekst: 'Bekijk op HINT wat de wet en de Stagecode hbo zeggen over gelijke behandeling, objectieve werving en selectie, en een sociaal veilige leerwerkomgeving.'
        },
        {
          kop: 'Praat met iemand die je vertrouwt',
          tekst: 'Bespreek je situatie in alle rust met een vriend, ouder, medestudent of docent/studentcoach. Je hoeft het niet alleen te verwerken of op te lossen.'
        },
        {
          kop: 'Directe ondersteuning en contact',
          tekst: 'Via de HINT-pagina vind je rechtstreekse contactgegevens van vertrouwenspersonen en het Centraal Meldpunt (waar je zowel anoniem als op naam kunt melden).'
        }
      ],
      tips: [
        'Ga naar HINT via je browser: hint.hr.nl (zoekterm: Stagediscriminatie)',
        'Meldpunt & Vertrouwenspersonen: vertrouwenspersonen@hr.nl',
        'Erkenning gaat altijd vóór bewijslast. Jij bepaalt zelf welke stappen er volgen.'
      ],
      contactInfo: {
        naam: 'Centraal Meldpunt & Vertrouwenspersonen HR',
        contact: 'hint.hr.nl · vertrouwenspersonen@hr.nl',
        toelichting: 'Veilig en vertrouwelijk bereikbaar voor alle studenten van Hogeschool Rotterdam.'
      }
    }
  },
  aanpak: {
    id: 'aanpak',
    title: 'Stagecode hbo',
    subtitle: 'Kaders, afspraken en de norm van Hogeschool Rotterdam & Vereniging Hogescholen',
    badge: 'Norm & Kader',
    externalUrl: {
      label: 'Bekijk officiële Stagecode hbo (PDF)',
      url: 'https://www.vereniginghogescholen.nl/system/knowledge_base/attachments/files/000/001/615/original/Stagecode_hbo.pdf?1779095526'
    },
    content: {
      inleiding: 'Iedere student heeft recht op een veilige, inclusieve en gelijkwaardige stageplek. Hogeschool Rotterdam conformeert zich aan de Stagecode hbo en het landelijke Manifest Gelijke Kansen in Stage en Beroep.',
      punten: [
        {
          kop: '1. Objectieve werving en selectie',
          tekst: 'Stagebedrijven selecteren uitsluitend op basis van stage-eisen en competenties, zonder vooroordelen over achternaam, achtergrond, geslacht, hoofddoek of functiebeperking.'
        },
        {
          kop: '2. Veilig leerklimaat',
          tekst: 'Er heerst een nultolerantie voor discriminatie, uitsluiting, seksuele intimidatie of kleinerende opmerkingen op de werkvloer.'
        },
        {
          kop: '3. Zorgplicht van de onderwijsinstelling',
          tekst: 'Hogeschool Rotterdam heeft de plicht studenten te ondersteunen en in te grijpen zodra gelijke kansen of de veiligheid in gevaar komen.'
        }
      ],
      tips: [
        'Bespreking van de Stagecode hbo is een vast onderdeel van het stagecontract.',
        'Studenten lopen geen studievertraging op als een stage moet worden beëindigd door discriminatie.',
        'De opleiding biedt actieve bemiddeling naar een vervangende stageplek.'
      ]
    }
  },
  meldpunt: {
    id: 'meldpunt',
    title: 'Meldpunt',
    subtitle: 'Direct hulp, advies of een melding indienen',
    content: {
      inleiding: 'Heb je stagediscriminatie ervaren, gezien of vermoed je het? Je kunt altijd veilig en vertrouwelijk terecht. Je bepaalt zelf welke stappen er wel of niet worden genomen.',
      punten: [
        {
          kop: 'Optie 1: Begeleider',
          tekst: 'Je studentcoach, stagebegeleider of docent. Als je een snelle oplossing zoekt binnen je curriculum of samen een gesprek wilt voorbereiden.'
        },
        {
          kop: 'Optie 2: Vertrouwenspersoon Ongewenste Omgangsvormen',
          tekst: 'Volledig onafhankelijk van je opleiding. Helpt je je gedachten op een rij te zetten en bespreekt in alle rust en vertrouwelijkheid mogelijke vervolgstappen.'
        },
        {
          kop: 'Optie 3: Centraal Meldpunt (Anoniem of op naam)',
          tekst: 'Dien een melding in via het interne HR-portaal (HINT). Anonieme meldingen worden gebruikt om structurele patronen bij stagebedrijven in kaart te brengen en aan te pakken.'
        }
      ],
      tips: [
        'Kies zelf je vertrouwenspersoon via de officiële website van Hogeschool Rotterdam.',
        'Centraal Meldpunt via HINT: zoek op "Meldpunt Ongewenst Gedrag".',
        'Landelijk: Discriminatie.nl / College voor de Rechten van de Mens.'
      ],
      contactInfo: {
        naam: 'Vertrouwenspersonen Hogeschool Rotterdam',
        contact: 'https://www.hogeschoolrotterdam.nl/voorlichting/begeleiding-en-voorzieningen/vertrouwenspersonen/',
        toelichting: 'Onafhankelijk en vertrouwelijk. Bekijk het overzicht en kies zelf met wie je contact opneemt.',
        linkUrl: 'https://www.hogeschoolrotterdam.nl/voorlichting/begeleiding-en-voorzieningen/vertrouwenspersonen/',
        linkLabel: 'Kies een vertrouwenspersoon'
      }
    }
  },
  tips: {
    id: 'tips',
    title: 'Gespreksvoering: NIVEA, OMA & LSD',
    subtitle: 'Handvatten voor open, veilige en constructieve gesprekken',
    badge: 'Methodiek',
    content: {
      inleiding: 'Gesprekken over stagediscriminatie zijn kwetsbaar. Begeleiders en studenten kunnen onderstaande vuistregels hanteren om een veilig gesprek te garanderen.',
      punten: [
        {
          kop: 'NIVEA - Niet Invullen Voor Een Ander',
          tekst: 'Vul niet in wat de ander heeft gevoeld of bedoeld. Vraag open: "Wat gebeurde er precies?" en "Wat deed dat met jou?"'
        },
        {
          kop: 'OMA - Oordeel, Mening en Advies uitstellen',
          tekst: 'Ga niet direct in de verdediging of in de oplossingsmodus. Zeg niet: "Het zal vast niet zo bedoeld zijn". Erkenning gaat vóór bewijs.'
        },
        {
          kop: 'LSD - Luisteren, Samenvatten, Doorvragen',
          tekst: 'Luister zonder te onderbreken, vat in eigen woorden samen om begrip te verifiëren, en vraag door op wat de student nodig heeft.'
        }
      ],
      tips: [
        'Laat stiltes vallen; geef de student de ruimte om woorden te zoeken.',
        'Vraag altijd: "Wie heeft op dit moment de regie en wat wil jij dat er gebeurt?"',
        'Sluit het gesprek af met een concrete datum voor een check-in (binnen 2 à 3 weken).'
      ]
    }
  },
  route: {
    id: 'route',
    title: 'De Meldings- en Escalatie-route',
    subtitle: 'Stapsgewijs van eerste vermoeden tot formele afronding',
    badge: 'Stappenplan',
    content: {
      inleiding: 'Wat zijn de opties als je discriminatie op stage ervaart? Je hebt altijd 4 verschillende routes tot je beschikking, afhankelijk van jouw behoefte:',
      punten: [
        {
          kop: 'Route 1: Alleen stoom afblazen & sparren',
          tekst: 'Je bespreekt het met je studentcoach of vertrouwenspersoon. Er wordt géén actie ondernomen richting het bedrijf. Je leert hoe je er zelf mee kunt omgaan.'
        },
        {
          kop: 'Route 2: Zelf het gesprek aangaan (met coaching)',
          tekst: 'Je bereidt samen met je begeleider het gesprek voor met je stagebegeleider op de werkplek om grenzen aan te geven.'
        },
        {
          kop: 'Route 3: Het Driehoeksgesprek',
          tekst: 'Jouw hogeschoolbegeleider zit samen met jou en de bedrijfsbegeleider om tafel. De school bewaakt jouw veiligheid en de Stagecode hbo.'
        },
        {
          kop: 'Route 4: Direct overstappen & formele melding',
          tekst: 'Bij ernstige of onveilige situaties beëindigt de opleiding direct de stage. De school zorgt voor een alternatief zodat je studie geen vertraging oploopt.'
        }
      ],
      tips: [
        'Jij mag op elk moment van route wisselen.',
        'Niets gebeurt zonder jouw schriftelijke of mondelinge toestemming, behalve bij strafbare feiten.',
        'De examencommissie kan dispensatie verlenen bij vervangende stageopdrachten.'
      ]
    }
  },
  signalen: {
    id: 'signalen',
    title: 'Signalenmatrix Stagediscriminatie',
    subtitle: 'Herken subtiele, indirecte en directe vormen',
    badge: 'Signalering',
    content: {
      inleiding: 'Discriminatie is zelden openlijk expliciet; het uit zich vaak in micro-aggressies, dubbele standaarden of isolatie.',
      punten: [
        {
          kop: 'Selectie & Aanname',
          tekst: 'Opvallend vaak afgewezen worden met vage redenen ("past niet in het team", "accent"), terwijl medestudenten met vergelijkbare cijfers direct aangenomen worden.'
        },
        {
          kop: 'Werkzaamheden & Beoordeling',
          tekst: 'Structureel minderwaardige taken krijgen, buitengesloten worden van klantcontact of teamoverleggen, of onevenredig zwaar beoordeeld worden op kleine fouten.'
        },
        {
          kop: 'Cultuur & Opmerkingen',
          tekst: '"Grapjes" over afkomst, geloof of geaardheid; continu aangesproken worden als woordvoerder van een bepaalde groep; verbod op uitingen die niet wettelijk verboden zijn.'
        }
      ],
      tips: [
        'Vraag op terugkomdagen gericht: "Voel je je gezien en gehoord op de werkvloer?"',
        'Let op veranderingen in gedrag: verminderde aanwezigheid, stilvallen, ontwijkend antwoorden.',
        'Twijfel is voldoende aanleiding voor een 1-op-1 verdiepend gesprek.'
      ]
    }
  },
  kader: {
    id: 'kader',
    title: 'Handelingskader Stagebegeleiding',
    subtitle: 'Protocol en deadlines voor medewerkers',
    badge: 'Protocol',
    content: {
      inleiding: 'Wat doe je concreet als stagebegeleider of docent bij een melding of vermoeden van discriminatie?',
      punten: [
        {
          kop: 'Dag 1 - 5: Het intakegesprek',
          tekst: 'Plan binnen maximaal 5 werkdagen een vertrouwelijk gesprek met de student. Pas NIVEA en OMA toe. Onderzoek de behoefte van de student.'
        },
        {
          kop: 'Binnen 2 werkdagen na signaal: Registratie',
          tekst: 'Meld het signaal (geanonimiseerd indien de student dat wenst) bij de stagecoördinator ten behoeve van de monitoring.'
        },
        {
          kop: 'Besluit binnen 10 werkdagen',
          tekst: 'In afstemming met student en stagecoördinator: driehoeksgesprek plannen, stage ontbinden of afspraken bekrachtigen.'
        }
      ],
      tips: [
        'Laat de student nooit alleen een confronterend gesprek voeren als die zich onveilig voelt.',
        'Informeer de opleidingsmanager tijdig over potentiële escalaties.',
        'Zorg altijd voor een nazorggesprek na 2 à 3 weken.'
      ]
    }
  },
  rodelijst: {
    id: 'rodelijst',
    title: 'Beleid Rode Lijst Stagebedrijven',
    subtitle: 'Opschorting en beëindiging van samenwerkingsverbanden',
    badge: 'Sanctiebeleid',
    content: {
      inleiding: 'Hogeschool Rotterdam plaatst stageorganisaties op de "Rode Lijst" wanneer zij structureel of ernstig in gebreke blijven ten aanzien van gelijke stagekansen.',
      punten: [
        {
          kop: 'Criterium 1: Herhaalde signalen',
          tekst: 'Drie onafhankelijke signalen of klachten over dezelfde afdeling of organisatie binnen twee collegejaren.'
        },
        {
          kop: 'Criterium 2: Weigering dialoog',
          tekst: 'Het bedrijf weigert mee te werken aan hoor en wederhoor of verwerpt de normen uit de Stagecode hbo.'
        },
        {
          kop: 'Consequentie: Uitsluiting',
          tekst: 'Het bedrijf mag voor een periode van minimaal 2 jaar geen stages of afstudeeropdrachten aanbieden via de hogeschool. Plaatsing wordt schriftelijk gemotiveerd en vastgelegd door de opleidingsmanager.'
        }
      ],
      tips: [
        'De rode lijst wordt centraal beheerd tussen alle domeinen en opleidingen.',
        'Huidige studenten bij het betreffende bedrijf krijgen directe bemiddeling naar een veilige plek.',
        'Signalen kunnen ook worden gemeld bij het Samenwerkingsverband Beroepsonderwijs Bedrijfsleven (SBB) of ELBHO.'
      ]
    }
  },
  decaan: {
    id: 'decaan',
    title: 'Decanaat & Studentondersteuning',
    subtitle: 'Rechtsbescherming, financiële compensatie en mentale steun',
    badge: 'Student Support',
    content: {
      inleiding: 'Heb je nare ervaringen opgedaan of dreig je studievertraging op te lopen? Het studentendecanaat en studentpsychologen staan paraat.',
      punten: [
        {
          kop: 'Studentendecanen',
          tekst: 'Helpen bij financiële voorzieningen (zoals profileringsfonds bij vertraging door overmacht), examencommissieverzoeken en formele bezwaarprocedures.'
        },
        {
          kop: 'Studentpsychologen',
          tekst: 'Laagdrempelige psychosociale ondersteuning bij stress, trauma of minderwaardigheidsgevoelens als gevolg van uitsluiting.'
        },
        {
          kop: 'Studieadviseurs',
          tekst: 'Passen jouw individuele studieplanning aan zodat je je studiepunten behoudt.'
        }
      ],
      tips: [
        'Afspraak maken: via HINT of mail naar studentendecanen@hr.nl',
        'Inloopspreekuren op meerdere locaties (Museumpark, Kralingse Zoom, Academieplein).',
        'Volledig kosteloos voor ingeschreven studenten van Hogeschool Rotterdam.'
      ]
    }
  },
  registratie: {
    id: 'registratie',
    title: 'Registratieprotocol Stagebureau',
    subtitle: 'Vastlegging binnen 2 werkdagen voor patronenherkenning',
    badge: 'Coördinatie',
    content: {
      inleiding: 'Wat niet geregistreerd wordt, kan niet worden bestreden. Het stagebureau hanteert een strikt privacy-proof registratieprotocol.',
      punten: [
        {
          kop: 'Stap 1: Registreren binnen 2 werkdagen',
          tekst: 'Ieder signaal (formeel, informeel of anoniem) wordt gelogd in het beveiligde dossier van de organisatie.'
        },
        {
          kop: 'Stap 2: Categorisering',
          tekst: 'Registratie op grond: herkomst/kleur, gender/geaardheid, beperking, levensbeschouwing, of algemeen onveilig werkklimaat.'
        },
        {
          kop: 'Stap 3: Trendanalyse',
          tekst: 'Periodieke evaluatie met de opleidingsmanager: bij meerdere meldingen wordt preventief actie ondernomen.'
        }
      ],
      tips: [
        'Privacy: persoonsgegevens van de student worden uitsluitend opgenomen met expliciete toestemming.',
        'AVG-proof: gegevens worden niet publiek gedeeld, uitsluitend intern t.b.v. kwaliteitsbewaking en bescherming.'
      ]
    }
  },
  monitoring: {
    id: 'monitoring',
    title: 'Monitoring & Jaarlijkse Evaluatie',
    subtitle: 'Beleidsmatige borging en verantwoording',
    badge: 'Management',
    content: {
      inleiding: 'Gelijke kansen vereisen continue monitoring van cijfers, signalen en uitstroomgegevens binnen alle domeinen.',
      punten: [
        {
          kop: 'Kwartaaloverleg Opleidingsmanagers',
          tekst: 'Bespreek trends uit het Centraal Meldpunt en de registraties van het stagebureau.'
        },
        {
          kop: 'Verantwoording in Jaarverslag',
          tekst: 'Geanonimiseerde data over het aantal signalen, afhandelingstermijnen en getroffen sancties.'
        },
        {
          kop: 'Professionalisering docenten',
          tekst: 'Vast scholingsaanbod inclusieve begeleiding en vooroordelenbewustzijn voor alle stagebegeleiders.'
        }
      ]
    }
  },
  klacht: {
    id: 'klacht',
    title: 'Klachtenprocedure & Externe Instanties',
    subtitle: 'Formele escalatie bij ernstige misstanden',
    badge: 'Rechtspositie',
    content: {
      inleiding: 'Wanneer bemiddeling niet toereikend is of er sprake is van ernstige misstanden, kunnen formele stappen worden genomen.',
      punten: [
        {
          kop: 'Klachtencommissie Ongewenst Gedrag HR',
          tekst: 'Onderzoekt formele klachten en adviseert het College van Bestuur over passende maatregelen.'
        },
        {
          kop: 'College voor de Rechten van de Mens',
          tekst: 'Onafhankelijk nationaal orgaan dat een bindend juridisch oordeel kan vellen over ongelijke behandeling.'
        },
        {
          kop: 'Inspectie van het Onderwijs',
          tekst: 'Houdt toezicht op de zorgplicht van hogescholen m.b.t. sociale veiligheid.'
        }
      ]
    }
  }
};
