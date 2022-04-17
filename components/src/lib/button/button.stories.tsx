import { Button } from '.';
import { SBCmpTitle } from '@workspace/morteza-jamali/blog/components/i18n';
import { BGColors } from '@workspace/morteza-jamali/blog/components/styles/colors';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: SBCmpTitle('Button'),
  component: Button,
  argTypes: {
    children: {
      control: false,
    },
    text: {
      type: 'string',
      control: { type: 'text' },
    },
    bgColor: {
      options: Object.values(BGColors),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Purple Button',
  bgColor: BGColors.AMBER,
};
