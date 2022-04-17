import { Alert, Type } from '.';
import { SBCmpTitle } from '@workspace/morteza-jamali/blog/components/i18n';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: SBCmpTitle('Alert'),
  component: Alert,
  argTypes: {
    type: {
      options: Object.values(Type),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: Type.SUCCESS,
  children:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi accusantium quas laborum, ducimus deserunt magni nostrum corporis aspernatur illum praesentium exercitationem temporibus ipsa enim, eum inventore mollitia quo soluta!',
};
