import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps191475Navigator from '../features/Maps191475/navigator';
import Settings191453Navigator from '../features/Settings191453/navigator';
import Settings191438Navigator from '../features/Settings191438/navigator';
import NotificationList191437Navigator from '../features/NotificationList191437/navigator';
import Maps191436Navigator from '../features/Maps191436/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps191475: { screen: Maps191475Navigator },
Settings191453: { screen: Settings191453Navigator },
Settings191438: { screen: Settings191438Navigator },
NotificationList191437: { screen: NotificationList191437Navigator },
Maps191436: { screen: Maps191436Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
