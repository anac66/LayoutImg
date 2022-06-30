import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Exercicio } from './src/components/flex/exercicios';

export default function App () {

    return (
        <View style={{flex:1}}>

        <Exercicio />
        <StatusBar style="auto" />
        </View>

    );
};