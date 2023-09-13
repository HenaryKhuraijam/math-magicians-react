import { useEffect, useState } from 'react';
import fetchQuote from '../api/api';

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
