import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args: Record<string, any>) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem rem quo velit atque sed, odio doloribus ad, at fugiat modi ducimus aut aperiam nemo blanditiis possimus temporibus suscipit expedita.',
};
