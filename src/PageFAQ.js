import React, { useState } from 'react';
import "./Styles/FAQ.css";

const faqs = [
    { question: "What is the best way to start learning about ninjas?", answer: "Begin with historical texts and documentaries to understand the historical context, then explore various schools of thought within ninja practices." },
    { question: "Are there any online courses on ninja history?", answer: "Yes, several educational platforms offer courses on feudal Japan and the role of ninjas." },
    { question: "Can ninjas really become invisible?", answer: "While ninjas cannot become invisible, they were skilled in stealth and camouflage techniques." },
    { question: "What are the physical requirements to train like a ninja?", answer: "Physical agility, strength, and endurance are important, but so is mental discipline." },
    { question: "Do ninjas use modern technology?", answer: "In historical context, they used the technology of their time, but today's practitioners might incorporate modern tools." },
    { question: "What kind of weapons did ninjas use?", answer: "Ninjas used a variety of weapons including swords, shuriken (throwing stars), and blowguns, among others." },
    { question: "How do ninjas maintain their secrecy?", answer: "Secrecy is maintained through discretion, silent communication, and sometimes, coded language." },
    { question: "What's the difference between a ninja and a samurai?", answer: "Ninjas were covert agents or mercenaries, while samurai were hereditary military nobility and officers." },
    { question: "Did ninjas have a code of honor?", answer: "Ninjas were known for their flexibility in methods, which sometimes meant a different code of ethics compared to the samurai's bushido." },
    { question: "How can I incorporate ninja principles into my daily life?", answer: "Focus on discipline, awareness, adaptability, and continuous self-improvement." },
    { question: "Were there female ninjas?", answer: "Yes, female ninjas, or kunoichi, played important roles, often using their skills in espionage." },
    { question: "How did ninjas train?", answer: "Ninjas trained in various martial arts, stealth techniques, survival skills, and sometimes esoteric practices." },
    { question: "What were common ninja tactics?", answer: "Common tactics included espionage, sabotage, guerrilla warfare, and assassination." },
    { question: "Can ninjas work in teams?", answer: "Yes, while often portrayed as lone agents, ninjas could work in teams for complex missions." },
    { question: "What role did ninjas play in warfare?", answer: "Ninjas were often used for tasks that required stealth and espionage, gathering information, or causing disruption behind enemy lines." },
    { question: "Are there any ninja villages or schools today?", answer: "There are schools that claim to teach ninjutsu, and places like Iga and Koga in Japan are famous for their ninja history." },
    { question: "What is the first step to becoming a ninja today?", answer: "Start with martial arts training, study the history and culture, and develop a mindset of adaptability and resilience." }
  ];
  

function PageFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <br />
      <h2>Frequently Asked Questions</h2>
      
      <br />
      <br />
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageFAQ;
