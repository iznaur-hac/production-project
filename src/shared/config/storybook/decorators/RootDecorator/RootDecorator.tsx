import { StoryFn } from '@storybook/react';

export const RootDecorator = (Story: StoryFn) => (
    <div id="root">
        <Story />
    </div>
);
