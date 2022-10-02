import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ButtonMin } from "../components/ButtonMin"

export default {
  title: "Example/ButtonMin",
  component: ButtonMin,
} as ComponentMeta<typeof ButtonMin>

const Template: ComponentStory<typeof ButtonMin> = (args) => (
  <ButtonMin>{args.children}</ButtonMin>
)

export const Default = Template.bind({})
Default.args = {
  children: "Button",
}
