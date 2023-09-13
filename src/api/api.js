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

export default fetchQuote;
