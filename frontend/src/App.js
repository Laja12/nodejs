import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the back-end API
    fetch(`${process.env.REACT_APP_API_URL}/api`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Front-end React App</h1>
      <p>Message from the back-end: {message}</p>
    </div>
  );
}

export default App;
