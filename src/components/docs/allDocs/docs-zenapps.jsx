import AppStatus from "../components/appstatus/appstatus"
import AppVersion from "../components/appVersion/appversion"
import Changelog from "../components/changelog/changelog"
import { Divider } from "./global.docs.component"

export default function ZenAppsDocs() {
  const changelogs = [
    {
      version: "1.0.0",
      date: "Jan 13, 2026",
      changes: [
        "Initial Release",
      ]
    },
  ]
  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>ZenApps</h1>
        <div style={{display: "flex", gap: "12px"}}>
          <AppStatus status="Maintained"/>
          <AppVersion version={changelogs[0].version} />
        </div>
        <div>Built from real-world everyday problems, designed for real-world solutions.</div>
      </section>
      <Divider />

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>ZenApps is a collection of apps built by Lucas Harel on behalf of ZenTech. This app will show you all apps created on behalf of ZenTech.</div>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>App Preview</li>
            <li>Open App</li>
            <li>View Docs</li>
            <li>Share App</li>
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
            <li>Tailwind</li>
          </ul>
        </div>
        <h2>Dependencies</h2>
        <div className="paragraph-h2">
          <ul>
            <li>React Router</li>
            <li>React Icons</li>
            <li>gh-pages</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <div>ZenApps built with React, Vite, and Tailwind CSS. This app allowing anyone to know all apps created on behalf of ZenTech. We can say that it is a collection showcase where anyone can review, open, see docs, and share ZenApps.</div>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        <div>
          <h2>Open App</h2>
          <div className="paragraph-h2">
            You can open the app by clicking "Open App" button on the app card.
          </div>
          <h2>View Docs</h2>
          <div className="paragraph-h2">
            You can view docs by clicking "View Docs" button on the app card.
          </div>
          <h2>Share App</h2>
          <div className="paragraph-h2">
            You can share app by clicking button with share icon on the app card.
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          There are some improvements I've planned for future updates.
          <h2>Lazy Load Images</h2>
          <div className="paragraph-h2">
            Currently, all images are loaded at once, which makes performance drop in some devices. I've planned to implement lazy loading to improve performance.
          </div>
          <h2>3D Card</h2>
          <div className="paragraph-h2">
            Wild idea, but im planning to implement 3d card animation for app cards.
          </div>
          <h2>Button On-click Prompt</h2>
          <div className="paragraph-h2">
            I'm planning to implement a prompt that appears when you click a button using ZenEngine.
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
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>React Icons</li>
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