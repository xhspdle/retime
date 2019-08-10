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
            <style jsx>{`
                .layout {
                    /*margin-top: 62px;*/
                    line-height: 1.8;
                }
            `}</style>
        </>
    )
}