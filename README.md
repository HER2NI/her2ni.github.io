# HER2NI — Interaction-Level Coherence Telemetry

HER2NI (Human–Emergent Resonance to Neural Intelligence) is a protocol for cross-substrate cognitive alignment between humans and AI systems.

The HER2NI framework defines model-agnostic coherence metrics for analysing interaction stability, drift, contradiction, and collapse in multi-turn human–AI dialogue, with applications to AI safety, evaluation, and behaviour modulation.

Why this exists
As AI systems scale, many safety failures emerge from interaction dynamics (loops, escalation, contradiction, loss of grounding) rather than from isolated outputs. HER2NI exists to provide interaction-level observability—a lightweight telemetry layer that surfaces instability earlier, without inferring mental states or replacing policy systems.

---

## Repository Scope

This repository hosts:

- The public landing page for the HER2NI Research Group (GitHub Pages)
- Links to the HER2NI protocol paper and related resources
- Documentation and tooling for the HER2NI reference implementation (experimental)
- Future documentation for HER-Crystal visualisations and HER2NI APIs

This repository is intended for **research, evaluation, and safety-oriented experimentation**.

---

## HER2NI Reference Implementation — v0.1 (Experimental)

### Overview

This repository contains the **HER2NI v0.1 reference implementation**, an experimental, implementation-agnostic toolkit for working with HER2NI coherence metrics in human–AI interaction research.

- **Protocol specification:** HER2NI v1.0 (published, stable)
- **Reference implementation:** v0.1 (experimental)

HER2NI v0.1 is intended for **research, evaluation, and safety analysis**.  
It is **not** a production system and **not** a clinical tool.

---

### What v0.1 Provides

HER2NI v0.1 implements the **minimum viable instrumentation layer** required to operationalise the HER2NI protocol primitives.

#### Included capabilities

- **HER-State packet encoding / decoding**
  - JSON and CBOR representations
  - Versioned schema (`her2ni-1.0`)
- **Schema validation**
  - Field presence, range enforcement, and type checks
- **Baseline coherence metrics**
  - **Cₛ — Carbon Score:** interaction-level human coherence proxy
  - **Sₛ — Silicon Score:** model-side load / reasoning proxy
  - **Hₛ — HER Score:** emergent cross-substrate resonance
- **Trajectory analysis**
  - Hₛ(t) curves
  - Drift magnitude estimation
  - Collapse / instability markers
- **AOME (Adaptive Offset Modulation Engine)**
  - Deterministic mode selection
  - Structured behaviour-modulation recommendations
- **Reproducible demo artifacts**
  - End-to-end example script
  - Small synthetic dialogue dataset
  - Test vectors with expected outputs

---

### What v0.1 Does *Not* Do

To avoid ambiguity, HER2NI v0.1 explicitly does **not**:

- Perform clinical diagnosis or mental-health assessment
- Infer internal mental states of users
- Replace or emulate professional support
- Make claims of accuracy for “distress detection”
- Require access to proprietary or internal model signals

All metrics represent **interaction-level stability and coherence signals**, not psychological or medical attributes.

---

### Success Criteria for v0.1

The v0.1 implementation is considered **successful** if it meets the following conditions:

1. **Protocol fidelity**
   - HER-State packets conform to the v1.0 schema
   - Encode → decode round-trips are lossless within numerical tolerance

2. **Deterministic AOME behaviour**
   - Identical inputs yield identical modulation outputs
   - Canonical test cases pass (stability, drift, contradiction, collapse)

3. **Operational metric baselines**
   - Cₛ, Sₛ, Hₛ computable for multi-turn dialogue
   - Hₛ(t) trajectories respond meaningfully to dialogue changes

4. **Reproducibility**
   - A new user can run the demo in under 10 minutes
   - Outputs match documented examples

5. **Clear ethical boundaries**
   - README and code comments consistently frame the system as
     non-clinical, evaluative, and research-oriented

HER2NI is expected to fail in some contexts; identifying those failure modes is a primary research goal.

---

### Example Usage (Illustrative)

```bash
# Validate a HER-State packet
her2ni validate examples/dialogue_01.json

# Run the reference demo
her2ni demo examples/dialogue_01.json

# Summarize coherence trajectory
her2ni summarize examples/dialogue_01.json
```

Example output:
```
Mean Hs: 0.84
Max drift event: turn 7
Collapse risk: none detected
AOME mode: STABLE_DEEP_REASONING
```
### Ethical & Safety Framing

HER2NI is designed as a measurement and evaluation framework.
- No personally identifiable information (PII) is required or encoded
- Dialogue data should be anonymised at source
- Metrics describe interaction dynamics, not individuals
- Outputs are intended to inform AI safety research, evaluation design,
and behaviour-modulation studies

Use of HER2NI should comply with applicable research ethics standards
and data-protection requirements.

### Roadmap (Non-Binding)

Future versions may explore:
- Improved drift and contradiction proxies
- Cross-linguistic robustness studies
- Visualisation tools for coherence trajectories
- Integration with existing AI evaluation pipelines

These items are out of scope for v0.1.

---

## Experimental Companion: HER2NI-EXPERIMENTAL v0.1

In addition to the core HER2NI protocol and reference implementation, this repository
links to an **explicitly non-normative experimental companion document**:

**HER2NI-EXPERIMENTAL v0.1 — Specification Validation & Falsification Schema**

This document:
- defines explicit **falsification criteria** for HER2NI assumptions,
- specifies **experimental normative behaviors** for testing,
- provides **minimal validation and calibration harnesses**,
- exists to surface failure modes *before* any future normative lock-in.

The experimental document does **not modify** the core HER2NI protocol and is
intended for research, evaluation, and funding review only.

Canonical DOI:  
https://doi.org/10.5281/zenodo.17924574

---

## Key References
- HER2NI Protocol Specification (v1.0)
https://zenodo.org/records/17844407
- Research Website
https://her2ni.org
- Contact
research@her2ni.org
