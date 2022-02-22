import React from 'react';

const DetailCard = ({ phone, back }) => {
  return (
    <div className="row">
      <div className="card col-lg-4 col-sm-0 d-flex align-items-stretch ">
        <img src={phone.imageFilePath} className="card-img-top" alt="A mobile phone" />
        <div className="card-body">
          <h5 className="card-title">{phone.name}</h5>
          <p className="card-text">{phone.description}</p>
        </div>
        <div className="card-body">
          <h6 className="card-title">{phone.name} Details</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Manufacturer: {phone.manufacturer}</li>
            <li className="list-group-item">Colour: {phone.colour}</li>
            <li className="list-group-item">Price: {phone.price}</li>
            <li className="list-group-item">Screen: {phone.screen}</li>
            <li className="list-group-item">Processor: {phone.processor}</li>
            <li className="list-group-item">RAM: {phone.ram}</li>
          </ul>
        </div>
        <button onClick={() => back()}>Back</button>
      </div>
    </div>
  );
};
export default DetailCard;
