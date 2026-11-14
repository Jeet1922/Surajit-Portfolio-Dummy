"use client"

import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import { profile } from "@/content/profile"
import { PlainPortfolio } from "@/components/portfolio/plain-view"

const timeStops = [
  {
    id: profile.now.id,
    label: profile.now.label,
    year: profile.now.year,
    years: profile.now.years,
  },
  ...profile.eras.map(({ id, label, year, years }) => ({ id, label, year, years })),
  {
    id: profile.origin.id,
    label: profile.origin.label.toUpperCase(),
    year: profile.origin.year,
    years: profile.origin.years,
  },
  {
    id: profile.next.id,
    label: profile.next.label.toUpperCase(),
    year: profile.next.year,
    years: profile.next.years,
  },
]

type ViewMode = "journey" | "plain"

export function PortfolioApp() {
  const [viewMode, setViewMode] = useState<ViewMode>("journey")
  const [activeStop, setActiveStop] = useState<string>(profile.now.id)
  const [reducedMotion, setReducedMotion] = useState(false)
  const stopButtons = useRef<Array<HTMLButtonElement | null>>([])

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setReducedMotion(preference.matches)
    updatePreference()
    preference.addEventListener("change", updatePreference)
    return () => preference.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    const sections = timeStops
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
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [viewMode])

  function jumpToStop(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    })
  }

  function handleTimeKeyDown(
      event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | undefined
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = index + 1
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = index - 1
    if (event.key === "Home") nextIndex = 0
    if (event.key === "End") nextIndex = timeStops.length - 1
    if (nextIndex === undefined) return

    event.preventDefault()
    const boundedIndex = Math.max(0, Math.min(timeStops.length - 1, nextIndex))
    stopButtons.current[boundedIndex]?.focus()
    jumpToStop(timeStops[boundedIndex].id)
  }

  if (viewMode === "plain") {
    return <PlainPortfolio onTakeTrip={() => setViewMode("journey")} />
  }

  return (
    <main
      className="journey-page"
      data-current-era={activeStop}
      id="main-content"
    >
      <a className="skip-link" href="#now">
        Skip to content
      </a>
      <header className="site-header">
        <a aria-label={`${profile.name}, home`} className="site-mark" href="#now">
          {profile.name}
        </a>
        <button
          className="view-switch"
          onClick={() => setViewMode("plain")}
          type="button"
        >
          Skip the trip
        </button>
      </header>

      <nav aria-label="Career timeline" className="time-control">
        <p aria-live="polite" className="time-control-status">
          {timeStops.find((stop) => stop.id === activeStop)?.year ?? profile.now.year}
        </p>
        <ol>
          {timeStops.map((stop, index) => (
            <li key={stop.id}>
              <button
                aria-current={activeStop === stop.id ? "location" : undefined}
                aria-label={`Jump to ${stop.label}, ${stop.years}`}
                className="time-stop"
                onClick={() => jumpToStop(stop.id)}
                onKeyDown={(event) => handleTimeKeyDown(event, index)}
                ref={(element) => {
                  stopButtons.current[index] = element
                }}
                type="button"
              >
                <span>{stop.label}</span>
                <span>{stop.years}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <section
        aria-labelledby="now-heading"
        className="journey-section now-section"
        data-era={profile.now.id}
        id={profile.now.id}
      >
        <div className="journey-hero">
          <p className="eyebrow">
            {profile.now.label} · {profile.now.years}
          </p>
          <h1 id="now-heading">{profile.name}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="lead">{profile.introduction}</p>
          <div className="hero-links">
            <a className="primary-link" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a href={profile.links.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a href={profile.links.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a download href={profile.links.resume}>
              Download resume
            </a>
          </div>
          <ul aria-label="Career highlights" className="facts-list">
            {profile.facts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="journey-content">
          <section aria-labelledby="current-work-heading" className="content-block">
            <p className="eyebrow">CURRENT STUDY</p>
            <h2 id="current-work-heading">{profile.education[0].institution}</h2>
            <p>{profile.education[0].degree}</p>
            <p>{profile.education[0].dates}</p>
            <p>{profile.now.introduction}</p>
            <p>{profile.education[0].details.join(" · ")}</p>
          </section>

          <section aria-labelledby="projects-heading" className="content-block">
            <p className="eyebrow">BUILT AT NYU & BEYOND</p>
            <h2 id="projects-heading">Selected projects</h2>
            <div className="project-list">
              {profile.projects.map((project, index) => (
                <article className="project-entry" key={project.url}>
                  <p className="project-index">0{index + 1}</p>
                  <div>
                    <h3>{project.title}</h3>
                    {project.context && <p className="project-context">{project.context}</p>}
                    <p>{project.description}</p>
                    <p>{project.details}</p>
                    <p className="tag-list">{project.skills.join(" · ")}</p>
                    <a href={project.url} rel="noreferrer" target="_blank">
                      Open repository
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="credentials-heading" className="content-block">
            <p className="eyebrow">CREDENTIALS</p>
            <h2 id="credentials-heading">Certifications & awards</h2>
            <div className="credentials-columns">
              <div>
                <h3>Certifications</h3>
                <ul>
                  {profile.certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Awards</h3>
                <ul>
                  {profile.awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>

      {profile.eras.map((era) => (
        <section
          aria-labelledby={`${era.id}-heading`}
          className={`journey-section era-section era-${era.id}`}
          data-era={era.id}
          id={era.id}
          key={era.id}
        >
          <div className="era-inner">
            <p className="eyebrow">{era.years} · CAREER</p>
            <h2 id={`${era.id}-heading`}>{era.label}</h2>
            <p className="era-role">{era.role}</p>
            <p className="era-dates">{era.dates}</p>
            <p className="era-introduction">{era.introduction}</p>
            <ul className="era-highlights">
              {era.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div aria-label={`${era.label} technologies`} className="era-skills">
              <p className="eyebrow">TOOLS IN THIS ERA</p>
              <ul>
                {era.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section
        aria-labelledby="origin-heading"
        className="journey-section origin-section"
        data-era={profile.origin.id}
        id={profile.origin.id}
      >
        <div className="era-inner">
          <p className="eyebrow">{profile.origin.years} · EDUCATION</p>
          <h2 id="origin-heading">{profile.origin.label}</h2>
          <p>{profile.origin.introduction}</p>
          <p>{profile.education[1].degree}</p>
        </div>
      </section>

      <section
        aria-labelledby="next-heading"
        className="journey-section next-section"
        data-era={profile.next.id}
        id={profile.next.id}
      >
        <div className="era-inner">
          <p className="eyebrow">{profile.next.years} · LOOKING AHEAD</p>
          <h2 id="next-heading">{profile.next.label}</h2>
          <p>{profile.next.introduction}</p>
          <p>{profile.next.callToAction}</p>
          <a className="primary-link" href={`mailto:${profile.email}`}>
            Contact me
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span>{profile.name}</span>
      </footer>
    </main>
  )
}
