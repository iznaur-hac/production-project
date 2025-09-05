import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import 'app/styles/index.scss';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args: Record<string, any>) => <AppLink {...args} to='/' />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,

};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

