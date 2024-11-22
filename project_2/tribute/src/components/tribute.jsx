import React from "react";
import "./tribute.css"; 
import APJ from '../assets/APJ.webp'

const TributePage = () => {
  return (
    <div className="container">
      <h1 className="title">Tribute to Dr. A.P.J. Abdul Kalam</h1>
      <p className="subtitle">
        "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."
      </p>
      <img
        src={APJ}
        alt="Dr. A.P.J. Abdul Kalam"
        className="image"
      />
      <div className="content">
        <p>
          Dr. A.P.J. Abdul Kalam was an Indian aerospace scientist and the 11th President of
          India. Known as the "Missile Man of India" for his work on the development of ballistic
          missile and launch vehicle technology, he inspired millions with his vision and
          humility.
        </p>
        <h2>Achievements</h2>
        <ul>
          <li>Played a pivotal role in India's Pokhran-II nuclear tests in 1998.</li>
          <li>Recipient of India's highest civilian honor, the Bharat Ratna.</li>
          <li>Authored inspirational books like "Wings of Fire" and "Ignited Minds".</li>
          <li>Instrumental in shaping India's space and defense capabilities.</li>
          <li>Known for his dedication to education and youth empowerment.</li>
        </ul>
        <h2>Legacy</h2>
        <p>
          Dr. Kalam's commitment to his nation and its progress extended beyond science. As a
          visionary leader, he focused on India’s development through technology, innovation, and
          education. His humility and simplicity made him a beloved figure across generations.
        </p>
        <p>
          He often interacted with students, encouraging them to dream big and work hard. His
          speeches and books continue to inspire countless individuals worldwide.
        </p>
        <blockquote>
          "You have to dream before your dreams can come true." – Dr. A.P.J. Abdul Kalam
        </blockquote>
        <h2>Fun Facts</h2>
        <ul>
          <li>Dr. Kalam was a vegetarian and loved simple food.</li>
          <li>He enjoyed playing the veena, a classical Indian instrument.</li>
          <li>He had a deep love for poetry and often wrote poems in Tamil.</li>
        </ul>
      </div>
      <footer className="footer">
        
        <p>
          To learn more about Dr. Kalam, visit his{" "}
          <a
            href="https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia page
          </a>.
        </p>
      </footer>
    </div>
  );
};

export default TributePage;
