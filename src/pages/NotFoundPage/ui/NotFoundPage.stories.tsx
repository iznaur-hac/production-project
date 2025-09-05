import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';
import 'app/styles/index.scss';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotFoundPage>;

const Template: StoryFn<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Base = Template.bind({ });
Base.args = { };
