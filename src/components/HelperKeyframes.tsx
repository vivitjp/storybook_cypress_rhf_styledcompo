import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`

export const HelperKeyframes = styled.button`
  animation: 1s ${fadeIn} ease-out;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  box-shadow: 1px 2px 2px #aaa;
  border-radius: 5px;
`
