export interface Step {
  id: string;
  titel: string;
  kern: string;
  detail: string;
  actie?: string;
  actieType?: 'mail' | 'hint' | 'aanpak' | 'meldpunt' | 'gesprek' | 'route' | 'decaan' | 'signalen' | 'tips' | 'kader' | 'registratie' | 'rodelijst' | 'monitoring' | 'klacht';
}

export interface Blok {
  t: string;
  i: string;
  b?: boolean; // highlight blue/petrol
}

export interface Actor {
  id: string;
  naam: string;
  rol: string;
  icoon: string;
  vraag: string;
  letOp: string;
  stappen: Step[];
  blokken: Blok[];
}

export interface ResourceInfo {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  externalUrl?: { label: string; url: string };
  emailTemplate?: {
    subject: string;
    body: string;
    mailtoUrl: string;
  };
  content: {
    inleiding: string;
    punten: { kop: string; tekst: string }[];
    tips?: string[];
    contactInfo?: {
      naam: string;
      contact: string;
      toelichting: string;
      linkUrl?: string;
      linkLabel?: string;
    };
  };
}
