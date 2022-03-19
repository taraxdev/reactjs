//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>,document.getElementById("root"));

//App.js
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Section from './Section';
import Jump from './jump';
import Feature from './feature';


const App = () =>{
    return (
        <div>
            <Nav/>
            <Jump/>
            <Feature/>
            <Section/>
            <Footer/>
        </div>
        
    )
}

export default App;

///Nav.js
import React from 'react';

const Nav = () =>{
    return (
        <nav className="navbar navbar-expand-lg text-white bg-dark">
        <a className="navbar-brand text-success" href="#">Navbar</a>
  
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-white">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Meeting</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
  
    )
}

export default Nav;

//feature.js
import React from 'react';

const Feature = () =>{
    return (
        <div>
            <div className="bg-success text-center">
                <p className="display-4 text-white p-4">Discover the amazing new app</p>
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
                </p>
                <div className="row  p-4">
                    <div className="col-6 text-right">
                    <button className="btn btn-warning btn-lg">Play Store</button>
                    </div>
                    <button className="btn btn-warning btn-lg">App Store</button>
                    <div className="col-6 text-center"></div>
                </div>
                </div>
        </div>
    )
}

export default Feature;

///jump.js
import React from 'react';

const Jump = () =>{
    return (
        <div>
            <div className="jumbotron ">
                <h1 className="display-4">App looks great!</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                    necessitatibus, quas voluptas beatae optio maxime cupiditate at fuga
                    officiis odit rem provident nobis esse magni! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Assumenda velit dolorem repudiandae qui
                    rerum possimus sit animi. Illo, laudantium ea!
                </p>
                <hr className="my-4" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    incidunt?
                </p>
                <a className="btn btn-success btn-lg" href="#" role="button"
                    >React is awesome</a>
                    </div>

        </div>
    )
}


export default Jump;

//section.js
import React from 'react';
import Card from './Card';

const Section = () =>(
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <Card title="mango"/>
          <Card/>
          <Card title="orange"/>
        </div>
      </div>
    </section>
)

export default Section;

///card.js
import React from 'react';

const Card = ({title="Apple"}) =>{
    return (
        <div>
            <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-success">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Card;