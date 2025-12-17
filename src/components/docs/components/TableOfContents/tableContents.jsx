import { useEffect, useState } from "react"
import useActiveSection from "../activeSections"
import "./tableContents.css"
import ToCPath from "./ToCPath"

export default function TableContents({ ToCOpen }) {
  const activeSection = useActiveSection()
  const [tocItems, setTocItems] = useState([])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id][data-toc]"))
    const items = sections.map((section) => ({
      title: section.getAttribute("data-toc"),
      elementID: section.id
    }))
    setTocItems(items)
  }, [])

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div id="tableContents-mainbody" className={ToCOpen ? "open" : ""}>
        {tocItems.map((path, index) => (
          <div key={index} onClick={() => handleScrollTo(path.elementID)}>
            <ToCPath
              title={path.title}
              isActive={activeSection === path.elementID}
              elementID={path.elementID}
            />
          </div>
        ))}
      </div>
    </>
  )
}