import { loadAbout } from './components/navigation/navigation.js';

import { loadHome } from './pages/home';
import { load404 } from './pages/404';

const loadScript = (url, callback) => {
  const script = document.createElement('script');
  script.src = url;
  script.defer = true;
  script.onreadystatechange = callback;
  script.onload = callback;
  document.body.appendChild(script);
};

const fire = () => {
  const config = {
    apiKey: 'AIzaSyDvaaNIb1KvegzUP2EtgxjxzcxG_T36wQI',
    authDomain: 'test-1498d.firebaseapp.com',
    databaseURL: 'https://test-1498d.firebaseio.com',
    storageBucket: 'test-1498d.appspot.com',
    messagingSenderId: '642330827186'
  };
  firebase.initializeApp(config);
};

loadScript('https://www.gstatic.com/firebasejs/3.5.2/firebase.js', fire);

page('/', loadHome);
page('/about', loadAbout);
page('*', load404);
page();

const chart = () => {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

};


loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.min.js', chart);
