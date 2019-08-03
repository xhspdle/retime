import Header from './Header';
import { Container } from 'react-bootstrap';

export default function Layout(props) {
    return (
        <>
            <Container fluid="true">
                <div className='layout'>
                    <Header menuList={props.menuList}/>
                    {props.children}
                </div>
            </Container>
            <style type="text/css">{`
                html {
                    font-size: 16px;
                    scroll-behavior: smooth;
                }
                .container-fluid {
                    margin: 0 !important;
                    padding: 0 !important;
                }
            `}</style>
            <style jsx>{`
                .layout {
                    line-height: 1.8;
                }
            `}</style>
        </>
    )
}