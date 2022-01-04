import { Screens } from '../../screens/Screens';
import { APP_STACK_ID } from '../../utils/enum';
import { Navigation } from 'react-native-navigation';
import { Storage } from '../../../src/modules/Storage';


export default function addLayoutProcessors(): void {
  eventsProcessor();
  layoutProcessor();
}

function layoutProcessor() {
  // Navigation.addLayoutProcessor((layout, _commandName) => {
  //   return layout;
  // });
}

function eventsProcessor() {
  Navigation.events().registerBottomTabSelectedListener(
    ({ selectedTabIndex, unselectedTabIndex }) => {
      switch (selectedTabIndex) {
        case 0:
          Storage.currentScreenStackId = APP_STACK_ID.listGame;
          break;
        case 1:
          Storage.currentScreenStackId = APP_STACK_ID.profile;
          break;
          case 2:
          Storage.currentScreenStackId = APP_STACK_ID.erace;
          break;
        default:
          break;
      }
    }
  );

  Navigation.events().registerComponentDidAppearListener((event) => {
    if (event.componentType === 'Component') {
      let componentName = event.componentName;
      Storage.currentScreenId = componentName;
    }
  });
}
