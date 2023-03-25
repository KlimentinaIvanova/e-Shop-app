import './App.css';
import Header from './components/Header';
import { Home } from './components/Home';
import Catalog from './components/Catalog'
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
<>
<Header/>
<Home/>
<Catalog/>

  {/* best */}
  <div id="" className="best">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
         
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
       
        </div>
        <div className="col-md-4">
          <div className="best_box">
            
          </div>
        </div>
        <div className="col-md-4">
          <div className="best_box">

          </div>
        </div>
        <div className="col-md-12">
          
        </div>
      </div>
    </div>
  </div>
  {/* end best */}
  {/* request */}
  <div id="contact" className="request">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
           
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="black_bg">
            <div className="row">
              <div className="col-md-7 ">
                <form className="main_form">
                  <div className="row">
                    <div className="col-md-12 ">
                      
                    </div>
                    <div className="col-md-12">
                      
                    </div>
                    <div className="col-md-12">
                      
                    </div>
                    <div className="col-md-12">
                      
                    </div>
                    <div className="col-sm-12">
                      
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <div className="mane_img">
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end request */}
  {/* two_box section */}
  <div className="two_box">
    <div className="container-fluid">
      <div className="row d_flex">
        <div className="col-md-6">
          <div className="two_box_img">
            
          </div>
        </div>
        <div className="col-md-6">
          <div className="two_box_img">
           
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end two_box section */}
  {/* testimonial */}
  <div className="testimonial">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
      
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div
            id="myCarousel"
            className="carousel slide testimonial_Carousel "
            data-ride="carousel"
          >
           
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="test_box">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="test_box">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="test_box">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end testimonial */}
  {/*  footer */}
  <footer>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="cont">
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="cont_call">
              <h3>
                {" "}
                <strong className="multi"> Call Now</strong>
                <br />
                (+1) 12345667890
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}
  {/* Javascript files*/}
  {/* sidebar */}
</>

  );
}

export default App;
