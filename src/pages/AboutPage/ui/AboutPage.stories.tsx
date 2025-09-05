import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import AboutPage from './AboutPage';
import 'app/styles/index.scss';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AboutPage>;

const Template: StoryFn<typeof AboutPage> = () => <AboutPage />;

export const Base = Template.bind({});
Base.args = {};
