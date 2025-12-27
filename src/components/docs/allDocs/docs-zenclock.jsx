import Changelog from "../components/changelog/changelog"
import { Divider } from "./global.docs.component"
import AppStatus from "../components/appstatus/appstatus"

export default function ZenClockDocs() {
  const changelogs = [
    {
      version: "1.2.0",
      date: "Dec 13, 2025",
      changes: [
        "ZenClock final release",
        "New font: Bodoni Moda",
        "Added keep awake",
        "Adjusted clock gap"
      ]
    },
    {
      version: "1.1.0-beta.1",
      date: "Dec 13, 2025",
      changes: [
        "404 and routing fix",
        "Updated metadata",
        "Settings almost done",
        "Added 4 new backgrounds"
      ]
    },
    {
      version: "1.0.1-beta.2",
      date: "Dec 13, 2025",
      changes: [
        "Fix route",
        "Added icon"
      ]
    },
    {
      version: "1.0.0-beta.1",
      date: "Dec 12, 2025",
      changes: [
        "Initial release"
      ]
    }
  ]
  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>ZenClock</h1>
        <AppStatus status="Maintained" />
        <div>ZenClock, a clock with unique backgrounds.</div>
      </section>
      <Divider />

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>Need a screen saver and clock at the same time? ZenClock is perfect. It is a clock app with multiple unique backgrounds you can choose. Find cool ui and features at once in ZenClock.</div>
      </section>
      <Divider />

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>Clock, screen saver, and unique backgrounds</li>
            <li>Customizable</li>
            <li>Desktop, tablet, mobile support.</li>
          </ul>
        </div>
      </section>
      <Divider />

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
            <li>React Bits</li>
            <li>React Router</li>
            <li>ZenEngine</li>
            <li>ogl</li>
            <li>three</li>
            <li>gh-pages</li>
          </ul>
        </div>
      </section>
      <Divider />

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <div>
          This project built using React + JavaScript as the main framework. ZenClock using React Bits to stylize most components and UIs, React Bits using ogl and three.js to create backgrounds.
        </div>
      </section>
      <Divider />

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        <div>
          Open ZenClock and enjoy, no payment, no login.
          <h2>Customization</h2>
          <div className="paragraph-h2">
            You can customize clock settings, background, and etc. in settings page by clicking button on bottom-right corner with arrow heading left.
          </div>
          <h2>Fullscreen</h2>
          <div className="paragraph-h2">
            You can enable fullscreen mode by clicking button next to settings button with expand icon.
          </div>
        </div>
      </section>
      <Divider />

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          <h2>More fonts</h2>
          <div className="paragraph-h2">
            There are currently only 2 fonts available. I will add more unique fonts in the future updates.
          </div>
          <h2>Customizable backgrounds</h2>
          <div className="paragraph-h2">
            There are currently 5 backgrounds available. Yet, they are not customizable. I'm planning to make it customizable in the future updates.
          </div>
          <h2>Power-efficiency mode</h2>
          <div className="paragraph-h2">
            ZenClock using a lot of battery and GPU resources due to heavy background rendering, animation, and blur effect. I'm planning to add power-efficiency mode which achieved by turning off animation, blur effect, and background.
          </div>
          <h2>Minimalist-black background</h2>
          <div className="paragraph-h2">
            I'm planning to add minimalist-black background for those who feel the background is distracting.
          </div>
        </div>
      </section>
      <Divider />

      <section id="docs-license" data-toc="License">
        <h1>License</h1>
        <div>
          <ul>
            <li>Copyright © 2025 ZenTech. All rights reserved.</li>
          </ul>
        </div>
      </section>
      <Divider />

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
            <li>ReactBits</li>
            <li>ZenEngine</li>
            <li>ogl (Open Graphic Library)</li>
            <li>gh-pages (deployment)</li>
          </ul>
        </div>
        <h2>Assets</h2>
        <div className="paragraph-h2">
          <ul>
            <li><span className="position">[Font Family]</span> Plus Jakarta Sans</li>
          </ul>
        </div>
      </section>
      <Divider />

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