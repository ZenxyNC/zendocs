import { useEffect } from "react"
import MainTitle from "../main/mainTitle/mainTitle"


export default function NotFound({ setFaultyTerminal }) {
  useEffect(() => {
    setFaultyTerminal("#FF393D")
  }, [])
  return (
    <div id="notFound-mainbody">
      <MainTitle
        title="404"
        description="Something is not right in here.. Let’s go back."
        navigateTo="Home"
        navigateToParam="/"
      />
    </div>
  )
}