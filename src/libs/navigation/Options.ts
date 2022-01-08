import { Dimensions } from "react-native";
import { AnimationOptions, Navigation, OptionsModalPresentationStyle } from "react-native-navigation";
import Colors from "src/styles/colors";

const flags = {
  showTextInputToTestKeyboardInteraction: false,
  useCustomAnimations: false,
  useSlowOpenScreenAnimations: false,
  useSlideAnimation: false,
};

const { useCustomAnimations, useSlowOpenScreenAnimations, useSlideAnimation } =
  flags;
const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);
const SHOW_DURATION = 250 * (useSlowOpenScreenAnimations ? 2.5 : 1);



const slideAnimations: AnimationOptions = {
  push: {
    waitForRender: true,
    content: {
      translationX: {
        from: width,
        to: 0,
        duration: useSlowOpenScreenAnimations ? SHOW_DURATION : 300,
      },
      alpha: {
        from: 0.7,
        to: 1,
        duration: useSlowOpenScreenAnimations ? SHOW_DURATION : 300,
      },
    },
  },
  pop: {
    content: {
      translationX: {
        from: 0,
        to: width,
        duration: useSlowOpenScreenAnimations ? SHOW_DURATION : 300,
      },
      alpha: {
        from: 1,
        to: 0.3,
        duration: useSlowOpenScreenAnimations ? SHOW_DURATION : 300,
      },
    },
  },
};

const customAnimations: AnimationOptions = {
  showModal: {
    waitForRender: true,
    translationY: {
      from: height,
      to: 0,
      duration: SHOW_DURATION,
      interpolation: { type: "decelerate" },
    },
    alpha: {
      from: 0.65,
      to: 1,
      duration: SHOW_DURATION * 0.7,
      interpolation: { type: "accelerate" },
    },
  },
  dismissModal: {
    translationY: {
      from: 0,
      to: height,
      duration: SHOW_DURATION * 0.9,
    },
  },
  push: {
    waitForRender: true,
    content: {
      alpha: {
        from: 0.65,
        to: 1,
        duration: SHOW_DURATION * 0.7,
        interpolation: { type: "accelerate" },
      },
      translationY: {
        from: height * 0.3,
        to: 0,
        duration: SHOW_DURATION,
        interpolation: { type: "accelerate" },
      },
    },
  },
  pop: {
    content: {
      alpha: {
        from: 1,
        to: 0,
        duration: SHOW_DURATION,
      },
      translationY: {
        from: 0,
        to: height * 0.7,
        duration: SHOW_DURATION * 0.9,
      },
    },
  },
};
const setDefaultOptions = () =>
  Navigation.setDefaultOptions({
    layout: {
      orientation: ["portrait", "landscape"],
      componentBackgroundColor: "#FFF",
    },
    statusBar: {
      style: "dark",
      backgroundColor: "#ffffff",
      animated: true,
      // blur: true,
      hideWithTopBar: true,
      // translucent: true,
      // drawBehind: true
    },
    topBar: {
      backButton: {
        icon: require("assets/app/icons/ic_chevronback.png"),
        color: Colors.ink900,
        fontSize: 16,
      },
      animate: true,
      title: {
        color: Colors.ink900,
        fontSize: 16,
        alignment: "center",
      },
      background: {
        color: "white",
      },
      visible: false,
      elevation: 0,
    },
    animations: {
      ...(useSlideAnimation
        ? slideAnimations
        : useCustomAnimations
        ? customAnimations
        : {}),
    },
    modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
    bottomTabs: {
      backgroundColor: "#ffffff",
      titleDisplayMode: "alwaysShow",
      tabsAttachMode: "onSwitchToTab",
      drawBehind: false,
    },
    bottomTab: {
      textColor: Colors.ink400,
      fontSize: 12,
      selectedTextColor: Colors.ink900,
      selectedFontSize: 12,
    },
  });

export { setDefaultOptions };
