import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Input } from "../components/Input"

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    radius: {
      options: ["6px", "10px", "12px"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}>Input</Input>
)

export const Prim = Template.bind({})
Prim.args = {
  primary: true,
  radius: "6px",
}

export const Second = Template.bind({})
Second.args = {
  primary: false,
}
