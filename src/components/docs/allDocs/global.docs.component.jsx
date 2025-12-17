
export function Divider({ setWidth, setHeight }) {
  const customStyle = {
    width: setWidth ? setWidth + "px": "100%",
    height: setHeight ? setHeight + "px": "3px"
  }
  return (
    <div 
      id="divider-mainbody"
      style={customStyle}
    />
  )
}