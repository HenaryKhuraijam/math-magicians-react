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
  return data;
};

const Quote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [quotes, setQuote] = useState({});
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setStatusMsg('Loading...');
    fetchQuote()
      .then((res) => {
        if (res.error) throw res.error;
        setQuote(res[0]);
        setIsLoading(false);
        setStatusMsg('');
        return res;
      })
      .catch(() => {
        setStatusMsg('Request Failed!\nSomething went wrong.');
        setIsError(true);
      });
  }, []);
  return (
    <>
      {(isError || isLoading) ? <p>{statusMsg}</p> : (
        <blockquote>
          <p>{quotes.quote}</p>
          <cite>{quotes.author}</cite>
        </blockquote>
      )}
    </>
  );
};

export default Quote;
