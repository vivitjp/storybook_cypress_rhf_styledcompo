import styled from "styled-components"

const StyledDiv = styled.div`
  padding: 10px 20px;
  font-size: 12px;
  color: #888;
  font-size: 20px;
  border: 1px solid #ddd;
`

export const DivMin = ({ value = "non" }: { value: string }) => {
  return <StyledDiv> {value} </StyledDiv>
}
