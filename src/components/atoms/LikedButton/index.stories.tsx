import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { LikedButton } from "."

export default {
  title: "Atoms/LikedButton",
  component: LikedButton,
} as ComponentMeta<typeof LikedButton>

const Template: ComponentStory<typeof LikedButton> = (props) => (
  <LikedButton {...props} />
)

export const Default = Template.bind({})