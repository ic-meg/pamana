import React, { useEffect, useState } from 'react';
import './Quotes.css';
import Feather from "../Feather";
import quoteBg from '../../../assets/images/quote.png'; 
import headerDesign from '../../../assets/images/headerDesign.png';

const quotes = [
  {
    category: 'NATIONALISM',
    items: [
      'Ang hindi marunong lumingon sa pinanggalingan ay hindi makararating sa paroroonan.',
      'While a people preserves its language, it preserves the marks of liberty.',
    ],
  },
  {
    category: 'EDUCATION',
    items: [
      'The youth is the hope of our future.',
      'It is a useless life that is not consecrated to a great ideal.',
    ],
  },
  {
    category: 'FREEDOM',
    items: [
      'I have always loved my poor country, and I am sure that I shall love her until my last moment, should men prove unjust to me.',
      'There can be no tyrants where there are no slaves.',
    ],
  },
];

const Quotes = ({setActiveTab}) => {
  const [headerPreview, setHeaderPreview] = useState(false);

  // Animate header when window opens
  useEffect(() => {
    setHeaderPreview(true);
    const timeout = setTimeout(() => setHeaderPreview(false), 600); 
    return () => clearTimeout(timeout);
  }, []);

    return (
      <Feather isScrollable={true} setActiveTab={setActiveTab}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
      <div
        className={`quote-header${headerPreview ? ' preview' : ''}`}
        style={{
          backgroundImage: `url(${headerDesign})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: 690,
          height: 220,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 32,
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          cursor: 'pointer',
          transition: 'transform 0.3s, box-shadow 0.3s',
          transform: headerPreview ? 'scale(1.05) rotate(-2deg)' : 'none',
          
        }}
      >
        <h1
          style={{
            color: '#3d2b1f',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            fontSize: 23,
            fontWeight: 700,
            textAlign: 'center',
            width: '80%',
            margin: 0,
            letterSpacing: 1,
            opacity: headerPreview ? 1 : 0.85,
            transition: 'opacity 0.3s',
          }}
        >
          Inspirational Quotes from Jose Rizal
        </h1>
      </div>
      <div className="quotes-container">
          {quotes.map((section) => (
            <div key={section.category} className="quotes-section">
              <h2 className="quotes-category">{section.category}</h2>
              <div className="quotes-row">
                {section.items.map((quote, idx) => (
                  <div
                    className="quote-tile"
                    key={idx}
                    style={{
                      backgroundImage: `url(${quoteBg})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      animationDelay: `${idx * 0.2}s`,


                    }}
                  >
                     <span className="quote-mark quote-mark-top">“</span>
                      <span className="quote-text">{quote}</span>
                      <span className="quote-mark quote-mark-bottom">”</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
      </Feather>
    );
};

export default Quotes;