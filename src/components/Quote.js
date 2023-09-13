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
  const data = response.json();
  return data;
};

const Quote = () => {
  const [quotes, setQuote] = useState({});
  useEffect(() => {
    fetchQuote().then((res) => {
      setQuote(res[0]);
    }).catch(() => {
      console.log('Error');
    });

    console.log('UseEffect');
  }, []);
  const { quote, author } = quotes;
  return (
    <blockquote>
      <p>{quote}</p>
      <cite>{author}</cite>
    </blockquote>
  );
};

export default Quote;
