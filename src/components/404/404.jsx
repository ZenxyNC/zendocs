import { useEffect } from "react"
import MainTitle from "../main/mainTitle/mainTitle"


export default function NotFound({ setFaultyTerminal }) {
  useEffect(() => {
    setFaultyTerminal("#FF393D");
    document.title = "ZenDocs — Not Found"
  }, []);

  const prompts = [
    "The door won't open.",
    "We shouldn't be here.",
    "Your instincts tell you to leave.",
    "Only echoes remain here.",
    `"Ada, I think we both know this is where we go our separate ways."`
  ]
  function randomPrompt() {
    return prompts[Math.floor(Math.random() * prompts.length)]
  }
  return (
    <div id="notFound-mainbody">
      <MainTitle
        title="404"
        description={randomPrompt()}
        navigateTo="Go Back"
        navigateToParam="/"
      />
    </div>
  )
}