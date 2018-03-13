import { StackNavigator } from 'react-navigation'
import HotelListScreen from '../Containers/HotelListScreen'
import HotelDetailsScreen from '../Containers/HotelDetailsScreen'



const PrimaryNav = StackNavigator(
  {
    home: { screen: HotelListScreen,},
    hotelDetails: { screen: HotelDetailsScreen,},
  },
  {
    initialRouteName: 'home',
  }
);

export default PrimaryNav
