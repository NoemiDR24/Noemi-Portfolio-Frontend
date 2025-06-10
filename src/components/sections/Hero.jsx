import './Hero.css'

function Hero(){
    return(
        <section className="hero-section" id="hero">
            <div className="container">

                <div className="hero-content">
                    <div className="hero-image">
                        <img src='/images/me.png' alt="Noemí Delgadillo" className="profile-picture"/>
                    </div>

                    <div className="hero-text" data-aos="fade-left" data-aos-delay="300">
                        <h5>Hello, World!</h5>
                        <h2>I'm Noemí Delgadillo Roldán</h2>
                        <h1>Full Stack Software Developer</h1>
                    </div>
                </div>

            </div>            
        </section>
    )
}

export default Hero;