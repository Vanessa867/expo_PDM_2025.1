import {Text, View,  StyleSheet, Platform } from 'react-native';

export default function HomeScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>testy</Text>
    </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            
            backgroundColor: '#92bd',
        },
        text: {
            textAlign : 'center',
            fontSize: 24,
            color: '#fff', 
        }
    });
