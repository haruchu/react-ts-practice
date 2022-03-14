import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Sample } from "."

export default {
  title: "Organisms/Sample",
  component: Sample,
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = (props) => (
  <Sample {...props} />
)

export const Default = Template.bind({})