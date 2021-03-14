const fetchData = (query) => {
  const URL = 'https://jsonplaceholder.typicode.com/users';

  const filter = query ? `?username=${encodeURIComponent(query)}` : '';

  return fetch(`${URL}${filter}`).then((response) => response.json());
};

export default fetchData;
