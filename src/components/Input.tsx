import React from "react"
import styled from "styled-components"

type StyleProps = {
  primary?: boolean
  radius?: string
}

const StyledInput = styled.input<StyleProps>`
  padding: 10px 20px;
  color: white;
  background-color: ${({ primary }) => (primary ? "red" : "blue")};
  border: none;
  box-shadow: 1px 2px 2px #aaa;
  border-radius: ${({ radius }) => radius ?? "0"};
  cursor: pointer;
  &:hover {
    color: orange;
  }
`

type InputProps = StyleProps & {
  onClick?: () => void
  children: React.ReactNode
  title?: string
}

export const Input = ({
  children,
  title = "MyInput",
  ...props
}: InputProps) => {
  return <StyledInput type={"button"} value={title} {...props} />
}
