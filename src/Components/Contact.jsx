import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [skype, setSkype] = useState('');
  const [nda, setNda] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted:', {
      name,
      email,
      phone,
      interestedIn,
      budget,
      message,
      skype,
      nda,
      file,
    });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8">
                <div className="max-w-7xl mx-auto px-4  py-8 poppins relative">

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Interested in working with us?</h2>
        <p className="text-gray-600">Let's Talk & Get Started</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-gray-600">Mail to Our Sales Department</p>
            <a
              className="text-blue-500 underline"
              href="mailto:info@kuchoriyatechsoft.com"
            >
              info@kuchoriyatechsoft.com
            </a>
          </div>
          <div className="flex flex-col gap-2">
            
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="interestedIn">Interested In</label>
          <input
            type="text"
            id="interestedIn"
            value={interestedIn}
            onChange={(e) => setInterestedIn(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="budget">Budget</label>
          <input
            type="text"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="skype">Skype ID</label>
          <input
            type="text"
            id="skype"
            value={skype}
            onChange={(e) => setSkype(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="nda"
            checked={nda}
            onChange={(e) => setNda(e.target.checked)}
            className="mr-2"
          />
          <label className="text-gray-700" htmlFor="nda">I agree to the NDA</label>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="file">Upload File</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button type="submit" className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;