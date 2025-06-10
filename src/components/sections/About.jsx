import './About.css'
import SkillBar from './SkillBar';

function About(){

    const skills = [
        { skill: 'HTML5', percent: 90 },
        { skill: 'CSS3', percent: 80 },
        { skill: 'JavaScript', percent: 70 },
        { skill: 'React', percent: 70 },
        { skill: 'Java', percent: 80 },
        { skill: 'Spring Boot', percent: 65 },
        { skill: 'PostgreSQL', percent: 70 }
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div>
                    <h4>01</h4>
                    <h1 className="size-50">Know <br /> About Me</h1>
                </div>                    
                
                <div  className="about-content" data-aos="fade-up">
                    <p>Hi, I’m Noemí Delgadillo Roldán, a passionate Full Stack Developer with a background in computer science and intensive coding bootcamp training.</p>
                    <p>I specialize in building impactful applications using Java, React, and databases. I’m known for my strong problem-solving skills, adaptability, and eagerness to learn continuously.</p>
                    <p>Currently, I’m seeking opportunities to grow professionally and contribute to challenging projects. Outside of tech, I enjoy knitting and exploring Columbus.</p>
              
                </div>

                <div className='tech-skills'>
                    <h3 className='spacing'>Technical Skills</h3>            
                        <ul className="skill-bars" >
                            {skills.map(({ skill, percent }) => (
                            <SkillBar key={skill} skill={skill} percent={percent} style={{ width: `${percent}%` }} />
                            ))}
                        </ul>
                </div>

            </div>
        </section>
    )
}

export default About;