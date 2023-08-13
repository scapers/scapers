import '../public/assets/styles/bootstrap/scapers-theme.scss';
import '../public/assets/styles/custom.scss';
import {AppProps} from 'next/app';
import Layout from '../components/layout/layout';

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default MyApp;