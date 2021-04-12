import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import { Avatar, Button, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {},
      title: ''
    };
  }

  getMovie = () => {
    const url = 'http://localhost:5000/get-movie'
    axios.get(url).then(response => {
      var details = response.data.data
      title = details['original_title']
      this.setState({
        movieDetails: details,
        title: title
      })
    })
  }

  componentDidMount(){
    this.getMovie()
  }

  render() {
    return (
      <View>
        <Card>
            <Card.Title title={this.state.title}/>
            <Card.Cover source={{ uri: this.state.movieDetails['poster_link'] }} />
            <Card.Actions>
            <Button>Liked</Button>
            <Button>Disliked</Button>
            <Button>Did not watch</Button>
            </Card.Actions>
        </Card>
      </View>
    );
    }
}