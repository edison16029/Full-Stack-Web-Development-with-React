import React, { Component } from 'react';
import { View,FlatList,Text } from 'react-native';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Tile } from 'react-native-elements';
import { Loading} from './LoadingComponent';
import * as Animatable from 'react-native-animatable';


const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
  }


class MenuComponent extends Component{


    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'Menu'
    };

    render() {
        const renderMenuItem = ({item,index}) => {
            return (
                <Tile 
                key = {index}
                title = {item.name}
                caption = {item.description}
                featured
                onPress={() => navigate('Dishdetail', { dishId: item.id })}
                imageSrc={{ uri : baseUrl + item.image}}
                />
            );
        }

        const { navigate } = this.props.navigation;
        if(this.props.dishes.isLoading){
            return(
                <Loading />
            );
        }
        else if(this.props.dishes.errMess){
            return(
                <View>            
                    <Text>{this.props.dishes.errMess}</Text>
                </View>            
            );
        }
        else{
            return (
                <Animatable.View animation="fadeInRightBig" duration={2000}>   
                    <FlatList
                        data = {this.props.dishes.dishes}
                        keyExtractor = {item => item.id.toString()}
                        renderItem = {renderMenuItem} /> 
                </Animatable.View>
            )
        }

    }

}

export default connect(mapStateToProps)(MenuComponent);