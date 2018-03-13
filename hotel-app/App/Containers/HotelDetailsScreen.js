'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Image,
    TouchableOpacity,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Images } from '../Assets'


import * as Actions from '../Actions/FetchHotelDetailsByIdAction'; //Import your actions


class HotelDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const { hotel } = this.props.navigation.state.params;
        this.props.fetchHotelDetailsById(hotel._id); 
    }

    static navigationOptions = ({ navigation }) => {
        return {
          title: `${navigation.state.params.hotel.name}`,
        }
      };

    render() {
               const { hotel } = this.props.navigation.state.params;
               const { details } = this.props;

               console.log("HotelDetails: ", details);

            if (this.props.loadingDetails) {
                return (
                    <View style={styles.indicator}>
                        <ActivityIndicator animating={true}/>
                    </View>
                );
            } else {            
                return (  
               
               <View style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.icon} 
                    source={Images.location}
                    />
                    <Text style={styles.label}>{details.address}</Text>
                </View>
                <Text style={styles.title}>Facilities</Text>
                <View style={styles.row}>
                    <Image style={styles.icon} 
                    source={Images.bed}
                    />
                    <Text style={styles.label}>{details.beds}</Text>
                    
                    <Image style={styles.icon} 
                    source={Images.pool}
                    />
                    <Text style={styles.label}>{details.pool}</Text>                   
                </View>           
                
                <Image style={styles.image} 
                    source={{uri: hotel.imageUri}}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Book</Text>
                </TouchableOpacity>
                </View>
               )
            }
    }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        details: state.dataReducer.details
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HotelDetailsScreen);

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'flex-start',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10
    },

    label:{
        color: '#2f2f2f',
        fontSize: 15,
        marginLeft:10,
        height:20,
    },
    title:{
        color: '#006b00',
        fontSize: 15,
        fontWeight: "bold",
        margin:10,
        padding:4,
        borderRadius: 3.7,
        backgroundColor: "#bfecc8",
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    },
    image:{
        flex: 1,
        resizeMode: 'contain',
    },
    icon:{
        width: 16,
        height: 16,
        marginTop:5,
        marginLeft:5,

    },
    button:{
        height: 44,
        borderRadius: 3.7,
        margin:10,
        backgroundColor: '#02246c',
        justifyContent: 'center'
    },
    textButton:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    infoCard:{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'column'
    },
    indicator:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});