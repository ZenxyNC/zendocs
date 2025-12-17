

export default function ToCPath({ title, isActive, elementID }) {
  return (
    <>
      <div id="tocpath-mainbody" className={isActive ? "active" : ""}>
        {title}
      </div>
    </>
  )
}