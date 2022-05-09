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
        <br></br>
        <br></br>
        <div className="main-text">
            <h3>About</h3>
            <hr></hr>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet luctus. Vitae auctor eu augue ut lectus arcu bibendum at. Facilisi cras fermentum odio eu feugiat pretium nibh. At erat pellentesque adipiscing commodo elit at imperdiet dui. Non sodales neque sodales ut etiam sit amet. Vitae et leo duis ut. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Purus ut faucibus pulvinar elementum. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Nunc sed blandit libero volutpat sed.
            </p>
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
            <br></br>
            <br></br>
        </div>
        </>
    );
}

export default PageHome;