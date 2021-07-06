import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Theme from '../styles/theme';

library.add(fab);

function MyApp({ Component, pageProps }) {
    return (
        <Theme>
            <Component {...pageProps} />
        </Theme>
    );
}

export default MyApp;
