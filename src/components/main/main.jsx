import { useEffect } from "react";
import "./main.css";
import MainTitle from "./mainTitle/mainTitle";

export default function Main({ setFaultyTerminal }) {

  useEffect(() => {
    setFaultyTerminal("#a7ef9e")
  }, [])

  return (
    <>
      <div id="main-mainbody">
        <MainTitle
          title="ZenDocs"
          description="Know more about ZenApps from inside."
          navigateTo="Explore"
          navigateToParam="/search"
        />
      </div>
    </>
  )
}