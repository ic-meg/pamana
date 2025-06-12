import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';
import logo from '../../../assets/images/logo.png';
import phoneIcon from '../../../assets/icons/phone-call-1.png';
import emailIcon from '../../../assets/icons/gmail-1.png';
import githubIcon from '../../../assets/icons/social-1.png';
import socialIcon from '../../../assets/icons/image-2.png';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

 // handles sending email through EmailJS
  const sendEmail = (e) => { 
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_ytdlgae',   // EmailJS Service ID
      'template_q9l7pie',  // EmailJS Template ID
      form.current,
      'FNZvvd_eF6N9oVTSj'    // EmailJS Public key
    )
    .then(() => {
      setSubmitStatus('success');
      form.current.reset();
    })
    .catch(() => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };
  React.useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
  
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);
  

  return (
    <div className="contact-container">
      <div className="background-logo">
        <img src={logo} alt="The Script Logo" />
      </div>
      <div className="contact-content">
        {/* Link */}
        <div className="contact-info-section">
          <p className='text-3xl font-vt323 leading-tight'>Contact Us</p>
          <p className="text-justify text-sm sm:text-base leading-relaxed sm:leading-normal px-2 sm:px-0">
            We're here to collaborate and happy to answer any questions.  
            If you have any opportunities, feel free to contact us —
            <span className="hidden sm:inline"> just fill out the form on the right</span>
            <span className="inline sm:hidden"> just fill out the form below</span>, and we’ll get back to you as soon as we can!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <span>0912-345-6789</span>
            </div>
            <div className="contact-item">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <span>2025thescript@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src={socialIcon} alt="GitHub" className="contact-icon" />
              <a 
                href="https://github.com/ic-meg/our-portfolio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-500 underline"
              >
                GitHub Repository
              </a>
            </div>
            <div className="contact-item">
              <img src={githubIcon} alt="Social Media" className="contact-icon" />
              <span>@The&lt;Script&gt;</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="text-2xl contact-form-section">
          <p className='font-vt323 text-2xl'>Send us a message</p>

          {/* Success */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div
              className={`transform transition-all duration-500 ease-out pointer-events-auto
                ${submitStatus === 'success' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
              <div className="bg-[#C0C0C0] border border-black shadow-[4px_4px_0px_black] w-[300px]">
                {/* Top bar */}
                <div className="flex justify-between items-center bg-[#000080] text-white px-2 py-[2px]">
                  <span className="text-xs font-bold">Windows Message</span>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="text-white text-xs hover:bg-[#808080] px-1"
                  >
                    ✕
                  </button>
                </div>
                {/* Body */}
                <div className="p-4 text-sm text-black font-courier">
                  ✅ Message sent successfully!
                </div>
              </div>
            </div>
          </div>

          {/* Error */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div
              className={`transform transition-all duration-500 ease-out pointer-events-auto
                ${submitStatus === 'error' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
              <div className="bg-[#F8D7DA] border border-black shadow-[4px_4px_0px_black] w-[300px]">
                {/* Top bar */}
                <div className="flex justify-between items-center bg-[#8B0000] text-white px-2 py-[2px]">
                  <span className="text-xs font-bold">Error</span>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="text-white text-xs hover:bg-[#cc0000] px-1"
                  >
                    ✕
                  </button>
                </div>
                {/* Body */}
                <div className="p-4 text-sm text-black font-courier flex items-start gap-2">
                  <span className="text-red-600 text-lg">❌</span>
                  <p>Failed to send message. Please try again.</p>
                </div>
              </div>
            </div>
          </div>


          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group text-2xl">
              <label><span className="required-asterisk">*</span>Your Name:</label>
              <input type="text" name="user_name" required />
            </div>
            
            <div className="form-group">
              <label><span className="required-asterisk">*</span>Email:</label>
              <input type="email" name="user_email" required />
            </div>
            
            <div className="form-group">
              <label>Company (optional):</label>
              <input type="text" name="company" />
            </div>
            
            <div className="form-group">
              <label><span className="required-asterisk">*</span>Message:</label>
              <textarea name="message" required></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          <p className="form-footer text-sm italic mt-1">
            All messages get forwarded straight to our team <br />
            <span className="text-red-500">*</span> = required
          </p>
    
        </div>
      </div>
    </div>
  );
};

export default Contact;