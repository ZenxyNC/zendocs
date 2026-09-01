import AppStatus from "../components/appstatus/appstatus"
import AppVersion from "../components/appVersion/appversion"
import Changelog from "../components/changelog/changelog"
import { Divider } from "./global.docs.component"

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

function formatDate(dateObj) {
  if (!dateObj) return ""
  const month = MONTHS[parseInt(dateObj.month, 10) - 1] ?? dateObj.month
  return `${month} ${dateObj.day}, ${dateObj.year}`
}

export default function ZenAccountDocs({ apiData }) {
  const date = new Date()
  const year = date.getFullYear()

  const changelogs = apiData?.changelogs?.map(cl => ({
    ...cl,
    date: formatDate(cl.date)
  })).reverse() ?? [
    {
      version: "0.0.0",
      date: "Nov 12, 2032",
      changes: [
        "CHANGELOG_1",
        "CHANGELOG_2",
      ]
    }
  ]

  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>ZenAccount</h1>
        <div style={{display: "flex", gap: "12px"}}>
          <AppStatus status="Maintained"/>
          <AppVersion version={apiData?.current_version ?? changelogs[0].version} />
        </div>
        <div>{apiData?.description ?? "Project in 1-2 sentences."}</div>
      </section>
      <Divider />

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>An upgrade for ZenEcosystem users and developers. ZenAccount simplifies the way you introduce yourself to ZenEcosystem. While developers </div>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>Login to all ZenApps</li>
            <li>Login restriction to ZenApps only</li>
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
            <li>TailwindCSS</li>
          </ul>
        </div>
        <h2>Dependencies</h2>
        <div className="paragraph-h2">
          <ul>
            <li>React Router</li>
            <li>React Icons</li>
            <li>JSONBin</li>
            <li>gh-pages</li>
            <li>React Bits</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <div>ZenAccount uses JSONBin as its database. In context of security, ZenAccount leverage browser's localStorage to store user's data. Also, ZenAccount will verify if the app origin is a valid ZenApps or not.</div>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        <div>
          <h2>Login to ZenAccount</h2>
          <div className="paragraph-h2">
            If you open ZenAccount from a valid origin, you can login directly.
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          <h2>QR Code Login</h2>
          <div className="paragraph-h2">
            I'm planning to add QR Code Login to ZenAccount, connected to ZenCore as the verifier.
          </div>
          <h2>Account Suggestion</h2>
          <div className="paragraph-h2">
            Once you logged in, ZenAccount will suggest you to login automatically to that account when you're logging in to other ZenApps (as long as you logged in to that account in any ZenApps).
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-license" data-toc="License">
        <h1>License</h1>
        <div>
          <ul>
            <li>Copyright © {year} ZenTech. All rights reserved.</li>
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
            <li>JSONBin</li>
            <li>React Bits</li>
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