import React from 'react';
import Particles from 'react-particles-js';

const cards = [
  {
    d: "M14.859 13.078c1.359-0.938 2.156-2.438 2.156-4.078 0-2.766-2.25-5.016-5.016-5.016s-5.016 2.25-5.016 5.016c0 1.641 0.797 3.141 2.156 4.078l0.844 0.609v2.297h4.031v-2.297zM12 2.016c3.844 0 6.984 3.141 6.984 6.984 0 2.391-1.172 4.453-3 5.719v2.297c0 0.563-0.422 0.984-0.984 0.984h-6c-0.563 0-0.984-0.422-0.984-0.984v-2.297c-1.828-1.266-3-3.328-3-5.719 0-3.844 3.141-6.984 6.984-6.984zM9 21v-0.984h6v0.984c0 0.563-0.422 0.984-0.984 0.984h-4.031c-0.563 0-0.984-0.422-0.984-0.984z",
    title: 'First Step',
    text: 'It Start by creating a unique project structure. then Know your brand and your market to define the audience, understand your needs to determine the perfect timeline and project plan tailored to your business.'
  },
  {
    d: "M23.023 29.006v-2.029h-1.013v2.029h-1.014v-2.029h-1.016v2.029h-0.951v-3.043h-1.014v3.043h-1.014v-2.029h-1.014v2.029h-0.951v-2.029h-1.014v2.029h-1.015v-3.043h-1.014v3.043h-1.014v-2.029h-0.949v2.029h-1.014v-2.029h-1.015v2.029h-1.013v-3.043h-0.951v3.043h-3.042v-25.011l25.011 25.011h-4.983zM6.988 13.584v11.365h11.364l-11.364-11.365z",
    title: 'Architecture',
    text: 'The main things are: Define the features, functionalities, structure, and user-experience of the project. Every website needs a base, and I will determine the right design for your online business.',
  },
  {
    d: "M27.555 8.42c-1.355 1.647-5.070 6.195-8.021 9.81l-3.747-3.804c3.389-3.016 7.584-6.744 9.1-8.079 2.697-2.377 5.062-3.791 5.576-3.213 0.322 0.32-0.533 2.396-2.908 5.286zM18.879 19.030c-1.143 1.399-2.127 2.604-2.729 3.343l-4.436-4.323c0.719-0.64 1.916-1.705 3.304-2.939l3.861 3.919zM15.489 23.183v-0.012c-2.575 9.88-14.018 4.2-14.018 4.2s4.801 0.605 4.801-3.873c0-4.341 4.412-4.733 4.683-4.753l4.543 4.427c0 0.001-0.009 0.011-0.009 0.011z",
    title: 'Design',
    text: 'Define the approach of the design we there are desktop-first or mobile-first, or use a third library it is wanted by the client, after all it will be a responsive design for mobile, tablet & desktop, to elevate brand perception and increase conversion rates. Focusing on functional, creative design throughout the entire website development process.',
  },
  {
    d: "M27.783 7.936c0.959 2.313 0.502 5.074-1.379 6.955-2.071 2.071-5.201 2.395-7.634 1.022l-1.759 1.921 1.255 1.26 0.75-0.75c0.383-0.384 1.005-0.384 1.388 0l6.082 6.144c0.384 0.383 0.384 1.005 0 1.388l-2.776 2.776c-0.383 0.384-1.005 0.384-1.388 0l-6.082-6.144c-0.384-0.383-0.384-1.005 0-1.388l0.685-0.685-1.196-1.199-8.411 9.189c-0.767 0.767-2.010 0.767-2.776 0l-0.694-0.694c-0.767-0.767-0.767-2.010 0-2.776l9.582-8.025-6.364-6.381-2.010-0.001-2.326-3.74 1.872-1.875 3.825 2.341 0.025 1.968 6.438 6.463 1.873-1.568c-1.831-2.496-1.64-6.012 0.616-8.268 1.872-1.872 4.618-2.337 6.925-1.396l-4.124 4.067 3.471 3.471 4.132-4.075zM6.15 25.934c-0.383-0.383-1.004-0.383-1.388 0-0.384 0.384-0.384 1.005 0 1.389 0.384 0.383 1.005 0.383 1.388 0 0.384-0.385 0.384-1.006 0-1.389z",
    title: 'Get to work',
    text: 'While developing the website, I dedicate my time and technical resources to build a custom-developed solution based on the unique needs of your business and the goals you like to achieve.',
  },
  {
    d: "M30.555 25.219l-12.519-21.436c-1.044-1.044-2.738-1.044-3.782 0l-12.52 21.436c-1.044 1.043-1.044 2.736 0 3.781h28.82c1.046-1.045 1.046-2.738 0.001-3.781zM14.992 11.478c0-0.829 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5v7c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5v-7zM16.501 24.986c-0.828 0-1.5-0.67-1.5-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.83-0.672 1.5-1.5 1.5z",
    title: 'Testing',
    text: 'Before taking your website live, I put my coding to the test through an extensive quality assurance process. including site speed responsivity and functionality, so that I assure that your website is prepared for its launch.',
  }
];

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}

const Card = ({d, title, text}) =>{
  return (
    <div className="card">
      <div className="card__header">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="card__icon">
          <path d={d} />
        </svg>
        <h3 className="card__title">{title}</h3>
      </div>
      <p className="card__text">{text}</p>
    </div>
  );
}
 export default () =>{
  return (
    <section className="features">
      <Particles className='particles' params={particlesOptions} />

      <h3 className="heading--2 features__heading">how it's done</h3>

      <div className="features__intro">
        with the development tools, the knowledge I had after consuming a lot of tutorials and books (80% of my free time), your website not only look great, it is also performing, considering your content strategy, information, user-pathways and how to market your site to your audience.
      </div>

      <div className="features__container">
        {cards.map((card, i) =>{
          return (
            <Card
              key={i}
              d={card.d}
              title={card.title}
              text={card.text}
            />
          );
        })}
      </div>
    </section>
  );
}
