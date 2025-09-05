import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Loader } from './Loader';
import 'app/styles/index.scss';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args: Record<string, any>) => <Loader {...args} />;

export const Base = Template.bind({});
Base.args = {};


