import image from './images/1694970552272.jpg'
import './Main.css'


function Main(){
    const handleDownload = () => {
        // Create a temporary anchor element
        const downloadLink = document.createElement('a');
        downloadLink.href = `${process.env.PUBLIC_URL}/Ganesh kumar CV Resume.pdf`;
        downloadLink.download = 'ganesh_resume.pdf'; 
        downloadLink.style.display = 'none'; 
        document.body.appendChild(downloadLink);
        downloadLink.click(); 
        document.body.removeChild(downloadLink); 
      };
      
    return(
        <div>
            <div className='left'>
                <div className='img'>
                <img src={image} id='image1' alt='Welcome to my profile'/>
                </div>
                <div className='socialmedia'>
                    <a href='https://www.instagram.com/darling__gani0121?igsh=MXBhY3N3cDg1NjVlNw=='><i class="fa-brands fa-instagram" id='insta'></i></a>
                    <a href='https://www.linkedin.com/in/ganesh-kumar-panthadi-77a2a6297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><i class="fa-brands fa-linkedin" id='linkedin'></i></a>
                    <a href='https://www.facebook.com/ganesh.panthadi.3?mibextid=ZbWKwL'><i class="fa-brands fa-facebook" id='facebook'></i></a>
                    <a href='https://github.com/Ganesh7200/project1.git'><i class="fa-brands fa-github" id='git'></i></a>
                    <button id='resume' onClick={handleDownload}>Download Resume</button>
                </div>
            </div>
            <div className='right'>
                <h1 id='name'>Ganesh Kumar</h1>
                <h1 id='skillname'>Full Stack Python Developer......</h1>
                <i><p id='matter'>Specializing in full-stack Python development, I leverage the unparalleled versatility and power of Python 
                    to craft seamless and sophisticated web applications. With expertise in leading frameworks such as Django ,
                    I seamlessly blend creativity with functionality, producing visually stunning and intuitive user interfaces. 
                    Python's extensive ecosystem of libraries and tools enables me to streamline development workflows, 
                    ensuring efficient and agile project delivery. Harnessing the simplicity and readability of Python, 
                    I architect scalable and maintainable server-side logic, empowering applications to handle diverse and 
                    dynamic user interactions with ease. Additionally, my proficiency extends to building robust RESTful APIs 
                    using Django REST Framework, facilitating seamless communication between front-end and back-end components. 
                    With a keen eye for detail and a passion for innovation, I continually strive to push the boundaries of 
                    full-stack Python development, delivering exceptional solutions that leave a lasting impression.</p></i>
            </div>
        </div>
    
    );
};

export default Main;

