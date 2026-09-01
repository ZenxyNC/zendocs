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

export default function ZenBaseDocs({ apiData }) {
  const date = new Date()
  const year = date.getFullYear()

  const changelogs = apiData?.changelogs?.map(cl => ({
    ...cl,
    date: formatDate(cl.date)
  })).reverse() ?? [
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
        <h1>ZenBase</h1>
        <div style={{display: "flex", gap: "12px"}}>
          <AppStatus status="Maintained"/>
          <AppVersion version={apiData?.current_version ?? changelogs[0].version} />
        </div>
        <div>{apiData?.description ?? "ZenEcosystem data controller. A powerful tool for ZenEcosystem administration."}</div>
      </section>
      <Divider />

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>ZenBase allows ZenEcosystem admin to control almost everything about ZenApps and ZenEcosystem—apps metadata, status, and changelogs.</div>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>Portfolio availability controller</li>
            <li>App metadata controller</li>
            <li>ZenEcosystem control panel</li>
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
            <li>ZenAccount</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <div>ZenBase uses JSONBin as a database. It stores all the data about ZenApps and ZenEcosystem in JSON format. To minimalize the limited API usage by JSONBin, ZenBase uses a centralized data by using single-fetch system—fetches the API at load, stores it in a dynamic variable (useState), then passes it to other components.</div>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        <div>
          <h2>
            Dashboard
          </h2>
          <div className="paragraph-h2">
            This is where all features are in one page—apps controller, availability controller, and apps status. It is the main hub of ZenBase.
          </div>
          <h2>
            Application
          </h2>
          <div className="paragraph-h2">
            This page allows you to edit, add, remove an application, including it's status and changelogs.
          </div>
          <h2>
            Status
          </h2>
          <div className="paragraph-h2">
            This page shows you all apps sorted by it's status—online, dev, error, and offline.
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          ZenBase currently has some bugs such as gh-pages 404 issue and availability status failure chance. In order to fix it, I've planned some updates:
          <h2>Fix 404 Issue</h2>
          <div className="paragraph-h2">
            This is a basic problem of gh-pages. This problem will be patched on exactly next update.
          </div>
          <h2>Availability Failure Possibility</h2>
          <div className="paragraph-h2">
            I will need to troubleshoot the problem first. This problem is estimated to be patched on exactly next update.
          </div>
          <h2>Upgrading To A Database</h2>
          <div className="paragraph-h2">
            Currently, ZenBase uses JSONBin as it's central database—including ZenEcosystem. I'm planning to upgrade it to Firebase or Supabase on upcoming update (no exact date).
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
            <li>ZenAccount</li>
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