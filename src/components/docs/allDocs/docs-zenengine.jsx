import AppStatus from "../components/appstatus/appstatus"
import Changelog from "../components/changelog/changelog"
import { Divider } from "./global.docs.component"

export default function ZenEngineDocs() {
  const changelogs = [
    {
      version: "2.2.1",
      date: "Dec 15, 2025",
      changes: [
        "ZenEngine v2.2.1 Final Release",
        "Fix missing icon"
      ]
    },
    {
      version: "2.2.0-beta.3",
      date: "Aug 24, 2025",
      changes: [
        "Submit Ideas page done"
      ]
    },
    {
      version: "2.2.0-beta.2",
      date: "Aug 23, 2025",
      changes: [
        "Landing Page done"
      ]
    },
    {
      version: "2.2.0-beta.1",
      date: "Aug 20, 2025",
      changes: [
        "Initialize Project",
        "Rebuilded the entire project"
      ]
    },
    {
      version: "1.4.0",
      date: "Mar 28, 2025",
      changes: [
        "Landing Page done",
        "Modules Page done",
        "Added Snackbar in modules"
      ]
    },
    {
      version: "1.3.0",
      date: "Mar 28, 2025",
      changes: [
        "Landing Page done",
        "Modules Page almost done"
      ]
    },
    {
      version: "1.2.0",
      date: "Mar 27, 2025",
      changes: [
        "Modules Page added (Unfinished)",
        "Landing almost done"
      ]
    },
    {
      version: "1.1.0",
      date: "Mar 25, 2025",
      changes: [
        "Fixed some bugs",
        "Added new features (unspecified)",
        "App icon updated",
        "404 error fixed"
      ]
    },
    {
      version: "1.0.0",
      date: "Mar 25, 2025",
      changes: [
        "Initial release"
      ]
    }
  ]
  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>ZenEngine</h1>
        <AppStatus status="Maintained"/>
        <div>ZenEngine, an compact and easy-to-use module for React web applications.</div>
      </section>
      <Divider />

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>Making all same functions and feature for each project might be tiring and time wasting. Let ZenEngine fix that. Providing light, efficient, and powerful module.</div>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>Ease of installation and usage</li>
            <li>Light, Efficient, and Powerful</li>
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
            <li>React Bits</li>
            <li>React Router</li>
            <li>ogl</li>
            <li>gh-pages</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <div>ZenEngine built using React + JavaScript as the main framework. ZenEngine is a solution of making all same functions and feature for each project. ZenEngine providing modules for React web applications which you can achieve with only copy-paste-call. It is fully customizable and makes your code prettier.</div>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        <div>
          <h2>JavaScript</h2>
          <div className="paragraph-h2">
            To use ZenEngine in your project, first create JSX file in your project. Next, locate code section with title "JavaScript" and copy-paste it to the JSX file you've created.
          </div>
          <h2>CSS</h2>
          <div className="paragraph-h2">
            After you've copied the JavaScript code, you can now copy the CSS code from the section with title "CSS" and paste it to the CSS file you've created.
          </div>
          <h2>Usage</h2>
          <div className="paragraph-h2">
            After you've copied the JavaScript and CSS code, you can now use ZenEngine in your project. You can call the module by using codes in section with title "Usage".
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          There are some improvements planned for future ZenEngine update [Sorted by Priority].
          <h2>Installation</h2>
          <div className="paragraph-h2">
            I have planned to upload ZenEngine to npm registry. In this way, you dont have to create a new file. Instead, just type npm install, and you're good to go.
          </div>
          <h2>Finalize Submit Ideas</h2>
          <div className="paragraph-h2">
            I have planned to finalize submit ideas for ZenEngine. This will allow users to submit their ideas for ZenEngine. But to achieve this feature, I will need to integrate the back-end first.
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-license" data-toc="License">
        <h1>License</h1>
        <div>
          You can use codes I've provided in this project for free, I made it open source. But, I protected this project using copyright to prevent copy of ZenEngine.
          <ul>
            <li>2025 © ZenEngine.</li>
            <li>MIT License.</li>
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
            <li>ReactBits</li>
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