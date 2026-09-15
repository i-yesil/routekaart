import React, { useState } from 'react';
import { Actor } from '../types';
import {
  GraduationCap,
  UserCheck,
  Network,
  Building2,
  ShieldCheck,
  Clock,
  ShieldAlert,
  ArrowRight,
  FileCheck2,
  Sparkles
} from 'lucide-react';

interface HandelingskaderOverviewProps {
  actoren: Actor[];
  actiefIndex: number;
  onSelectActor: (index: number) => void;
  onOpenAction: (actieType: string, title: string) => void;
}

interface RoleFrameworkDetails {
  id: string;
  mandaat: string;
  termijn: string;
  gespreksstijl: string;
  escalatieNaar: string;
  goudenRegel: string;
  kerntaak: string;
}

const FRAMEWORK_DETAILS: Record<string, RoleFrameworkDetails> = {
  student: {
    id: 'student',
    kerntaak: 'Ervaren of vermoeden van discriminatie signaleren en steun ontvangen.',
    mandaat: 'Volledige regie over eigen proces, anoniem of met naam.',
    termijn: 'Binnen 5 werkdagen gesprek aangeboden door opleiding.',
    gespreksstijl: 'Eigen beleving telt, geen juridische bewijslast vereist.',
    escalatieNaar: 'Studentcoach, stagebegeleider, Vertrouwenspersoon of Decaan.',
    goudenRegel: 'Niet jouw schuld. Erkenning gaat altijd vóór bewijs. Je staat er nooit alleen voor.'
  },
  begeleider: {
    id: 'begeleider',
    kerntaak: 'Eerste veilige haven, actieve signalering en de-escalatie.',
    mandaat: 'Gesprek voeren, driehoeksgesprek initiëren, doorverwijzen.',
    termijn: 'Gesprek inplannen binnen maximaal 5 werkdagen na signaal.',
    gespreksstijl: 'NIVEA (Niet Invullen), OMA (Oordeel Uitstellen) en LSD (Luisteren, Samenvatten, Doorvragen).',
    escalatieNaar: 'Stagecoördinator bij mediation; direct Onderwijsmanager bij acute onveiligheid.',
    goudenRegel: 'Het welzijn van de student gaat altijd vóór de relatie met het stagebedrijf.'
  },
  coordinator: {
    id: 'coordinator',
    kerntaak: 'Vastlegging van signalen, formele bemiddeling en patroonherkenning.',
    mandaat: 'Registratie in centraal dossier, bemiddeling met stageorganisatie, voordracht sancties.',
    termijn: 'Registratie binnen 2 werkdagen; besluit/oplossing binnen 10 werkdagen.',
    gespreksstijl: 'Zakelijk, objectief bemiddelend, normerend namens Hogeschool Rotterdam.',
    escalatieNaar: 'Onderwijsmanager bij herhaling, structurele patronen of gebrek aan medewerking.',
    goudenRegel: 'Eén melding is een casus, drie meldingen vormen een patroon. Registratie beschermt volgende studenten.'
  },
  manager: {
    id: 'manager',
    kerntaak: 'Handhaving van de norm, rugdekking bieden aan team en opleggen van sancties.',
    mandaat: 'Opschorten of verbreken van stagesamenwerking, plaatsing op de Rode Lijst (min. 2 jaar uitsluiting).',
    termijn: 'Besluitvorming binnen 10 werkdagen; periodieke kwartaalmonitoring van trends.',
    gespreksstijl: 'Bestuurlijk en ferm op de norm: geen concessies aan sociale veiligheid.',
    escalatieNaar: 'College van Bestuur, Centraal Juridische Zaken, landelijke inspectie/ELBHO indien nodig.',
    goudenRegel: 'Jij bent de rugdekking van je docenten en studenten. De norm staat onvoorwaardelijk boven de relatie.'
  },
  vertrouwens: {
    id: 'vertrouwens',
    kerntaak: 'Onafhankelijk luisterend oor, trauma-sensitieve opvang en toeleiding naar de opleiding.',
    mandaat: 'Volledig vertrouwelijk, geheimhoudingsplicht, staat buiten de hiërarchie van opleidingen.',
    termijn: 'Binnen 48 uur eerste reactie op binnengekomen meldingen.',
    gespreksstijl: 'Validerend, empathisch, vertrouwelijk, empowerment van de melder.',
    escalatieNaar: 'Geanonimiseerde signalering aan directies; alleen met schriftelijke toestemming naar opleiding.',
    goudenRegel: 'Geen enkele actie zonder expliciete instemming van de student. Absolute vertrouwelijkheid.'
  }
};

const getRoleIcon = (icoon: string) => {
  switch (icoon) {
    case 'GraduationCap': return <GraduationCap className="w-5 h-5" aria-hidden="true" />;
    case 'UserCheck': return <UserCheck className="w-5 h-5" aria-hidden="true" />;
    case 'Network': return <Network className="w-5 h-5" aria-hidden="true" />;
    case 'Building2': return <Building2 className="w-5 h-5" aria-hidden="true" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" aria-hidden="true" />;
    default: return <GraduationCap className="w-5 h-5" aria-hidden="true" />;
  }
};

