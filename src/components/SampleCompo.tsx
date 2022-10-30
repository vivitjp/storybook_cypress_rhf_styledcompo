import React from "react"
import styled from "styled-components"

const Compo = () => {
  return <div className="" data-id="test-outside-0"></div>
}

export const SampleCompo = styled(Compo)`
  padding: 10px 20px;
  font-size: 10px;
  color: white;
  background-color: white;
  border: none;
  box-shadow: 1px 2px 2px #aaa;
  border-radius: 5px;
`
