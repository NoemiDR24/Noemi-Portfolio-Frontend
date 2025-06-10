import './Experience.css'
function Experience(){
    return (
        <section className="experience-section" id="experience">
            <div className="container">
                <div>
                    <h4>02</h4>
                    <h1 className="size-50">My <br /> Experience</h1>
                    <div className="h-50"></div>
                </div>
                
                <div className="timeline-wrap">
                    <div className="timeline-block">

                        <div className="timeline-ico">
                            <i className="fa fa-briefcase"></i>
                        </div>

                        <div className="timeline-header">
                            <h2>Full-Stack Java Developer Student</h2>
                            <p className='text'>Feb 2025 – May 2025 | Columbus, OH</p>
                        </div>

                        <div className="timeline-content">
                            <h2>Tech Elevator</h2>
                            <p className='text'><strong>Intensive Software Development Bootcamp (14 weeks)</strong></p>
                            <ul className='text'>
                                <li>Completed over 800 hours of hands-on training focused on full-stack development using Java, Spring Boot, PostgreSQL, JavaScript, HTML, CSS, and React.</li>
                                <li>Built real-world applications through pair programming, Agile methodology, and version control with Git and GitHub.</li>
                                <li>Gained experience in RESTful API design, object-oriented programming, database normalization, and modern frontend development.</li>
                                <li>Collaborated on multiple projects simulating real client needs.</li>
                            </ul>   
                            <p className='text'><strong>Key Projects:</strong></p>
                            <ul className='text'>
                                <li><strong><em>TEnmo:</em></strong> A money transfer application with user authentication, balance tracking, and transaction history.</li>
                                <li><strong><em>Vendo-Matic 800:</em></strong> A virtual vending machine with inventory tracking and purchase simulation.</li>
                                <li><strong><em>Blend-r:</em></strong> A full-stack web application for organizing and discovering local meetups (see Projects section for full details).</li>
                            </ul>   
                        </div>
                        
                    </div>
                </div> 
                
            </div>
        </section>
    )
}
export default Experience;