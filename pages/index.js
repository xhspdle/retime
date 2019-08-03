import Link from 'next/link';
import Layout from '../components/Layout';
import BackgroundVideo from '../components/BackgroundVideo';
import About from '../components/About';
import Skills from '../components/SKills';

function menuList() {
    return [
        { id: 0, title: 'ABOUT' },
        { id: 1, title: 'SKILLS' },
        { id: 2, title: 'SERVICES' },
        { id: 3, title: 'PORTFOLIO' },
        { id: 4, title: 'CONTACT' }
    ]
}

export default function Index() {
    return (
        <>
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
            />
            <link href="https://fonts.googleapis.com/css?family=Sunflower:300&display=swap" rel="stylesheet"/>
            <Layout menuList={menuList()}>
                <div>
                    <BackgroundVideo/>
                </div>
                <div id="ABOUT" className="even">
                    <About/>
                </div>
                <div id="SKILLS" className="odd">
                    <Skills/>
                </div>
                <div id="SERVICES" className="even">
                    
                </div>
            </Layout>
            <style jsx>{`
                .odd {
                    background-color: #f1f1f1;
                }
                .even {
                    background-color: #f6f6f6;
                }
            `}</style>
        </>
    )
}