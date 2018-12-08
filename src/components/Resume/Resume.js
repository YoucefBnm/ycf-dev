import React from 'react';

const frams = [
  {
    d:   "M26.667 0h-21.333c-2.943 0.008-5.325 2.391-5.333 5.333v21.333c0 2.933 2.4 5.333 5.333 5.333h21.333c2.933 0 5.333-2.4 5.333-5.333v-21.333c0-2.933-2.4-5.333-5.333-5.333zM23.751 22.473c-0.267 0.643-0.689 1.209-1.231 1.645-0.56 0.453-1.269 0.827-2.143 1.093-0.872 0.271-1.909 0.407-3.111 0.407h-8.576v-18.667h9.069c1.677 0 3.021 0.377 4.027 1.147 1.013 0.773 1.517 1.925 1.517 3.48 0 0.94-0.229 1.747-0.691 2.413-0.459 0.663-1.12 1.181-1.973 1.541v0.061c1.139 0.24 2.020 0.78 2.6 1.62s0.877 1.901 0.877 3.183c0 0.717-0.139 1.4-0.4 2.037l0.033 0.036zM20.049 17.873c-0.547-0.5-1.315-0.744-2.307-0.744h-5.763v5.824h5.779c0.987 0 1.76-0.256 2.307-0.773 0.547-0.513 0.827-1.245 0.827-2.187-0.009-0.92-0.28-1.632-0.827-2.12h-0.023zM19.249 14.109c0.528-0.448 0.787-1.089 0.787-1.925 0-0.939-0.233-1.605-0.707-1.987-0.469-0.38-1.147-0.577-2.037-0.577h-5.333v5.151h5.333c0.777 0 1.44-0.227 1.952-0.661z",
    fill: "#563d7c"
  },
  {
    d: "M16 0c8.836 0 16 7.164 16 16s-7.164 16-16 16-16-7.164-16-16 7.164-16 16-16zM12.82 21.331c0.233 0.86 0.208 1.664-0.032 2.389l-0.087 0.24c-0.032 0.081-0.069 0.16-0.104 0.235-0.187 0.387-0.435 0.747-0.74 1.080-0.931 1.012-2.229 1.396-2.787 1.073-0.6-0.349-0.301-1.78 0.779-2.92 1.161-1.224 2.827-2.012 2.827-2.012v-0.004l0.144-0.081zM26.035 6.849c-0.723-2.844-5.436-3.779-9.896-2.193-2.652 0.943-5.525 2.424-7.591 4.356-2.457 2.295-2.848 4.295-2.687 5.131 0.569 2.948 4.609 4.876 6.271 6.307v0.008c-0.489 0.24-4.075 2.039-4.915 3.9-0.9 1.96 0.14 3.361 0.82 3.54 2.1 0.581 4.26-0.48 5.42-2.199 1.12-1.681 1.021-3.841 0.539-4.901 0.661-0.18 1.44-0.26 2.44-0.139 2.801 0.32 3.361 2.080 3.24 2.8-0.12 0.719-0.697 1.139-0.899 1.259-0.2 0.121-0.26 0.16-0.241 0.241 0.020 0.12 0.121 0.12 0.28 0.1 0.22-0.040 1.461-0.6 1.521-1.961 0.060-1.72-1.581-3.639-4.5-3.6-1.2 0.021-1.961 0.121-2.5 0.341-0.040-0.060-0.081-0.1-0.14-0.14-1.8-1.94-5.14-3.3-5-5.88 0.040-0.94 0.38-3.419 6.4-6.419 4.94-2.461 8.881-1.78 9.561-0.28 0.977 2.139-2.101 6.12-7.241 6.699-1.96 0.22-2.98-0.539-3.241-0.82-0.279-0.3-0.319-0.32-0.419-0.259-0.16 0.080-0.060 0.34 0 0.5 0.16 0.4 0.78 1.1 1.861 1.46 0.939 0.3 3.24 0.479 6-0.6 3.099-1.199 5.519-4.54 4.819-7.34l0.097 0.089z",
    fill: "#c69"
  },
  {
    d: "M31.395 14.573l-13.972-13.971c-0.805-0.804-2.109-0.804-2.917 0l-2.895 2.9 3.68 3.68c0.86-0.287 1.839-0.093 2.519 0.588 0.688 0.687 0.877 1.677 0.584 2.533l3.544 3.547c0.86-0.297 1.849-0.104 2.533 0.58 0.961 0.96 0.961 2.512 0 3.472-0.959 0.959-2.508 0.959-3.467 0-0.719-0.721-0.899-1.783-0.539-2.661l-3.319-3.301v8.7c0.235 0.115 0.456 0.271 0.651 0.464 0.951 0.961 0.951 2.511 0 3.467-0.959 0.961-2.519 0.961-3.479 0-0.959-0.959-0.959-2.505 0-3.464 0.243-0.24 0.516-0.421 0.807-0.541v-8.785c-0.289-0.121-0.565-0.296-0.8-0.535-0.727-0.727-0.901-1.789-0.528-2.679l-3.616-3.633-9.581 9.575c-0.8 0.807-0.8 2.112 0 2.919l13.973 13.969c0.805 0.805 2.109 0.805 2.915 0l13.907-13.907c0.807-0.804 0.807-2.109 0-2.916z",
    fill: "#f05032"
  },
  {
    d: "M20.208 25.909l0.848-1.445s-1.925 0.788-5.147 0.788c-3.224 0-5.12-0.757-5.12-0.757l0.948 1.577 0.336 4.972c0 0.537 1.752 0.957 3.915 0.957 2.164 0 3.917-0.419 3.917-0.957l0.305-5.113v-0.021zM21.028 16.515c-1.025 0.061-1.537 1.204-2.052 2.407-0.191 0.44-0.84 2.316-1.264 2.084-0.424-0.231 0.551-1.772 0.825-2.689-0.316 0.232-1.473 1.132-1.772 0.287-0.477 0.419-1.505 0.64-1.389-0.439-0.255 0.46-0.828 1.097-1.519 0.819-0.897-0.34 0.527-3.215 0.88-3.076 0.355 0.161-0.071 0.8-0.181 1.059-0.248 0.559-0.531 1.277-0.34 1.417 0.32 0.259 1.205-0.937 1.225-0.959 0.165-0.22 0.639-1.639 1.017-1.476 0.38 0.179-0.948 2.055-0.453 2.435 0.101 0.080 0.511-0.040 0.759-0.319 0.16-0.16 0.104-0.56 0.639-1.837 0.539-1.279 1.019-2.875 1.385-2.755s0.065 0.937-0.068 1.257c-0.619 1.437-1.691 3.792-1.187 3.613 0.499-0.18 0.759-0.18 1.257-0.759s0.46-1.536 0.799-1.516c0.32 0.019 0.28 0.339 0.2 0.557 0.32-0.36 1.536-1.157 1.817-0.379 0.339 0.917-1.739 2.256-1.219 2.176 0.5-0.060 1.317-0.579 1.677-1.057l0.959-8.667s-0.979 0.8-7.148 0.8-7.045-0.779-7.045-0.779l0.817 7.907c0.44-1.237 1.477-3.752 3.096-3.653 0.739 0.040 1.737 1.479 0.877 1.519-0.36 0.020-0.4-0.719-0.819-0.819-0.319-0.061-0.739 0.18-1.017 0.46-0.539 0.539-1.739 2.675-1.579 3.735 0.2 1.357 1.876-0.461 2.156-1 0.199-0.377 0.339-1.517 0.757-1.397 0.44 0.12-0.039 1.299-0.36 2.316-0.36 1.159-0.539 2.375-0.976 2.235-0.44-0.139 0.279-1.636 0.237-1.896-0.417 0.399-1.177 1.36-2.175 0.879l0.499 4.932s1.359 1.057 5.431 1.057 5.491-1.057 5.491-1.057l0.639-5.711c-0.519 0.52-2.156 1.417-2.256 0.4-0.079-0.819 1.777-1.997 1.299-2.019l0.080-0.092zM23.128 0.892l-3.545 3.733-0.648 2.535c2.508 0.16 4.252 0.515 4.252 0.925 0 0.559-3.219 1.009-7.188 1.009s-7.187-0.457-7.187-1.017c0-0.559 3.219-1.019 7.188-1.019 0.564 0 1.125 0 1.685 0.021l0.748-3.035 3.767-3.993c0.091-0.12 0.373-0.020 0.632 0.2 0.259 0.199 0.399 0.459 0.319 0.579v0.040l-0.023 0.021zM18.016 8.619s-0.697 0-0.813-0.107c-0.029-0.033-0.048-0.077-0.048-0.12 0-0.077 0.052-0.121 0.12-0.147l0.059 0.1c-0.028 0.008-0.039 0.020-0.044 0.031 0 0.055 0.419 0.092 0.74 0.088 0.319-0.004 0.708-0.031 0.711-0.085 0-0.016-0.031-0.031-0.081-0.044l0.060-0.096c0.084 0.027 0.156 0.077 0.156 0.161 0 0.147-0.188 0.171-0.307 0.188-0.143 0.020-0.549 0.031-0.549 0.031h-0.003z",
    fill: "#da4648"
  },
  {
    d:   "M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z",
  },
  {
    d: "M0 9.779v10.667h8.888v1.776h7.112v-1.776h16v-10.667h-32zM8.888 18.664h-1.776v-5.333h-1.78v5.333h-3.552v-7.108h7.108v7.108zM14.221 18.664v1.781h-3.553v-8.889h7.112v7.109l-3.559-0.001zM30.223 18.664h-1.773v-5.333h-1.781v5.333h-1.78v-5.333h-1.773v5.333h-3.561v-7.108h10.669v7.108z M14.22 13.333h1.78v3.556h-1.78v-3.556z",
    fill: "#cb3837"
  },
  {
    d: "M18.852 16c0 1.575-1.277 2.852-2.852 2.852s-2.852-1.277-2.852-2.852c0-1.575 1.277-2.852 2.852-2.852s2.852 1.277 2.852 2.852zM8.011 21.673l-0.629-0.16c-4.691-1.185-7.381-3.197-7.381-5.519s2.691-4.333 7.381-5.519l0.629-0.159 0.177 0.624c0.545 1.86 1.163 3.443 1.899 4.957l-0.082-0.186 0.135 0.284-0.135 0.284c-0.656 1.329-1.275 2.912-1.761 4.551l-0.056 0.22-0.177 0.623zM7.089 11.933c-3.565 1.001-5.753 2.533-5.753 4.061 0 1.527 2.188 3.059 5.753 4.061 0.512-1.62 1.046-2.965 1.662-4.263l-0.086 0.202c-0.531-1.098-1.066-2.443-1.511-3.828l-0.065-0.234zM23.989 21.673l-0.177-0.625c-0.544-1.859-1.162-3.441-1.9-4.954l0.081 0.184-0.135-0.284 0.135-0.284c0.656-1.329 1.275-2.911 1.762-4.55l0.056-0.221 0.177-0.624 0.631 0.159c4.689 1.185 7.38 3.197 7.38 5.52s-2.691 4.333-7.38 5.519l-0.631 0.16zM23.335 15.995c0.64 1.385 1.169 2.747 1.576 4.061 3.567-1.003 5.753-2.535 5.753-4.061 0-1.528-2.188-3.059-5.753-4.061-0.511 1.619-1.045 2.963-1.662 4.262l0.086-0.2zM7.080 11.927l-0.177-0.623c-1.319-4.648-0.919-7.979 1.097-9.141 1.977-1.141 5.152 0.207 8.479 3.621l0.453 0.465-0.453 0.465c-1.146 1.19-2.207 2.482-3.162 3.853l-0.068 0.103-0.18 0.257-0.313 0.027c-1.875 0.151-3.596 0.439-5.264 0.86l0.218-0.047-0.629 0.159zM9.608 3.087c-0.357 0-0.673 0.077-0.94 0.231-1.325 0.764-1.56 3.42-0.647 7.004 1.21-0.285 2.681-0.521 4.18-0.658l0.131-0.010c0.894-1.264 1.792-2.37 2.756-3.414l-0.020 0.022c-2.080-2.025-4.049-3.175-5.46-3.175zM22.393 30.236c-0.001 0-0.001 0 0 0-1.9 0-4.34-1.431-6.872-4.031l-0.453-0.465 0.453-0.465c1.146-1.19 2.206-2.482 3.16-3.854l0.068-0.103 0.18-0.257 0.312-0.027c1.875-0.15 3.597-0.438 5.267-0.858l-0.218 0.046 0.629-0.159 0.179 0.624c1.316 4.645 0.917 7.977-1.099 9.139-0.449 0.259-0.988 0.411-1.562 0.411-0.016 0-0.031-0-0.047-0l0.002 0zM16.932 25.728c2.080 2.025 4.049 3.175 5.46 3.175h0.001c0.356 0 0.673-0.077 0.939-0.231 1.325-0.764 1.561-3.421 0.647-7.005-1.212 0.286-2.682 0.522-4.182 0.658l-0.13 0.010c-0.893 1.265-1.791 2.371-2.755 3.416l0.020-0.022zM24.92 11.927l-0.629-0.159c-1.453-0.376-3.175-0.664-4.939-0.806l-0.111-0.007-0.312-0.027-0.18-0.257c-1.021-1.474-2.082-2.766-3.237-3.966l0.009 0.010-0.453-0.465 0.453-0.465c3.325-3.413 6.499-4.761 8.479-3.621 2.016 1.163 2.416 4.493 1.099 9.14l-0.179 0.624zM19.667 9.653c1.523 0.139 2.969 0.364 4.312 0.668 0.915-3.584 0.679-6.24-0.647-7.004-1.317-0.761-3.793 0.405-6.4 2.944 0.943 1.022 1.841 2.128 2.666 3.289l0.069 0.103zM9.608 30.236c-0.014 0-0.030 0-0.046 0-0.574 0-1.113-0.152-1.577-0.419l0.015 0.008c-2.016-1.161-2.416-4.492-1.097-9.139l0.176-0.624 0.629 0.159c1.54 0.388 3.239 0.661 5.047 0.812l0.313 0.027 0.179 0.257c1.022 1.475 2.083 2.767 3.239 3.967l-0.010-0.010 0.453 0.465-0.453 0.465c-2.531 2.6-4.971 4.031-6.868 4.031zM8.021 21.667c-0.915 3.584-0.679 6.241 0.647 7.005 1.316 0.751 3.791-0.407 6.4-2.944-0.943-1.022-1.841-2.129-2.667-3.29l-0.069-0.103c-1.629-0.146-3.099-0.382-4.534-0.711l0.224 0.043zM16 22.504c-1.097 0-2.225-0.048-3.355-0.141l-0.313-0.027-0.18-0.257c-0.544-0.768-1.139-1.691-1.697-2.639l-0.103-0.19c-0.452-0.758-0.971-1.732-1.45-2.728l-0.105-0.243-0.133-0.284 0.133-0.284c0.584-1.239 1.102-2.212 1.658-3.161l-0.103 0.191c0.552-0.955 1.159-1.907 1.8-2.829l0.18-0.257 0.313-0.027c1.005-0.090 2.174-0.142 3.355-0.142s2.35 0.052 3.505 0.153l-0.15-0.011 0.312 0.027 0.179 0.257c1.177 1.666 2.294 3.567 3.252 5.56l0.104 0.24 0.135 0.284-0.135 0.284c-1.058 2.232-2.176 4.133-3.439 5.925l0.083-0.125-0.179 0.257-0.312 0.027c-1.129 0.093-2.259 0.141-3.356 0.141zM13.071 21.059c1.973 0.148 3.885 0.148 5.86 0 1.004-1.445 1.978-3.104 2.827-4.836l0.101-0.228c-0.947-1.958-1.922-3.617-3.012-5.19l0.083 0.126c-0.877-0.071-1.898-0.111-2.929-0.111s-2.052 0.040-3.063 0.119l0.134-0.008c-1.008 1.447-1.983 3.106-2.83 4.84l-0.099 0.224c0.951 1.96 1.926 3.619 3.014 5.193l-0.085-0.13z",
    fill: "#61dafb"
  },
  {
    d: "M28.021 24.16l-11.553 6.506v-5.068l7.198-3.942 4.355 2.503zM28.811 23.448v-13.607l-4.228 2.429v8.746l4.228 2.432zM3.901 24.16l11.553 6.506v-5.068l-7.198-3.942-4.355 2.503zM3.111 23.448v-13.607l4.228 2.429v8.746l-4.228 2.432zM3.605 8.96l11.849-6.674v4.9l-7.649 4.19-4.2-2.415zM28.317 8.96l-11.849-6.674v4.9l7.649 4.19 4.2-2.415zM15.454 24.446l-7.102-3.887v-7.703l7.101 4.083v7.508zM16.468 24.446l7.101-3.887v-7.703l-7.101 4.083v7.508zM8.833 11.965l7.129-3.904 7.129 3.904-7.129 4.099-7.129-4.099z",
    fill: '#8dd6f9'
  }
];

