import React from 'react';
import { FlatList, ActivityIndicator, TextInput, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      kota: '',

    }
  }

  componentDidMount(){
    return fetch('http://api.openweathermap.org/data/2.5/weather?q='+ this.state.kota +'&appid=987df1d1b2101ad5c37a3d52a028b201')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.weather,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }


      return(
        <View>
          <Text>Masukkan nama kota lalu tekan enter </Text>
          <TextInput
            onSubmitEditing={
              (event) => this.setState({ kota: event.nativeEvent.text })
            }
          />
          <Text>kota : {this.state.kota}</Text>
        </View>
      )
    


    return(
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>Cuaca : {item.main} {"\n"}Deskripsi : {item.description}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
