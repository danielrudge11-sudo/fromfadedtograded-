import { useState } from 'react'
import PricingTab from './tabs/PricingTab'
import FAQsTab from './tabs/FAQsTab'
import CanCannotTab from './tabs/CanCannotTab'

const TABS = [
  { id: 'canCannot', label: "What to Expect" },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'How It Works' },
]

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState('canCannot')

  return (
    <section id="services" className="section">
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
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div role="tabpanel">
          {activeTab === 'pricing' && <PricingTab />}
          {activeTab === 'faq' && <FAQsTab />}
          {activeTab === 'canCannot' && <CanCannotTab />}
        </div>
      </div>
    </section>
  )
}
