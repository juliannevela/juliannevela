import React from 'react';
import style from './ComingSoon.module.css';
import NoSignal from './NoSignal';
import SocialGlitch from './SocialGlitch';

const ComingSoon = () => {
    return (
        <main className={style.container}>
            <section className={style.error}>
                <p>Error: No Signal</p>
                <p>Please Check Back Later</p>
                <p>Portfolio...coming soon...</p>
                <SocialGlitch />
            </section>
            <NoSignal />
        </main>
    );
};

export default ComingSoon;
