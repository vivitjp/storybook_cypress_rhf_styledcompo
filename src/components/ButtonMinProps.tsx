import styled, { css } from "styled-components"

type StyledProps = {
  primary: boolean
}

const StyledDiv = styled.button<StyledProps>`
  padding: 10px 20px;
  font-size: 12px;
  color: #888;
  font-size: 20px;
  border: 1px solid #ddd;
  ${(primary) =>
    primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

type Props = StyledProps & {
  children: React.ReactNode
}

export const ButtonMinProps: React.FC<Props> = ({ children }) => {
  return <StyledDiv primary={true}> {children} </StyledDiv>
}
