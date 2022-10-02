import { createGlobalStyle } from "styled-components"

const SomeComponent = () => {
  return <div>Globals</div>
}

const GlobalStyle = createGlobalStyle`
  html,
  body
  {
    margin: 0;
    padding: 0;
    font-size: 12px;
    box-sizing: border-box; 
    border: 1px solid #333;
    color: red;
  }
`

export const GlobalCompo = () => {
  return (
    <>
      <GlobalStyle />
      <SomeComponent />
      <SomeComponent />
    </>
  )
}
