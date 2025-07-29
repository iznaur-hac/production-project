import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('about.AboutPage')}
        </div>
    )
}

export default AboutPage;