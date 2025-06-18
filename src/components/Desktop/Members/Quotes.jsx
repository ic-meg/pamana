import React from 'react';
import './Quotes.css';
import Feather from "../Feather";
import quoteBg from '../../../assets/images/quote.png'; 


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

const Quotes = () => {
    return (
      <Feather isScrollable={true}>
        <div className="quotes-header">
          
          <div className="quotes-title">QUOTES</div>
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
      </Feather>
    );
};

export default Quotes;