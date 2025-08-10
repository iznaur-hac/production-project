import { classNames } from 'shared/lib/classNames/calssNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('ErrorOccurred')}</p>
            <button type="button" onClick={reloadPage}>{t('RefreshPage')}</button>
        </div>
    );
};
