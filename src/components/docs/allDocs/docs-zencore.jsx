import { Divider } from "./global.docs.component"

export default function ZenCoreDocs() {
  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>ZenCore</h1>
        <p>The core to connects, secures, and centralize entire ZenEcosystem in one place.</p>
      </section>
      <Divider/>

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <p>ZenApps grew quickly. Installing and putting them in home screen is just massive space-wasting and time-wasting. ZenCore is the hero here, by centralizing all ZenApps in a single app.</p>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <p>
          <ul>
            <li>Centralization of ZenApps</li>
            <li>Account management</li>
            <li>All-in-one login</li>
            <li>Simplify user experience</li>
          </ul>
        </p>
      </section>
      <Divider/>

      <section id="docs-techStack" data-toc="Tech Stack">
        <h1>Tech Stack</h1>
        <h2>Languages</h2>
        <p className="paragraph-h2">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </p>
        <h2>Frameworks</h2>
        <p className="paragraph-h2">
          <ul>
            <li>React</li>
            <li>React Router</li>
          </ul>
        </p>
        <h2>Dependencies</h2>
        <p className="paragraph-h2">
          <ul>
            <li>ReactBits</li>
            <li>ogl</li>
            <li>react-router-dom</li>
            <li>gh-pages</li>
          </ul>
        </p>
      </section>
      <Divider/>

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <p>
          This project built with react + JavaScript as the main framework. ZenCore allowing ZenApps to use logged-in account automatically, as ZenCore allowing ZenApps to connect to each other which makes ZenApps a ZenEcosystem. For security reasons, ZenCore is using browser's local storage to store user's account, settings, and other data.
        </p>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
      </section>
      <Divider/>

      <section id="docs-license" data-toc="License">
        <h1>License</h1>
      </section>
      <Divider/>

      <section id="docs-credits" data-toc="Credits">
        <h1>Credits</h1>
      </section>
      <Divider/>

      <section 
        id="docs-changelogs" 
        className="docs-lastSection"
        data-toc="Changelogs"
      >
        <h1>Changelogs</h1>
      </section>
    </>
  )
}