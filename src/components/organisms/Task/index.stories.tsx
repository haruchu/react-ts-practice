import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Todo } from "."

export default {
  title: "Organisms/Todo",
  component: Todo,
} as ComponentMeta<typeof Todo>

const Template: ComponentStory<typeof Todo> = (props) => (
  <Todo {...props} />
)

export const Default = Template.bind({})