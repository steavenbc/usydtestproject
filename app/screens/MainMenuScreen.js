import React from 'react';
import { FlatList, View, StyleSheet, Text,  Image, TouchableOpacity, Button} from 'react-native';
import data from "../data/content.json"
import CheckBox from '@react-native-community/checkbox';
 

function MainMenuScreen({navigation}) {

    const Item = ({ title }) => (
            <TouchableOpacity onPress={()=> navigation.navigate('SectionScreen', {title:title})} style={styles.touchArea}>
                <CheckBox style={styles.checkbox}/>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.arrowImage} source={require("../assets/arrow-right.png")}/>
            </TouchableOpacity>
      );
    const renderItem = ({ item }) => (
        <Item title={item} />
      );
    let menuListData=Object.keys(data);

    const separator = () =>(
        <View
            style={{
                backgroundColor:'grey',
                height:0.5
            }}/>
    );
    
    return(
        <View style={styles.mainMenu}>
            <FlatList data={menuListData} renderItem={renderItem} keyExtractor={item=>item} ItemSeparatorComponent={separator} ListFooterComponent={separator}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainMenu:{
        justifyContent:'flex-start'
    },
      title: {
        fontSize: 20,
        left: 30,
        paddingBottom:20,
        paddingTop:20
      },
      checkbox:{
        paddingBottom:20,
        paddingTop:20,
    },
    arrowImage:{
        width:14,
        height:15,
        right:20,
        position:'absolute',
    },
    touchArea:{
        flexDirection: 'row',
        alignItems:'center'
    }
})

export default MainMenuScreen;