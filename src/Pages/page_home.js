import Figure from '../Images/profile.jpeg';
import GithubIcon from '../Images/github.png';
import GmailIcon from '../Images/gmail.png';
import LinkedinIcon from '../Images/linkedin.png';
import ConvidaIcon from '../Images/convida.png';
import './style.css';

function PageHome() {
    return(
        <>
        <div className="color-bg">
            <div className="card-me">
                <br></br>
                <img src={Figure} alt="Card Icon de User" className="img-resize"></img> 
                <h1>Portifolio</h1>
                <hr></hr>
            </div>
            <br></br>
            <div className="card-text">
                <h2>Mateus Leite Pedrosa</h2>
                <h2>Network Engineer - Universidade de Brasília (UnB)</h2>
                <h2>Jr. FrontEnd Software Developer</h2>
                <br></br>
                <button><a href="https://br.linkedin.com/in/mateus-leite-1021a716b">CONTACT</a></button>
            </div>
        </div>
        <br></br>
        <div className="main-text">
            <h3>About</h3>
            <hr></hr>
            <p>
                I'm a student graduating in the course of Network Engineer from the University of Brasília (UnB), Brasília - DF/Brasil. 
                I work as a Jr Software Developer and my goal is always to provide Tech Solutions with the vision of creating impactful projects. 
                Experience with Project Management, Scrum Methodology, and Building Software Applications and Platforms focused on the User Experience.
            </p>
            <br></br>
            <table>
                <tr>
                    <th>Technologies Stack</th>                
                </tr>
                <hr></hr>
                <tr>
                    <td>(Html and CSS), UI/UX Building Concepts</td>
                </tr>
                <tr>
                    <td>C++, JavaScript and Pyhton</td>
                </tr>
                <tr>
                    <td>DataBase, API´s, NodeJS, ReactJS</td>
                </tr>
                <tr>
                    <td>OO, SOLID, Clean Architecture</td>
                </tr>
                <tr>
                    <td>Project Management and Scrum Methodology</td>
                </tr>
            </table>
            <br></br>
            <h3>Projects</h3>
            <hr></hr>
            <br></br>
            <div className="projects-card">
                <h4>Plataforma RedeConvida</h4>
                <hr></hr>   
                <br></br>            
                <a href="https://redeconvidateleatendimento.netlify.app/">
                    <img src={ConvidaIcon} alt="Card Icon" className="icon-resize"></img>
                </a> 
                <p>
                    Rede Convida is a health care platform to serve those who are at risk. The calls will be in host institutions to offer help in times of Covid-19, as we want to promote health for people with inaccessibility. As coordinator of the project's Front-end team, we had the challenge of implementing an intuitive UI that provides a fluid user experience. And with all the integrations and features required for the platform to fully function.
                </p>                
            </div>
            <br></br>     
            <div className="projects-card">
                <h4>Plataforma RedeConvida</h4>
                <hr></hr>   
                <br></br>            
                <a href="https://redeconvidateleatendimento.netlify.app/">
                    <img src={ConvidaIcon} alt="Card Icon" className="icon-resize"></img>
                </a>
                <p>
                    Rede Convida is a health care platform to serve those who are at risk. The calls will be in host institutions to offer help in times of Covid-19, as we want to promote health for people with inaccessibility. As coordinator of the project's Front-end team, we had the challenge of implementing an intuitive UI that provides a fluid user experience. And with all the integrations and features required for the platform to fully function.
                </p>                
            </div>
            <br></br> 
            <div className="projects-card">
                <h4>Plataforma RedeConvida</h4>
                <hr></hr>   
                <br></br>  
                <a href="https://redeconvidateleatendimento.netlify.app/">
                    <img src={ConvidaIcon} alt="Card Icon" className="icon-resize"></img>
                </a>                           
                <p>
                    Rede Convida is a health care platform to serve those who are at risk. The calls will be in host institutions to offer help in times of Covid-19, as we want to promote health for people with inaccessibility. As coordinator of the project's Front-end team, we had the challenge of implementing an intuitive UI that provides a fluid user experience. And with all the integrations and features required for the platform to fully function.
                </p>                
            </div>
            <br></br>        
            <div className="icons">            
                <a href="mateuspedrosa38@gmail.com">
                    <img src={GmailIcon} alt="Card Icon"></img>      
                </a> 
                <a href="https://br.linkedin.com/in/mateus-leite-1021a716b">
                    <img src={LinkedinIcon} alt="Card Icon"></img>  
                </a>         
                <a href="https://github.com/lp-mateus">
                    <img src={GithubIcon} alt="Card Icon"></img>          
                </a>                                               
            </div>
        </div>
        </>
    );
}

export default PageHome;