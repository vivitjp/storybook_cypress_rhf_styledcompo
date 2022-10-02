import React from "react"
import { ComponentMeta } from "@storybook/react"
import { ButtonMinPropColor } from "../components/ButtonMinPropColor"

export default {
  title: "Example/Button Color",
  component: ButtonMinPropColor,
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
} as ComponentMeta<typeof ButtonMinPropColor>

export const DirectPrim = () => <ButtonMinPropColor color={"#ABC"} />
