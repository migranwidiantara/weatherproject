import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
      }
    };
  }

getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=987df1d1b2101ad5c37a3d52a028b201&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
      }
    });
  }
  );

}
  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.boxInput}>
          <Text style={{ textAlign: 'center', paddingTop: 15,fontSize: 20 }}> Input City Name </Text>
          <TextInput
              style={{ height: 40, width: 180, color: 'white'}}
              placeholder=" Input City "
              onChangeText={(city) => this.setState({ city })}
            />
            <Button
              onPress={() => this.getWeather()}
              title="Search"
              color="#006064"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
      </View>

      <View style={styles.boxOutput}>

        <View style={styles.output}>
          <Text> City : { this.state.city} </Text>
        </View>

        <View style={styles.output}>
          <Text> Temp : { this.state.forecast.temp} </Text>
        </View>

        <View style={styles.output}>
          <Text> Main : { this.state.forecast.main} </Text>
        </View>

        <View style={styles.output}>
          <Text> Main Desc : { this.state.forecast.description} </Text>
        </View>

      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#4DD0E1',
    flex: 1,
    flexDirection: 'column'
  },

  boxInput: {
    flex: 0.2,
    backgroundColor: '#00ACC1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  box3: {
    flex: 0.5,
    backgroundColor: '#00ACC1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },

  boxOutput: {
    flex: 0.3,
    backgroundColor: '#00ACC1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },

  button: {
    flex: 0.3,
    backgroundColor: '#00ACC1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },



  output: {
    width: 400,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  }
});
