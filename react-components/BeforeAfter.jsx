import { useState, useEffect } from 'react'

export default function BeforeAfter() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 4)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const fadeStyle = (visible) => ({
    opacity: visible ? 1 : 0.3,
    transition: 'opacity 0.4s',
  })

  const barStyle = (color, visible) => ({
    background: color,
    height: '30px',
    borderRadius: '6px',
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.5s',
  })

  const codeStyle = {
    background: '#f8f6ff',
    padding: '0.3rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.65rem',
    display: 'block',
    fontFamily: 'monospace',
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '0rem' }}>
      {/* Before panel */}
      <div>
        <h2 style={{ textAlign: 'center', color: '#ff4444', marginBottom: '0.2rem', fontSize: '0.95rem' }}>
          ❌ Before: Direct Tool Calls
        </h2>
        <div style={{ background: '#fff5f5', padding: '1rem', borderRadius: '12px', border: '2px solid #ffcccc' }}>
          <div style={{ fontSize: '0.7rem' }}>
            <div style={{ background: '#e8f5e9', padding: '0.5rem', borderRadius: '8px', marginBottom: '0.4rem' }}>
              <strong>User:</strong> "Create 3-section email with blue background"
            </div>

            <div style={{ fontWeight: 'bold', marginBottom: '0.3rem', fontSize: '0.75rem' }}>Agent tool calls:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <div style={fadeStyle(step >= 1)}>
                <code style={codeStyle}>Add section: #0000ff</code>
              </div>
              <div style={fadeStyle(step >= 2)}>
                <code style={codeStyle}>Add section: #87CEEB</code>
              </div>
              <div style={fadeStyle(step >= 3)}>
                <code style={codeStyle}>Add section: #0000ff</code>
              </div>
            </div>

            {step >= 1 && (
              <div style={{ fontWeight: 'bold', marginBottom: '0.3rem', fontSize: '0.75rem' }}>Result:</div>
            )}
            {step >= 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {step >= 1 && <div style={barStyle('#0000ff', step >= 1)} />}
                {step >= 2 && <div style={barStyle('#87CEEB', step >= 2)} />}
                {step >= 3 && <div style={barStyle('#0000ff', step >= 3)} />}
              </div>
            )}

            {step >= 3 && (
              <div style={{ marginTop: '0.5rem', color: '#ff4444', fontWeight: 'bold', fontSize: '0.75rem', textAlign: 'center' }}>
                ⚠️ Inconsistent!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* After panel */}
      <div>
        <h2 style={{ textAlign: 'center', color: '#22bb33', marginBottom: '0.2rem', fontSize: '0.95rem' }}>
          ✅ After: Plan → Execute
        </h2>
        <div style={{ background: '#f0fff4', padding: '1rem', borderRadius: '12px', border: '2px solid #bbf7d0' }}>
          <div style={{ fontSize: '0.7rem' }}>
            <div style={{ background: '#e8f5e9', padding: '0.5rem', borderRadius: '8px', marginBottom: '0.4rem' }}>
              <strong>User:</strong> "Create 3-section email with blue background"
            </div>

            <div style={{ fontWeight: 'bold', marginBottom: '0.3rem', fontSize: '0.75rem' }}>Planner generates structured plan:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <div style={fadeStyle(step >= 1)}>
                <code style={codeStyle}>Set primary color: #0000ff</code>
              </div>
              <div style={fadeStyle(step >= 1)}>
                <code style={codeStyle}>Add 3 sections with primary color</code>
              </div>
            </div>

            {step >= 2 && (
              <div style={{ fontWeight: 'bold', marginBottom: '0.3rem', fontSize: '0.75rem' }}>
                Executor (not an agent) runs it → Result:
              </div>
            )}
            {step >= 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={barStyle('#0000ff', step >= 2)} />
                <div style={barStyle('#0000ff', step >= 3)} />
                {step === 3 && <div style={barStyle('#0000ff', true)} />}
              </div>
            )}

            {step === 3 && (
              <div style={{ marginTop: '0.5rem', color: '#22bb33', fontWeight: 'bold', fontSize: '0.75rem', textAlign: 'center' }}>
                ✓ Consistent by design!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
