import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwClick = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error('Testing Error');
        }
    }, [error]);

    return (
        <Button onClick={throwClick}>
            { t('throw error') }
        </Button>
    );
};
