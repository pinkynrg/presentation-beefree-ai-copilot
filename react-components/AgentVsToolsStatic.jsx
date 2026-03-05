export default function AgentVsToolsStatic() {
  const colStyle = {
    textAlign: 'center',
    fontSize: '0.9rem',
    lineHeight: 1.8,
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '2rem',
      marginTop: '2rem',
    }}>
      {/* Tool */}
      <div>
        <div style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem' }}>🔧</div>
        <h3 style={{ textAlign: 'center', color: '#7747ff', marginBottom: '1rem' }}>Tool</h3>
        <div style={colStyle}>
          <div style={{ marginBottom: '0.8rem' }}>🔫 <strong>Drill</strong><br />makes holes</div>
          <div style={{ marginBottom: '0.8rem' }}>📏 <strong>Ruler</strong><br />measures length</div>
          <div style={{ marginBottom: '0.8rem' }}>🪛 <strong>Screwdriver</strong><br />turns screws</div>
          <div style={{ marginBottom: '0.8rem' }}>🌐 <strong>Manual</strong><br />reads manual on ikea.com</div>
        </div>
      </div>

      {/* MCP Server */}
      <div>
        <div style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem' }}>🧰</div>
        <h3 style={{ textAlign: 'center', color: '#7747ff', marginBottom: '1rem' }}>MCP Server</h3>
        <div style={{ textAlign: 'center', fontSize: '0.9rem', lineHeight: 1.8, padding: '0 1rem' }}>
          A collection of tools with labels describing what each tool should be used for
        </div>
      </div>

      {/* Agent */}
      <div>
        <div style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem' }}>👷</div>
        <h3 style={{ textAlign: 'center', color: '#7747ff', marginBottom: '1rem' }}>Agent</h3>
        <div style={{ textAlign: 'center', fontSize: '0.9rem', lineHeight: 1.8 }}>
          <div style={{
            background: '#f5f0ff',
            padding: '0.6rem',
            borderRadius: '8px',
            marginBottom: '0.8rem',
          }}>
            <strong>You:</strong> "Assemble this IKEA bookshelf"
          </div>
          <div style={{ fontSize: '0.85rem', color: '#666' }}>
            📖 Reads tools description from MCP<br />
            <span style={{ color: '#ccc' }}>───</span><br />
            🌐 Reads manual on ikea.com<br />
            📏 Measures with ruler<br />
            🔫 Drills holes with drill<br />
            🪛 Screws with screwdriver<br />
          </div>
        </div>
      </div>
    </div>
  )
}
