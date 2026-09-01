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
import ZenAppsDocs from "./allDocs/docs-zenapps"
import ZenAccountDocs from "./allDocs/docs-zenaccount"
import ZenBaseDocs from "./allDocs/docs-zenbase"

export default function Docs({ setGradientwaves }) {
  const { project } = useParams();
  const navigate = useNavigate();
  const [ToCOpen, setToCOpen] = useState(false);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_JSONBIN_URL, {
          headers: {
            "X-Master-Key": import.meta.env.VITE_JSONBIN_MASTER_KEY
          }
        });
        const json = await response.json();
        setApiData(json.record);
      } catch (error) {
        console.error("Failed to fetch JSONBin data:", error);
      }
    };
    fetchData();
  }, []);

  const DocsComponents = [
    {
      param: "zencore",
      title: "ZenCore",
      component: <ZenCoreDocs apiData={apiData?.zencore} />
    },
    {
      param: "zenengine",
      title: "ZenEngine",
      component: <ZenEngineDocs apiData={apiData?.zenengine} />
    },
    {
      param: "zenclock",
      title: "ZenClock",
      component: <ZenClockDocs apiData={apiData?.zenclock} />
    },
    {
      param: "githelper",
      title: "GitHelper",
      component: <GitHelperDocs apiData={apiData?.githelper} />
    },
    {
      param: "zendocs",
      title: "ZenDocs",
      component: <ZenDocsDocs apiData={apiData?.zendocs} />
    },
    {
      param: "zenguard",
      title: "ZenGuard",
      component: <ZenGuardDocs apiData={apiData?.zenguard} />
    },
    {
      param: "zenapps",
      title: "ZenApps",
      component: <ZenAppsDocs apiData={apiData?.zenapps} />
    },
    {
      param: "zenaccount",
      title: "ZenAccount",
      component: <ZenAccountDocs apiData={apiData?.zenaccount} />
    },
    {
      param: "zenbase",
      title: "ZenBase",
      component: <ZenBaseDocs apiData={apiData?.zenbase} />
    }
  ]

  useEffect(() => {
    setGradientwaves(false)
    document.title = "ZenDocs – " + DocsComponents.find((component) => component.param === project)?.title
  }, [apiData])

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