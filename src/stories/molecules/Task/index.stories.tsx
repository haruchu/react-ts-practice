import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Task } from "."

export default {
  title: "Molecules/Task",
  component: Task,
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (props) => (
  <Task {...props} />
)

export const Default = Template.bind({})