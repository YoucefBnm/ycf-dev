import React from 'react';

import Molorak from '../../img/molorak-screen.png';
import Rfs from '../../img/rfs-screen.png';
import Port from '../../img/arch-screen.png';

import CardsScreen from '../../img/cards-screen.png';
import SlideHead from '../../img/slider-screen.png';
import VideoHead from '../../img/video-screen.png';
import GalHead from '../../img/gal-screen.png';
import FormScreen from '../../img/form-screen.png';
import GigaArch from '../../img/intro-screen.png';
export default () =>{
  return (
    <section className="ex">
      <div className="utility">
        <div className="utility__group">
          <div className="utility__side utility__side--front">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="utility__icon">
              <path fill="#61dafb" d="M18.852 16c0 1.575-1.277 2.852-2.852 2.852s-2.852-1.277-2.852-2.852c0-1.575 1.277-2.852 2.852-2.852s2.852 1.277 2.852 2.852z" />
              <path fill="#61dafb" d="M8.011 21.673l-0.629-0.16c-4.691-1.185-7.381-3.197-7.381-5.519s2.691-4.333 7.381-5.519l0.629-0.159 0.177 0.624c0.545 1.86 1.163 3.443 1.899 4.957l-0.082-0.186 0.135 0.284-0.135 0.284c-0.656 1.329-1.275 2.912-1.761 4.551l-0.056 0.22-0.177 0.623zM7.089 11.933c-3.565 1.001-5.753 2.533-5.753 4.061 0 1.527 2.188 3.059 5.753 4.061 0.512-1.62 1.046-2.965 1.662-4.263l-0.086 0.202c-0.531-1.098-1.066-2.443-1.511-3.828l-0.065-0.234zM23.989 21.673l-0.177-0.625c-0.544-1.859-1.162-3.441-1.9-4.954l0.081 0.184-0.135-0.284 0.135-0.284c0.656-1.329 1.275-2.911 1.762-4.55l0.056-0.221 0.177-0.624 0.631 0.159c4.689 1.185 7.38 3.197 7.38 5.52s-2.691 4.333-7.38 5.519l-0.631 0.16zM23.335 15.995c0.64 1.385 1.169 2.747 1.576 4.061 3.567-1.003 5.753-2.535 5.753-4.061 0-1.528-2.188-3.059-5.753-4.061-0.511 1.619-1.045 2.963-1.662 4.262l0.086-0.2z" />
              <path fill="#61dafb" d="M7.080 11.927l-0.177-0.623c-1.319-4.648-0.919-7.979 1.097-9.141 1.977-1.141 5.152 0.207 8.479 3.621l0.453 0.465-0.453 0.465c-1.146 1.19-2.207 2.482-3.162 3.853l-0.068 0.103-0.18 0.257-0.313 0.027c-1.875 0.151-3.596 0.439-5.264 0.86l0.218-0.047-0.629 0.159zM9.608 3.087c-0.357 0-0.673 0.077-0.94 0.231-1.325 0.764-1.56 3.42-0.647 7.004 1.21-0.285 2.681-0.521 4.18-0.658l0.131-0.010c0.894-1.264 1.792-2.37 2.756-3.414l-0.020 0.022c-2.080-2.025-4.049-3.175-5.46-3.175zM22.393 30.236c-0.001 0-0.001 0 0 0-1.9 0-4.34-1.431-6.872-4.031l-0.453-0.465 0.453-0.465c1.146-1.19 2.206-2.482 3.16-3.854l0.068-0.103 0.18-0.257 0.312-0.027c1.875-0.15 3.597-0.438 5.267-0.858l-0.218 0.046 0.629-0.159 0.179 0.624c1.316 4.645 0.917 7.977-1.099 9.139-0.449 0.259-0.988 0.411-1.562 0.411-0.016 0-0.031-0-0.047-0l0.002 0zM16.932 25.728c2.080 2.025 4.049 3.175 5.46 3.175h0.001c0.356 0 0.673-0.077 0.939-0.231 1.325-0.764 1.561-3.421 0.647-7.005-1.212 0.286-2.682 0.522-4.182 0.658l-0.13 0.010c-0.893 1.265-1.791 2.371-2.755 3.416l0.020-0.022z" />
              <path fill="#61dafb" d="M24.92 11.927l-0.629-0.159c-1.453-0.376-3.175-0.664-4.939-0.806l-0.111-0.007-0.312-0.027-0.18-0.257c-1.021-1.474-2.082-2.766-3.237-3.966l0.009 0.010-0.453-0.465 0.453-0.465c3.325-3.413 6.499-4.761 8.479-3.621 2.016 1.163 2.416 4.493 1.099 9.14l-0.179 0.624zM19.667 9.653c1.523 0.139 2.969 0.364 4.312 0.668 0.915-3.584 0.679-6.24-0.647-7.004-1.317-0.761-3.793 0.405-6.4 2.944 0.943 1.022 1.841 2.128 2.666 3.289l0.069 0.103zM9.608 30.236c-0.014 0-0.030 0-0.046 0-0.574 0-1.113-0.152-1.577-0.419l0.015 0.008c-2.016-1.161-2.416-4.492-1.097-9.139l0.176-0.624 0.629 0.159c1.54 0.388 3.239 0.661 5.047 0.812l0.313 0.027 0.179 0.257c1.022 1.475 2.083 2.767 3.239 3.967l-0.010-0.010 0.453 0.465-0.453 0.465c-2.531 2.6-4.971 4.031-6.868 4.031zM8.021 21.667c-0.915 3.584-0.679 6.241 0.647 7.005 1.316 0.751 3.791-0.407 6.4-2.944-0.943-1.022-1.841-2.129-2.667-3.29l-0.069-0.103c-1.629-0.146-3.099-0.382-4.534-0.711l0.224 0.043z" />
              <path fill="#61dafb" d="M16 22.504c-1.097 0-2.225-0.048-3.355-0.141l-0.313-0.027-0.18-0.257c-0.544-0.768-1.139-1.691-1.697-2.639l-0.103-0.19c-0.452-0.758-0.971-1.732-1.45-2.728l-0.105-0.243-0.133-0.284 0.133-0.284c0.584-1.239 1.102-2.212 1.658-3.161l-0.103 0.191c0.552-0.955 1.159-1.907 1.8-2.829l0.18-0.257 0.313-0.027c1.005-0.090 2.174-0.142 3.355-0.142s2.35 0.052 3.505 0.153l-0.15-0.011 0.312 0.027 0.179 0.257c1.177 1.666 2.294 3.567 3.252 5.56l0.104 0.24 0.135 0.284-0.135 0.284c-1.058 2.232-2.176 4.133-3.439 5.925l0.083-0.125-0.179 0.257-0.312 0.027c-1.129 0.093-2.259 0.141-3.356 0.141zM13.071 21.059c1.973 0.148 3.885 0.148 5.86 0 1.004-1.445 1.978-3.104 2.827-4.836l0.101-0.228c-0.947-1.958-1.922-3.617-3.012-5.19l0.083 0.126c-0.877-0.071-1.898-0.111-2.929-0.111s-2.052 0.040-3.063 0.119l0.134-0.008c-1.008 1.447-1.983 3.106-2.83 4.84l-0.099 0.224c0.951 1.96 1.926 3.619 3.014 5.193l-0.085-0.13z" />
            </svg>
          </div>
          <p className="utility__side utility__side--back utility__desc">using the power of react, to manage and scale the view, exploiting the virtual DOM manipulation.</p>
        </div>

        <div className="utility__group">
          <div className="utility__side utility__side--front">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="utility__icon">
              <path fill="#c69" d="M16 0c8.836 0 16 7.164 16 16s-7.164 16-16 16-16-7.164-16-16 7.164-16 16-16zM12.82 21.331c0.233 0.86 0.208 1.664-0.032 2.389l-0.087 0.24c-0.032 0.081-0.069 0.16-0.104 0.235-0.187 0.387-0.435 0.747-0.74 1.080-0.931 1.012-2.229 1.396-2.787 1.073-0.6-0.349-0.301-1.78 0.779-2.92 1.161-1.224 2.827-2.012 2.827-2.012v-0.004l0.144-0.081zM26.035 6.849c-0.723-2.844-5.436-3.779-9.896-2.193-2.652 0.943-5.525 2.424-7.591 4.356-2.457 2.295-2.848 4.295-2.687 5.131 0.569 2.948 4.609 4.876 6.271 6.307v0.008c-0.489 0.24-4.075 2.039-4.915 3.9-0.9 1.96 0.14 3.361 0.82 3.54 2.1 0.581 4.26-0.48 5.42-2.199 1.12-1.681 1.021-3.841 0.539-4.901 0.661-0.18 1.44-0.26 2.44-0.139 2.801 0.32 3.361 2.080 3.24 2.8-0.12 0.719-0.697 1.139-0.899 1.259-0.2 0.121-0.26 0.16-0.241 0.241 0.020 0.12 0.121 0.12 0.28 0.1 0.22-0.040 1.461-0.6 1.521-1.961 0.060-1.72-1.581-3.639-4.5-3.6-1.2 0.021-1.961 0.121-2.5 0.341-0.040-0.060-0.081-0.1-0.14-0.14-1.8-1.94-5.14-3.3-5-5.88 0.040-0.94 0.38-3.419 6.4-6.419 4.94-2.461 8.881-1.78 9.561-0.28 0.977 2.139-2.101 6.12-7.241 6.699-1.96 0.22-2.98-0.539-3.241-0.82-0.279-0.3-0.319-0.32-0.419-0.259-0.16 0.080-0.060 0.34 0 0.5 0.16 0.4 0.78 1.1 1.861 1.46 0.939 0.3 3.24 0.479 6-0.6 3.099-1.199 5.519-4.54 4.819-7.34l0.097 0.089z" />
            </svg>
          </div>
          <p className="utility__side utility__side--back utility__desc">SASS preprocessor, to make CSS more functional with creating the variables and mixins.</p>
        </div>

        <div className="utility__group">
          <div className="utility__side utility__side--front">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="utility__icon">
              <path fill="#1572b6" d="M2 0h28l-2.547 28.751-11.484 3.249-11.42-3.251-2.549-28.749zM24.787 5.884l-17.573-0.004 0.284 3.496 13.5 0.003-0.34 3.621h-8.853l0.32 3.431h8.243l-0.488 4.697-3.88 1.072-3.941-1.080-0.251-2.813h-3.48l0.387 5.14 7.287 2.271 7.164-2.040 1.623-17.792z" />
            </svg>
          </div>
          <p className="utility__side utility__side--back utility__desc">using the revolutionary CSS grid, for four way layout, and flexbox for two way layouts, without using any third party library that can affect the site performance.</p>
        </div>

        <div className="utility__group">
          <div className="utility__side utility__side--front">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 35" className="utility__icon">
              <path fill="#30E8BF" d="M30.828 1.172c-1.562-1.562-4.095-1.562-5.657 0l-5.379 5.379-3.793-3.793-4.243 4.243 3.326 3.326-14.754 14.754c-0.252 0.252-0.358 0.592-0.322 0.921h-0.008v5c0 0.552 0.448 1 1 1h5c0 0 0.083 0 0.125 0 0.288 0 0.576-0.11 0.795-0.329l14.754-14.754 3.326 3.326 4.243-4.243-3.793-3.793 5.379-5.379c1.562-1.562 1.562-4.095 0-5.657zM5.409 30h-3.409v-3.409l14.674-14.674 3.409 3.409-14.674 14.674z" />
            </svg>
          </div>
            <p className="utility__side utility__side--back utility__desc">custom color palettes, that we can modify or remove or create a new color.</p>
        </div>

        <div className="utility__group">
          <div className="utility__side utility__side--front">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="utility__icon">
              <path fill="#E0A400" d="M19.5 3h0.5l6 7v18.009c0 1.093-0.894 1.991-1.997 1.991h-15.005c-1.107 0-1.997-0.899-1.997-2.007v-22.985c0-1.109 0.897-2.007 2.003-2.007h10.497zM19 4h-10.004c-0.55 0-0.996 0.455-0.996 0.995v23.009c0 0.55 0.455 0.995 1 0.995h15c0.552 0 1-0.445 1-0.993v-17.007h-4.002c-1.103 0-1.998-0.887-1.998-2.006v-4.994zM20 4.5v4.491c0 0.557 0.451 1.009 0.997 1.009h3.703l-4.7-5.5zM10 10v1h7v-1h-7zM10 7v1h7v-1h-7zM10 13v1h13v-1h-13zM10 16v1h13v-1h-13zM10 19v1h13v-1h-13zM10 22v1h13v-1h-13zM10 25v1h13v-1h-13z" />
            </svg>
          </div>
          <p className="utility__side utility__side--back utility__desc">content is a king, it's not just about designing and developing a web site, but also about filling it with relevent content related to business.</p>
        </div>

        <div className="utility__group">
          <div className="utility__side utility__side--front">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 32 32" className="utility__icon">
              <path fill="#C33764" d="M10.4 13.1c-0.1-0.1-0.3-0.1-0.4-0.1h-6c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.6l-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3v3.6c0 0.6 0.4 1 1 1s1-0.4 1-1v-6c0-0.1 0-0.3-0.1-0.4-0.1-0.2-0.3-0.4-0.5-0.5z M21.7 2.3c-0.4-0.4-1-0.4-1.4 0l-5.3 5.3v-3.6c0-0.6-0.4-1-1-1s-1 0.4-1 1v6c0 0.1 0 0.3 0.1 0.4 0.1 0.2 0.3 0.4 0.5 0.5 0.1 0.1 0.3 0.1 0.4 0.1h6c0.6 0 1-0.4 1-1s-0.4-1-1-1h-3.6l5.3-5.3c0.4-0.4 0.4-1 0-1.4z" />
            </svg>
          </div>
          <p className="utility__side utility__side--back utility__desc">Completely responsive and cross compatible, adapt to every device, and tested for the most used browsers.</p>
        </div>
      </div>


      <div className="port">

          <div className="port__col port__col--pages">
              <a href="/molorak" className="port__link port__link--pages">
                <img className="port__preview" alt="" src={Molorak} />
              </a>

            <div className="port__col-foot">
              <h3 className="port__title">molorak</h3>
              <p className="port__desc">a webpage for a travel agency named "molorak" which means planet in armenian.</p>
            </div>
          </div>

          <div className="port__col port__col--pages">
              <a href="/rfs" className="port__link port__link--pages">
                <img className="port__preview" alt="" src={Rfs} />
              </a>

            <div className="port__col-foot">
              <h3 className="port__title">rfs</h3>
              <p className="port__desc">full webpage for a e-commerce website, to buy robots, using the <a href="https://robohash.org">robothash api</a> to generate robots, fully responsive.</p>
            </div>
          </div>

          <div className="port__col port__col--pages">
              <a href="/portfolio" className="port__link port__link--pages">
                <img className="port__preview" alt="" src={Port} />
              </a>

            <div className="port__col-foot">
              <h3 className="port__title">portfolio</h3>
              <p className="port__desc">portfolio for a designer architect, contains his informations and showing his skills and work he contrebuted to.</p>
            </div>
          </div>



          {/* <h3 className="port__intro">when it comes to headers it's considired as the most important part of a webpage, it is like google's first page, 100% of visitors will see it.</h3> */}
          <div className="port__col port__col--headers">
              <a href="/slider" className="port__link port__link--headers">
                <img className="port__preview" alt="" src={SlideHead} />
              </a>

            <div className="port__col-foot">
              <h3 className="port__title">slider header</h3>
              <p className="port__desc">slide show for multple product or srvices or features.</p>
            </div>
          </div>

          <div className="port__col port__col--headers">
              <a href="/gallery" className="port__link port__link--headers">
                <img className="port__preview" alt="" src={GalHead} />
              </a>

            <div className="port__col-foot">
              <h3 className="port__title">gallery header</h3>
              <p className="port__desc">diversified product, no problem I'll multiply the header.</p>
            </div>
          </div>

          <div className="port__col port__col--headers">
              <a href="/video" className="port__link port__link--headers">
                <img className="port__preview" alt="" src={VideoHead} />
              </a>

            <div className="port__col-foot">
              <h3 className="port__title">video header</h3>
            </div>
          </div>



          {/* <h3 className="port__intro">other layout, a user authentication, and pricing cards, introduction page.</h3> */}

          <div className="port__col port__col--others">
              <a href="/form" className="port__link port__link--others">
                <img className="port__preview" alt="" src={FormScreen} />
              </a>
            <div className="port__col-foot">
              <h3 className="port__title">form</h3>
            </div>
          </div>

          <div className="port__col port__col--others">
              <a href="/cards" className="port__link port__link--others">
                <img className="port__preview" alt="" src={CardsScreen} />
              </a>

            <div className="port__col-foot">
              <h3 className="port__title">cards</h3>
              <p className="port__desc">card, with features on the front side, and when hover show the prices on back side.</p>
            </div>
          </div>

          <div className="port__col port__col--others">
              <a href="/intro" className="port__link port__link--others">
                <img className="port__preview" alt="" src={GigaArch} />
              </a>

            <div className="port__col-foot">
              <h3 className="port__title">intro page</h3>
            </div>
          </div>

      </div>
    </section>
  );
}
