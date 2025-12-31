import Changelog from "../components/changelog/changelog"
import { Divider } from "./global.docs.component"
import AppStatus from "../components/appstatus/appstatus"

export default function ZenGuardDocs() {
  const changelogs = [
    {
      version: "2.0.2",
      date: "Dec 28, 2025",
      changes: [
        "Patch /public/ error in production",
        "Patch 404 error",
      ]
    },
    {
      version: "2.0.1",
      date: "Dec 27, 2025",
      changes: [
        "Patched download feature",
        "Final release",
      ]
    },
    {
      version: "2.0.0-beta.1",
      date: "Dec 27, 2025",
      changes: [
        "ZenGuard full rebuild",
        "ZenGuard all new security protocol",
      ]
    },
    {
      version: "1.0.6",
      date: "Nov 21, 2025",
      changes: [
        "Added configuration support for Python",
      ]
    },
    {
      version: "1.0.5",
      date: "Mar 9, 2025",
      changes: [
        "New ZenGuard version released",
        "New Latest From Us description",
        "Improved security system (originality check)"
      ]
    },
    {
      version: "1.0.4",
      date: "Mar 8, 2025",
      changes: [
        "Preparation ZenGuard new Security System"
      ]
    },
    {
      version: "1.0.3",
      date: "Mar 7, 2025",
      changes: [
        "New ZenGuard version released",
        "Scrollbar issue patched",
        "Double-redirect issue fixed"
      ]
    },
    {
      version: "1.0.2",
      date: "Mar 6, 2025",
      changes: [
        "New ZenGuard version released",
        "New head description"
      ]
    },
    {
      version: "1.0.1",
      date: "Mar 4, 2025",
      changes: [
        "Download issue fixed",
        "Mobile view revamped",
        "Translation bug fixed"
      ]
    },
    {
      version: "1.0.0",
      date: "Mar 3, 2025",
      changes: [
        "Initial release"
      ]
    }
  ]
  return (
    <>
      <section id="docs-projectTitle" data-toc="Project Title">
        <h1>ZenGuard</h1>
        <AppStatus status="Maintained" />
        <div>ZenGuard is ZenEcosystem main security protocol.</div>
      </section>
      <Divider />

      <section id="docs-overview" data-toc="Overview">
        <h1>Overview</h1>
        <div>ZenGuard, ZenEcosystem main security protocol. Explore the latest security technology and secure your information seamlessly with ZenGuard. Being protected in seamless by ZenGuard.</div>
      </section>
      <Divider/>

      <section id="docs-features" data-toc="Features">
        <h1>Features</h1>
        <div>
          <ul>
            <li>String Hasher System</li>
            <li>One command do all the job</li>
            <li>Detailed return value (good for debugging)</li>
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
            <li>Node.js</li>
            <li>Python</li>
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
            <li>React Icons (Si)</li>
            <li>gsap</li>
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
          ZenGuard available in various languages, NodeJS, JavaScript, ReactJS and even Python. ZenGuard using OOP as it's main system architecture, making everything much easier and reliable. In ZenEcosystem, ZenGuard handles all security systems, encryption, credentials hashing, and login.
        </div>
      </section>
      <Divider/>

      <section id="docs-usage" data-toc="Usage">
        <h1>Usage</h1>
        Since it's using OOP, I'll explain every function it has.
        <h2>startengine()</h2>
        <div className="paragraph-h2">
          This function starts the entire engine, just like the name. And this is the only function you need to call to start ZenGuard (after calling the OOP class itself).
        </div>
        <h2>checkString()</h2>
        <div className="paragraph-h2">
          This function is used to check string requirements. It will check empty or whitespace string and minimum length. By default, the minimum length is 5 characters.
        </div>
        <h2>hashString()</h2>
        <div className="paragraph-h2">
          This function is used to hash string using the map preset.
        </div>
      </section>
      <Divider/>

      <section id="docs-roadmap" data-toc="Roadmap">
        <h1>Roadmap</h1>
        <div>
          I have planned some future updates for better security and experience of using ZenGuard.
          <h2>compare()</h2>
          <div className="paragraph-h2">
            This function is used to compare two strings.
          </div>
          <h2>encrypt()</h2>
          <div className="paragraph-h2">
            This function is used to encrypt string using ZenGuard Algorithm.
          </div>
          <h2>decrypt()</h2>
          <div className="paragraph-h2">
            This function is used to decrypt string that is using ZenGuard Algorithm.
          </div>
        </div>
      </section>
      <Divider/>

      <section id="docs-license" data-toc="License">
        <h1>License</h1>
        <div>
          You can use the ZenGuard codes in your project for free, its designed for that. But, I protected this project using copyright to prevent copy of ZenGuard
          <ul>
            <li>Copyright © 2025 ZenTech.</li>
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
            <li>React Bits</li>
            <li>React Icons (Si)</li>
            <li>gsap</li>
            <li>ogl (Open Graphic Library)</li>
            <li>react-router-dom</li>
            <li>gh-pages (deployment)</li>
          </ul>
        </div>
        <h2>Assets</h2>
        <div className="paragraph-h2">
          <ul>
            <li><span className="position">[Font Family]</span> Plus Jakarta Sans</li>
            <li><span className="position">[Icon]</span> React Icons (Si)</li>
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