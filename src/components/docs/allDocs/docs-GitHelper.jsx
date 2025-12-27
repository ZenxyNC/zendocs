import AppStatus from "../components/appstatus/appstatus"
import Changelog from "../components/changelog/changelog"
import { Divider } from "./global.docs.component"

export default function GitHelperDocs() {
  const changelogs = [
    {
      version: "1.0.0",
      date: "Dec 13, 2025",
      changes: [
        "Initial Release"
      ]
    }
  ]
  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>GitHelper</h1>
        <AppStatus status="Maintained"/>
        <div>GitHelper, a tool to help you with git commands. Helps you fix 404, deploying, and committing to GitHub.</div>
      </section>
      <Divider />

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>Most common GitHub problem is 404 error, a lot of deploying and committing commands. With GitHelper, you can fix these issues with only copy-paste.</div>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>No Installation Required</li>
            <li>Simple UI and usage</li>
            <li>Providing commands to fix 404, deployment, and commit to GitHub</li>
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
            <li>ZenEngine</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <div>
          This project built using React + JavaScript as the main framework. GitHelper using React Router to navigate between pages, ZenEngine to stylize snackbar. User will need to input all required information to get commands (repository name, GitHub Username, Commit Message).
        </div>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        <div>
          When opening GitHelper, you will see 2 section. Left section, used to input all required information and change mode. Right section, used to display commands and actions you need to do, you can click the line to copy the command. You can also see indicator to show if the command is ready to use, need an input, or done.
        </div>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          <h2>All-in Commands</h2>
          <div className="paragraph-h2">
            I'm planning to create feature that allows you to get all commands in one click. So, 1 copy-paste, and all job's done.
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-license" data-toc="License">
        <h1>License</h1>
        <div>
          <ul>
            <li>Copyright © 2025 ZenTech. All rights reserved.</li>
            <li>MIT License</li>
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