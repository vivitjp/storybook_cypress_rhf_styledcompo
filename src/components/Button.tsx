import React from "react"
import styled from "styled-components"

type SIZE_CONST = "small" | "medium" | "large"

const SIZE_MAP = new Map<SIZE_CONST, string>([
  ["small", "12px"],
  ["medium", "14px"],
  ["large", "16px"],
])

type StyleProps = {
  primary?: boolean
  size?: SIZE_CONST
  radius?: string
  fontWeight?: string
}

const StyledButton = styled.button<StyleProps>`
  padding: 10px 20px;
  font-size: ${({ size }) =>
    size ? SIZE_MAP.get(size) : SIZE_MAP.get("medium")};
  color: white;
  background-color: ${({ primary }) => (primary ? "red" : "blue")};
  border: none;
  box-shadow: 1px 2px 2px #aaa;
  border-radius: ${({ radius }) => radius ?? "0"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
`

type ButtonProps = StyleProps & {
  onClick?: () => void
  children: React.ReactNode
}

export const Button = React.memo(({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
})
