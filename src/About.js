import img from './images/1699860694470.jpg'
import './About.css';
import { Link } from 'react-router-dom';
import skill from './images/skills image.jpeg'
import img2 from './images/WhatsApp Image 2024-03-10 at 18.09.46_58d00fd8.jpg'
import img3 from './images/WhatsApp Image 2024-03-10 at 18.09.46_d4667700.jpg'
import img4 from './images/WhatsApp Image 2024-03-10 at 18.09.47_125b5ba0.jpg'
function About(){
    return(
        <div>
            <div className="left">
                <a href={img} download className='download-link'>
                    <img src={img} alt='' id='img1' className="downloadable-image"/>
                </a>
                <i><p id='p11' className='pp'>Click on image to Download</p></i>
                <h1 id='skilll' className='skillss'>SKILLS:</h1>
                <p id='matter1' className='skillss'>Curious about my skill set? check out my 
                     <Link to="/skills"> <b id='skillpagee'>Skills</b></Link> page to see the tools and technologies
                    I'm currently mastering as I embark on this exhilarating journey.
                </p>
                <a href={img2} download><img src={img2} alt='' className='myimg' id='img2'/></a>
                <a href={img3} download ><img src={img3} alt='' className='myimg' id='img3'/></a>
                <a href={img4} download><img src={img4} alt='' className='myimg' id='img4'/></a>
            </div>
            <div className="right">
                <p id='p22' className='pp'>Welcome to My Portfolio! My name is <b id='namee'>Ganesh Kumar</b>, a budding full-stack python developer
                    eager to make my mark in the world of <b id='namee'>Software Development.</b></p>
                <p id='p33' className='pp'>Here's a glimpse into my journey and aspirations...</p>
                <p id='p44' className='pp'><i>My passion for </i><b id='namee'>Python & Full-stack development</b><i> knows no bounds. I'm committed to 
                    continuously honing my </i><b id='namee'>Skills</b>, <i>tackling new concepts, and collaborating with 
                    sessoned professionals to deliver</i> <b id='namee'>Innovative Solutions...</b></p>
                <a href={skill} download><img src={skill} alt='' id='skillimgg' className='downloadable-image'/></a>
                <h1 id='travel' className='travel1'>Travelling</h1>
                <p id='m2' className='travel1'>Beyond my professional pursuits, I have a deep <b className='m22'>love for travelling</b>. Ultimately, the greatest journey 
                    is the one within. <b className='m22'>Solo travel</b> offers a unique opportunity for <b className='m22'>self-discovery and personal 
                    growth</b>, allowing you to confront your <b className='m22'>fears, challenge your limits, and rediscover the strength and resilience</b> 
                    within yourself. Embrace the silence, embrace the solitude, and let the journey lead you to a place of 
                    profound <b className='m22'>peace and fulfillment...</b></p>
                <h1 id='contact-me' className='contact1'>Contact Me:</h1>
                <a href='mailto:ganeshkumarpanthadi@gmail.com' className='con'><i class="fa-regular fa-envelope" id='email1'></i><p className='contact1' id='email-name'>Email: ganeshkumarpanthadi@gmail.com</p></a>
                <a href='tel:+919392307200' className='con'><i class="fa-solid fa-phone" id='email1'></i><p className='contact1' id='phone-no'>Phone: +91 9392307200</p></a>
                <i class="fa-solid fa-handshake" id='greeting'></i><h1 className='contact1' id='thank-you'>Thank You For Visiting My Profile</h1>
            </div>
        </div>
    );
};

export default About;