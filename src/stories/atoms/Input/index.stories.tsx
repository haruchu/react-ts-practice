import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Input } from "."

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (props) => (
  <Input {...props} />
)

export const Default = Template.bind({})