## createDrawerNavigator Error Fix menual because of use react-native 4 verison.Following how to fix
    1. Open the Drawer.js file found in /node_modules/react-navigation-drawer/lib/module/views/ folder
    2. You will find interpolate in two places, replace the interpolate with interpolateNode in those two places.
    3. restart you aPP :)