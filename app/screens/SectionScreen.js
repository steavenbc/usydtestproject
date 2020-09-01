import React from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking, Button } from 'react-native';
import data from '../data/content.json'


function SectionScreen(props){
    
    let pageTitle = props.navigation.getParam('title')
    let menuListData=Object.keys(data);
    let titleIndex = menuListData.indexOf(pageTitle);
    let nextTitleIndex = titleIndex + 1;
    let renderNextPageLink = false;
    renderNextPageLink = nextTitleIndex < menuListData.length ? true:false;
    const [expanded, setExpanded] = React.useState(false);
    const handlePress = () => setExpanded(!expanded);

    let contentSource = data[pageTitle];
    let mainLinks = contentSource.introParagraph.links;
    const Item = ({title, link}) => (
        <View style={styles.primaryLinkItem}>
            <TouchableOpacity onPress={()=> Linking.openURL(link)} style={styles.primaryLink}>
                <Image style={styles.linkImage} source={require("../assets/metro-link.png")}/>
                <Text style={styles.primaryLinkText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} link={item.uri} />
      );

    let faqContent = contentSource.FAQItems;
    let faqLinks = faqContent.additionalInfo;

    const FAQLink = ({title, link}) => (
        <View style={styles.primaryLinkItem}>
            <TouchableOpacity onPress={()=> Linking.openURL(link)} style={styles.primaryLink}>
                <Image style={styles.linkImage} source={require("../assets/metro-link.png")}/>
                <Text style={styles.faqLinkText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    const renderFaqLinkItem = ({ item }) => (
        <FAQLink title={item.title} link={item.url} />
      );

    const Accordion = ({title, answer, links, expand}) => (
        <View style={styles.faqSection}>
            <TouchableOpacity style={styles.row} onPress={handlePress}>
                <Text style={styles.faqTitle}>{title}</Text>
                <Image style={styles.dropdownImage} source={require("../assets/dropdown-filter-item.png")}></Image>
            </TouchableOpacity>
            {
                expand &&
                <View style={styles.child}>
                    <Text>{answer}</Text>  
                    <FlatList data={links} renderItem={renderFaqLinkItem} keyExtractor={item=>item.title}/>  
                </View>
            }
        </View>
    );

    const renderFaqItem = ({ item }) => (
        <Accordion title={item.question} answer={item.answer} links={item.additionalInfo} expand={expanded}/>
      );

      const AppButton = ({ title }) => (
        <TouchableOpacity onPress={()=> props.navigation.navigate('SectionScreen', {title:title})} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );

    return(
        <ScrollView style={styles.main}>
            <Text style={styles.introText}>{contentSource.introParagraph.text}</Text>
            <FlatList data={mainLinks} renderItem={renderItem} keyExtractor={item=>item.title}/>
            <Text style={styles.faqHeader}>FAQ</Text>
            <FlatList data={faqContent} renderItem={renderFaqItem} keyExtractor={item=>item.question}/>
            {   
                renderNextPageLink &&
                <AppButton title={menuListData[nextTitleIndex]} />
            }   
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: '#fff',
    },
    introText:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        fontWeight: 'bold',
        fontSize: 20
    },
    primaryLinkItem: {
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom:10
    },
    primaryLink:{
        flexDirection: 'row'
    },
    linkImage:{
        width:21,
        height:21,
        left:35
    },
    primaryLinkText:{
        left:50,
        fontWeight:'bold'
    },
    faqLinkText:{
        left:50
    },
    faqHeader:{
        color:'red',
        textDecorationLine: 'underline',
        alignSelf:'center',
        fontSize:30
    },
    faqTitle:{
        fontSize:14
    },
    child:{
        padding:10
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    dropdownImage:{
        width:12,
        height:12
    },
    faqSection:{
        padding:10
    },
    appButtonText:{
        color:'#fff',
        fontSize:20
    },
    appButtonContainer:{
        backgroundColor:'#FF4500',
        width:237,
        height:36,
        alignItems: 'center',
        justifyContent:'center',
        left:150
    }
})

export default SectionScreen;