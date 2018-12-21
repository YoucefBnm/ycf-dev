import React from 'react';

export default () =>{
  return (
    <section className="rfsTrend">
      <h2 className="heading--2 rfsTrend__heading">Trending</h2>
      <div className="rfsTrend__container">
        <div className="rfsTrend__col-img">
          <img className="rfsTrend__img" src={`https://robohash.org/${Math.floor(Math.random() * 200) + 1}?set=set2&size=300x300`} alt="robot" />
          <a href="/#" className="rfsTrend__col-link">buy astrodis</a>
        </div>
        <div className="rfsTrend__col-detail">
          <h3 className="rfsTrend__col-title">Wars, pollution global warming ... forgot the earth <em>"Astrodis"</em> will make visiting other planets</h3>
          <p className="rfsTrend__col-txt">they said by 2019 (not sure 2019 !!!), it will be the first trip to mars !! hmm... why waiting for something, not sure it will happen, <em>Astrodis</em> will take you now.</p>
        </div>
      </div>

      <div className="rfsTrend__container container-2">
        <div className="rfsTrend__col-img">
          <img src={`https://robohash.org/${Math.floor(Math.random() * 200) + 1}?set=set1&size=300x300`} alt="robot" className="rfsTrend__img" />
          <a href="/#" className="rfsTrend__col-link">buy roboto</a>
        </div>
        <div className="rfsTrend__col-detail">
          <h3 className="rfsTrend__col-title">tired of handling work yourself, want help, but they can't do it your way and by your standards <em>"roboto"</em> will do the job for you.</h3>
          <p className="rfsTrend__col-txt">complains excuses bla bla bla ... not exactly how you wanted, not good ? not anymore "roboto" will do exactly what you want and how you want it done.</p>
        </div>
      </div>

      <div className="rfsTrend__container">
        <div className="rfsTrend__col-img">
          <img src={`https://robohash.org/${Math.floor(Math.random() * 200) + 1}?set=set3&size=300x300`} alt="robot" className="rfsTrend__img" />
          <a href="/#" className="rfsTrend__col-link">buy oficcino</a>
        </div>
        <div className="rfsTrend__col-detail">
          <h3 className="rfsTrend__col-title">sschedule your tasks, does the complicated tasks, remind of upcoming events, analyzing and planning, replace in your absence.</h3>
          <p className="rfsTrend__col-txt">"g" and "a" assistants can't stand a word you say, you need to speak exactly as it is in the dictionary, not with oficcino, it is programmed to speak all languages and understand akcent with high AI implementation.</p>
        </div>
      </div>

      <div className="rfsTrend__container container-2">
        <div className="rfsTrend__col-img">
          <img src={`https://robohash.org/${Math.floor(Math.random() * 200) + 1}?set=set4&size=300x300`} alt="pet" className="rfsTrend__img" />
          <a href="/#" className="rfsTrend__col-link">buy kitty</a>
        </div>
        <div className="rfsTrend__col-detail">
          <h3 className="rfsTrend__col-title">buy your customized kitty robot, not just a kitty also a talking robot, that helps and understand.</h3>

        </div>
      </div>
    </section>
  );
}
