# HER2NI — Interaction-Level Coherence Telemetry

HER2NI (Human–Emergent Resonance to Neural Intelligence) is a protocol for
cross-participant structural alignment between humans and AI systems.

The HER2NI framework defines model-agnostic coherence metrics for analysing
interaction stability, drift, contradiction, and collapse in multi-turn
human–AI dialogue, with applications to AI safety, evaluation, and
governance-oriented research.

---

## Why This Exists

As AI systems scale, many safety failures emerge from **interaction dynamics**
— loops, escalation, contradiction, and loss of grounding — rather than from
isolated outputs.

HER2NI exists to provide **interaction-level observability**: a lightweight
telemetry layer that surfaces instability earlier, without inferring private states, classifying users, or replacing policy or governance systems.

---

## Repository Scope

This repository hosts:

- The public landing page for **HER2NI Research**
- Links to the HER2NI protocol paper and related research artifacts
- Documentation and tooling for the **HER2NI reference implementation (experimental)**
- Experimental materials for validation, falsification, and metric calibration
- Future documentation for structural visualizations and HER2NI APIs

This repository is intended for **research, evaluation, and safety-oriented experimentation only**.

---

## HER2NI Reference Implementation — v0.1 (Experimental)

### Overview

This repository contains the **HER2NI v0.1 reference implementation**, an
experimental, implementation-agnostic toolkit for working with HER2NI
coherence metrics in human–AI interaction research.

Protocol specification: HER2NI v1.0 (published, stable)
Reference implementation: v0.1 (experimental)

HER2NI v0.1 is intended for **research and evaluation contexts**.
It is **not** a production system and **not** a clinical tool.

---

## What v0.1 Provides

HER2NI v0.1 implements the **minimum viable instrumentation layer** required
to operationalise the HER2NI protocol primitives.

Included capabilities:

- **HER-State packet encoding and decoding**
  JSON and CBOR representations
  Versioned schema (her2ni-1.0)

- **Schema validation**
  Field presence, range enforcement, and type checks

- **Baseline coherence metrics**
  Cₛ — Carbon Score: interaction-level human coherence proxy
  Sₛ — Model-side structural score: response complexity, constraint retention, and structural load proxy
  Hₛ — HER structural-fit score: reduced structural fit across an interaction

- **Trajectory analysis**
  Hₛ(t) curves
  Drift magnitude estimation
  Collapse and instability markers

- **Adaptive Instruction Profile (experimental, advisory-only)**
  Deterministic mode selection
  Structured recommendations for instruction-profile adjustment (non-executing)

- **Reproducible demo artifacts**
  End-to-end example script
  Small synthetic dialogue dataset
  Test vectors with expected outputs

---

## What v0.1 Does Not Do

HER2NI v0.1 explicitly does **not**:

- Perform clinical diagnosis or mental-health assessment
- Infer private states of users
- Replace or emulate professional support
- Make claims of accuracy for distress detection
- Require access to proprietary or internal model signals
- Enforce actions, policies, or outcomes

All metrics represent **interaction-level stability and coherence signals**,
not psychological, medical, or legal attributes.

---

## Success Criteria for v0.1

The v0.1 implementation is considered successful if it meets the following:

1. **Protocol fidelity**
   HER-State packets conform to the v1.0 schema
   Encode–decode round-trips are lossless within numerical tolerance

2. **Deterministic behaviour**
   Identical inputs yield identical outputs
   Canonical test cases pass (stability, drift, contradiction, collapse)

3. **Operational metric baselines**
   Cₛ, Sₛ, Hₛ computable for multi-turn dialogue
   Hₛ(t) trajectories respond meaningfully to dialogue changes

4. **Reproducibility**
   A new user can run the demo in under 10 minutes
   Outputs match documented examples

5. **Clear ethical boundaries**
   Documentation consistently frames the system as non-clinical,
   evaluative, and research-oriented

HER2NI is expected to fail in some contexts; identifying those failure modes
is a primary research goal.

---

## Example Usage (Illustrative)

```
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

---

## Ethical & Safety Framing

HER2NI is designed as a **measurement and observability framework**.

- No personally identifiable information (PII) is required or encoded
- Dialogue data should be anonymised at source
- Metrics describe interaction dynamics, not individuals
- Outputs inform AI safety research, evaluation design, and governance studies

HER2NI and its reference implementations do not autonomously intervene in
live systems. All interpretation and action remain human-governed.

Use of HER2NI should comply with applicable research ethics standards and
data-protection requirements.

---

## Experimental Companion: HER2NI-EXPERIMENTAL v0.1

This repository links to an explicitly non-normative experimental companion:

**HER2NI-EXPERIMENTAL v0.1 — Specification Validation and Falsification Schema**

This document:

- Defines explicit falsification criteria for HER2NI assumptions
- Specifies experimental normative behaviours for testing
- Provides minimal validation and calibration harnesses
- Exists to surface failure modes before any future normative lock-in

Canonical DOI:
https://doi.org/10.5281/zenodo.17924574

---

## Licensed Systems

H.E.R is the commercial product family built from HER2NI research and is developed and distributed separately.

Research access to the protocol does **not** grant access to commercial product systems.

For information on commercial deployments, see:
https://her2.ai

---

## Key References

HER2NI Protocol Specification (v1.0):
https://zenodo.org/records/17844407

Research website:
https://her2ni.ai

Contact:
research@her2ni.ai
