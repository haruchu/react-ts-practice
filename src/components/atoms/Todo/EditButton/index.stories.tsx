import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { EditButton } from "."

export default {
  title: "Atoms/Todo/EditButton",
  component: EditButton,
} as ComponentMeta<typeof EditButton>

const Template: ComponentStory<typeof EditButton> = (props) => (
  <EditButton {...props} />
)

export const Default = Template.bind({})