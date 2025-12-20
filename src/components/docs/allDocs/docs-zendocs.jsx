import Changelog from "../components/changelog/changelog"
import { Divider } from "./global.docs.component"

export default function ZenDocsDocs() {
  const changelogs = [
    {
      version: "1.2.1",
      date: "Dec 20, 2025",
      changes: [
        "Patch missing favicon",
        "Minor revise on ZenCore and ZenEngine documentation",
        "Fix versioning",
        "Patch copyright name",
        "Added documentation for ZenClock, ZenDocs, and GitHelper",
        "Listening way too much Hindia, NIKI, and Pamungkas songs"
      ]
    },
    {
      version: "1.2.0",
      date: "Dec 19, 2025",
      changes: [
        "Added ZenEngine documentation",
        "Added component for Changelogs",
        "Added 404 easter egg",
        "Fix ToC layout for tablet",
        "Minor revise on ZenCore documentation"
      ]
    },
    {
      version: "1.1.1",
      date: "Dec 18, 2025",
      changes: [
        "ZenDocs final release",
        "Working on ZenEngine docs (not finished yet)"
      ]
    },
    {
      version: "1.1.0-beta.3",
      date: "Dec 20, 2025",
      changes: [
        "Added on click navigation on search card",
        "Redirect to 404 page when project not found (URL-Forced)",
        "Added ZenCore documentation"
      ]
    },
    {
      version: "1.0.1-beta.2",
      date: "Dec 17, 2025",
      changes: [
        "Fix search engine (not found issue)",
        "Improved routing",
        "Added copyright text"
      ]
    },
    {
      version: "1.0.0-beta.1",
      date: "Dec 17, 2025",
      changes: [
        "Initial Release",
        "ZenDocs Beta 1"
      ]
    },
  ]
  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>ZenDocs</h1>
        <div>Know more about ZenApps from inside.</div>
      </section>
      <Divider />

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>ZenDocs is an image of taking coding documentation to the next level. ZenDocs contains full documentation of all ZenApps.</div>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>Search through all ZenApps</li>
            <li>See detailed ZenApps documentation</li>
            <li>See changelogs</li>
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
            <li>React Router</li>
            <li>ogl</li>
            <li>gh-pages</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <div>ZenDocs built using ReactJS + Vite as the main framework. ZenDocs using React Router to navigate between pages, ogl to animate landing page. ZenDocs UI is designed to be simple and easy to use. User can search, see details, and see changelogs of all ZenApps.</div>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        <div>
          <h2>Landing Page</h2>
          <div className="paragraph-h2">
            Landing page is a page that contains a search bar to search through all ZenApps. It also has a "Explore" button to navigate to search page.
          </div>
          <h2>Search</h2>
          <div className="paragraph-h2">
            Search page contains a search bar to search through all ZenApps. Type name of the ZenApp you want to find, then click on the card to see the documentation.
          </div>
          <h2>Documentation</h2>
          <div className="paragraph-h2">
            In documentation page, you can see detailed documentation of the ZenApp you selected. It has Table of Contents to navigate between sections.
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          <h2>Back-end Integration</h2>
          <div className="paragraph-h2">
            I'm planning to create backend for ZenDocs for dynamic documentation adding.
          </div>
          <h2>AI Overview</h2>
          <div className="paragraph-h2">
            I'm planning to create AI overview for ZenDocs to help user understand about ZenApps.
          </div>
          <h2>AI Search</h2>
          <div className="paragraph-h2">
            I'm planning to create AI search for ZenDocs to help user find ZenApps. This will allow the system to find correct ZenApps even the word they input is misspelled or in description sentence.
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-license" data-toc="License">
        <h1>License</h1>
        <div>
          <ul>
            <li>Copyright © 2025 ZenTech. All rights reserved.</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-credits" data-toc="Credits">
        <h1>Credits</h1>
        <h2>Contributor</h2>
        <div className="paragraph-h2">
          <ul>
            <li><span className="position">[Creator & Maintainer]</span> Lucas Harel</li>
          </ul>
        </div>
        <h2>Dependencies & Frameworks</h2>
        <div className="paragraph-h2">
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>ZenEngine</li>
            <li>gh-pages</li>
          </ul>
        </div>
        <h2>Assets</h2>
        <div className="paragraph-h2">
          <ul>
            <li><span className="position">[Font Family]</span> Plus Jakarta Sans</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-changelogs" className="docs-lastSection" data-toc="Changelogs">
        <h1>Changelogs</h1>
        {changelogs.map((changelog, index) => (
          <Changelog
            key={index}
            version={changelog.version}
            date={changelog.date}
          >
            <ul>
              {changelog.changes.map((change, index) => (
                <li key={index}>{change}</li>
              ))}
            </ul>
          </Changelog>
        ))}
      </section>
    </>
  )
}