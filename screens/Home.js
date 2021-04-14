import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import axios from "axios";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      movieDetails: {}
    };
  }

  componentDidMount() {
    this.getMovie();
  }


  getMovie = () => {
    const url = "http://localhost:5000/get-movie";
    axios
      .get(url)
      .then(response => {
        let details = response.data.data;
        this.setState({ movieDetails: details });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  likedMovie = () => {
    const url = "http://localhost:5000/liked-movie";
    axios
      .post(url)
      .then(response => {
        this.getMovie();
      })
      .catch(error => {
        alert(error.message);
      });
  };

  unlikedMovie = () => {
    const url = "http://localhost:5000/unliked-movie";
    axios
      .post(url)
      .then(response => {
        this.getMovie();
      })
      .catch(error => {
        alert(error.message);
      });
  };

  notWatched = () => {
    const url = "http://localhost:5000/did-not-watch";
    axios
      .post(url)
      .then(response => {
        this.getMovie();
      })
      .catch(error => {
        alert(error.message);
      });
  };

  render(){
    const { movieDetails } = this.state;
    if (movieDetails) {
      const {
        poster_link,
        original_title,
        release_date,
        duration,
        overview,
        rating
      } = movieDetails;
      return(
      <View>
      <View>
        <Header
          centerComponent={{
            text: "Movie Recommendation",
          }}
          backgroundColor={"#d500f9"}
        />
      </View>
      <View >
        <View>
          <Image source={{ uri: poster_link }} />
        </View>
        <View >
          <View >
            <Text >{original_title}</Text>
            <Text >{duration}</Text>
          </View>
          <View >
            <View >
              <AirbnbRating
                count={10}
                reviews = {["", "", "", "", ""]}
                defaultRating = {rating}
                isDisabled = {true}
                size={25}
              />
            </View>
            <View>
              <Text>{overview}</Text>
            </View>
          </View>
          <View>
            <View>
              <TouchableOpacity onPress={this.likedMovie}>
                <Icon
                  reverse
                  name={"check"}
                  type={"entypo"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.unlikedMovie}>
                <Icon
                  reverse
                  name={"cross"}
                  type={"entypo"}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={this.notWatched}>
                <Text>Did not watch</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
    );
  }
  return null;
  }
}