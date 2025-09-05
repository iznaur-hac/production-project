import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const StyleDecorator = (Story: StoryFn, context: any) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { theme } = context.globals;
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
