import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Sidebar } from './Sidebar';
import 'app/styles/index.scss';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args: Record<string, any>) => <Sidebar {...args} />;

export const Base = Template.bind({});
Base.args = {};
