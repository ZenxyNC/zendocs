import { useEffect, useState } from "react"
import Navbar from "./components/navbar/navbar"
import TableContents from "./components/TableOfContents/tableContents"
import { useParams } from "react-router-dom"
import './docs.css'
import { useNavigate } from "react-router-dom"

// DOCS
import ZenCoreDocs from "./allDocs/docs-zencore"
import ZenEngineDocs from "./allDocs/docs-zenengine"
import ZenClockDocs from "./allDocs/docs-zenclock"
import GitHelperDocs from "./allDocs/docs-GitHelper"
import ZenDocsDocs from "./allDocs/docs-zendocs"
import ZenGuardDocs from "./allDocs/docs-zenguard"

export default function Docs({ setFaultyTerminal }) {
  const { project } = useParams();
  const navigate = useNavigate();
  const [ToCOpen, setToCOpen] = useState(false);

  const DocsComponents = [
    {
      param: "zencore",
      title: "ZenCore",
      component: <ZenCoreDocs />
    },
    {
      param: "zenengine",
      title: "ZenEngine",
      component: <ZenEngineDocs />
    },
    {
      param: "zenclock",
      title: "ZenClock",
      component: <ZenClockDocs />
    },
    {
      param: "githelper",
      title: "GitHelper",
      component: <GitHelperDocs />
    },
    {
      param: "zendocs",
      title: "ZenDocs",
      component: <ZenDocsDocs />
    },
    {
      param: "zenguard",
      title: "ZenGuard",
      component: <ZenGuardDocs />
    }
  ]

  useEffect(() => {
    setFaultyTerminal(false)
    document.title = "ZenDocs – " + DocsComponents.find((component) => component.param === project)?.title
  }, [])

  function findDocsComponent() {
    const docsComponent = DocsComponents.find((component) => component.param === project)?.component
    if (!docsComponent) {
      navigate("/404")
      return
    }
    return docsComponent
  }

  return (
    <>
      <Navbar ToCOpen={ToCOpen} setToCOpen={setToCOpen}/>
      <TableContents key={project} ToCOpen={ToCOpen}/>
      <div id="docs-maindiv">
        {findDocsComponent()}
      </div>
    </>
  )
}