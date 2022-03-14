import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CheckButton } from "."

export default {
  title: "Atoms/Todo/CheckButton",
  component: CheckButton,
} as ComponentMeta<typeof CheckButton>

const Template: ComponentStory<typeof CheckButton> = (props) => (
  <CheckButton {...props} />
)

export const Default = Template.bind({})