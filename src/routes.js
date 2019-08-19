import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Cart,
      Home
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#4078c0',
        },
        headerTintColor: '#FFF',
      },
    }
  )
)
 
export default Routes;