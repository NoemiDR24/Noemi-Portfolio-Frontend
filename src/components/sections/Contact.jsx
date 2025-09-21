import './Contact.css'
import { useState } from 'react';
// import { submitContactForm } from "../../services/ContactService.js"; 

function Contact(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submit, setSubmit] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await submitContactForm(form);
    //         console.log("Mensaje guardado:", response); 
    //         setSubmit(true);
    //         //Clears previous messages
    //         setErrorMessage(false); 
    //         setForm({ name: "", email: "", message: "" });

    //             //Hide message after 3 seconds
    //             setTimeout(() => {
    //                     setSubmit(false);
    //                 }, 3000);

    //     } catch (error) {
    //         console.error("Error:", error);
    //         setErrorMessage(true);
    //         //Clears previous messages
    //         setSubmit(false);

    //             //Hide message after 3 seconds
    //             setTimeout(() => {
    //                 setErrorMessage(false);
    //             }, 3000);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('form-name', 'contact');
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('message', form.message);

        try {
            const response = await fetch('/', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log("Mensaje enviado exitosamente");
                setSubmit(true);
                setErrorMessage(false); 
                setForm({ name: "", email: "", message: "" });

                setTimeout(() => {
                    setSubmit(false);
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage(true);
            setSubmit(false);

            setTimeout(() => {
                setErrorMessage(false);
            }, 3000);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div>
                    <h4>04</h4>
                    <h1 className="size-50">Contact  Me</h1>    
                </div>
                <div className='greeting'>  			
                    <h3>I'd Love To Hear From You.</h3>
                    <p>I’d love to connect! Whether it’s a question, a project, or just to say hi, drop me a message and I’ll be happy to chat.</p>
                </div> 
                
                <div className='form-container'>
                    <form className="contact-form" 
                          name="contact" 
                          method="POST" 
                          data-netlify="true" 
                          onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <fieldset> 
                            <div className='form-field'> 
                                <input type="text" name="name" className="form-control" placeholder="Name" value={form.name} onChange={handleChange} minLength={2} required/>
                            </div>    
                            <div className='form-field'>
                                <input type="email" name="email" className="form-control" placeholder="E-mail" value={form.email} onChange={handleChange} required/>
                            </div>                            
                            <div className='form-field'>
                                <textarea name="message" className="form-control" placeholder="Message"  value={form.message} onChange={handleChange} rows={7} cols={60} required></textarea>
                            </div>                 
                            <div className='form-field'>
                                <button type="submit" name="submit" className="btn-submit">Send</button>
                                
                            </div>
                            <div id="success">
                                   { submit && <p className="green textcenter"> Your message was sent successfully! I will be in touch as soon as I can. </p>}
                            </div>
                            <div id="error">
                                { errorMessage && <p> Something went wrong, try refreshing and submitting the form again. </p>}
                            </div>                  
                        </fieldset>
                    </form>

                    <div className='info'>

                        {/* <div className='info-phone'>
                            <h3><i className="fas fa-phone-alt phone"></i>Phone Number</h3>
                            <p></p>
                        </div> */}
                        <div className='info-email'>
                            <h3><i className="fas fa-envelope email"></i>Email</h3>
                            <p>delgadilloroldannoemi@gmail.com</p>                
                        </div>
                                                
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;