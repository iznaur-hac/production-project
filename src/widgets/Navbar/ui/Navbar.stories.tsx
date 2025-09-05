import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Navbar } from './Navbar';
import 'app/styles/index.scss';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args: Record<string, any>) => <Navbar {...args} />;

export const Base = Template.bind({});
Base.args = {};
