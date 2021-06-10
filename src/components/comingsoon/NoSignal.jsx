import React from 'react';
import style from './NoSignal.css';

const NoSignal = () => {
    return (
        <section className={style.noSignal}>
            <p className={style.standard}>
                <h3>ERROR: NO SIGNAL</h3>
                <span>PLEASE CHECK BACK LATER</span>
            </p>
            <p className={style.glitched}>
                <h3>JULIANNE VELA</h3>
                <p>
                    <span>&lt;&#39;SOFTWARE&#8194;ENGINEER&#39;&#47;&gt;</span>
                    <span>&#8194;&#8194;</span>
                    <span style="fontFamily: AstroSpace">
                        &#9791;ASTRONOMER&#9799;
                    </span>
                    <span>&#8194;&#8194;</span>
                    <span>&#127922;GAMER&#127918;</span>
                </p>
                <span className={style.subliminal}>
                    ...portfolio coming soon...
                </span>
            </p>
        </section>
    );
};

export default NoSignal;
