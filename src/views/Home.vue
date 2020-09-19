<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>{{weatherInformation}}</p>
    <hr>
    <p>{{employeeInformation}}</p>
    <hr>
    <p>{{restaurants}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { employeeAPIClient, weatherAPIClient } from '../remote-service-access/http-clients'
import { defaultFirestore } from '../remote-service-access/firebase-clients'

export default {
  name: 'Home',

  data () {
    return {
      weatherInformation: 'No Data Yet',
      employeeInformation: 'No Data Yet',
      restaurants: []
    }
  },

  created () {
    var self = this
    weatherAPIClient.get('weather', {
      params: {
        id: '2172797',
        units: '%22metric%22 or %22imperial%22',
        mode: 'xml%2C html',
        q: 'Colombo'
      }
    }).then(function (response) {
      console.log(response)
      self.weatherInformation = response.data
    }).catch(function (error) {
      self.defaultHTTPErrorHandler(error, self.weatherInformation)
    })

    employeeAPIClient.get('employees')
      .then(function (response) {
        console.log(response)
        self.employeeInformation = response.data
      }).catch(function (error) {
        self.defaultHTTPErrorHandler(error, self.employeeInformation)
      })

    defaultFirestore.collection('restaurants').onSnapshot((resCollection) => {
      resCollection.forEach((res) => {
        var element = res.data()
        element.id = res.id
        this.restaurants.push(element)
      })
    })
  },

  methods: {
    defaultHTTPErrorHandler (error, messageHolder) {
      if (error.response) {
        messageHolder = 'Server Error: ' + error.response.status + ' : ' + JSON.stringify(error.response.data)
      } else if (error.request) {
        messageHolder = 'Could send request to server: ' + error.message
      } else {
        messageHolder = 'Something went wrong: ' + error.message
      }
    }
  }
}
</script>
