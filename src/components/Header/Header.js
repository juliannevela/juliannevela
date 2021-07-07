import Link from 'next/link';
import React from 'react';
import {
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillLinkedin,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
    Container,
    HeaderLogo,
    NavBar,
    Social,
    NavLink,
    SocialIcons,
    Span,
} from './HeaderStyles';

const Header = () => (
    <Container>
        <HeaderLogo>
            <Link href="/">
                <a
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        marginBottom: '20px',
                    }}
                >
                    <DiCssdeck size="3rem" />
                    <Span>Portfolio</Span>
                </a>
            </Link>
        </HeaderLogo>
        <NavBar>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Tech Stack</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </NavBar>
        <Social>
            <SocialIcons href="https://github.com/juliannevela">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com/in/juliannevela">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://twitter.com/nessi_codes">
                <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
        </Social>
    </Container>
);

export default Header;
