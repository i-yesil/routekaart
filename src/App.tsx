import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { ActorSelector } from './components/ActorSelector';
import { WarningCallout } from './components/WarningCallout';
import { StepsGrid } from './components/StepsGrid';
import { QuestionBanner } from './components/QuestionBanner';
import { KeyPrinciples } from './components/KeyPrinciples';
import { ActionModal } from './components/ActionModal';
import { HandelingskaderOverview } from './components/HandelingskaderOverview';
import { Footer } from './components/Footer';
import { ACTOREN } from './data/routekaartData';

export default function App() {
  const [actiefIndex, setActiefIndex] = useState(0);
  const [activeModalResource, setActiveModalResource] = useState<string | null>(null);
  const [modalCustomTitle, setModalCustomTitle] = useState<string | undefined>(undefined);
  const [liveMessage, setLiveMessage] = useState<string>('');
  const [isHandelingskaderOpen, setIsHandelingskaderOpen] = useState(false);

  const currentActor = ACTOREN[actiefIndex];

  const handleRoleSelect = (index: number) => {
    setActiefIndex(index);
    setLiveMessage(`Rol gewijzigd naar: ${ACTOREN[index].naam}`);
  };

  const handleOpenAction = (actieType: string, stepTitle: string) => {
    setActiveModalResource(actieType);
    setModalCustomTitle(stepTitle);
  };

  return (
    <div className="min-h-screen bg-[#F7EFE3] text-[#003340] py-6 sm:py-9 px-3.5 sm:px-6">
      {/* WCAG 2.4.1 Skip-link voor toetsenbordgebruikers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#003340] focus:text-white focus:font-bold focus:rounded-lg focus:shadow-xl focus:ring-2 focus:ring-[#BA093F]"
      >
        Ga direct naar de hoofdinhoud
      </a>

      {/* WCAG 4.1.3 Status Announcements voor Screen Readers */}
      <div
        id="status-announcer"
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {liveMessage}
      </div>

      <div className="max-w-[1240px] mx-auto wrap-container">
        {/* Semantic Header */}
        <Header
          onOpenMeldpunt={() => {
            setActiveModalResource('meldpunt');
            setModalCustomTitle('Meldpunt');
          }}
          onOpenStagecode={() => {
            setActiveModalResource('aanpak');
            setModalCustomTitle('Stagecode hbo');
          }}
          isHandelingskaderOpen={isHandelingskaderOpen}
          onToggleHandelingskader={() => {
            setIsHandelingskaderOpen(prev => !prev);
            setLiveMessage(isHandelingskaderOpen ? 'Handelingskader ingeklapt.' : 'Handelingskader uitgeklapt.');
          }}
        />

        {/* Uitklapbaar Handelingskader per rol (tussen Stagecode & Meldpunt in header geactiveerd) */}
        <AnimatePresence>
          {isHandelingskaderOpen && (
            <motion.section
              id="handelingskader-collapse"
              aria-label="Uitklapvenster Handelingskader per rol"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden mb-6"
            >
              <div className="bg-white border-2 border-[#003340] rounded-2xl p-4 sm:p-6 shadow-md">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D1C7BA]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00587A]" aria-hidden="true" />
                    <h2 className="text-[16px] sm:text-[18px] font-bold text-[#003340] m-0">
                      Handelingskader per rol
                    </h2>
                    <span className="text-[11px] text-[#4A5568] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#D1C7BA]">
                      Uitgeklapt overzicht
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsHandelingskaderOpen(false)}
                    className="text-[12px] font-bold text-[#3D3833] hover:text-[#BA093F] px-2.5 py-1 rounded-lg border border-[#D1C7BA] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                    aria-label="Sluit het handelingskader overzicht"
                  >
                    Inklappen ✕
                  </button>
                </div>

                <HandelingskaderOverview
                  actoren={ACTOREN}
                  actiefIndex={actiefIndex}
                  onSelectActor={handleRoleSelect}
                  onOpenAction={handleOpenAction}
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Wat is stagediscriminatie */}
        <section
          aria-label="Wat is stagediscriminatie"
          className="bg-white border-2 border-[#D1C7BA] rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 mb-5 shadow-2xs"
        >
          <h2 className="text-[13px] sm:text-[14px] font-extrabold text-[#BA093F] uppercase tracking-wide m-0 mb-1">
            WAT IS STAGEDISCRIMINATIE?
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#003340] leading-relaxed m-0">
            Afwijzing, uitsluiting of ongelijke behandeling tijdens of het zoeken van de stage op basis van afkomst, kleur, gender, religie, seksuele oriëntatie of (on)zichtbare beperking.
          </p>
        </section>

        {/* Role Selector with WAI-ARIA Tabs & Arrow Key Navigation */}
        <ActorSelector
          actoren={ACTOREN}
          actiefIndex={actiefIndex}
          onSelect={handleRoleSelect}
        />

        {/* Semantic Main Landmark */}
        <main id="main-content" tabIndex={-1} className="outline-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentActor.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16 }}
              id={`panel-${currentActor.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${currentActor.id}`}
            >
              {/* Guiding Question Banner */}
              <QuestionBanner
                vraag={currentActor.vraag}
                rolNaam={currentActor.naam}
              />

              {/* 5-Step Roadmap with Verified Color Contrast */}
              <StepsGrid
                stappen={currentActor.stappen}
                onOpenAction={handleOpenAction}
              />

              {/* Critical Warning / Let-op Callout */}
              <WarningCallout letOpHtml={currentActor.letOp} />

              {/* Key Principles & Contact Points */}
              <section aria-labelledby="principles-heading" className="mt-2 mb-6">
                <h3
                  id="principles-heading"
                  className="text-[13px] font-extrabold uppercase tracking-[0.9px] text-[#7C2D12] mb-2.5"
                >
                  {currentActor.id === 'student' ? 'BIJ WIE KUN JE TERECHT?' : `BIJ WIE KUN JE TERECHT? · ${currentActor.naam}`}
                </h3>
                <KeyPrinciples blokken={currentActor.blokken} />
              </section>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Semantic Footer with Hogeschool Rotterdam Logo & Themagroep */}
        <Footer />
      </div>

      {/* Action Guidance & Tools Modal */}
      <ActionModal
        resourceId={activeModalResource}
        customTitle={modalCustomTitle}
        onClose={() => {
          setActiveModalResource(null);
          setModalCustomTitle(undefined);
        }}
      />
    </div>
  );
}
