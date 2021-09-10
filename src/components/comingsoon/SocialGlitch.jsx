import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './SocialGlitch.module.css';

const SocialGlitch = () => {
    const onMouseOver = () => {};

    return (
        <section className={style.socialLinks}>
            <span className={style.socialIcon}>
                <a href="https://www.linkedin.com/in/juliannevela">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
            </span>
            <span className={style.socialIcon}>
                <a href="https://github.com/juliannevela">
                    <FontAwesomeIcon icon={['fab', 'github-square']} />
                </a>
            </span>
            <span className={style.socialIcon}>
                <a href="https://www.twitter.com/nessi_codes">
                    <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                </a>
            </span>
        </section>
    );
};

export default SocialGlitch;
