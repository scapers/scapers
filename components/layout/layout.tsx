import Navigation from './navigation';
import {Container} from 'react-bootstrap';
import Banner from './banner';

const Layout = ({children}) => {
    return (
        <>
            <Navigation />
            <Banner />
            <Container className="mt-4">
                <main>{children}</main>
            </Container>
        </>
    )
}

export default Layout;