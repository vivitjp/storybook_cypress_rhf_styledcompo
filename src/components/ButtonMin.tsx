import styled from "styled-components"

const Styled = styled.button`
  padding: 10px 20px;
  font-size: 12px;
  color: #888;
  font-size: 20px;
  border: 1px solid #ddd;
`

type Props = {
  children: React.ReactNode
}

export const ButtonMin: React.FC<Props> = ({ children }) => {
  return <Styled> {children} </Styled>
}
