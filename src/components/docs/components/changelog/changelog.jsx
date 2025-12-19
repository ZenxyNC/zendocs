import { useRef } from 'react'
import './changelog.css'

export default function Changelog({version = "0.0.0", date = "Sep 29, 1998", children}) {

  const isBeta = useRef(version.includes("BETA") ? true : false)

  return (
    <div id='changelog-mainbody' className={isBeta.current ? 'isBeta' : ''}>
      <div id='changelog-aboutVersion'>
        <div id='changelog-version' style={{ color: isBeta.current ? "var(--yellow)" : "auto" }}>{version}</div>
        <div id='changelog-date' style={{ color: isBeta.current ? "var(--secondary-yellow)" : "auto" }}>{date}</div>
      </div>
      <div id='changelog-divider' />
      <div id='changelog-content'>
        {children}
      </div>
    </div>
  )
}