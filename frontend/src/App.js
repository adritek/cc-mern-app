import React, { useEffect, useState } from 'react';
import './App.css';
import DetailCard from './components/DetailCard';

function App() {
  const urlAPI = 'http://localhost:5000/posts';
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);

  const fetchData = () => {
    fetch(urlAPI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (response) => {
      try {
        const data = await response.json();
        setPhones(data);
      } catch (error) {
        console.log('Error happened here!');
        console.error(error);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (e) => {
    setSelectedPhone(e);
  };

  const back = (e) => {
    setSelectedPhone(null);
  };

  if (selectedPhone) {
    return <DetailCard phone={selectedPhone} back={back} />;
  }

  return (
    <div className="container">
      <div className="row">
        {phones !== null ? (
          phones.map((phone) => {
            return (
              <div className="col-lg-4 mb-3 d-flex align-items-stretch" key={phone.id} onClick={() => handleClick(phone)}>
                <div className="card">
                  <img className="card-img-top" src={phone.imageFilePath} alt={phone.name} />
                  <div className="card-body">
                    <h5 className="card-title">{phone.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
