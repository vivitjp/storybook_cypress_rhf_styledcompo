import React, { useCallback, useState } from "react"
import styled from "styled-components"
import { Button } from "./components/Button"
import { DivMin } from "./components/DivMin"
import { HelperCss } from "./components/HelperCss"
import { HelperKeyframes } from "./components/HelperKeyframes"
import { HelperSSManger } from "./components/HelperSSManager"

const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`

function App() {
  const [value, setValue] = useState("123")
  const handleClick = useCallback((value: string = "678") => {
    setValue(value)
  }, [])

  return (
    <FlexColDiv>
      <Button size="medium" primary={true} onClick={() => handleClick("ABC")}>
        CLICK(fixNum)
      </Button>
      <DivMin value={"HEY"} />
      <HelperCss param={true} flag={true}>
        Helper CSS
      </HelperCss>
      <HelperKeyframes>Key Button</HelperKeyframes>
      <HelperSSManger />
    </FlexColDiv>
  )
}

export default App
