import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

function UserHome() {

    const [category,setCategory] = useState([]);
    const [mobile,setMobile] = useState("");
    const [email,setEmail] = useState("");
    
    const fetchCategory = () => {
        axios.get('http://localhost:3001/fetchCategory')
        .then((res) => {
            console.log(res.data);
            setCategory(res.data);
        }).catch((error) => {
            console.log(error);
        });  
    }
    const fetchContact = () => {
        axios.get('http://localhost:3001/fetchContact')
        .then((res) => {
            console.log(res.data);
            setEmail(res.data[0].email);
            setMobile(res.data[0].mobile);
        }).catch((error) => {
            console.log(error);
        }); 
    }

    useEffect(()=>{
        fetchCategory();
        fetchContact();
    },[]);

  return (
    <>
      <div className='wrapper'>
        {/* Header Start */}
        <header className="header">
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-sm-8 col-xs-12">
              <a href="/">
                <div className="main-logo">
                  <img src="assets/img/main-logo.svg" alt="" width={'200px'} />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <ul className="nav" style={{color:'green'}}>
                {/* Add more navigation items as needed */}
                <li className="nav-item" >
                  <Link to="/login" className="nav-link">
                    <button className="custom-btn btn-11" >Login</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
            {/* Header End */}
            {/* Help Start */}
            <section className="carosal-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <Carousel>
                            {category.map((item) => (
                            <Carousel.Item key={item.category}>
                                <div className="text">
                                <h3>{item.category}</h3>
                                <p>{item.details}</p>
                                <h5 className="white-button"><Link to="/Login">DONATE NOW</Link></h5>
                                <h5><a href="/">CONTACT US</a></h5>
                                </div>
                            </Carousel.Item>
                            ))}
                        </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* Help End */}
            {/* Activity Start */}
            <section className="our_activity">
            <h2>OUR ACTIVITY</h2>
            <p>
                At <b>WE CARE</b>, we are committed to making a positive impact on the lives of those in need. 
                <br/>Our dedicated team engages in various activities to uplift and support communities, driven by the belief that every act of kindness can create a ripple effect of change.
            </p>
            <div className="container">
                <div className="row">
                <div className="col-md-4 col-xs-12">
                    <div className="single-Promo">
                    <div className="promo-icon">
                        <i className="material-icons">near_me</i>
                    </div>
                    <h2><a href="/">Fundraising</a></h2>
                    <p>
                        Our fundraising initiatives aim to gather resources and financial support to address critical needs. By mobilizing the generosity of individuals and organizations, we can make a meaningful impact on various projects and causes.
                    </p>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="single-Promo">
                    <div className="promo-icon">
                        <i className="material-icons">favorite</i>
                    </div>
                    <h2><a href="/">Volunteering</a></h2>
                    <p>
                        Volunteering lies at the heart of our mission. We believe that by uniting people willing to contribute their time and skills, we can create positive change. Join us in making a difference through hands-on volunteering opportunities.
                    </p>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="single-Promo">
                    <div className="promo-icon">
                        <i className="material-icons">dashboard</i>
                    </div>
                    <h2><a href="/">Our Programs</a></h2>
                    <p>
                        Our programs are carefully designed to address specific needs within communities. Whether it's education, healthcare, or sustainable development, we strive to implement effective and sustainable solutions that leave a lasting impact on the lives of those we serve.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Activity End */}
            {/* Cause Start */}
            <section className="donate_section">
                <div className="container">
                    <div className="col-md-12">
                        {/* <h4>URGENT  CAUSE</h4> */}
                        <h3>Recent Environmental Disasters</h3>
                        <p>In the face of recent environmental disasters, our mission is to provide immediate relief and support to affected communities. Your contribution can make a significant difference in helping those in need rebuild their lives and restore their communities.</p>
                        <div className="progress-text">
                            <p className="progress-top">80%</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="70" style={{width:500}}></div>
                            </div>
                            <p className="progress-left">Raised: ₹1,50,000</p>
                            <p className="progress-right">Goal: ₹1,75,000</p>
                            <h2><Link to={"/Login"}>DONATE NOW</Link></h2>
                        </div><br></br>
                    </div>
                </div>
            </section>
            {/* Cause End */}
            {/* Event Start */}
            <section className="events_section_area">
            <h2>UPCOMING EVENTS</h2>
            <p>
                Join us in making a positive impact through our upcoming events. Your participation can bring about meaningful change and contribute to the well-being of our communities.
            </p>
            <div className="container">
                <div className="row">
                <div className="col-md-4 col-xs-12">
                    <div className="events_single">
                    <img src="assets/img/events_single_two.jpg" alt="" />
                    <p>
                        <span className="event_left"><i className="material-icons">access_time</i>1:00 pm - 3:00 pm</span>
                        <span className="event_right"><i className="material-icons">location_on</i>Gandhi Nagar</span>
                    </p>
                    <div className="clear"></div>
                    <h3>Education For Children</h3>
                    <h6>
                        Join us for an educational initiative aimed at brightening the future of children. Your support can make a lasting impact on their lives.
                    </h6>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="events_single">
                    <img src="assets/img/events_single_one.jpg" alt="" />
                    <p>
                        <span className="event_left"><i className="material-icons">access_time</i>5:00 pm - 7:00 pm</span>
                        <span className="event_right"><i className="material-icons">location_on</i>Delhi</span>
                    </p>
                    <h3>Health Treatment For Senior Citizen</h3>
                    <h6>
                        Join us in providing health treatments to senior citizens. Your participation can bring comfort and well-being to those in need.
                    </h6>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="events_single">
                    <img src="assets/img/001.jpg" alt="" />
                    <p>
                        <span className="event_left"><i className="material-icons">access_time</i>12:00 pm - 2:00 pm</span>
                        <span className="event_right"><i className="material-icons">location_on</i>Mumbai</span>
                    </p>
                    <h3>Distribute Food & Clothes</h3>
                    <h6>
                        Join us in the effort to distribute food and clothes to those in need. Your kindness can make a significant difference in their lives.
                    </h6>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Event End */}
            {/* Favorite Start */}
            <div className="block-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                            <div className="block">
                                <p><i className="material-icons">favorite</i></p>
                                <p className="counter-wrapper"><span className="fb"></span></p>
                                <p className="text-block">CAUSES</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                            <div className="block">
                                <p><i className="material-icons">language</i></p>
                                <p className="counter-wrapper"><span className="code"></span></p>
                                <p className="text-block">PLACES</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                            <div className="block">
                                <p><i className="material-icons">person_add</i></p>
                                <p className="counter-wrapper"><span className="bike"></span></p>
                                <p className="text-block">VOLUNTEERS</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                            <div className="block">
                                <p><i className="material-icons">people</i></p>
                                <p className="counter-wrapper"><span className="coffee"></span></p>
                                <p className="text-block">SAVED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Favorite End */}
            {/* Cause Start */}
            <section className="our_cuauses">
                <h2>OUR CAUSES</h2>
                <p>Join us in making a positive impact through our various causes. Your support can bring about significant changes in the lives of those in need</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="our_cuauses_single owl-carousel owl-theme">
                                <div className="item">
                                    <img src="assets/img/our_cuauses_one.jpg" alt="" />
                                    <div className="for_padding">
                                        <h2>DONATION FOR CHILDREN</h2>
                                        <p>Support the education and well-being of children. Your donation can brighten their future and provide them with essential resources.</p>
                                        <div className="progress-text">
                                            <p className="progress-top">50%</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:136}}></div>
                                            </div>
                                            <p className="progress-left">Raised: <span>₹1,00,000</span></p>
                                            <p className="progress-right">Goal: <span>₹2,50,000</span></p>
                                        </div>
                                        <h2 className="borderes"><Link to={"/Login"}>DONATE NOW</Link></h2>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/our_cuauses_two.jpg" alt="" />
                                    <div className="for_padding">
                                        <h2>EDUCATION FOR ALL</h2>
                                        <p>Empower the future by supporting education for children. Your donation helps provide access to quality education and brighter prospects.</p>
                                        <div className="progress-text">
                                            <p className="progress-top">50%</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:170}}></div>
                                            </div>
                                            <p className="progress-left">Raised: <span>₹1,50,000</span></p>
                                            <p className="progress-right">Goal: <span>₹3,00,000</span></p>
                                        </div>
                                        <h2 className="borderes"><Link to={"/Login"}>DONATE NOW</Link></h2>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/our_cuauses_three.jpg" alt="" />
                                    <div className="for_padding">
                                        <h2>HEALTHCARE INITIATIVES</h2>
                                        <p>Support health programs for communities in need. Your contribution ensures access to medical facilities and promotes well-being.</p>
                                        <div className="progress-text">
                                            <p className="progress-top">50%</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:105}}></div>
                                            </div>
                                            <p className="progress-left">Raised: <span>₹55,000</span></p>
                                            <p className="progress-right">Goal: <span>₹1,80,000</span></p>
                                        </div>
                                        <h2 className="borderes"><Link to={"/Login"}>DONATE NOW</Link></h2>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/our_cuauses_three.jpg" alt="" />
                                    <div className="for_padding">
                                        <h2>FOOD & CLOTHING DRIVE</h2>
                                        <p>Contribute to our efforts in providing food and clothing to those in need. Your donation helps in addressing basic necessities.</p>
                                        <div className="progress-text">
                                            <p className="progress-top">50%</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:150}}></div>
                                            </div>
                                            <p className="progress-left">Raised: <span>₹2,00,000</span></p>
                                            <p className="progress-right">Goal: <span>₹5,00,000</span></p>
                                        </div>
                                        <h2 className="borderes"><Link to={"/Login"}>DONATE NOW</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* Cause End */}
            {/* Volunteer Start */}
            <div className="clear"></div>
            <section className="volunteer_area">
            <h2>Meet Our Dedicated Volunteers</h2>
            <p>Our team is comprised of passionate individuals who contribute their time and skills to make a positive impact in the community.</p>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="volunteer_single owl-carousel owl-theme">
                    <div className="item">
                        <img src="assets/img/volanteer_1.jpg" alt="Apoorva - Volunteer" />
                        <div className="text">
                        <h3>Apoorva</h3>
                        <h6>Community Outreach</h6>
                        <p>Apoorva is dedicated to reach out to communities in need and ensuring everyone's voice is heard.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/img/volanteer_2.jpg" alt="Akhila - Volunteer" />
                        <div className="text">
                        <h3>Akhila</h3>
                        <h6>Event Coordinator</h6>
                        <p>Akhila coordinates events <br/> to raise awareness and funds for our charitable initiatives.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/img/volanteer_3.jpg" alt="Champaka - Volunteer" />
                        <div className="text">
                        <h3>Champaka</h3>
                        <h6>Health Advocate</h6>
                        <p>Champaka is passionate <br/> about promoting health <br/> and wellness in the community.</p>
                        </div>
                    </div>
                    {/* Add more volunteers as needed */}
                    </div>
                </div>
                </div>
            </div>
            </section>
            <div className="clear"></div>
            {/* Volunteer End */}
            {/* Designer Start */}
            <section className="carosal_bottom">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="carosal_bottom_single owl-carousel owl-theme">
                    <div className="item">
                        <img src="assets/img/volanteer_1.jpg" alt="Florence M. Cofer - Designer" />
                        <p>Passionate about design and creativity, Florence contributes her skills to create impactful visuals that resonate with our cause.</p>
                        <h5><i className="material-icons">format_quote</i></h5>
                        <h4>Florence M. Cofer</h4>
                        <h6>Designer</h6>
                    </div>
                    <div className="item">
                        <img src="assets/img/volanteer_2.jpg" alt="Florence M. Cofer - Designer" />
                        <p>Dedicated to making a difference, Florence believes in the power of design to convey messages and evoke emotions for positive change.</p>
                        <h5><i className="material-icons">format_quote</i></h5>
                        <h4>Florence M. Cofer</h4>
                        <h6>Designer</h6>
                    </div>
                    <div className="item">
                        <img src="assets/img/volanteer_3.jpg" alt="Florence M. Cofer - Designer" />
                        <p>With a keen eye for aesthetics, Florence contributes her creative talents to our team, enhancing the visual appeal of our campaigns and initiatives.</p>
                        <h5><i className="material-icons">format_quote</i></h5>
                        <h4>Florence M. Cofer</h4>
                        <h6>Designer</h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Designer End */}
            {/* News Start */}
            <section className="letast_news">
                <h2>latest news</h2>
                <p>Stay updated with our latest news and events. Explore the stories of positive impact and change happening in our community.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single_news">
                                <img src="assets/img/news_images_1.jpg" alt="" />
                                <div className="texts">
                                    <p className="date"><a href="/">30 May, 2022</a></p>
                                    <h3>Inauguration of New Community Center</h3>
                                    <p className="test">We are excited to announce the grand opening of our new community center. This facility aims to serve and support various community initiatives.</p>
                                    <h3><a href="/">READ MORE</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single_news">
                                <img src="assets/img/news_images_2.jpg" alt="" />
                                <div className="texts">
                                    <p className="date"><a href="/">30 May, 2022</a></p>
                                    <h3>Empowering Youth Through Education</h3>
                                    <p className="test">Our latest education program is empowering young minds. Read about the success stories and the impact your support is creating.</p>
                                    <h3><a href="/">READ MORE</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single_news">
                                <img src="assets/img/news_images_3.jpg" alt="" />
                                <div className="texts">
                                    <p className="date"><a href="/">30 May, 2022</a></p>
                                    <h3>Community Health and Wellness Event</h3>
                                    <p className="test">Join us in our upcoming health and wellness event. Learn about the importance of a healthy lifestyle and preventive healthcare measures.</p>
                                    <h3><a href="/">READ MORE</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* News End */}
            {/* Help Start */}
            {/* <section className="footer_carosal">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer_carosal_icon owl-carousel owl-theme">
                                <div className="item">
                                    <img src="assets/img/microsoft.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/envato.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/yahoo.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/jquery.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/amazon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Help End */}
            {/* Footer Start */}
            <footer className="footer">
            <div className="container">
                <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="footer-charity-text">
                    <img src="assets/img/main-logo.svg" alt="Charity Foundation Logo" width={'200px'} />
                    <p>Welcome to Charity Foundation, where we strive to make a positive impact on communities. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <hr />
                    <p>
                        <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="/"><i className="fa fa-behance" aria-hidden="true"></i></a>
                        <a href="/"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                    </p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                    <div className="col-md-4 col-sm-5">
                        <div className="footer-text one">
                        <h3>RECENT POST</h3>
                        <ul>
                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> New Community Center Inaugurated</a></li>
                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> Empowering Youth Through Education</a></li>
                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> Community Health and Wellness Event</a></li>
                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> Supporting Sustainable Living</a></li>
                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> Building a Stronger Community</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-3">
                        <div className="footer-text two">
                        <h3>USEFUL LINKS</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Causes</a></li>
                            <li><a href="/">Events</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="footer-text one">
                        <h3>CONTACT US</h3>
                        <ul>
                            <li><a href="/"><i className="material-icons">location_on</i>Bangalore Karnataka</a></li>
                            <li><a href="/"><i className="material-icons">email</i>info@charityfoundation.org</a></li>
                            <li><a href="/"><i className="material-icons">call</i>+123456789</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p>Copyright @ 2024 <a href="/">We Care Charity Foundation</a> | All Rights Reserved </p>
            </div>
            </footer>
            {/* Footer End */}
      </div>
      
    </>
  )
}

export default UserHome
