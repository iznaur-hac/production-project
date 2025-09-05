import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import MainPage from './MainPage';
import 'app/styles/index.scss';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MainPage>;

const Template: StoryFn<typeof MainPage> = () => <MainPage />;

export const Base = Template.bind({});
Base.args = {};
