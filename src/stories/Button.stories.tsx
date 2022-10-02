import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "../components/Button"

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    fontWeight: {
      options: ["normal", "bold"],
      control: { type: "radio" },
    },
    radius: {
      options: ["6px", "10px", "12px"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  fontWeight: "normal",
  radius: "6px",
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
}

export const DirectPrim = () => <Button primary={true}>THIs</Button>
