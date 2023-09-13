import { useEffect, useState } from 'react';

const QUOTE_API = 'https://api.api-ninjas.com/v1/quotes?category=success';
const API_KEY = 'RpfsaV7nmDsDUjhBFuoirw==1nbR3TwipCYKqTtC';

const fetchQuote = async () => {
  const response = await fetch(QUOTE_API, {
    method: 'GET',
    headers: {
      'X-Api-key': API_KEY,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (data.error) throw data.error;
  return data;
};

const Quote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [quotes, setQuote] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetchQuote()
      .then((res) => {
        setQuote(res[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  const msg = isError ? 'Request Failed!\nSomething went wrong.' : 'Loading...';
  return (
    <section className="quote-wrapper">
      {(isError || isLoading) ? <span className="status-msg">{msg}</span> : (
        <blockquote>
          <span className="quote-text">{quotes.quote}</span>
          <cite>{quotes.author}</cite>
        </blockquote>
      )}
    </section>
  );
};

export default Quote;
