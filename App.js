import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Component/Home';
import Header from './Component/Header';
import NoteAdd from './Component/NoteAdd';
import Detail from './Component/Detail';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen component={Home} name='Home' options={{
          headerTitle: () => <Header name="Notes" />,
          headerStyle: {
            backgroundColor: '#4c00b0',
            height: 120,
          }
        }} />
        <stack.Screen component={NoteAdd} name='NoteAdd' options={{
          headerTitle: () => <Header name="Add Notes" />,
          headerStyle: {
            backgroundColor: '#4c00b0',
            height: 120,
          }
        }}
        />

        <stack.Screen component={Detail} name='Detail' options={{
          headerTitle: () => <Header name="Edit Notes" />,
          headerStyle: {
            backgroundColor: '#4c00b0',
            height: 120,
          }
        }}
        />


      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
