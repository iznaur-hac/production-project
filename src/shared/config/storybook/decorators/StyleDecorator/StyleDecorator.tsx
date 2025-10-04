import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { useEffect } from 'react';

export const StyleDecorator = (Story: StoryFn, context: any) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { theme } = context.globals;

    useEffect(() => {
        document.body.className = theme; // Применяем класс темы к body
    }, [theme]);

    return (
        <ThemeProvider initialTheme={theme}>
            <div id="root">
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </div>
        </ThemeProvider>
    );
};
