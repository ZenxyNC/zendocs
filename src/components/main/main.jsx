import { useEffect } from "react";
import "./main.css";
import MainTitle from "./mainTitle/mainTitle";
import Copyright from "../copyright/copyright";

export default function Main({ setGradientwaves }) {

  useEffect(() => {
    setGradientwaves("#5227FF")
    document.title = "ZenDocs"
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
        <Copyright />
      </div>
    </>
  )
}