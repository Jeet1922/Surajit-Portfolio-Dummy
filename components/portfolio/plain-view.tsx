import { profile } from "@/content/profile"

type PlainPortfolioProps = {
  onTakeTrip: () => void
}

export function PlainPortfolio({ onTakeTrip }: PlainPortfolioProps) {
  return (
    <main className="plain-page">
      <a className="skip-link" href="#timeline">
        Skip to content
      </a>
      <header className="plain-header" id="top">
        <button className="plain-return" onClick={onTakeTrip} type="button">
          Return to timeline
        </button>
        <p className="plain-eyebrow">{profile.title}</p>
        <h1>{profile.name}</h1>
        <p className="plain-lead">{profile.introduction}</p>
        <nav aria-label="Profile links" className="plain-nav">
          <a download href={profile.links.resume}>
            Download resume
          </a>
          <a href={profile.links.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={profile.links.github} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
        <ul aria-label="Career highlights" className="plain-facts">
          {profile.facts.map((fact) => (
            <li key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>
      </header>

      <section aria-labelledby="plain-timeline-heading" className="plain-section" id="timeline">
        <p className="plain-eyebrow">CAREER TIMELINE</p>
        <h2 id="plain-timeline-heading">Experience and education</h2>
        {profile.timeline.map((stop) => (
          <article className="plain-entry" key={stop.id}>
            <p className="plain-date">{stop.year} · {stop.category}</p>
            <h3>{stop.title}</h3>
            <p className="plain-organization">{stop.organization}</p>
            <p>{stop.description}</p>
            <p><strong>Outcome:</strong> {stop.outcome}</p>
            {"highlights" in stop && (
              <ul>
                {stop.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            <p className="plain-tags">{stop.skills.join(" · ")}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="plain-work-heading" className="plain-section" id="work">
        <p className="plain-eyebrow">SELECTED WORK</p>
        <h2 id="plain-work-heading">Projects</h2>
        {profile.projects.map((project) => (
          <article className="plain-entry" key={project.url}>
            <h3>{project.title}</h3>
            {project.context && <p className="plain-date">{project.context}</p>}
            <p><strong>Problem:</strong> {project.problem}</p>
            <p><strong>Approach:</strong> {project.approach}</p>
            <p><strong>Result:</strong> {project.result}</p>
            <p className="plain-tags">{project.skills.join(" · ")}</p>
            <a href={project.url} rel="noreferrer" target="_blank">
              View project on GitHub
            </a>
          </article>
        ))}
      </section>

      <section aria-labelledby="plain-approach-heading" className="plain-section" id="approach">
        <p className="plain-eyebrow">HOW I WORK</p>
        <h2 id="plain-approach-heading">How I work</h2>
        {profile.howIWork.map((principle) => (
          <article className="plain-entry" key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="plain-skills-heading" className="plain-section" id="skills">
        <p className="plain-eyebrow">THE TOOLKIT</p>
        <h2 id="plain-skills-heading">Skills</h2>
        {profile.skillGroups.map((group) => (
          <article className="plain-entry" key={group.label}>
            <h3>{group.label}</h3>
            <p className="plain-tags">{group.skills.join(" · ")}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="plain-credentials-heading" className="plain-section" id="credentials">
        <p className="plain-eyebrow">EDUCATION & CREDENTIALS</p>
        <h2 id="plain-credentials-heading">Education and certifications</h2>
        {profile.education.map((item) => (
          <article className="plain-entry" key={item.institution}>
            <p className="plain-date">{item.dates}</p>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            {item.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </article>
        ))}
        <h3>Certifications</h3>
        <ul>
          {profile.certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
        <h3>Awards</h3>
        <ul>
          {profile.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="plain-contact-heading" className="plain-section" id="contact">
        <p className="plain-eyebrow">WHAT’S NEXT</p>
        <h2 id="plain-contact-heading">Contact</h2>
        <p>{profile.contact.lookingFor}</p>
        <p>{profile.contact.callToAction}</p>
        <nav aria-label="Contact links" className="plain-nav">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.links.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </nav>
      </section>
    </main>
  )
}
