import { useEffect, useState } from "react"
import Navbar from "./components/navbar/navbar"
import TableContents from "./components/TableOfContents/tableContents"
import ZenCoreDocs from "./allDocs/docs-zencore"
import { useParams } from "react-router-dom"
import './docs.css'


export default function Docs({ setFaultyTerminal }) {
  const { project } = useParams();
  const [ToCOpen, setToCOpen] = useState(false);

  const DocsComponents = [
    {
      param: "zencore",
      component: <ZenCoreDocs />
    }
  ]

  useEffect(() => {
    setFaultyTerminal(false)
  }, [])

  return (
    <>
      <Navbar ToCOpen={ToCOpen} setToCOpen={setToCOpen}/>
      <TableContents key={project} ToCOpen={ToCOpen}/>
      <div id="docs-maindiv">
        {DocsComponents.find((component) => component.param === project)?.component}
      </div>
    </>
  )
}