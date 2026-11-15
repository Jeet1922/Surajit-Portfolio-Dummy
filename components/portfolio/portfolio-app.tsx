"use client"

import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import { profile } from "@/content/profile"
import { PlainPortfolio } from "@/components/portfolio/plain-view"

type ViewMode = "journey" | "plain"

export function PortfolioApp() {
  const [viewMode, setViewMode] = useState<ViewMode>("journey")
  const [activeStop, setActiveStop] = useState<string>(profile.timeline[0].id)
  const [reducedMotion, setReducedMotion] = useState(false)
  const stopLinks = useRef<Array<HTMLAnchorElement | null>>([])

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setReducedMotion(preference.matches)
    updatePreference()
    preference.addEventListener("change", updatePreference)
    return () => preference.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    const sections = profile.timeline
      .map((stop) => document.getElementById(stop.id))
      .filter((section): section is HTMLElement => section !== null)

    if (!("IntersectionObserver" in window) || sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)

        if (visibleSections[0]) setActiveStop(visibleSections[0].target.id)
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [viewMode])

  function jumpToStop(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "center",
    })
  }

  function handleTimelineKeyDown(
    event: KeyboardEvent<HTMLAnchorElement>,
    index: number,
  ) {
    let nextIndex: number | undefined
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = index + 1
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = index - 1
    if (event.key === "Home") nextIndex = 0
    if (event.key === "End") nextIndex = profile.timeline.length - 1
    if (nextIndex === undefined) return

    event.preventDefault()
    const boundedIndex = Math.max(0, Math.min(profile.timeline.length - 1, nextIndex))
    stopLinks.current[boundedIndex]?.focus()
    jumpToStop(profile.timeline[boundedIndex].id)
  }

  if (viewMode === "plain") {
    return <PlainPortfolio onTakeTrip={() => setViewMode("journey")} />
  }

  return (
    <main className="portfolio-page" id="top">
      <a className="skip-link" href="#timeline">
        Skip to content
      </a>

      <header className="site-header">
        <a aria-label={`${profile.name}, home`} className="site-mark" href="#top">
          <span className="site-mark-dot" aria-hidden="true" />
          {profile.name}
        </a>
        <div className="header-actions">
          <a className="header-link" href={profile.links.github} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <button
            className="view-switch"
            onClick={() => setViewMode("plain")}
            type="button"
          >
            Skip the trip
          </button>
        </div>
      </header>

      <section aria-labelledby="hero-heading" className="hero-section" id="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              AI ENGINEERING <span aria-hidden="true">/</span> DATA SYSTEMS
            </p>
            <h1 id="hero-heading">
              {profile.name}
              <span className="hero-period" aria-hidden="true">
                .
              </span>
            </h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-introduction">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button button-lime" download href={profile.links.resume}>
                Download resume <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-outline"
                href={profile.links.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-outline" href={`mailto:${profile.email}`}>
                Email <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div aria-label="Career snapshot" className="hero-aside">
            <p className="aside-label">THE SHORT VERSION</p>
            <p className="aside-statement">
              I take enterprise AI
              <br />
              <span>from idea to production.</span>
            </p>
            <a className="aside-link" href={profile.links.github} rel="noreferrer" target="_blank">
              Explore my code <span aria-hidden="true">↗</span>
            </a>
            <div aria-hidden="true" className="orbit-art">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="orbit-core" />
            </div>
          </div>
        </div>
        <ul aria-label="Career highlights" className="facts-list">
          {profile.facts.map((fact, index) => (
            <li className="fact-item" key={fact.label}>
              <span className="fact-index">0{index + 1}</span>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>
        <a className="hero-scroll" href="#timeline">
          <span aria-hidden="true">↓</span> Scroll to explore
        </a>
      </section>

      <nav aria-label="Career timeline navigation" className="timeline-nav">
        <div className="timeline-nav-inner">
          <p aria-live="polite" className="active-year">
            <span className="live-dot" aria-hidden="true" />
            {profile.timeline.find((stop) => stop.id === activeStop)?.year ??
              profile.timeline[0].year}
          </p>
          <ol className="timeline-nav-list">
            {profile.timeline.map((stop, index) => (
              <li key={stop.id}>
                <a
                  aria-current={activeStop === stop.id ? "location" : undefined}
                  aria-label={`Jump to ${stop.title} at ${stop.organization}, ${stop.year}`}
                  href={`#${stop.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    jumpToStop(stop.id)
                  }}
                  onKeyDown={(event) => handleTimelineKeyDown(event, index)}
                  ref={(element) => {
                    stopLinks.current[index] = element
                  }}
                >
                  <span>{stop.navLabel}</span>
                  <span className="nav-year">{stop.year}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <section aria-labelledby="timeline-heading" className="section-shell timeline-section" id="timeline">
        <div className="section-heading">
          <p className="eyebrow">THE JOURNEY</p>
          <h2 id="timeline-heading">Built one layer at a time.</h2>
          <p>
            From data warehouses and ETL to enterprise AI in production. Follow the work that
            connected each step.
          </p>
        </div>
        <ol aria-label="Career and education timeline" className="timeline-list">
          {profile.timeline.map((stop, index) => (
            <li className="timeline-item" id={stop.id} key={stop.id}>
              <article className={`timeline-card${stop.id === "pwc" ? " timeline-card-featured" : ""}`}>
                <div className="timeline-card-top">
                  <span className="timeline-category">{stop.category}</span>
                  <span className="timeline-range">{stop.year}</span>
                </div>
                <h3>{stop.title}</h3>
                <p className="timeline-organization">{stop.organization}</p>
                <p className="timeline-description">{stop.description}</p>
                <div className="timeline-result">
                  <span>OUTCOME</span>
                  <p>{stop.outcome}</p>
                </div>
                {"highlights" in stop && (
                  <ul className="timeline-highlights">
                    {stop.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <ul aria-label="Skills used" className="tag-list">
                  {stop.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
              <span aria-hidden="true" className="timeline-node">
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="work-heading" className="work-section" id="work">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2 id="work-heading">A few things I’ve built.</h2>
            <p>Each project starts with a concrete problem and ends with something you can inspect.</p>
          </div>
          <div className="project-grid">
            {profile.projects.map((project, index) => (
              <article className={`project-card project-card-${index + 1}`} key={project.url}>
                <div className="project-card-top">
                  <span className="project-number">0{index + 1}</span>
                  {project.context && <span className="project-context">{project.context}</span>}
                </div>
                <h3>{project.title}</h3>
                <div className="case-study-part">
                  <span>THE PROBLEM</span>
                  <p>{project.problem}</p>
                </div>
                <div className="case-study-part">
                  <span>MY APPROACH</span>
                  <p>{project.approach}</p>
                </div>
                <div className="case-study-result">
                  <span>THE RESULT</span>
                  <p>{project.result}</p>
                </div>
                <ul aria-label="Technologies" className="tag-list">
                  {project.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <a className="project-link" href={project.url} rel="noreferrer" target="_blank">
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="section-shell approach-section" id="approach">
        <div className="section-heading">
          <p className="eyebrow">HOW I WORK</p>
          <h2 id="approach-heading">Engineering that holds up beyond the demo.</h2>
        </div>
        <div className="approach-grid">
          {profile.howIWork.map((principle, index) => (
            <article className="approach-card" key={principle.title}>
              <span aria-hidden="true" className="approach-index">
                0{index + 1}
              </span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="skills-section" id="skills">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">THE TOOLKIT</p>
            <h2 id="skills-heading">Skills I put to work.</h2>
            <p>From the data layer to model evaluation and production delivery.</p>
          </div>
          <div className="skills-grid">
            {profile.skillGroups.map((group, index) => (
              <article className="skill-group" key={group.label}>
                <span aria-hidden="true" className="skill-group-index">
                  0{index + 1}
                </span>
                <h3>{group.label}</h3>
                <ul className="tag-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="credentials-heading"
        className="section-shell credentials-section"
        id="credentials"
      >
        <div className="section-heading">
          <p className="eyebrow">EDUCATION & CREDENTIALS</p>
          <h2 id="credentials-heading">Learning, applied.</h2>
        </div>
        <div className="credentials-grid">
          <div>
            <h3>Education</h3>
            {profile.education.map((item) => (
              <article className="credential-entry" key={item.institution}>
                <span>{item.dates}</span>
                <h4>{item.degree}</h4>
                <p>{item.institution}</p>
                {item.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </article>
            ))}
          </div>
          <div>
            <h3>Certifications</h3>
            <ul className="credential-list">
              {profile.certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
            <h3 className="awards-heading">Awards</h3>
            <ul className="credential-list">
              {profile.awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">WHAT’S NEXT</p>
          <h2 id="contact-heading">Let’s build something that ships.</h2>
          <p>{profile.contact.lookingFor}</p>
          <p>{profile.contact.callToAction}</p>
          <div className="hero-actions">
            <a className="button button-lime" href={`mailto:${profile.email}`}>
              {profile.email} <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-outline"
              href={profile.links.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="site-mark" href="#top">
          <span className="site-mark-dot" aria-hidden="true" />
          {profile.name}
        </a>
        <span>AI · DATA · ENGINEERING</span>
        <a href={`mailto:${profile.email}`}>Say hello ↗</a>
      </footer>
    </main>
  )
}
