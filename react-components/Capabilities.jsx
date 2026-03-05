export default function Capabilities() {
  const cardBase = {
    padding: '1.2rem',
    borderRadius: '12px',
    minHeight: '220px',
  }

  const cardDefault = {
    ...cardBase,
    background: 'linear-gradient(135deg, #f8f6ff 0%, #ffffff 100%)',
    boxShadow: '0 4px 12px rgba(119, 71, 255, 0.15)',
    border: '1px solid #e8deff',
  }

  const cardBeta = {
    ...cardBase,
    background: 'linear-gradient(135deg, #fff5f5 0%, #ffe8f0 100%)',
    boxShadow: '0 8px 24px rgba(255, 68, 68, 0.25)',
    border: '1px solid #ff4444',
    position: 'relative',
  }

  const titleStyle = {
    textAlign: 'center',
    color: '#7747ff',
    marginBottom: '0rem',
    fontSize: '1.1rem',
  }

  const dateStyle = {
    textAlign: 'center',
    color: '#999',
    fontSize: '0.75rem',
    marginBottom: '1rem',
  }

  const listStyle = {
    margin: 0,
    paddingLeft: '1.2rem',
  }

  const itemStyle = {
    margin: '0.3rem 0',
  }

  const cycles = [
    {
      title: 'Cycle 1',
      date: 'Sep - Oct',
      items: ['Tech stack setup', 'Basic agent', 'Attachments', 'Chat engine', 'Traceability setup'],
    },
    {
      title: 'Cycle 2',
      date: 'Nov - Dec',
      items: ['Email creation ↑', 'User feedbacks', 'User reports', 'Stop requests', 'Bug hunt'],
    },
    {
      title: 'Cycle 3',
      date: 'Jan - Feb',
      items: ['Email creation ↑↑', 'Email editing', 'Workspace styles', 'Create with AI', 'Bug hunt'],
      isBeta: true,
    },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '2rem',
      marginTop: '2rem',
      fontSize: '0.9rem',
    }}>
      {cycles.map((cycle, idx) => (
        <div key={idx} style={cycle.isBeta ? cardBeta : cardDefault}>
          {cycle.isBeta && (
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '12px',
              background: '#ff4444',
              color: 'white',
              padding: '0.3rem 0.8rem',
              borderRadius: '12px',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              boxShadow: '0 2px 8px rgba(255, 68, 68, 0.4)',
            }}>BETA</div>
          )}
          <h3 style={titleStyle}>{cycle.title}</h3>
          <div style={dateStyle}>{cycle.date}</div>
          <ul style={listStyle}>
            {cycle.items.map((item, i) => (
              <li key={i} style={itemStyle}><strong>{item}</strong></li>
            ))}
          </ul>
        </div>
      ))}

      {/* "More cycles" placeholder */}
      <div style={{
        ...cardBase,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f6ff 100%)',
        boxShadow: '0 4px 12px rgba(119, 71, 255, 0.08)',
        border: '2px dashed #e8deff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ fontSize: '2.5rem', color: '#7747ff', opacity: 0.4, marginBottom: '0.5rem' }}>...</div>
        <div style={{ color: '#7747ff', opacity: 0.6, fontStyle: 'italic', textAlign: 'center', fontSize: '0.85rem' }}>
          More cycles<br />to come
        </div>
      </div>
    </div>
  )
}
