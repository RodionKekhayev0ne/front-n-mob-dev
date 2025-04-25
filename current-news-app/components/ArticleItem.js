import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ArticleItem({ title, image, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
    },
    image: {
        height: 150,
        width: '100%',
    },
    title: {
        padding: 10,
        fontSize: 16,
        fontWeight: '600',
    },
});
