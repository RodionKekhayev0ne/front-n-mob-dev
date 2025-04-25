import React from 'react';
import { View, Text, Image, ScrollView, Button, Linking, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
    const { article } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: article.urlToImage }} style={styles.image} />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
            <Button title="Читать полностью" onPress={() => Linking.openURL(article.url)} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 10 },
    image: { height: 200, borderRadius: 10, marginBottom: 10 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    description: { fontSize: 16, marginBottom: 20 },
});
