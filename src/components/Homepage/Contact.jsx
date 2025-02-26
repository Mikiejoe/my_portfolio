import {
  Mail,
  MessageCircleQuestion,
  UserRoundPen,
  Text,
  Heading,
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    if (true) {
      const formData = {
        email,
        subject,
        message,
        name,
      };
      console.log(formData);

      try {
        const response = await fetch(
          "https://portfolio-backend-sigma-three.vercel.app/api/send-email/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const data = await response.json();

          setSuccess(true);
          setResponse(data.message);
          setTimeout(() => {
            setSuccess(false);
            setResponse("");
          }, 5000);
        } else {
          const data = await response.json();

          setError(true);
          setResponse(data.message);
          setTimeout(() => {
            setError(false);
            setResponse("");
          }, 5000);
        }
      } catch (error) {
        setError(true);

        setResponse(error);
        setTimeout(() => {
          setError(false);
          setResponse("");
        }, 5000);
      } finally {
        setEmail("");
        setSubject("");
        setMessage("");
        setName("");
        setLoading(false);
      }
    } else {
      console.log("nothing happened");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-6 animate-fade-in">
          Get In Touch
        </h2>

        <div className="max-w-lg mx-auto animate-scale-in">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex items-center flex-row bg-gray-400 rounded-md">
              <div className="bg-gray-400 h-full px-2">
                <UserRoundPen />
              </div>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={handleNameChange}
                id="name"
                className=" block w-full rounded-md py-2 border-gray-700 outline-none bg-gray-300 pl-4 text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 transition-all duration-200"
              />
            </div>
            <div className="flex items-center flex-row bg-gray-400 rounded-md">
              <div className="bg-gray-400 h-full px-2">
                <Mail />
              </div>
              <input
                placeholder="Email"
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                id="email"
                className=" block w-full rounded-md py-2 border-gray-300 outline-none bg-gray-300 pl-4 text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 transition-all duration-200"
              />
            </div>
            <div className="flex items-center flex-row bg-gray-400 rounded-md">
              <div className="bg-gray-400 h-full px-2">
                <Heading />
              </div>
              <input
                placeholder="Subject"
                type="text"
                required
                value={subject}
                onChange={handleSubjectChange}
                id="subject"
                className=" block w-full rounded-md py-2 border-gray-700 outline-none bg-gray-300 pl-4 text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 transition-all duration-200"
              />
            </div>
            <div className="flex items-center flex-row bg-gray-400 rounded-md">
              <div className="bg-gray-400 h-full px-2">
                <MessageCircleQuestion />
              </div>
              <textarea
                value={message}
                placeholder="Message"
                required
                onChange={handleMessageChange}
                id="message"
                rows={4}
                className=" block w-full rounded-md border-gray-300 py-2 outline-none bg-gray-300 pl-4 text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 transition-all duration-200"
              ></textarea>
            </div>
            {error && (
              <div className="block text-sm font-medium bg-red-300 text-center p-2 rounded-md dark:bg-red-400 transition-colors text-gray-700 dark:text-gray-300">
                <p>Error occured sending message try again later.</p>
              </div>
            )}
            <div>
              {success ? (
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  sent
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-all duration-200 hover:shadow-lg"
                >
                  {!loading ? "Send Message" : "Sending"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
