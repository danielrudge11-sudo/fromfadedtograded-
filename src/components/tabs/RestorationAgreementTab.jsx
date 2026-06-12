const SECTIONS = [
  {
    num: '1',
    title: 'Risk',
    body: 'Card restoration is not an exact science. All cards react differently to heat pressing, humidifying, and cleaning. There is an inherent risk that a card may react negatively to the process.',
  },
  {
    num: '2',
    title: 'No Guarantee',
    body: "I will always work to the best of my ability, but I cannot guarantee a specific result. Restoration may fully improve, partially improve, or in rare cases not improve a card's condition.",
  },
  {
    num: '3',
    title: 'Liability',
    body: 'FromFadedToGraded accepts no liability for any damage, loss of condition, or decrease in market value resulting from the restoration process.',
  },
  {
    num: '4',
    title: 'Slab Cracks',
    body: "Slab cracking is a delicate process and carries some risk of damage to the card inside. As this process is irreversible, please be aware that I'm unable to accept liability for any damage that may occur.",
  },
]

export default function RestorationAgreementTab() {
  return (
    <div className="ra-wrapper">
      <p className="ra-intro">
        Before I proceed with your restoration, please read and confirm your agreement to the following terms:
      </p>

      <div className="ra-sections">
        {SECTIONS.map(section => (
          <div key={section.num} className="ra-section">
            <div className="ra-section-num">{section.num}</div>
            <div>
              <p className="ra-section-title">{section.title}</p>
              <p className="ra-section-body">{section.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ra-confirmation">
        By sending your card(s) to FromFadedToGraded, you confirm you have read, understood, and agree to the above terms.
      </div>
    </div>
  )
}
