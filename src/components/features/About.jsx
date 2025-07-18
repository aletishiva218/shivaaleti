import React,{ useRef }  from 'react';
import Button from '../ui/Button';
import githublogo from "../../assets/images/github.png"
import linkedinlogo from "../../assets/images/linkedin.png"
import mailto from "../../assets/images/mail.png"
import resume from "../../assets/images/resume.png";
import resumepdf from '../../assets/pdf/Shiva_Aleti.pdf';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

/**
 * About section component with compact styling, contact info, and contact form (form on right)
 */
const About = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      duration: 2000,
      position: 'top-right',
    });
    const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
    hiddenInput.name = "subject";
    hiddenInput.value = "New Message from Portfolio";
    form.current.appendChild(hiddenInput);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
      
        console.log('Message sent successfully!');
        form.current.reset(); // Optionally reset the form after sending
      })
      .catch((error) => {
        console.error(error);
        toast.error('Message failed to send. Please try again.', {
          duration: 2000,
          position: 'top-right',
        });
      });
  };

  return (
    <section id="about" className="py-8 bg-white dark:bg-gray-900">
      <Toaster />
      <div className="max-w-2xl mx-auto px-3">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left: About Me and Contact Info */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
            <div className="text-xs text-gray-600 dark:text-gray-400 leading-normal mb-4">
              <p>
              Hi, I’m Shiva. I architect backend systems with a logic-first mindset, decoding real-world complexities into structured, elegant solutions. Proficient in Python, Node.js, Flask, FastAPI, and Express, I craft robust APIs and seamless data flows that power functionality with precision and purpose.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Get In Touch</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-2 mb-3">
                <div>
                  <span className="text-xs font-semibold text-gray-900 dark:text-white">Email: </span>
                  <a href="mailto:aletishiva218@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
                    aletishiva218@gmail.com
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <a href="https://github.com/aletishiva218" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <span className="mr-1"><img src={githublogo} alt="GitHub" className="w-4 h-4 bg-white rounded-full p-[2px]" /></span> GitHub
                  </a>
                  <a href="https://linkedin.com/in/shiva-aleti" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <span className="mr-1"><img src={linkedinlogo} alt="LinkedIn" className="w-4 h-4 rounded-full" /></span> LinkedIn
                  </a>
                  <a href="mailto:aletishiva218@gmail.com" className="flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <span className="mr-1"><img src={mailto} alt="Email" className="w-4 h-4 bg-white rounded-full" /></span> Gmail
                  </a>
                   <a href={resumepdf} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <span className="mr-1"><img src={resume} alt="Email" className="w-4 h-4 bg-white rounded-full" /></span> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3" ref={form}>
              <div>
                <label htmlFor="from_name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                  className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full" size="sm">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 