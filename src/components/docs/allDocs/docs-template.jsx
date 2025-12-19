import { Divider } from "./global.docs.component"

export default function TemplateDocs() {
  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>Your_Project</h1>
        <div>Project in 1-2 sentences.</div>
      </section>
      <Divider />

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>OVERVIEW_REVIEW</div>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>No Installation Required</li>
            <li>Flexible Customization</li>
            <li>Copy-Paste-Call</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-techStack" data-toc="Tech Stack">
        <h1>Tech Stack</h1>
        <h2>Languages</h2>
        <div className="paragraph-h2">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <h2>Frameworks</h2>
        <div className="paragraph-h2">
          <ul>
            <li>React</li>
          </ul>
        </div>
        <h2>Dependencies</h2>
        <div className="paragraph-h2">
          <ul>
            <li>DEPENDENCY_1</li>
            <li>DEPENDENCY_2</li>
            <li>DEPENDENCY_3</li>
            <li>DEPENDENCY_4</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <div>TECHNICAL_OVERVIEW</div>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        <div>
          Usage of your project.
        </div>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          Roadmap of your project (Upcoming updates).
        </div>
      </section>
      <Divider/>

      <section id="docs-license" data-toc="License">
        <h1>License</h1>
        <div>
          License of your project.
        </div>
      </section>
      <Divider/>

      <section id="docs-credits" data-toc="Credits">
        <h1>Credits</h1>
        <h2>Contributor</h2>
        <div className="paragraph-h2">
          Contributor of your project.
        </div>
        <h2>Dependencies & Frameworks</h2>
        <div className="paragraph-h2">
          Dependencies & Frameworks of your project.
        </div>
        <h2>Assets</h2>
        <div className="paragraph-h2">
          Font, icon, anything that is assets-related.
        </div>
      </section>
      <Divider/>

      <section id="docs-changelogs" className="docs-lastSection" data-toc="Changelogs">
        <h1>Changelogs</h1>
        <h2>Version 0.0.0 [Nov 12, 2032]</h2>
        <div className="paragraph-h2">
          <ul>
            <li>CHANGELOG_1</li>
            <li>CHANGELOG_2</li>
          </ul>
        </div>
      </section>
    </>
  )
}