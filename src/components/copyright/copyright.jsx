import "./copyright.css"

export default function Copyright() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div id="copyright-text" translate="no">
      Copyright © {year} ZenTech. All Rights Reserved.
    </div>
  )
}