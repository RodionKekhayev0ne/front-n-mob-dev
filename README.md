# 📰 News Viewer App (React Native + Expo)

## 📱 Описание

Мобильное приложение, разработанное на **React Native (Expo)**, для просмотра актуальных новостей с использованием **NewsAPI.org**.  
Реализовано в рамках практического рубежного контроля по дисциплине *"Front-end и мобильная разработка (JS)"*.

---

## 🚀 Функциональность

- Загрузка новостей с API (NewsAPI)
- Отображение списка новостей в `FlatList`
- Переход на экран с подробной информацией
- Кнопка "Обновить" для повторной загрузки
- Обработка загрузки, ошибок и пустого состояния

---

## 🔗 Источник данных (API)

- **News API**: https://newsapi.org/
- Метод: `GET https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`
- 🔑 Требуется бесплатная регистрация для получения `API Key`

---

## 🧱 Стек технологий

- React Native
- Expo CLI
- React Navigation
- Axios (для сетевых запросов)

---

## 📂 Установка и запуск

1. Клонировать репозиторий:

```bash
git clone https://github.com/your-username/news-app.git
cd news-app
