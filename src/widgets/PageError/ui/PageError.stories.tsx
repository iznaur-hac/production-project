import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { PageError } from './PageError';
import 'app/styles/index.scss';

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageError>;

const Template: StoryFn<typeof PageError> = (args: Record<string, any>) => <PageError {...args} />;

export const Base = Template.bind({});
Base.args = {};
