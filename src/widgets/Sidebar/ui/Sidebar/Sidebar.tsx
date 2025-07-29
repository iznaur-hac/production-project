import { useState } from 'react';
import cls from './Sidebar.module.scss'
import { classNames } from "shared/lib/classNames/calssNames"
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div 
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>{collapsed ? t("open") : t("close")}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>            
            </div>
        </div>
    )
}
