import { ReactElement } from 'react';
import Header from './Header'
import Footer from './Footer'


type Props = {
    children: ReactElement
}

const Wrapper = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Wrapper