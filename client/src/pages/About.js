import React from 'react';
import './HomeCss.css';
// import img1 from '../../public/assets/images/about_1.jpg';
import { NavBar } from './NavBar';
import { MdAutoStories } from "react-icons/md";
import { GiGrowth, GiStairsGoal } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdAddHomeWork, MdBloodtype } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { RxTransparencyGrid } from "react-icons/rx";
import { FaUser, FaBriefcase, FaHeartbeat } from 'react-icons/fa';
import  { useState, useEffect } from 'react';


const About = () => {
    const [experience, setExperience] = useState(0);
    const [staff, setStaff] = useState(0);
    const [bloodPerMonth, setBloodPerMonth] = useState(0);
    const [cooperation, setCooperation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment numbers every 2 seconds until reaching the specified value
            if (experience < 24) setExperience(experience + 1);
            if (staff < 98) setStaff(staff + 1);
            if (bloodPerMonth < 50) setBloodPerMonth(bloodPerMonth + 1);
            if (cooperation < 33) setCooperation(cooperation + 1);
        }, 100);

        // Clear interval when all numbers reach their specified value
        return () => clearInterval(interval);
    }, [experience, staff, bloodPerMonth, cooperation]);

    return (
        <>
            <NavBar />
            <div id='about' className='about_bg'>
                <div id='about_bg'>
                    <div>
                        <h2>About Us</h2>
                        <h3>Welcome to Donate Blood, a platform dedicated to saving lives through blood donation.</h3> 
                    </div>
                    
                </div>
                <div className="grid-container">
                        <div className="grid-item">
                            <span><FaUser /></span>
                            <p>{experience}+</p>
                            <p>Year Experience</p>
                        </div>
                        <div className="grid-item">
                            <span><FaBriefcase /></span>
                            <p>{staff}+</p>
                            <p>Expert Staff</p>
                        </div>
                        <div className="grid-item">
                            <span> <FaHeartbeat /></span>
                            <p>{bloodPerMonth}+</p>
                            <p>Blood Per-Month</p>
                        </div>
                        <div className="grid-item">
                            <span> <FaHandshake /></span>
                            <p>{cooperation}+</p>
                            <p>Cooperation</p>
                        </div>
                </div>
                <div className='about_content' id='about_content_top'>
                    <div className='img_text_about'>
                        <div id='img'>
                            <img src='https://templatekit.jegtheme.com/redirect/wp-content/uploads/sites/141/2021/08/doctor-talking-to-patient-at-hospital.jpg' alt="" />
                        </div>
                        <div id='text'>
                            <h3>Our Mission:</h3>
                            <p>At Donate Blood, our mission is simple yet profound: to bridge the gap between blood donors and those in need, ensuring a reliable and sustainable blood supply for hospitals and communities worldwide. We believe that every drop of blood donated has the power to make a difference and save lives.</p>
                            <h3>Who We Are:</h3>
                            <p>Donate Blood was founded by a team of passionate individuals committed to making a positive impact on society. With backgrounds in healthcare, technology, and community service, we came together with a shared vision of leveraging technology to streamline the blood donation process and inspire more people to become blood donors.</p>
                            <h3>What We Do:</h3>
                            <p>Through our online platform, we aim to raise awareness about the importance of blood donation, educate the public about eligibility criteria and donation procedures, and provide resources to support both donors and recipients. We facilitate the connection between blood donors and donation centers, making it easier for people to find donation opportunities and make a meaningful contribution to their communities.</p>
                        </div>
                    </div>
                </div>
                <div className='about_content about_content2 '>
                    <div className='img_text_about'>
                        <div id='img'>
                            <img src='https://templatekit.jegtheme.com/redirect/wp-content/uploads/sites/141/2021/08/UVG5CCF.jpeg' alt="" />
                        </div>
                        <div id='text' className='text22'>
                            <h3>Our Values:</h3>
                            <ul>
                                <li>
                                    <strong> Compassion:</strong> We are driven by empathy and a deep sense of compassion for those in need.
                                </li>
                                <li>
                                    <strong> Integrity:</strong>  We uphold the highest standards of integrity, transparency, and accountability in everything we do.
                                </li>
                                <li>
                                    <strong>  Innovation:</strong> We embrace innovation and technology to improve the blood donation experience and maximize our impact.
                                </li>
                                <li>
                                    <strong> Collaboration: :</strong> We believe in the power of collaboration and partnerships to achieve our shared goals.
                                </li>
                                <li>
                                    <strong>  Empowerment:</strong> We empower individuals to become lifesavers by providing them with the information, resources, and support they need to donate blood and make a difference.
                                </li>
                            </ul>
                            <h3>Get Involved:</h3>
                            <p>Whether you're a first-time donor, a regular donor, or someone interested in supporting our mission, there are many ways to get involved with donate Blood. Explore our website, learn more about blood donation, find donation centers near you, and join us in our lifesaving mission today.</p>

                        </div>
                    </div>
                </div>
                <div className="about_card">
                    <div>
                        <span>
                            <MdAutoStories />
                        </span>
                        <h3>Impact Stories</h3>
                        <p>Share compelling stories of individuals whose lives have been positively impacted by blood donation. Include testimonials from donors, recipients, and healthcare professionals to highlight the real-world significance of your organization's work.</p>
                    </div>
                    <div>
                        <span>
                            <GiGrowth />
                        </span>
                        <h3>Milestones and Achievements</h3>
                        <p>Highlight key milestones, achievements, and milestones reached by your organization since its inception. This could include the number of lives saved, successful blood drives organized, partnerships established, or recognition received.</p>
                    </div>
                    <div>
                        <span>
                            <RiTeamFill />
                        </span>
                        <h3>Team Members</h3>
                        <p>Introduce the members of your team, including their roles and backgrounds. Personalize the page by sharing photos and brief bios of team members, showcasing their dedication and expertise in advancing your organization's mission.</p>
                    </div>
                    <div>
                        <span>
                            <MdAddHomeWork />
                        </span>
                        <h3>Partnerships and Collaborations</h3>
                        <p>Highlight partnerships with hospitals, blood banks, non-profit organizations, and other stakeholders in the healthcare sector. Emphasize the collaborative nature of your work and the collective impact achieved through strategic alliances.</p>
                    </div>
                    <div>
                        <span>
                            <FaHandshake />
                        </span>
                        <h3>Volunteer Opportunities</h3>
                        <p>Invite visitors to become more deeply involved by volunteering with your organization. Outline various volunteer roles and opportunities available, such as event coordination, community outreach, or social media advocacy.</p>
                    </div>
                    <div>
                        <span>
                            <MdBloodtype />
                        </span>
                        <h3>Donor Recognition</h3>
                        <p>Express gratitude to donors and supporters who have contributed to your organization's success. Consider featuring a donor recognition section, where you acknowledge individuals, businesses, or organizations that have made significant contributions to your cause.</p>
                    </div>
                    <div>
                        <span>
                            <RxTransparencyGrid />
                        </span>
                        <h3>Transparency and Accountability</h3>
                        <p>Demonstrate your organization's commitment to transparency and accountability by providing information on governance, financial stewardship, and regulatory compliance. This can help build trust and confidence among potential donors and partners.</p>
                    </div>
                    <div>
                        <span>
                            <GiStairsGoal />
                        </span>
                        <h3>Future Goals and Vision</h3>
                        <p>Share your organization's vision for the future and outline strategic goals and initiatives aimed at furthering your impact. Invite stakeholders to join you on this journey toward a healthier, more equitable world.</p>
                    </div>

                </div>
               
                <div className='Expert_Staff
'>

                </div>

            </div>
        </>
    );
};

export default About;
