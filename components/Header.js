import { Navbar, Nav } from 'react-bootstrap';
//import useScroll from '../customHook/useScroll';

const linkStyle = {
    marginRight: 15
}

export default function Header(props) {

    //const { scrollX, scrollY, scrollDirection } = useScroll();

    //console.log('scrollY', scrollY);

    return (
        <>
            {/* <p className="top-brand">
                RETIME
            </p>
            <p className="mid-text">
                RECORD
            </p>
            <p className="bottom-text">
                THE CONSTRUCTION PROCESS
            </p> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
                {/* className="fixed-top" */}
                <Navbar.Brand href="#HOME">
                    RETIME
                    <span className="mid-text">RECORD</span>
                    <span className="bottom-text">THE CONSTRUCTION PROCESS</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        {props.menuList.map(list => (
                            <Nav.Link key={list.id} href={'#' + list.title}>{list.title}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <style jsx>{`
                p {
                    margin-bottom: 0;
                    text-align: center;
                    background-color: #343a40 !important;
                }
                .top-brand {
                    font-size: 50px;
                    color: white;
                }
                span {
                    margin-left: 10px;
                }
                .mid-text {
                    font-size: 14px;
                    color: red;
                    /*margin-top: -10px;
                    margin-bottom: -5px;*/
                }
                .bottom-text {
                    font-size: 16px;
                    color: white;
                }
            `}</style>
        </>
    )
}