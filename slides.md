---
theme: seriph
title: Beefree AI Co-pilot
info: |
  ## Beefree AI Co-pilot
  Email generation, multi-agent architecture, and the hard truths about building with LLMs.
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Roboto Mono'
---

# Beefree AI Co-pilot

---

# Agenda

1. Agent vs Tools
2. Beefree AI Co-pilot Capabilities
3. Architecture
4. Why It's Hard
5. Live Demo
6. Lessons Learned
7. What's Next
8. Credits 
9. Q&A

---

# Agent vs Tools

- A **Tool** is like a specialized button, it does one specific thing when pressed. No thinking, no decisions.
- **MCP (Model Context Protocol)** is like a menu that shows the AI what buttons are available and what each one does.
- An **Agent** is like a smart assistant, you give it a goal, and it decides which buttons to press, in what order, to get the job done.

> "MCP provides the tools. The agent figures out how to use them."

---

# Beefree AI Co-pilot Capabilities

- **More advanced email creation** from natural language prompts
- **Basic email editing** of existing designs
- **V1**: more cycles ahead to improve quality, reliability, and capabilities

---
layout: default
---

# Architecture

<div style="margin-top: 6em;">

```mermaid
---
config:
  securityLevel: 'loose'
  theme: 'base'
  themeVariables:
    lineColor: '#C4A3FF'
    edgeLabelBackground: '#fcf9ff'
---
graph LR
    U([User Request]) --> A[Guardrail]
    A -->|email design related| B[Router]
    A -->|not email design related| Z([Output: Not Related])
    B -->|Edit| C[Editor]
    B -->|Create| D[Prompt Enhancer]
    D --> E[Planner]
    E --> F((Executor))
    C -.-> H1{{MCP Tools}}
    F -.-> H2{{MCP Tools}}
    C --> O([Output])
    F --> O
    
    style U fill:#D4F1F4,stroke:#00838F,stroke-width:3px,color:#1a1a1a
    style O fill:#D4F1F4,stroke:#00838F,stroke-width:3px,color:#1a1a1a
    style Z fill:#D4F1F4,stroke:#00838F,stroke-width:3px,color:#1a1a1a
    style A fill:#E8DEFF,stroke:#7747ff,stroke-width:2px,color:#1a1a1a
    style B fill:#E8DEFF,stroke:#7747ff,stroke-width:2px,color:#1a1a1a
    style C fill:#E8DEFF,stroke:#7747ff,stroke-width:2px,color:#1a1a1a
    style D fill:#E8DEFF,stroke:#7747ff,stroke-width:2px,color:#1a1a1a
    style E fill:#E8DEFF,stroke:#7747ff,stroke-width:2px,color:#1a1a1a
    style F fill:#7747ff,stroke:#4A148C,stroke-width:2px,color:#fff
    style H1 fill:#FFE4CC,stroke:#FF9F5A,stroke-width:2px,color:#1a1a1a
    style H2 fill:#FFE4CC,stroke:#FF9F5A,stroke-width:2px,color:#1a1a1a
```

</div>

---

# Our challenges

1. LLMs know **HTML, Python, React** and other common languages fluently. 
They've seen them millions of times. On the other hand it doesn't know **Beefree custom JSON format** or our specific **MCP toolset**.
2. **Tool calling reliability** — Agents don't always call the right tool at the right time.
3. **Prompt engineering** — Every line you add competes with every line already there. The real skill is **subtraction**.
4. **Evaluating correctness** — You can't unit test an agent. Knowing if it's doing a good job is non-trivial.

> "Beefree's JSON is harder to work with — but it's **why emails render correctly everywhere**."

---
layout: default
class: '!p-0 no-watermark'
---

<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 0;">
  <div style="overflow: hidden; border: 1px solid #000000; border-top: none; border-left: none;">
    <iframe src="https://beefree.io/app/index.html" style="width: 200%; height: 200%; border: none; transform: scale(0.5); transform-origin: 0 0;"></iframe>
  </div>
  <div style="overflow: hidden; border: 1px solid #000000; border-top: none; border-right: none;">
    <iframe src="https://beefree.io/app/index.html" style="width: 200%; height: 200%; border: none; transform: scale(0.5); transform-origin: 0 0;"></iframe>
  </div>
  <div style="overflow: hidden; border: 1px solid #000000; border-bottom: none; border-left: none;">
    <iframe src="https://beefree.io/app/index.html" style="width: 200%; height: 200%; border: none; transform: scale(0.5); transform-origin: 0 0;"></iframe>
  </div>
  <div style="overflow: hidden; border: 1px solid #000000; border-bottom: none; border-right: none;">
    <iframe src="https://beefree.io/app/index.html" style="width: 200%; height: 200%; border: none; transform: scale(0.5); transform-origin: 0 0;"></iframe>
  </div>
</div>

---

# Lessons Learned

1. **JSON output schema is the key to good results.**  
   Garbage in, garbage out — a tight schema changes everything.

2. **Teach the LLM your mental model, not just your format.**  
   Our builder has no concept of a "body" — the LLM kept trying to create one. You have to rewire its assumptions.

3. **Less AI is sometimes the right call.**  
   The executor story. Deterministic beats autonomous when you need reliability.

4. **Prompt engineering is never done — and addition is the enemy.**  
   Every edge case someone wants to fix with a new line. Resist it.

---

# What's Next

We're still learning. Two directions we're actively exploring:

- **Fine-tuning on our toolset**  
  Instead of teaching the LLM our JSON through prompts, train it to speak our language natively.

- **Parallelizing the planner**  
  Split into an orchestrator + N parallel section planners. Faster, and better at complex multi-section emails.

<div class="mt-8 text-xl">

> "The Beefree AI Co-pilot you saw today is v1. The interesting part is just starting."

</div>

---
layout: center
class: text-center
---

# Thanks for Listening!

<div class="mt-8 text-2xl">
Questions?
</div>

---