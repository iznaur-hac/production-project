import { classNames } from 'shared/lib/classNames/calssNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export function App() {
    const { theme } = useTheme();

    useEffect(() => {
        document.body.className = theme; // Применяем класс темы к body
    }, [theme]);

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [])}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
}
