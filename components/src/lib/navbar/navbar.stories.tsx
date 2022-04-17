import { Navbar } from '.';
import { SBCmpTitle } from '@workspace/morteza-jamali/blog/components/i18n';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: SBCmpTitle('Navbar'),
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