export const HandelingskaderOverview: React.FC<HandelingskaderOverviewProps> = ({
  actoren,
  actiefIndex,
  onSelectActor,
  onOpenAction
}) => {
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  return (
    <section
      id="handelingskader-matrix"
      aria-labelledby="handelingskader-heading"
      className="mt-10 mb-8 bg-white border-2 border-[#D1C7BA] rounded-2xl p-5 sm:p-7 shadow-xs text-[#003340]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-[#E4DDD2]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11.5px] font-bold uppercase tracking-wider bg-[#BA093F]/15 text-[#8F002D] border border-[#BA093F]/30">
              <FileCheck2 className="w-3.5 h-3.5" aria-hidden="true" />
              Handelingskader per rol
            </span>
            <span className="text-[12px] text-[#3D3833] font-semibold hidden sm:inline">
              Aanpak Stagediscriminatie · Hogeschool Rotterdam
            </span>
          </div>
          <h2 id="handelingskader-heading" className="text-[21px] sm:text-[24px] font-bold text-[#003340] leading-tight">
            Aanpak Stagediscriminatie: Handelingskader per rol
          </h2>
          <p className="text-[13.5px] text-[#3D3833] mt-1 max-w-3xl leading-relaxed">
            Iedere betrokkene heeft een specifieke verantwoordelijkheid, heldere termijnen en afgebakende bevoegdheden. 
            Selecteer een rol voor gerichte handelingsinstructies of bekijk de vergelijkende matrix.
          </p>
        </div>

        {/* View Switcher Toggle */}
        <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-1.5 rounded-xl border border-[#D1C7BA] self-start md:self-end">
          <button
            type="button"
            onClick={() => setViewMode('cards')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${
              viewMode === 'cards'
                ? 'bg-[#003340] text-white shadow-2xs'
                : 'text-[#3D3833] hover:text-[#003340]'
            }`}
          >
            Rolkaarten (5)
          </button>
          <button
            type="button"
            onClick={() => setViewMode('matrix')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${
              viewMode === 'matrix'
                ? 'bg-[#003340] text-white shadow-2xs'
                : 'text-[#3D3833] hover:text-[#003340]'
            }`}
          >
            Vergelijkende Matrix
          </button>
        </div>
      </div>

      {/* VIEW 1: Cards per role */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {actoren.map((actor, idx) => {
            const details = FRAMEWORK_DETAILS[actor.id];
            const isCurrent = idx === actiefIndex;

            return (
              <div
                key={actor.id}
                className={`rounded-xl border-2 p-4 sm:p-5 flex flex-col justify-between transition-all ${
                  isCurrent
                    ? 'border-[#BA093F] bg-[#FAF7F2] shadow-sm'
                    : 'border-[#D1C7BA] bg-white hover:border-[#003340]'
                }`}
              >
                <div>
                  {/* Role Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isCurrent ? 'bg-[#BA093F] text-white' : 'bg-[#003340]/10 text-[#003340]'
                        }`}
                      >
                        {getRoleIcon(actor.icoon)}
                      </span>
                      <div>
                        <h3 className="text-[15.5px] font-bold text-[#003340] leading-tight">
                          {actor.naam}
                        </h3>
                        <span className="text-[11.5px] text-[#3D3833] font-medium block">
                          {actor.rol}
                        </span>
                      </div>
                    </div>
                    {isCurrent && (
                      <span className="text-[10.5px] font-bold px-2 py-0.5 rounded bg-[#BA093F] text-white shrink-0">
                        Actief
                      </span>
                    )}
                  </div>

                  {/* Kerntaak */}
                  <div className="mb-3 pb-3 border-b border-[#E4DDD2]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D3833] block mb-1">
                      Kerntaak & Rol:
                    </span>
                    <p className="text-[12.5px] text-[#1F2937] leading-relaxed">
                      {details.kerntaak}
                    </p>
                  </div>

                  {/* Specific Parameters */}
                  <dl className="space-y-2 text-[12px] mb-4">
                    <div>
                      <dt className="font-bold text-[#003340] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#00587A]" aria-hidden="true" />
                        Termijn & Afspraak:
                      </dt>
                      <dd className="text-[#1F2937] pl-5 mt-0.5">
                        {details.termijn}
                      </dd>
                    </div>

                    <div>
                      <dt className="font-bold text-[#003340] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#BA093F]" aria-hidden="true" />
                        Mandaat & Bevoegdheid:
                      </dt>
                      <dd className="text-[#1F2937] pl-5 mt-0.5">
                        {details.mandaat}
                      </dd>
                    </div>

                    <div>
                      <dt className="font-bold text-[#003340] flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-[#006E66]" aria-hidden="true" />
                        Escalatieroute:
                      </dt>
                      <dd className="text-[#1F2937] pl-5 mt-0.5">
                        {details.escalatieNaar}
                      </dd>
                    </div>
                  </dl>

                  {/* Gouden Regel Callout */}
                  <div className="p-2.5 rounded-lg bg-white border border-[#D1C7BA] text-[11.5px] leading-relaxed mb-4">
                    <strong className="text-[#BA093F] block mb-0.5 font-bold">Gouden Regel:</strong>
                    <span className="text-[#3D3833] italic">"{details.goudenRegel}"</span>
                  </div>
                </div>

                {/* Switch or Jump to this role's roadmap */}
                <div className="pt-3 border-t border-[#E4DDD2] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectActor(idx);
                      const el = document.getElementById('main-content');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#00587A] hover:text-[#003950] transition-colors focus-visible:outline-2 focus-visible:outline-[#003340]"
                    aria-label={`Bekijk de 5 fasen stappen van ${actor.naam}`}
                  >
                    <span>Bekijk 5 fasen routekaart</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenAction('kader', `Handelingskader ${actor.naam}`)}
                    className="text-[11.5px] px-2.5 py-1 rounded bg-[#FAF7F2] hover:bg-[#EAE2D5] border border-[#D1C7BA] text-[#003340] font-semibold transition-colors"
                  >
                    Protocol
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* VIEW 2: Comparison Matrix */
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left border-collapse border border-[#D1C7BA] min-w-[700px]">
            <caption className="sr-only">
              Vergelijkende matrix van het handelingskader bij stagediscriminatie per rol
            </caption>
            <thead>
              <tr className="bg-[#FAF7F2] border-b-2 border-[#003340]">
                <th scope="col" className="p-3 text-[12.5px] font-bold text-[#003340] border-r border-[#D1C7BA]">
                  Rol & Functie
                </th>
                <th scope="col" className="p-3 text-[12.5px] font-bold text-[#003340] border-r border-[#D1C7BA]">
                  Kerntaak & Doel
                </th>
                <th scope="col" className="p-3 text-[12.5px] font-bold text-[#003340] border-r border-[#D1C7BA]">
                  Reactietermijn
                </th>
                <th scope="col" className="p-3 text-[12.5px] font-bold text-[#003340] border-r border-[#D1C7BA]">
                  Gesprek / Mandaat
                </th>
                <th scope="col" className="p-3 text-[12.5px] font-bold text-[#003340]">
                  Escalatie & Sancties
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D1C7BA] text-[12.5px]">
              {actoren.map((actor, idx) => {
                const details = FRAMEWORK_DETAILS[actor.id];
                const isSelected = idx === actiefIndex;
                return (
                  <tr
                    key={actor.id}
                    className={`hover:bg-[#FAF7F2] transition-colors ${
                      isSelected ? 'bg-[#FAF7F2]/80 font-medium' : 'bg-white'
                    }`}
                  >
                    <th scope="row" className="p-3.5 border-r border-[#D1C7BA] align-top">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-md bg-[#003340]/10 text-[#003340] flex items-center justify-center shrink-0">
                          {getRoleIcon(actor.icoon)}
                        </span>
                        <div>
                          <strong className="block text-[13px] text-[#003340]">{actor.naam}</strong>
                          <span className="text-[11px] text-[#3D3833] font-normal">{actor.rol}</span>
                        </div>
                      </div>
                    </th>
                    <td className="p-3.5 border-r border-[#D1C7BA] text-[#1F2937] align-top">
                      {details.kerntaak}
                    </td>
                    <td className="p-3.5 border-r border-[#D1C7BA] text-[#003340] font-bold align-top whitespace-nowrap">
                      {details.termijn}
                    </td>
                    <td className="p-3.5 border-r border-[#D1C7BA] text-[#1F2937] align-top">
                      <span className="block font-semibold text-[#003340] mb-0.5">{details.gespreksstijl}</span>
                      <span className="text-[11.5px] text-[#3D3833]">{details.mandaat}</span>
                    </td>
                    <td className="p-3.5 text-[#1F2937] align-top">
                      <span className="block font-semibold text-[#BA093F] mb-0.5">{details.escalatieNaar}</span>
                      <span className="text-[11px] text-[#3D3833] italic">"{details.goudenRegel}"</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Golden Standards Bar */}
      <div className="mt-6 p-4 rounded-xl bg-[#FDEEF3] border border-[#BA093F]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12.5px]">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-[#BA093F] text-white flex items-center justify-center shrink-0 font-bold">
            !
          </span>
          <p className="text-[#003340] leading-snug">
            <strong>Bovenschools kader:</strong> Bij elk signaal staat de veiligheid en het welzijn van de student centraal. 
            Erkenning gaat vóór bewijsvoering; twijfel rechtvaardigt te allen tijde direct een vertrouwelijk gesprek.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onOpenAction('aanpak', 'Stagecode hbo Principes')}
          className="px-3 py-1.5 rounded-lg bg-[#BA093F] text-white font-bold hover:bg-[#9B0734] transition-colors shrink-0 text-[12px]"
        >
          Bekijk Stagecode hbo
        </button>
      </div>
    </section>
  );
};
