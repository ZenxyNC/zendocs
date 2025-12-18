import { Divider } from "./global.docs.component"

export default function ZenCoreDocs() {
  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>ZenCore</h1>
        <div>The core to connects, secures, and centralize entire ZenEcosystem in one place.</div>
      </section>
      <Divider/>

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>ZenApps grew quickly. Installing and putting them in home screen is just massive space-wasting and time-wasting. ZenCore is the hero here, by centralizing all ZenApps in a single app.</div>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>Centralization of ZenApps</li>
            <li>Account management</li>
            <li>All-in-one login</li>
            <li>Simplify user experience</li>
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
            <li>React Router</li>
          </ul>
        </div>
        <h2>Dependencies</h2>
        <div className="paragraph-h2">
          <ul>
            <li>ReactBits</li>
            <li>ogl</li>
            <li>react-router-dom</li>
            <li>gh-pages</li>
          </ul>
        </div>
      </section>
      <Divider/>

      <section id="docs-technicalOverview" data-toc="Technical Overview">
        <h1>Technical Overview</h1>
        <div>
          This project built with react + JavaScript as the main framework. ZenCore allowing ZenApps to use logged-in account automatically, as ZenCore allowing ZenApps to connect to each other which makes ZenApps a ZenEcosystem. For security reasons, ZenCore is using browser's local storage to store user's account, settings, and other data.
        </div>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        <div>
          <h2>Home</h2>
          <div className="paragraph-h2">
            Home page is the main page of ZenCore. In this page, you can see current time and recently visited pages for quick access. This page designed to simplify user experience.
          </div>
          <h2>Projects</h2>
          <div className="paragraph-h2">
            Projects page is the page that shows you all ZenApps. In this page, you can click on any ZenApp to open it.
          </div>
          <h2>Accounts</h2>
          <div className="paragraph-h2">
            Accounts page is the page that allows you to customize account-related settings. In this page, you can see connected ZenApps, turn on/off Auto-login, and log out from your account.
          </div>
          <h2>Settings</h2>
          <div className="paragraph-h2">
            Settings page is the page that allows you to customize ZenCore settings. In this page, you can change hide personal information, theme, and page opening (Open at start, Open project in new tab or current tab).
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          There are some planned improvements for future ZenCore update [Sorted by Priority].
          <h2>Back-end Integration</h2>
          <div className="paragraph-h2">
            I have planned to integrate back-end to ZenCore in order to achieve dynamic Projects addition. This will allow ZenCore to fetch all ZenApps from back-end and display them in Projects page. Also, login system will be more secured with this integration.
          </div>
          <h2>Account Customization</h2>
          <div className="paragraph-h2">
            I have planned to add more customization options for accounts. This will allow users to customize their accounts in more detail, name, email, phone number, even profile picture. But to achieve this feature, I will need to integrate the back-end first.
          </div>
          <h2>Optimize Tablet Layout</h2>
          <div className="paragraph-h2">
            I have planned to optimize tablet layout to make it more user-friendly and comfortable to use.
          </div>
          <h2>Fix Routing</h2>
          <div className="paragraph-h2">
            ZenCore is currently using Query Parameters to navigate between pages. I have planned to fix this using URL Path by React Router.
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-license" data-toc="License">
        <h1>License</h1>
        <div>
          <ul>
            <li>Copyright © 2025 ZenApps. All rights reserved.</li>
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
        <h2>Version 2.2.1 [Dec 14, 2025]</h2>
        <div className="paragraph-h2">
          <ul>
            <li>ZenScreen replaced by ZenClock</li>
            <li>GH Cmd Gen replaced by GitHelper</li>
          </ul>
        </div>
        <h2>Version 2.2.0 [Dec 12, 2025]</h2>
        <div className="paragraph-h2">
          <ul>
            <li>Added "Open project in" in Settings</li>
            <li>Fixed and optimized "Recently Visited"</li>
            <li>Code refactor and optimization</li>
          </ul>
        </div>
        <h2>Version 2.1.0 [Dec 11, 2025]</h2>
        <div className="paragraph-h2">
          <ul>
            <li>Added "Open at start" in Settings</li>
            <li>New animated background</li>
            <li>Performance optimization</li>
            <li>Removed Quick Actions in Home</li>
          </ul>
        </div>
        <h2>Version 2.0.2 [Jul 22, 2025]</h2>
        <div className="paragraph-h2">
          <ul>
            <li>Fixed some security issues</li>
          </ul>
        </div>
        <h2>Version 2.0.1 [Jun 20, 2025]</h2>
        <div className="paragraph-h2">
          <ul>
            <li>Fix routing and redirection bugs</li>
            <li>Added 404 (not found) page.</li>
          </ul>
        </div>
        <h2>Version 2.0.0 [June 19, 2025]</h2>
        <div className="paragraph-h2">
          <ul>
            <li>Rebuilded the entire project</li>
            <li>Updated theme and animated background</li>
          </ul>
        </div>
        <h2>Version 1.0.0 [Jun 6, 2025]</h2>
        <div className="paragraph-h2">
          <ul>
            <li>Initial release</li>
          </ul>
        </div>
      </section>
    </>
  )
}