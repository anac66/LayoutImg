import React from "react";
import { View } from "react-native";

export const Exercicio = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ top: 25, alignItems: 'stretch', backgroundColor: '#50E3C2', height: 25 }}>
            </View>

            <View style={{ flex: 1, justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ top: 15, height: 100, width: 100, backgroundColor: '#F5A623' }} />
                <View style={{ bottom: 45, height: 30, width: 160, backgroundColor: '#F5A623' }} />
            </View>

            <View style={{ bottom: 50, flexDirection: 'row' }}>
                <View style={{ flex: 1, backgroundColor: '#9013FE', height: 78 }} />
                <View style={{ flex: 1, backgroundColor: '#4A90E2', height: 78 }} />
            </View>

            <View>
                <View style={{ bottom: 50, alignItems: 'stretch', backgroundColor: '#50E3C2', height: 13 }} />
            </View>

            <View style={{ padding: 20, bottom: 25, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ height: 100, width: 100, backgroundColor: '#F5A623' }} />
                <View style={{ height: 100, width: 100, backgroundColor: '#F5A623' }} />
                <View style={{ height: 100, width: 100, backgroundColor: '#F5A623' }} />
            </View>

            <View style={{ padding: 20, bottom: 25, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ height: 100, width: 100, backgroundColor: '#F5A623' }} />
                <View style={{ height: 100, width: 100, backgroundColor: '#F5A623' }} />
                <View style={{ height: 100, width: 100, backgroundColor: '#F5A623' }} />
            </View>

            <View>
                <View style={{ alignItems: 'stretch', backgroundColor: '#4A90E2', height: 60 }} />
            </View>
        </View>

    );
};