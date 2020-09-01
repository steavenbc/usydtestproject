import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MainMenuScreen from '../screens/MainMenuScreen';
import SectionScreen from '../screens/SectionScreen';

const screens={
    MainMenuScreen:{
        screen:MainMenuScreen,
        navigationOptions:{
            title:'International & Out of Town Guide',
        }
    },
    SectionScreen:{
        screen:SectionScreen,
        navigationOptions: ({navigation}) => {
            return{
                title: navigation.getParam('title')
            }
        }
    }
}
 
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor:'#404040',
        },
        headerTitleStyle:{
            color:"#fff",
            alignSelf: "center"
        }
    }
});

export default createAppContainer(HomeStack);