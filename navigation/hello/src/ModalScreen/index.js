import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default function ModalScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Amo Minhas Filhas  </Text>
            <Text style={{ fontSize: 30 }}>Andressa e Maria Fernanda </Text>
            <Button
                onPress={() => navigation.goBack()}
                title="Voltar"
            />
        </View>
    )
}

