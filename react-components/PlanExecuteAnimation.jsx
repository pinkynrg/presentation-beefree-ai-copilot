import { useState, useEffect } from 'react'

const pulseKeyframes = `
@keyframes plannerPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.4); }
  50% { box-shadow: 0 0 12px 4px rgba(211, 47, 47, 0.25); }
}
`

export default function PlanExecuteAnimation() {
  const [step, setStep] = useState(0)
  const [execTick, setExecTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // When executor step activates, rapidly tick through checkmarks
  useEffect(() => {
    if (step === 3) {
      setExecTick(0)
      const tickInterval = setInterval(() => {
        setExecTick((t) => {
          if (t >= 6) {
            clearInterval(tickInterval)
            return t
          }
          return t + 1
        })
      }, 250)
      return () => clearInterval(tickInterval)
    } else if (step < 3) {
      setExecTick(0)
    }
  }, [step])

  const cardColors = {
    default: { bg: '#FFF8E1', border: '#FFD54F', accent: '#F9A825' },
    inactive: { bg: '#f5f3ff', border: '#e0d8f0' },
    planner: { bg: '#FFEBEE', border: '#EF9A9A', accent: '#d32f2f' },
    executor: { bg: '#E3F2FD', border: '#90CAF9', accent: '#1976D2' },
  }

  const cardStyle = (active, type) => {
    const colors = !active ? cardColors.inactive : (type ? cardColors[type] : cardColors.default)
    return {
      background: colors.bg,
      border: `2px solid ${colors.border}`,
      borderRadius: '8px',
      padding: '0.4rem 0.5rem',
      fontSize: '0.55rem',
      transition: 'all 0.4s ease',
      opacity: active ? 1 : 0.4,
      transform: active ? 'scale(1)' : 'scale(0.97)',
    }
  }

  const arrowStyle = (active) => ({
    textAlign: 'center',
    fontSize: '1.2rem',
    color: active ? '#7747ff' : '#ccc',
    transition: 'color 0.4s',
    margin: '0.2rem 0',
  })

  const fieldStyle = (filled) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    padding: '0.15rem 0.3rem',
    background: filled ? '#fff' : '#f0eef5',
    borderRadius: '4px',
    marginBottom: '0.15rem',
    transition: 'background 0.3s',
    fontSize: '0.5rem',
  })

  const tagStyle = (accent, active = true) => ({
    display: 'inline-block',
    background: accent,
    color: 'white',
    borderRadius: '3px',
    padding: '0.05rem 0.25rem',
    fontSize: '0.45rem',
    fontWeight: 700,
    opacity: active ? 1 : 0.4,
    transition: 'opacity 0.4s',
  })

  const emptyVal = '___'

  // Plan fields (high-level design intent)
  const fields = [
    { label: 'Primary color', empty: emptyVal, filled: '#0000ff' },
    { label: 'Text color', empty: emptyVal, filled: '#ffffff' },
    { label: 'Sections', empty: emptyVal, filled: '3' },
    { label: 'Padding', empty: emptyVal, filled: '16px' },
  ]

  // Executor steps (derived from the plan, not 1:1 copies)
  const toolCalls = [
    'Set row background → #0000ff',
    'Set row text color → #ffffff',
    'Create section 1 with primary color',
    'Create section 2 with primary color',
    'Create section 3 with primary color',
    'Apply padding → 16px',
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
      <style>{pulseKeyframes}</style>

      {/* Step 0-1: Plan Guideline (schema) */}
      <div style={cardStyle(step >= 0)}>
        <div style={{ fontWeight: 700, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <span>📋</span> <span style={tagStyle(cardColors.default.accent, step >= 0)}>Plan guideline</span>
        </div>
        {fields.map((f) => (
          <div key={f.label} style={fieldStyle(false)}>
            <span style={{ color: '#666', fontFamily: 'monospace' }}>{f.label}:</span>
            <span style={{ color: '#ccc', fontFamily: 'monospace' }}>{f.empty}</span>
          </div>
        ))}
      </div>

      <div style={arrowStyle(step >= 1)}>↓</div>

      {/* Step 1-2: Planner Agent fills it out */}
      <div style={{
        ...cardStyle(step >= 1, step >= 1 ? 'planner' : undefined),
        borderRadius: '24px',
        padding: '0.5rem 0.7rem',
        animation: (step >= 1 && step <= 2) ? 'plannerPulse 1.5s ease-in-out infinite' : 'none',
      }}>
        <div style={{ fontWeight: 700, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <span>🧠</span> <span style={tagStyle(cardColors.planner.accent, step >= 1)}>Planner Agent</span>
        </div>
        {fields.map((f, i) => (
          <div key={f.label} style={fieldStyle(step >= 2)}>
            <span style={{ color: '#666', fontFamily: 'monospace' }}>{f.label}:</span>
            <span style={{
              color: step >= 2 ? '#d32f2f' : '#ccc',
              fontWeight: step >= 2 ? 700 : 400,
              fontFamily: 'monospace',
              transition: 'all 0.3s',
              transitionDelay: `${i * 100}ms`,
            }}>
              {step >= 2 ? f.filled : f.empty}
            </span>
          </div>
        ))}
      </div>

      <div style={arrowStyle(step >= 3)}>↓</div>

      {/* Step 3-4: Executor runs it */}
      <div style={cardStyle(step >= 3, step >= 3 ? 'executor' : undefined)}>
        <div style={{ fontWeight: 700, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <span>⚡</span> <span style={tagStyle(cardColors.executor.accent, step >= 3)}>Executor</span>
        </div>
        {toolCalls.map((call, i) => {
          const done = step >= 3 && execTick > i
          return (
            <div key={i} style={{
              padding: '0.1rem 0.3rem',
              background: done ? '#fff' : '#f0eef5',
              borderRadius: '4px',
              marginBottom: '0.1rem',
              fontFamily: 'monospace',
              fontSize: '0.48rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              transition: 'all 0.15s',
              opacity: step >= 3 ? (done ? 1 : 0.5) : 0.3,
            }}>
              <span style={{
                color: done ? '#22bb33' : '#ccc',
                transition: 'color 0.15s',
              }}>
                {done ? '✅' : '○'}
              </span>
              <span style={{ color: step >= 3 ? '#1a1a1a' : '#aaa' }}>{call}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
