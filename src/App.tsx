import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { ActorSelector } from './components/ActorSelector';
import { WarningCallout } from './components/WarningCallout';
import { StepsGrid } from './components/StepsGrid';
import { QuestionBanner } from './components/QuestionBanner';
import { KeyPrinciples } from './components/KeyPrinciples';
import { ActionModal } from './components/ActionModal';
import { Footer } from './components/Footer';
import { PrintView } from './components/PrintView';
import { PrintModal } from './components/PrintModal';
import { ServerDeployModal } from './components/ServerDeployModal';
import { ACTOREN } from './data/routekaartData';

export default function App() {
  const [actiefIndex, setActiefIndex] = useState(0);
  const [activeModalResource, setActiveModalResource] = useState<string | null>(null);
  const [modalCustomTitle, setModalCustomTitle] = useState<string | undefined>(undefined);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isServerModalOpen, setIsServerModalOpen] = useState(false);
  const [liveMessage, setLiveMessage] = useState<string>('');

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
    <div className="min-h-screen bg-[#F7EFE3] text-[#003340] py-6 sm:py-9 px-3.5 sm:px-6 print:p-0 print:m-0 print:bg-white">
      {/* Dedicated 1-Page Landscape Print View */}
      <PrintView />

      {/* Screen Interactive View */}
      <div className="screen-only">
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
          {/* Semantic Header with Stagecode pill & Definition */}
          <Header
            onOpenMeldpunt={() => {
              setActiveModalResource('meldpunt');
              setModalCustomTitle('Meldpunt');
            }}
            onOpenStagecode={() => {
              setActiveModalResource('aanpak');
              setModalCustomTitle('Stagecode hbo');
            }}
            onOpenPrint={() => {
              setIsPrintModalOpen(true);
            }}
          />

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
                <section aria-label="Bij wie kun je terecht?" className="mt-2 mb-6">
                  <KeyPrinciples blokken={currentActor.blokken} />
                </section>
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Semantic Footer with Hogeschool Rotterdam Logo & Themagroep */}
          <Footer onOpenServerModal={() => setIsServerModalOpen(true)} />
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

        {/* Dedicated Print & PDF Modal */}
        <PrintModal
          isOpen={isPrintModalOpen}
          onClose={() => setIsPrintModalOpen(false)}
        />

        {/* Dedicated O&O Server Deploy Modal */}
        <ServerDeployModal
          isOpen={isServerModalOpen}
          onClose={() => setIsServerModalOpen(false)}
        />
      </div>
    </div>
  );
}
