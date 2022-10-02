import styled, { css } from "styled-components"

type StyledProps = {
  color: string
}

const StyledDiv = styled.button<StyledProps>`
  padding: 10px 20px;
  font-size: 12px;
  color: #888;
  font-size: 20px;
  border: 1px solid #ddd;
  ${(color) =>
    color &&
    css`
      background: color;
    `};
`

export const ButtonMinPropColor: React.FC<StyledProps> = ({ color }) => {
  return <StyledDiv color={color}> SAMPLE COLOR </StyledDiv>
}
