import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text, Button } from 'react-native';
import axios from 'axios';
import ArticleItem from '../components/ArticleItem';

const API_KEY = '80b4260ad24c4781b5a984ec3cc3a423'; // 🔑 ВСТАВЬ СЮДА СВОЙ КЛЮЧ
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export default function HomeScreen({ navigation }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchArticles = async () => {
        setLoading(true);
        setError(false);

        try {
            const response = await axios.get(API_URL);
            setArticles(response.data.articles);
        } catch (e) {
            console.error('Ошибка загрузки:', e);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.error}>Не удалось загрузить новости 😢</Text>
                <Button title="Повторить" onPress={fetchArticles} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ArticleItem
                        title={item.title}
                        image={item.urlToImage}
                        onPress={() => navigation.navigate('Details', { article: item })}
                    />
                )}
            />
            <Button title="Обновить" onPress={fetchArticles} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10,
    },
});
