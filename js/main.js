Vue.component('weather-parameter', {
  props: ['title', 'value'],
  template: '<div>'+
               '<p class="weather-parameter__title">{{ title }}</p>'+
               '<p class="weather-parameter__value">{{ value }}</p></div>'
})

Vue.component('temperature-type', {
  template:
    '<div>'+
      '<p class="temperature-type__btn temperature-type__celsius">C</p>'+
      '<p class="temperature-type__btn temperature-type__fahrenheit">F</p>'+
    '</div>'
});

Vue.component('flex-input',{
  props:['currentCity'],
  template: `<input
                  v-bind:value="currentCity"
                  v-on:input="$emit('input', $event.target.value)"/>`
});

Vue.component('flex-btn',{
  template: `<button v-on:click="$emit('show')">ok</button>`
});

// Vue.component('city-input',{
//   props:['showInput', 'currentCity'],
//   template: '<div>'+
//               '<input '+
//                 'class="input weather__input" '+
//                 'v-model="currentCity" >'+
//               '<button '+
//                 'class="btn weather__btn" '+
//               '>ок</button>'+
//             '</div>',
// });

Vue.component('deegres-state', {
  props: ['state'],
  template:
    '<div><p class="deegres-state__title">{{ state }}</p></div>'
});

Vue.component('deegres-title' ,{
  props: ['deegres'],
  template:
    '<div><p class="deegres-information__title">{{ deegres }}</p></div>'
});

// Vue.component('deegres-img', {
//   props:['src'],
//   template: '<img height="150" src="{{src}}"/>'
// });


const weather = new Vue({
  el: '#weather',
  data: {
    currentCity: 'Краснодар',
    show: false,
    charWeather:[
      { deegres: '14', state: 'Дождь', src: 'img/rain.png' }
    ],
    temperatureType: [
      {title: 'C', class: 'temperature-type__celsius'},
      {title: 'F', class: 'temperature-type__fahrenheit'}
    ],
    parametersWeather: [
      { title: 'Ветер', value: '5 м/с, западный' },
      { title: 'Давление', value: '752 мм рт. ст.' },
      { title: 'Влажность', value: '60%' },
      { title: 'Вероятность осадков', value: '10%' }
    ]
  },
  methods: {
    showInput: function(){
      this.show = !this.show;
    }
  }
})
