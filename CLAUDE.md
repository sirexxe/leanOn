@AGENTS.md
Lean On Website – Project Context for Claude Code

Overview

This project is the official website for Lean On, a consulting firm focused on building sales playbooks for early-stage startups (pre-seed to seed).

The website is not a generic corporate site. It is a conversion-focused landing page designed to turn visitors into qualified leads via Calendly.

⸻

Primary Goal

Convert visitors into leads.

Main conversion action
	•	Book a diagnostic call via Calendly

⸻

Target Audience
	•	Early-stage startups (pre-seed / seed)
	•	Founders
	•	First sales hires
	•	Small commercial teams

Awareness level
	•	Cold to warm

⸻

Value Proposition

We help startups turn scattered sales efforts into a clear, structured and repeatable commercial system.

⸻

Tech Stack
	•	Framework: Next.js (App Router)
	•	Styling: Tailwind CSS
	•	Deployment: Vercel
	•	Conversion: Calendly

Important constraints
	•	No Supabase
	•	No custom backend
	•	No heavy libraries

⸻

Project Structure

app/
components/
lib/
public/

Key files
	•	app/page.js → main homepage composition
	•	app/layout.js → layout + metadata + typography
	•	app/globals.css → base styles + Tailwind config link
	•	tailwind.config.js → brand system
	•	lib/constants.js → global constants (Calendly URL)

⸻

Architecture (Homepage)

Components order:
	1.	Header
	2.	Hero
	3.	Credibility
	4.	ProblemSection
	5.	SolutionSection
	6.	ResultsSection
	7.	ProcessSection
	8.	LeadCTA
	9.	CaseStudies
	10.	TeamSection
	11.	FAQSection
	12.	FinalCTA
	13.	Footer

⸻

Component Responsibilities

Header
	•	Navigation
	•	Sticky
	•	Primary CTA

Hero
	•	Core value proposition
	•	First CTA
	•	Framework visual (ICP, Messaging, Pipeline, Playbook)

Credibility
	•	Trust signals

ProblemSection
	•	User pain recognition

SolutionSection
	•	What Lean On builds

ResultsSection
	•	Outcomes

ProcessSection
	•	How Lean On works

LeadCTA
	•	First strong conversion block

CaseStudies
	•	Social proof (structured)

TeamSection
	•	Human credibility

FAQSection
	•	Objection handling

FinalCTA
	•	Final conversion push

Footer
	•	Contact + navigation

⸻

Brand System

Colors

brand.dark   #151419
brand.lava   #F56E0F
brand.gluon  #1B1B1E
brand.slate  #262626
brand.dusty  #878787
brand.snow   #FBFBFB

Usage rules
	•	Snow → main background
	•	Dark/Gluon → contrast blocks
	•	Lava → CTA only
	•	Dusty → secondary text

Do NOT overuse orange.

⸻

Typography
	•	Font: Inter
	•	Style: clean, neutral, premium

⸻

Design Principles
	•	Minimalism
	•	High readability
	•	Strong hierarchy
	•	Generous spacing
	•	Subtle shadows
	•	Large border radius

Avoid:
	•	visual noise
	•	heavy animations
	•	generic startup aesthetics

⸻

UX / CRO Principles
	•	Clarity over creativity
	•	Reduce cognitive load
	•	Every section has a purpose
	•	Guide user to CTA
	•	Build trust progressively

⸻

Calendly Integration

Centralized in:

lib/constants.js

Never hardcode the URL in components.

⸻

Metadata

Defined in app/layout.js.

Claude can improve it but must not break structure.

⸻

Styling System Notes

Tailwind is configured manually.

Important line in globals.css:

@config "../tailwind.config.js";

Do NOT remove unless properly refactored.

⸻

Development Rules

Do NOT:
	•	Change stack
	•	Add backend
	•	Add unnecessary libraries
	•	Rebuild architecture
	•	Add complex animations
	•	Break visual consistency

You CAN:
	•	Improve components
	•	Refine spacing
	•	Improve responsiveness
	•	Improve accessibility
	•	Improve semantics
	•	Improve visual quality

⸻

Copy Tone
	•	Clear
	•	Direct
	•	Professional
	•	Non-generic

Avoid:
	•	marketing clichés
	•	vague claims

⸻

Current Status
	•	Fully built homepage
	•	Deployed on Vercel
	•	Functional conversion flow

⸻

Priorities

High
	•	Visual polish
	•	Spacing
	•	Typography
	•	Mobile

Medium
	•	SEO metadata
	•	Favicon

Low
	•	Additional pages

⸻

Final Instruction

Work on this project as a high-end B2B landing page focused on conversion.

Do not introduce complexity. Improve clarity, structure, and execution quality.