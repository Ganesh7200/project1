import './Skills.css';
import pythonimage from'./images/pythonLogo-removebg-preview.png';
import mysqlimage from './images/MySQL-Logo-removebg-preview.png';
import djangoimage from './images/django-logo.png';
import restapiimage from './images/restAPIlogo.png';
import reactjsimage from './images/reactJsLogo.png';
import javascriptimage from './images/logo-javascript-png--784.png';
import htmlimage from './images/logohtmlhtml5.webp';
import cssimage from './images/css-variables-css-3-logo-removebg-preview.png';
function Skill(){
    return(
        <div className="main">
            <div className='submain1'> 
                <div className='pythonclass'>
                    <img src={pythonimage} alt='' id='pythonimg'/>
                    <p id='p1'>I am proficient in Python programming language, leveraging its capabilities to build robust 
                    and scalable web applications , automate tasks, and develop machine learning models for data
                    analysis and predictive modeling.</p>
                </div>
                <div className='mysqlclass'>
                    <img src={mysqlimage} alt='' id='mysqlimg'/>
                    <p>Proficient in designing and optimizing MySQL databases to ensure efficient data storage and retrieval for scalable web applications,
                    maximizing performance and scalability while maintaining data integrity and security.
                    </p>
                </div>
                <div className='djangoclass'>
                    <img src={djangoimage} alt='' id='djangoimg'/>
                    <p>"Proficient in utilizing Django, a high-level Python web framework, to rapidly develop secure, scalable, and feature-rich web applications, 
                        leveraging its built-in authentication, ORM, and admin interface for streamlined development and maintenanc</p>
                </div>
                <div className='restapiclass'>
                    <img src={restapiimage} alt='' id='restapiimg'/>
                    <p>Experienced in designing and implementing RESTful APIs using Python frameworks like Django REST Framework, 
                        facilitating seamless communication between frontend and backend systems, ensuring scalability, and 
                        flexibility.</p>
                </div>
            </div>
            <div className='submain2'>
                <div className='reactclass'>
                    <img src={reactjsimage} alt='' id='reactimg'/>
                    <p>Skilled in utilizing React.js, a powerful JavaScript library for building interactive user interfaces, 
                    to develop dynamic and responsive web applications, leveraging its component-based architecture
                     and virtual DOM for efficient rendering and seamless user experiences.</p>
                </div>
                <div className='javascriptclass'>
                    <img src={javascriptimage} alt='' id='jsimg'/>
                    <p>Proficient in JavaScript, the ubiquitous programming language of the web, implement client-side logic, 
                        handle asynchronous operations, and enhance user experiences through DOM manipulation and event handling."</p>
                </div>
                <div className='htmlclass'>
                    <img src={htmlimage} alt='' id='htmlimg'/>
                    <p>"Mastering HTML, the cornerstone of web development, laying the groundwork for captivating user interfaces. 
                        Structuring content, embedding media, and enabling seamless integration and dynamic interactions that 
                        engage users worldwide</p>
                </div>
                <div className='cssclass'>
                    <img src={cssimage} alt='' id='cssimg'/>
                    <p>Proficient in CSS, the style powerhouse of the web, sculpting visual elegance, 
                        and breathing life into digital interfaces. From fine-tuning layouts to crafting 
                        stunning animations, CSS transforms concepts into captivating user experiences, 
                        shaping the aesthetic landscape of the digital realm</p>
                </div>
            </div>
        </div>

    );
};

export default Skill;