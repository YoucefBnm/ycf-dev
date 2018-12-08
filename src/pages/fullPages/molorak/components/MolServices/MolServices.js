import React from 'react';

const molCards=[
  {
    d: "M20.4 2.1c-0.4-0.2-0.8-0.1-1.1 0.2 0 0-0.9 0.7-3.3 0.7-1.3 0-2.4-0.5-3.6-0.9-1.3-0.6-2.7-1.1-4.4-1.1-3.2 0-4.5 1.1-4.7 1.3s-0.3 0.4-0.3 0.7v19c0 0.6 0.4 1 1 1s1-0.4 1-1v-6.5c0.4-0.2 1.4-0.5 3-0.5 1.3 0 2.4 0.5 3.6 0.9 1.3 0.5 2.7 1.1 4.4 1.1 3.2 0 4.5-1.1 4.7-1.3s0.3-0.4 0.3-0.7v-12c0-0.4-0.2-0.7-0.6-0.9zM19 14.5c-0.4 0.2-1.4 0.5-3 0.5-1.3 0-2.4-0.5-3.6-0.9-1.3-0.6-2.7-1.1-4.4-1.1-1.3 0-2.3 0.2-3 0.4v-9.9c0.4-0.2 1.4-0.5 3-0.5 1.3 0 2.4 0.5 3.6 0.9 1.3 0.6 2.7 1.1 4.4 1.1 1.3 0 2.3-0.2 3-0.4v9.9z",
    title: 'mark your territory',
    text: 'choose the desired location, and we\'ll handle the rest, we\'ll make you feel like home even more comfortable, all our offered places are unique far away from any kind of disturbance.'
  },
  {
    d: 'M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM12 21c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9s-4 9-9 9z M15.9 6.8l-6.3 2.1c-0.3 0.1-0.6 0.4-0.7 0.7l-2.1 6.4c-0.1 0.4 0 0.8 0.2 1s0.4 0.3 0.7 0.3c0.1 0 0.2 0 0.3-0.1l6.4-2.1c0.3-0.1 0.5-0.3 0.6-0.6l2.1-6.4c0.1-0.4 0-0.8-0.2-1-0.2-0.3-0.6-0.4-1-0.3zM13.3 13.3l-4 1.3 1.3-4 4-1.3-1.3 4z',
    title: 'nice to meet you nature',
    text: 'get to know nature, explore the most breathtaking places on the planet and its hidden secrets, from mountains to seas, and the most antique places.'
  },
  {
    d: 'M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM12 21c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9s-4 9-9 9z M12 11c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1s1-0.4 1-1v-4c0-0.6-0.4-1-1-1z M11.3 7.3c-0.2 0.2-0.3 0.4-0.3 0.7s0.1 0.5 0.3 0.7c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.2-0.2 0.3-0.4 0.3-0.7s-0.1-0.5-0.3-0.7c-0.4-0.4-1-0.4-1.4 0z',
    title: 'info',
    text: 'our consultants and guides are at your service 24/24, they will accompany you for the events, they are professional and well educated and speak more languages than the "UN" interpreters.'
  },
  {
    d: 'M19 10h-1v-3c0-3.3-2.7-6-6-6s-6 2.7-6 6v3h-1c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM8 7c0-2.2 1.8-4 4-4s4 1.8 4 4v3h-8v-3zM20 20c0 0.6-0.4 1-1 1h-14c-0.6 0-1-0.4-1-1v-7c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v7z',
    title: 'enjoy your privacy',
    text: 'privacy which is an important part of our standards, once you apply, we\'ll make sure that everything is under control from the place you chose to its services. just to reach our main goal: 100% satisfaction.'
  }
];

const MolCard = ({d, title, text}) =>{
  return (
    <div className="molServices__card">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-4 -5 32 32" className="molServices__icon">
        <path d={d} />
      </svg>

      <h4 className="molServices__heading">{title}</h4>
      <p className="molServices__text">{text}</p>
    </div>
  );
}

export default () =>{
  return (
    <section className="molServices">
      {
        molCards.map((card, i) =>{
          return (
            <MolCard
              key={i}
              d={card.d}
              title={card.title}
              text={card.text}
            />
          );
        })
      }
    </section>
  );
}
