import React from 'react';
import Mp4 from '../../img/giphy.mp4';
import Webm from '../../img/giphy.webm';

export default () =>{
  return (
    <section className="archContact">
    <div class="video archContact__video">
      <div class="video__bg archContact__bg">
        <video class="video__content archContact__content" autoplay muted loop>
          <source src={Mp4} type="video/mp4" />
          <source src={Webm} type="video/webm" />
        </video>
      </div>
    </div>

    <div className="archContact__details">
      <h2 className="archContact__title">i'm gonna make him an offer he can't refuse</h2>

      <div className="archContact__details-group">
        <div className="archContact__details-title">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="archContact__icon">
            <path d="M24 0h-16c-1.658 0-3 1.343-3 3v26c0 1.658 1.343 3 3 3h16c1.656 0 3-1.344 3-3v-26c0-1.658-1.344-3-3-3zM25 29c0 0.551-0.449 1-1 1h-16c-0.552 0-1-0.447-1-1v-2.004h18v2.004zM25 25.996h-18v-19.996h18v19.996zM25 5h-18v-2c0-0.552 0.448-1 1-1h16c0.551 0 1 0.448 1 1v2zM18 3.5c0 0.276-0.225 0.5-0.5 0.5h-3c-0.277 0-0.5-0.224-0.5-0.5v0c0-0.277 0.223-0.5 0.5-0.5h3c0.275 0 0.5 0.223 0.5 0.5v0zM17 28.496c0 0.275-0.225 0.5-0.5 0.5h-1c-0.276 0-0.5-0.225-0.5-0.5v0c0-0.277 0.224-0.5 0.5-0.5h1c0.275 0 0.5 0.223 0.5 0.5v0z" />
          </svg>
          <p>lower my phone charge</p>
        </div>
        <p>+46 8 405 10 00</p>
      </div>

      <div className="archContact__details-group">
        <div className="archContact__details-title">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="archContact__icon">
            <path d="M14.2 20.1c-0.5-0.3-1.1-0.1-1.4 0.4s-0.9 0.6-1.4 0.4c-0.2-0.1-0.3-0.2-0.4-0.4-0.3-0.5-0.9-0.6-1.4-0.4-0.5 0.3-0.6 0.9-0.4 1.4 0.3 0.5 0.6 0.8 1.1 1.1s1 0.4 1.5 0.4c1 0 2-0.5 2.6-1.5 0.5-0.5 0.3-1.1-0.2-1.4z" />
            <path d="M22 16c-1.1 0-2-0.9-2-2v-5c0-4.4-3.6-8-8-8s-8 3.6-8 8v5c0 1.1-0.9 2-2 2-0.6 0-1 0.4-1 1s0.4 1 1 1h20c0.6 0 1-0.4 1-1s-0.4-1-1-1zM5.5 16c0.3-0.6 0.5-1.3 0.5-2v-5c0-3.3 2.7-6 6-6s6 2.7 6 6v5c0 0.7 0.2 1.4 0.5 2h-13z" />
          </svg>
          <p>ring the doorbell</p>
        </div>
        <p>Torggatan 11 VÄSTERFÄRNEBO - SWEDEN</p>
      </div>

      <div className="archContact__details-group">
        <div className="archContact__details-title">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="archContact__icon">
            <path d="M13.6 13.47c-0.91 0.953-2.191 1.545-3.61 1.545-2.756 0-4.99-2.234-4.99-4.99 0-0.009 0-0.018 0-0.026v0.001c0-2.761 2.239-5 5-5 1.131 0 2.175 0.376 3.013 1.009l-0.013-0.009v-1h2v6.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5v0-1.5c-0.003-4.416-3.584-7.994-8-7.994-4.418 0-8 3.582-8 8s3.582 8 8 8c1.305 0 2.537-0.312 3.625-0.867l-0.045 0.021 0.9 1.79c-1.305 0.668-2.847 1.060-4.48 1.060-5.523 0-10-4.477-10-10s4.477-10 10-10c5.519 0 9.994 4.472 10 9.99v0.001h-0.010v1.5c0 0.003 0 0.007 0 0.010 0 1.933-1.567 3.5-3.5 3.5-1.202 0-2.262-0.606-2.892-1.528l-0.008-0.012zM10 13c1.657 0 3-1.343 3-3s-1.343-3-3-3v0c-1.657 0-3 1.343-3 3s1.343 3 3 3v0z" />
          </svg>
          <p>write me a message</p>
        </div>
        <p>stephanese221@mail.com</p>
      </div>
    </div>
    </section>
  );
}
