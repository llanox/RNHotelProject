'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    Image,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';


import * as Actions from '../Actions/FetchHotelsAction'; //Import your actions

class HotelListScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.fetchHotels(); //call our action
    }

      static navigationOptions = {
        title: `Hotels`,
      }

    render() {

        if (this.props.loading) {
            return (
                <View style={styles.indicator}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={styles.mainContainer}>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}/>
                </View>
            );
        }
    }

    renderItem({item, index}) {
        const { state, navigate } = this.props.navigation;

        return (
            <TouchableOpacity style={styles.row}
                onPress={() => navigate('hotelDetails', { hotel:item})}
            >
                <Image style={styles.image} 
                    source={{uri: item.imageUri}}
                />
                <View style={styles.info}>
                <Text style={styles.title}>
                    {item.name}
                </Text>
                <Rating
                    style={styles.score}
                    type='star'
                    ratingCount={5}
                    imageSize={15}
                    readonly={true}
                    startingValue={item.score}
                />
                <Text style={styles.location}>
                    {item.location}
                </Text>
                <View style={{flexDirection:'row',justifyContent: 'flex-end', paddingRight:8, marginTop:20}}>
                <Text style={styles.price}>
                    US${item.price}
                </Text>
                </View>
                </View>
             
            </TouchableOpacity>
        )
    }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HotelListScreen);

const styles = StyleSheet.create({
    mainContainer:{
        flex:1, 
        backgroundColor: '#ededed', 
        paddingTop:20
    },
    indicator:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    row:{
        margin: 5,
        backgroundColor: 'white', 
        flexDirection: 'row',
        flex: 1,
        borderRadius: 3.7,

    },
    info:{
        borderColor: "transparent",
        flex: 1,
    },
    image:{
        width:130,
        height:130,
    },

    title:{
        fontSize: 21,
        marginLeft: 8,
        color: '#2f2f2f',
        justifyContent: "center",
        fontWeight: 'bold'
    },

    score:{
        marginTop: 5,
        marginLeft: 8,
    },
    location:{
        color: '#2f2f2f',
        marginLeft: 8,
        marginTop:10,
        fontSize: 16,
        justifyContent: 'flex-end',
    },
    price:{
        color: '#2f2f2f',
        marginLeft: 8,
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'flex-end',
    }
});