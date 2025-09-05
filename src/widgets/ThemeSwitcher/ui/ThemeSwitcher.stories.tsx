import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args: Record<string, any>) => <ThemeSwitcher {...args} />;

export const Base = Template.bind({});
Base.args = {};
