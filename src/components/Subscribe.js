import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://sheetdb.io/api/v1/c4tv81qgayxbq';

    const data = {
      Email: email,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([data]),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const errorData = await response.json();
        setStatus('error');
        setErrorMessage(`Error: ${errorData.message || 'Something went wrong.'}`);
        console.error('API Error:', errorData);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(`Network Error: ${error.message}`);
      console.error('Network Error:', error);
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-800 py-16 sm:py-24 lg:py-32">
      <div className="flex justify-center items-center h-full">
        <div className="max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#e24545] sm:text-4xl">Subscribe to our newsletter.</h2>
          <p className="mt-4 text-lg leading-8 text-[#e24545]">Stay updated with our latest news and offers.</p>
          <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4 mx-auto">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#e24545] sm:text-sm sm:leading-6"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-[#e24545] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e24545]"
            >
              Subscribe
            </button>
          </form>
          {status === 'success' && <p className="mt-2 text-green-500">Subscribed successfully!</p>}
          {status === 'error' && <p className="mt-2 text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
