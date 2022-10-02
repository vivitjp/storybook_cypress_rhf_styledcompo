import styled, { css } from "styled-components"

type CssProps = {
  flag: boolean
}

const preCSS = css<CssProps>`
  color: ${(props) => (props.flag ? "red" : "black")};
`

type StyledProps = {
  param: boolean
} & CssProps

export const HelperCss = styled.div<StyledProps>`
  ${(props) => (props.param ? preCSS : "color: blue;")};
  ${(flag) => (flag ? preCSS : "background-color: blue;")};
`