const Chart = ({d, strokeDasharray, percentage, stroke, fill, style}) =>{
  return (
    <div className="chart">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32" className="chart__icon">
        <path fill={fill} d={d} />
      </svg>
      <svg viewBox="0 0 36 36" className="chart__round">
       <path className="chart__roundBg"
         d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
       <path className="chart__circle" stroke={stroke}
         strokeDasharray={strokeDasharray}
         d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
       />
         <text x="18" y="20.35" className="chart__percentage">{percentage}</text>
       </svg>
    </div>
  );
}

const tools = [
  {
    d: 'M2 0h28l-2.547 28.751-11.484 3.249-11.419-3.251-2.551-28.749zM11.375 13l-0.309-3.624 13.412 0.004 0.307-3.496-17.568-0.004 0.931 10.68h12.168l-0.435 4.568-3.88 1.072-3.94-1.080-0.251-2.813h-3.479l0.44 5.561 7.229 1.933 7.172-1.924 0.992-10.876h-12.789z',
    strokeDasharray: '90, 100',
    percentage: '90%',
    stroke: '#D11B1B',
    fill: "#e34f26"
  },
  {
    d: 'M2 0h28l-2.547 28.751-11.484 3.249-11.42-3.251-2.549-28.749zM24.787 5.884l-17.573-0.004 0.284 3.496 13.5 0.003-0.34 3.621h-8.853l0.32 3.431h8.243l-0.488 4.697-3.88 1.072-3.941-1.080-0.251-2.813h-3.48l0.387 5.14 7.287 2.271 7.164-2.040 1.623-17.792z',
    strokeDasharray: '90, 100',
    percentage: '90%',
    stroke: '#D11B1B',
    fill: "#1572b6"
    },
  {
    d: 'M0 0h32v32h-32v-32zM29.379 24.368c-0.233-1.46-1.184-2.687-4.004-3.831-0.981-0.46-2.072-0.78-2.396-1.52-0.121-0.44-0.14-0.68-0.061-0.94 0.2-0.861 1.22-1.12 2.020-0.88 0.52 0.16 1 0.56 1.301 1.2 1.379-0.901 1.379-0.901 2.34-1.5-0.36-0.56-0.539-0.801-0.781-1.040-0.84-0.94-1.959-1.42-3.779-1.379l-0.94 0.119c-0.901 0.22-1.76 0.7-2.28 1.34-1.52 1.721-1.081 4.721 0.759 5.961 1.82 1.36 4.481 1.659 4.821 2.94 0.32 1.56-1.16 2.060-2.621 1.88-1.081-0.24-1.68-0.781-2.34-1.781l-2.44 1.401c0.28 0.64 0.6 0.919 1.080 1.479 2.32 2.341 8.12 2.221 9.161-1.339 0.039-0.12 0.32-0.94 0.099-2.2l0.061 0.089zM17.401 14.708h-2.997c0 2.584-0.012 5.152-0.012 7.74 0 1.643 0.084 3.151-0.184 3.615-0.44 0.919-1.573 0.801-2.088 0.64-0.528-0.261-0.796-0.621-1.107-1.14-0.084-0.14-0.147-0.261-0.169-0.261l-2.433 1.5c0.407 0.84 1 1.563 1.765 2.023 1.14 0.68 2.672 0.9 4.276 0.54 1.044-0.301 1.944-0.921 2.415-1.881 0.68-1.24 0.536-2.76 0.529-4.461 0.016-2.739 0-5.479 0-8.239l0.005-0.075z',
    strokeDasharray: '75, 100',
    percentage: '75%',
    stroke: '#1da1f2',
    fill: "#f7df1e"
    }
];

