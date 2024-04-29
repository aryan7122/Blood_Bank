import { NavBar } from './NavBar';
import { NavLink } from 'react-router-dom'
import './HomeCss.css'
import About from './About';
import Blog from './Blog';

const Home = () => {

    return (
        <>
            <NavBar />
            <div id='' className="Home_background">
                <div className="blur_img">
                </div>
                <div className='text'>
                    <h1>
                        A Drop of Kindness <br />
                        Donate Blood!
                    </h1>
                    <p>Be a hero: Donate blood today. Your small act of kindness can save lives and bring hope to those in need. Join us in this lifesaving mission and make a difference. Every drop counts. Together, let's spread love and give the gift of life.</p>
                        <NavLink
                            exact
                            to="/login"
                  >
                    <button>
                            Donate Blood
                    </button>
                        </NavLink>
                </div>
            </div>
            <div className='quote'>
                <div>
                    <h2>
                        Blood donation is the ultimate gesture of humanity, where the power to save lives lies within each of us.
                    </h2>
                    <p>
                        Blood donation is the gift of life, the purest gesture of humanity, and the ultimate act of selflessness. Each drop you give has the power to save a life, ignite hope, and inspire countless others to follow in your footsteps. Embrace the opportunity to make a difference, for in giving, we find the truest expression of our humanity.
                    </p>
                </div>
            </div>
            <About/>
            <Blog />
        </>
    );
};

export default Home;

