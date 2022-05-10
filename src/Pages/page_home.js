import Figure from '../Images/profile.jpeg';
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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet luctus. Vitae auctor eu augue ut lectus arcu bibendum at. Facilisi cras fermentum odio eu feugiat pretium nibh. At erat pellentesque adipiscing commodo elit at imperdiet dui. Non sodales neque sodales ut etiam sit amet. Vitae et leo duis ut. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Purus ut faucibus pulvinar elementum. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Nunc sed blandit libero volutpat sed.
            </p>
            <br></br>
            <h3>Contacts</h3>
            <hr></hr>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet luctus. Vitae auctor eu augue ut lectus arcu bibendum at. Facilisi cras fermentum odio eu feugiat pretium nibh. At erat pellentesque adipiscing commodo elit at imperdiet dui. Non sodales neque sodales ut etiam sit amet. Vitae et leo duis ut. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Purus ut faucibus pulvinar elementum. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Nunc sed blandit libero volutpat sed.
            </p>
        </div>

        <div>
            <br></br>
        </div>
        </>
    );
}

export default PageHome;