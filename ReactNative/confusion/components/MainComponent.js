import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishdetailComponent from './DishdetailComponent';
import ContactComponent from './ContactComponent';
import HomeComponent from  './HomeComponent';
import AboutComponent from './AboutComponent';
import Reservation from './ReservationComponent';
import Favourite from './FavouriteComponent';
import Login from './LoginComponent';
import { View, Platform, Text, ScrollView, Image, StyleSheet,ToastAndroid } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})



const MenuNavigator = createStackNavigator({
        Menu: { screen: MenuComponent,
          navigationOptions : ({ navigation }) => ({
            headerLeft : <Icon name="menu" size={24} color='white' 
                          onPress= {() => navigation.toggleDrawer() }/>
          }) },
        Dishdetail: { screen: DishdetailComponent }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            },
            
        }
    }
);

const HomeNavigator = createStackNavigator({ //Created To obtain the Title Bar
    Home: { screen: HomeComponent }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft : <Icon name="menu" size={24} color='white' 
          onPress= {() => navigation.toggleDrawer() }/>  
    })
});

const ContactNavigator = createStackNavigator({ //Created To obtain the Title Bar
    Contact : { screen: ContactComponent }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft : <Icon name="menu" size={24} color='white' 
          onPress= {() => navigation.toggleDrawer() }/>  
    })
});

const AboutNavigator = createStackNavigator({ //Created To obtain the Title Bar
    Contact : { screen: AboutComponent }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft : <Icon name="menu" size={24} color='white' 
          onPress= {() => navigation.toggleDrawer() }/>  
    })
});

const ReservationNavigator = createStackNavigator({ //Created To obtain the Title Bar
  Reservation : { screen: Reservation }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff",
    headerLeft : <Icon name="menu" size={24} color='white' 
        onPress= {() => navigation.toggleDrawer() }/>  
  })
});

const FavouritesNavigator = createStackNavigator({ //Created To obtain the Title Bar
  Favourite : { screen: Favourite }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff",
    headerLeft : <Icon name="menu" size={24} color='white' 
        onPress= {() => navigation.toggleDrawer() }/>  
  })
});

const LoginNavigator = createStackNavigator({
    Login: { screen: Login }
  }, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    title : 'Login',
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24}
      iconStyle={{ color: 'white' }} 
      onPress={ () => navigation.toggleDrawer() } />    
  })
});


const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);


const MainNavigator = createDrawerNavigator({
  Login: 
  { screen: LoginNavigator,
    navigationOptions: {
      title: 'Login',
      drawerLabel: 'Login',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='sign-in'
          type='font-awesome'            
          size={24}
          iconStyle={{ color: tintColor }}
        />
      ),
    }
  },
  Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
            /> )
        }
      },
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='list'
              type='font-awesome'            
              size={24}
              color={tintColor}
            /> )
        }, 
      },
      Contact: 
      { screen: ContactNavigator,
        navigationOptions: {
          title: 'Contact Us',
          drawerLabel: 'Contact Us',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='address-card'
              type='font-awesome'            
              size={24}
              color={tintColor}
            /> )
        }, 
      },
      About: 
      { screen: AboutNavigator,
        navigationOptions: {
          title: 'About Us',
          drawerLabel: 'About Us',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='info-circle'
              type='font-awesome'            
              size={24}
              color={tintColor}
            /> )
        }, 
      },
      Reservation: 
      { screen: ReservationNavigator,
        navigationOptions: {
          title: 'Reserve Table',
          drawerLabel: 'Reserve Table',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='cutlery'
              type='font-awesome'            
              size={24}
              color={tintColor}
            /> )
        }, 
      },
      Favourite: 
      { screen: FavouritesNavigator,
        navigationOptions: {
          title: 'My Favourites',
          drawerLabel: 'My Favourites',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='heart'
              type='font-awesome'            
              size={24}
              color={tintColor}
            /> )
        }, 
      },
}, {
  initialRouteName : 'Home',
  drawerBackgroundColor: '#D1C4E9',
  contentComponent : CustomDrawerContentComponent
});


class MainComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders();

      // NetInfo.getConnectionInfo()
      // .then((connectionInfo) => {
      //     ToastAndroid.show('Initial Network Connectivity Type: '
      //         + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType,
      //         ToastAndroid.LONG)
      // });

      // NetInfo.addEventListener('connectionChange', this.handleConnectivityChange)
      NetInfo.addEventListener(state => {
        switch (state.type) {
          case 'none':
            ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
            break;
          case 'wifi':
            ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
            break;
          case 'cellular':
            ToastAndroid.show('You are now connected to Cellular!', ToastAndroid.LONG);
            break;
          case 'unknown':
            ToastAndroid.show('You now have unknown connection!', ToastAndroid.LONG);
            break;
          default:
            break;
        }
      });

    }



    render() {
        return (
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <MainNavigator />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);