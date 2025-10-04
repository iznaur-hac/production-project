import { StyleDecorator } from 'shared/config/storybook/decorators/StyleDecorator/StyleDecorator'; 
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator/RouterDecorator';
import 'loki/configure-react';
import { RootDecorator } from 'shared/config/storybook/decorators/RootDecorator/RootDecorator';

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },

  decorators: [
    StyleDecorator,
    RouterDecorator,
    RootDecorator,
  ],
};

export default preview;