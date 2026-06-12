import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import PricingTab from './tabs/PricingTab'
import FAQsTab from './tabs/FAQsTab'
import CanCannotTab from './tabs/CanCannotTab'
import RestorationAgreementTab from './tabs/RestorationAgreementTab'

const TABS = [
  { id: 'canCannot', label: 'What to Expect', slug: 'what-to-expect' },
  { id: 'pricing', label: 'Pricing', slug: 'pricing' },
  { id: 'faq', label: 'How It Works', slug: 'how-it-works' },
  { id: 'restorationAgreement', label: 'Restoration Agreement', slug: 'restoration-agreement' },
]

const SLUG_TO_ID = Object.fromEntries(TABS.map(t => [t.slug, t.id]))
const ID_TO_SLUG = Object.fromEntries(TABS.map(t => [t.id, t.slug]))

export default function TabsSection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const sectionRef = useRef(null)

  const slugFromUrl = searchParams.get('tab')
  const activeTab = (slugFromUrl && SLUG_TO_ID[slugFromUrl]) || 'canCannot'

  useEffect(() => {
    if (slugFromUrl && SLUG_TO_ID[slugFromUrl]) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  function handleTabClick(tabId) {
    setSearchParams({ tab: ID_TO_SLUG[tabId] }, { replace: true })
  }

  return (
    <section id="services" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Services & Information</h2>
        <p className="section-subtitle">Everything you need to know before sending your card</p>

        <div className="tabs-nav" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div role="tabpanel">
          {activeTab === 'canCannot' && <CanCannotTab />}
          {activeTab === 'pricing' && <PricingTab />}
          {activeTab === 'faq' && <FAQsTab />}
          {activeTab === 'restorationAgreement' && <RestorationAgreementTab />}
        </div>
      </div>
    </section>
  )
}
