import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./codeSnippet.css"

export default function Code({ children, codeLang = "javascript" }) {
  const customTheme = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: "transparent",
      padding: "0px",
      fontSize: "14px",
      textShadow: "none",
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: "transparent",
    }
  }

  return (
    <>
      <div id="code-mainbody">
        <div id="code-shadow"/>
        <SyntaxHighlighter
          language={codeLang}
          style={customTheme}
          showLineNumbers={true}
          className="code-highlighted"
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  )
}
