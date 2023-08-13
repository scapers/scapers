import Navigation from './navigation';
import {Container} from 'react-bootstrap';
import Banner from './banner';
import Footer from './footer';

const Layout = ({children}) => {
    return (
        <>
            <Navigation />
            <Banner />
            <Container className="mt-4">
                <main>{children}</main>
                <Footer />
            </Container>

        </>
    )
}

export default Layout;