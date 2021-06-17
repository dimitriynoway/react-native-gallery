import React from 'react';
import { Provider } from 'react-redux';
import List from './pages/List';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import Photo from './pages/Photo';

enableScreens();

const Stack = createSharedElementStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator headerMode='none' initialRouteName='List'>
                    <Stack.Screen name='List' component={List} />
                    <Stack.Screen
                        name='Photo'
                        component={Photo}
                        options={() => ({
                            // transitionSpec: {
                            //     open: {
                            //         animation: 'timing',
                            //         config: { duration: 500 }
                            //     },
                            //     close: {
                            //         animation: 'spring',
                            //         config: { duration: 300 }
                            //     }
                            // },
                            //!Optionally (for smoother animation)
                            //uncomment, but could work worse with freezes
                            cardStyleInterpolator: ({
                                current: { progress }
                            }) => {
                                return {
                                    cardStyle: {
                                        opacity: progress
                                    }
                                };
                            }
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
