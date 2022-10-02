import styled, { StyleSheetManager } from "styled-components"

const Box = styled.div`
  color: ${(props) => props.theme.color};
  border: 1px solid red;
  padding: 10px;
  display: flex;
`

export const HelperSSManger = () => {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Box>
        If you inspect me, there are no vendor prefixes for the flexbox style.
      </Box>
    </StyleSheetManager>
  )
}
