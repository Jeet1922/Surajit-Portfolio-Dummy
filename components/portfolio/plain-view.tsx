import { profile } from "@/content/profile"

type PlainPortfolioProps = {
  onTakeTrip: () => void
}

export function PlainPortfolio({ onTakeTrip }: PlainPortfolioProps) {
  return (
    <main className="plain-page">
      <a className="skip-link" href="#experience-heading">
        Skip to content
      </a>

      <header className="plain-header">
        <button className="view-switch" onClick={onTakeTrip} type="button">
          Return to time travel
        </button>
        <p className="eyebrow">{profile.title}</p>
        <h1>{profile.name}</h1>
        <h2>Summary</h2>
        <p className="lead">{profile.introduction}</p>
        <nav aria-label="Contact and profile links" className="plain-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.links.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={profile.links.github} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a download href={profile.links.resume}>
            Download resume
          </a>
        </nav>
        <ul aria-label="Career highlights" className="facts-list">
          {profile.facts.map((fact) => (
            <li key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>
      </header>

      <div className="plain-content">
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          {profile.eras.map((era) => (
            <article className="plain-entry" key={era.id}>
              <div className="entry-heading">
                <h3>{era.role}</h3>
                <p>{era.dates}</p>
              </div>
              <p className="company">{era.label}</p>
              <p>{era.introduction}</p>
              <ul>
                {era.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          {profile.education.map((item) => (
            <article className="plain-entry" key={item.institution}>
              <div className="entry-heading">
                <h3>{item.degree}</h3>
                <p>{item.dates}</p>
              </div>
              <p>{item.institution}</p>
              {item.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </article>
          ))}
        </section>

        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          {profile.projects.map((project) => (
            <article className="plain-entry" key={project.url}>
              <div className="entry-heading">
                <h3>{project.title}</h3>
                {project.context && <p>{project.context}</p>}
              </div>
              <p>{project.description}</p>
              <p>{project.details}</p>
              <p className="tag-list">{project.skills.join(" · ")}</p>
              <a href={project.url} rel="noreferrer" target="_blank">
                View project on GitHub
              </a>
            </article>
          ))}
        </section>

        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          {profile.skillGroups.map((group) => (
            <article className="plain-entry" key={group.label}>
              <h3>{group.label}</h3>
              <p className="tag-list">{group.skills.join(" · ")}</p>
            </article>
          ))}
        </section>

        <section aria-labelledby="certifications-heading">
          <h2 id="certifications-heading">Certifications & awards</h2>
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

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p>{profile.next.introduction}</p>
          <p>{profile.next.callToAction}</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <p className="plain-links">
            <a href={profile.links.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href={profile.links.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}
