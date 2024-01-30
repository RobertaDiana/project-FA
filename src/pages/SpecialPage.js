import React from 'react';
import { useParams } from 'react-router-dom';

const SpecialPage = () => {
  const { email } = useParams();

  return (
    <div>
      <h1>Special Page</h1>
      <p>Bine ai venit {email}! Aceasta este o pagină specială pentru tine pentru ca esti logat. Primesti 10%reducere!</p>
    </div>
  );
};

export default SpecialPage;