export default () =>{
  return (
    <section className="resume">
      <div className="info">
        <div className="info__group">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="info__icon">
            <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
          </svg>
          <p className="info__detail">Oran - Algeria</p>
        </div>

        <div className="info__group">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="info__icon">
            <path d="M18 9c1.641 0 3 1.359 3 3v1.547c0 1.078-0.891 1.969-1.969 1.969-0.516 0-0.984-0.188-1.359-0.563l-2.156-2.156-2.156 2.156c-0.75 0.75-2.016 0.75-2.766 0l-2.109-2.156-2.156 2.156c-0.375 0.375-0.844 0.563-1.359 0.563-1.078 0-1.969-0.891-1.969-1.969v-1.547c0-1.641 1.359-3 3-3h5.016v-2.016h1.969v2.016h5.016zM16.594 15.984c0.656 0.656 1.5 1.031 2.438 1.031 0.75 0 1.406-0.234 1.969-0.609v4.594c0 0.563-0.422 0.984-0.984 0.984h-16.031c-0.563 0-0.984-0.422-0.984-0.984v-4.594c0.563 0.375 1.219 0.609 1.969 0.609 0.938 0 1.781-0.375 2.438-1.031l1.078-1.078 1.078 1.078c1.313 1.313 3.563 1.313 4.875 0l1.078-1.078zM12 6c-1.078 0-2.016-0.938-2.016-2.016 0-0.375 0.141-0.75 0.328-1.031l1.688-2.953 1.688 2.953c0.188 0.281 0.328 0.656 0.328 1.031 0 1.078-0.891 2.016-2.016 2.016z" />
          </svg>
          <p className="info__detail">12/02/1991</p>
        </div>

        <div className="info__group">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="info__icon">
            <path d="M13.6 13.47c-0.91 0.953-2.191 1.545-3.61 1.545-2.756 0-4.99-2.234-4.99-4.99 0-0.009 0-0.018 0-0.026v0.001c0-2.761 2.239-5 5-5 1.131 0 2.175 0.376 3.013 1.009l-0.013-0.009v-1h2v6.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5v0-1.5c-0.003-4.416-3.584-7.994-8-7.994-4.418 0-8 3.582-8 8s3.582 8 8 8c1.305 0 2.537-0.312 3.625-0.867l-0.045 0.021 0.9 1.79c-1.305 0.668-2.847 1.060-4.48 1.060-5.523 0-10-4.477-10-10s4.477-10 10-10c5.519 0 9.994 4.472 10 9.99v0.001h-0.010v1.5c0 0.003 0 0.007 0 0.010 0 1.933-1.567 3.5-3.5 3.5-1.202 0-2.262-0.606-2.892-1.528l-0.008-0.012zM10 13c1.657 0 3-1.343 3-3s-1.343-3-3-3v0c-1.657 0-3 1.343-3 3s1.343 3 3 3v0z" />
          </svg>
          <a className="info__detail" href="mailto:ssefbnm@gmail.com?subject=feedback">ssefbnm@gmail.com</a>
        </div>

        <div className="info__group">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="info__icon">
            <path d="M20.4 13.9c-0.9-0.1-1.8-0.3-2.6-0.6-1.1-0.4-2.3-0.1-3.2 0.7l-0.7 0.7c-1.8-1.2-3.4-2.7-4.6-4.6l0.7-0.7c0.8-0.8 1.1-2.1 0.7-3.2-0.3-0.8-0.5-1.7-0.6-2.6-0.2-1.5-1.5-2.6-3-2.6 0 0 0 0 0 0h-3c-0.1 0-0.2 0-0.3 0-0.8 0.1-1.5 0.5-2 1.1s-0.7 1.4-0.7 2.2c0.3 3.2 1.5 6.4 3.2 9.1 1.6 2.5 3.8 4.7 6.3 6.3 2.7 1.8 5.9 2.9 9.1 3.2 0.1 0 0.2 0 0.3 0 0 0 0 0 0 0 0.8 0 1.6-0.3 2.1-0.9s0.9-1.3 0.9-2.1v-3c0-1.5-1.1-2.8-2.6-3zM21 16.9v3c0 0.3-0.1 0.5-0.3 0.7s-0.4 0.3-0.8 0.3c-2.9-0.3-5.7-1.3-8.2-2.9-2.3-1.4-4.2-3.4-5.7-5.7-1.6-2.5-2.6-5.3-2.9-8.2 0-0.3 0.1-0.5 0.2-0.7 0.2-0.2 0.5-0.4 0.8-0.4h3c0 0 0 0 0 0 0.5 0 0.9 0.4 1 0.9 0.1 1 0.4 2.1 0.8 3 0.1 0.4 0 0.8-0.2 1.1l-1.3 1.2c-0.3 0.3-0.4 0.8-0.2 1.2 1.5 2.7 3.7 4.9 6.4 6.4 0.4 0.2 0.9 0.2 1.2-0.2l1.3-1.3c0.3-0.3 0.7-0.4 1.1-0.2 1 0.4 2 0.6 3 0.8 0.4 0.1 0.8 0.5 0.8 1 0 0 0 0 0 0z" />
          </svg>
          <p className="info__detail">+213 777 915 747</p>
        </div>

        <div className="info__group">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="info__icon">
            <path d="M32 8c0-1.406-0.957-2.608-2.326-2.924l-13.013-3.003c-0.218-0.049-0.44-0.073-0.661-0.073s-0.443 0.024-0.675 0.076l-12.999 3c-1.37 0.316-2.326 1.518-2.326 2.924s0.957 2.608 2.325 2.924l2.675 0.617v8.459c0 2.654 3.038 5 11 5s11-2.346 11-5v-8.459l2.674-0.617c1.369-0.316 2.326-1.518 2.326-2.924zM25 20c0 1.105-3 3-9 3s-9-1.895-9-3v-7.997l8.338 1.924c0.218 0.049 0.441 0.073 0.662 0.073s0.444-0.024 0.674-0.076l8.326-1.921v7.997zM16.225 11.975c-0.075 0.016-0.15 0.025-0.225 0.025s-0.151-0.009-0.225-0.025l-13-3c-0.454-0.105-0.775-0.509-0.775-0.975s0.321-0.87 0.775-0.975l13-3c0.074-0.016 0.149-0.025 0.225-0.025s0.151 0.009 0.225 0.025l13 3c0.453 0.105 0.775 0.509 0.775 0.975s-0.322 0.87-0.775 0.975l-13 3zM29 13c0-0.553 0.447-1 1-1 0.552 0 1 0.447 1 1v9c0 0.553-0.448 1-1 1-0.553 0-1-0.447-1-1v-9zM30 24c1.104 0 2 2.896 2 4s-0.896 2-2 2c-1.105 0-2-0.896-2-2s0.895-4 2-4z" />
          </svg>
          <p className="info__detail">bachelor of <storng>MANAGEMENT</storng> form -University of Oran 2-</p>
        </div>

        <div className="info__group">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="info__icon">
            <path d="M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM20.9 11h-4c-0.2-2.8-1.1-5.4-2.7-7.7 3.6 0.9 6.3 4 6.7 7.7zM9.1 13h5.9c-0.3 2.7-1.3 5.3-2.9 7.4-1.8-2.1-2.8-4.7-3-7.4zM9.1 11c0.3-2.7 1.3-5.3 2.9-7.4 1.7 2.2 2.7 4.8 2.9 7.4h-5.8zM9.7 3.3c-1.5 2.3-2.4 4.9-2.6 7.7h-4c0.4-3.7 3.1-6.8 6.6-7.7zM3.1 13h4c0.2 2.8 1.1 5.4 2.7 7.7-3.6-0.9-6.3-4-6.7-7.7zM14.3 20.7c1.5-2.3 2.4-4.9 2.7-7.7h4c-0.5 3.7-3.2 6.8-6.7 7.7z" />
          </svg>
          <p className="info__detail">Arabic, English, French</p>
        </div>
      </div>

      <div className="skills">
        <div className="skills__container">
          {tools.map((tool, i) =>{
            return (
              <Chart
                key={i}
                title= {tool.title}
                fill= {tool.fill}
                d={tool.d}
                strokeDasharray={tool.strokeDasharray}
                percentage={tool.percentage}
                stroke= {tool.stroke}
              />
            );
          })}
        </div>
        <div className="frams-container">
          {
            frams.map((fram, i) =>{
              return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" className="frams-icons">
                  <path fill={fram.fill} d={fram.d} />
                </svg>
              );
            })
          }

        </div>
      </div>
    </section>
  );
}
