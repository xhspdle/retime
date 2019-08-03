export default function BackgroundVideo() {
    return (
        <>
            <video autoPlay muted loop>
                <source src="/static/vid/title_1.mp4" type="video/mp4"></source>
            </video>
            <div className="content">
                <h1>건설 시공 과정을 기록합니다</h1>
            </div>
            <style jsx>{`
                video {
                    position: relative;
                    right: 0;
                    width: 100%;
                }
                .content {
                    position: relative;
                    top: 0;
                    transform: translateY(-1020%);
                    margin-bottom: -4.5rem;
                    text-align: center;
                    width: 100%;
                }
                .content h1 {
                    margin: 0;
                    padding: 0;
                    color: black;
                    font-size: 3rem;
                    /*letter-spacing: 10px;*/
                    font-family: 'Sunflower', sans-serif;
                }
                @media (max-width: 600px) {
                    .content {
                        transform: translateY(-320%);
                    }
                }
                @media (min-width: 601px) and (max-width: 800px) {
                    .content {
                        transform: translateY(-420%);
                    }
                }
                @media (min-width: 801px) and (max-width: 1000px) {
                    .content {
                        transform: translateY(-520%);
                    }
                }
                @media (min-width: 1001px) and (max-width: 1200px) {
                    .content {
                        transform: translateY(-620%);
                    }
                }
                @media (min-width: 1201px) and (max-width: 1400px) {
                    .content {
                        transform: translateY(-720%);
                    }
                }
                @media (min-width: 1401px) and (max-width: 1600px) {
                    .content {
                        transform: translateY(-820%);
                    }
                }
                @media (min-width: 1601px) and (max-width: 1800px) {
                    .content {
                        transform: translateY(-920%);
                    }
                }
            `}</style>
        </>
    )
}