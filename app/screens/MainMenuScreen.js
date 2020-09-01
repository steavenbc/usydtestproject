import React from 'react';
import { FlatList, View, StyleSheet, Text,  Image, TouchableOpacity, Button} from 'react-native';
import data from "../data/content.json"
import CheckBox from '@react-native-community/checkbox';
 

function MainMenuScreen({navigation}) {

    const [visitedPagesList, updatePageList] = React.useState([]);

    const handlePress = (title)=> updatePageList(visitedPagesList.concat(title))

    //Individual List item rendering section
    const Item = ({ title }) => (
            <TouchableOpacity onPress={()=> {navigation.navigate('SectionScreen', {title:title}); handlePress(title)}} style={styles.touchArea}>
                <CheckBox style={styles.checkbox} disabled={true} value={visitedPagesList.indexOf(title)>-1} tintColors={{ true: '#F15927', false: 'black' }}/>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.arrowImage} source={require("../assets/arrow-right.png")}/>
            </TouchableOpacity>
      );

      //List Item section
    const renderItem = ({ item }) => (
        <Item title={item} />
      );
    let menuListData=Object.keys(data);


    //List Item separator
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