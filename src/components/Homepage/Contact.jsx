import React, { useState } from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { MdMail, MdPhone, MdWhatsapp } from "react-icons/md";
import { Link } from "react-router-dom";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && subject && message) {
      // Send the form data to the Django backend
      const formData = {
        email,
        subject,
        message,
        name,
      };

      try {
        const response = await fetch("https://portfolio-backend-tesg.onrender.com/api/send-email/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          // Handle the response from the backend
          setSuccess(true);
          setResponse(data.message);
          setTimeout(() => {
            setSuccess(false);
            setResponse("");
          }, 5000);
          console.log(data);
        } else {
          const data = await response.json();
          console.log(data);
          setError(true);
          setResponse(data.message);
          setTimeout(() => {
            setError(false);
            setResponse("");
          }, 5000);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setEmail("");
        setSubject("");
        setMessage("");
        setName("");
      }
    }
  };

  return (
    <div
      id="contact"
      className="text-center flex flex-col items-center md:p-16 p-4 bg-primary-bg text-white"
    >
      <div className="border-b-secondary border-b-2 pr-4 pl-4 w-fit items-center">
        <h1 className="text-[24px] md:text-[32px] font-bold text-white">
          Get in touch with me
        </h1>
      </div>
      <div className="w-full flex flex-col md:flex-row space-x-4 mt-2">
        <div className="w-full text-start p-2">
          <h1 className="text-xl">Message Me</h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4 h-10 rounded-sm overflow-hidden">
              <input
                type="text"
                className="w-full h-full text-black p-2"
                placeholder="Full Name"
                value={name}
                required
                onChange={handleNameChange}
              />
            </div>
            <div className="w-full mt-4 h-10 rounded-sm overflow-hidden">
              <input
                type="email"
                className="w-full h-full text-black p-2"
                placeholder="Email"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="w-full mt-4 h-10 rounded-sm overflow-hidden">
              <input
                type="text"
                className="w-full h-full text-black p-2"
                placeholder="Your message subject"
                value={subject}
                required
                onChange={handleSubjectChange}
              />
            </div>
            <div className="w-full mt-4 rounded-sm overflow-hidden">
              <textarea
                className="w-full h-full p-2 text-black"
                rows={6}
                placeholder="Your Message"
                required
                value={message}
                onChange={handleMessageChange}
              />
            </div>

            {success && <div className="mt-4 text-white bg-green-500 p-2 text-center rounded-md">{response}</div>}
            {error && <div className="mt-4 text-white bg-red-500 p-2 text-center rounded-md">{response}</div>}

            <div className="mt-4 rounded-md overflow-hidden">
              <input
                type="submit"
                onSubmit={handleSubmit}
                className="w-full h-full bg-secondary p-2"
                value={"Contact me"}
              />
            </div>
          </form>
        </div>
        <div className="w-full  text-start p-2">
          <div className="w-full text-start space-y-2 p-2">
            <h1 className="text-xl sm:text-center font-semibold mb-2">
              Contact Information
            </h1>
            <div className="sm:flex md:block justify-between">
              <div className="flex flex-col justify-between mt-6 space-y-4">
                <div className="flex space-x-3">
                  <div className="p-2 border-secondary border rounded-sm">
                    <MdMail size={26} />
                  </div>
                  <div>
                    <h2 className="text-secondary/80 text-[12px]">Email</h2>
                    <p className="text-sm text-gray-300">
                      omoshjoe02@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="p-2 border-secondary border rounded-sm">
                    <MdPhone size={26} />
                  </div>
                  <div>
                    <h2 className="text-secondary/80 text-[12px]">Phone</h2>
                    <p className="text-sm text-gray-300">+254740510778</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="p-2 border-secondary border rounded-sm">
                    <MdWhatsapp size={26} />
                  </div>
                  <div>
                    <h2 className="text-secondary/80 text-[12px]">WhatsApp</h2>
                    <p className="text-sm text-gray-300">+2541100824</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold mb-2">
                  Find me on social media
                </h1>
                <div className="flex space-x-3">
                  <Link to={"https://www.x.com/omoshjoe02"}>
                    <div className="p-2 border-secondary border-2 rounded-md">
                      <BsTwitterX size={26} />
                    </div>
                  </Link>
                  <Link to={"https://www.github.com/Mikiejoe"}>
                    <div className="p-2 border-secondary border-2 rounded-md">
                      <BsGithub size={26} />
                    </div>
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/in/joseph-michael-445111235/"}
                  >
                    <div className="p-2 border-secondary border-2 rounded-md">
                      <BsLinkedin size={26} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
