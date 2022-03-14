import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { AddTaskButton } from "."

export default {
  title: "Atoms/Todo/AddTaskButton",
  component: AddTaskButton,
} as ComponentMeta<typeof AddTaskButton>

const Template: ComponentStory<typeof AddTaskButton> = (props) => (
  <AddTaskButton {...props} />
)

export const Default = Template.bind({})