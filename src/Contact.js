import './Contact.css'

function Contact(){
    return(
        <div className='div1'>
            <div className='div2'>
                <h2 className='con1'>Contact</h2>
                <p className='con1' id='greeting1'>Thank you for your interest in reaching out! Whether you have a
                    Project in your mind, a question or just want to say Hello, <br/>
                    I'd love to hear from you.  Here's how you can get in touch with me:</p>
                <h3 className='con1'>EMAIL:</h3>
                <a href="mailto:ganeshkumarpanthadi@gmail.com"><img className="con1" src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" alt="Gmail Logo" id='gmail-icon'></img></a>
                <a href="mailto:ganeshkumarpanthadi@gmail.com"><p className='con1' id='email-text'>ganeshkumarpanthadi@gmail.com</p></a>
                <a href="tel:+919392307200"><i class="fa-solid fa-phone" id='phone-icon'></i>
                <p className='con1' id='ph-no'>+91-9392307200</p></a>
                <h3 className='con1'>SOCIAL MEDIA:</h3>
                <ul className='social-icons'>
                    <li><a href='https://www.linkedin.com/in/ganesh-kumar-panthadi-77a2a6297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='con1' id='linkedin-link'>LinkdIn</a></li>
                    <li><a href='https://www.instagram.com/darling__gani0121?igsh=MXBhY3N3cDg1NjVlNw==' className='con1' id='insta-link'>instagram</a></li>
                    <li><a href='https://www.facebook.com/ganesh.panthadi.3?mibextid=ZbWKwL' className='con1' id='fb-link'>facebook</a></li>
                </ul>
                <p className='con1' id='last-words'>I'm always open to new opportunities and projects, so feel free to reach out. I look forward to hearing from you!</p>
            </div>
        </div>
    )
}


export default Contact;