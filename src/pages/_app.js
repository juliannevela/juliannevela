import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../styles/global.css';

library.add(fab);

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
