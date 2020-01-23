import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { white } from 'ansi-colors';

export default class drawerContentComponents extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('./assets/logo.png')} style={{flex: 1}} >
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Aitc')}>Aitc</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('AlbRecovery')}>AlbRecovery</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('AlbaSolutions')}>AlbaSolutions</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Blog')}>Minimal Blog</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Daniel')}>Daniel</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Faas')}>FAAS</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Gaa')}>GAA</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Gsa')}>GSA</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('HoteliGjuetise')}>Hoteli Gjuetise</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('ProductManagement')}>Product Management</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Samuele')}>Samuele</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.textStyle} onPress={this.navigateToScreen('Suko')}>Suko</Text>
                </View>
            </View>
        </View>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#2cf2d1',
        height: '100%'
    },
    headerContainer: {
        height: 150,
        width: 180,
        borderBottomColor: '#2cf2d1',
        borderBottomWidth: 2,
    },
    screenContainer: {
        paddingTop: 20
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold'
    }
});