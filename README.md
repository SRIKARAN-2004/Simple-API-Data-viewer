# 🐶 Dog Gallery Web App

A fun and simple web application that displays random dog images using the public **[Dog CEO Dog API](https://dog.ceo/dog-api/)**. The app fetches 5 images at a time, with support for breed filtering and a refresh button to load new dogs on demand!

---

## 🚀 Features

- 🐕 Fetch and display 5 random dog images
- 🔍 Filter dogs by breed name (e.g., pug, husky, dalmatian)
- 🔄 "Load Dogs" button to fetch new results
- 🎨 Responsive and clean UI using HTML/CSS/JavaScript

---

## 🌐 Public API Used

### 🐾 Dog CEO's Dog API

- **Base URL:** `https://dog.ceo/api`

#### 🔧 API Endpoints Used:

| Endpoint | Purpose |
|----------|---------|
| `https://dog.ceo/api/breeds/image/random/5` | Get 5 random dog images |
| `https://dog.ceo/api/breed/{breed}/images/random/5` | Get 5 images of a specific breed |
| `https://dog.ceo/api/breeds/list/all` | Get list of all dog breeds |

📚 API Docs: [https://dog.ceo/dog-api/documentation/](https://dog.ceo/dog-api/documentation/)

---

## 🛠️ How It Works

1. **On Load:**
   - App fetches 5 random dog images from the API.
   - It also loads all available breed names for filtering.

2. **Breed Filter:**
   - Type a breed in the input box (e.g., "pug").
   - Click **"Load Dogs"** to fetch 5 images of that breed.

3. **Refresh Button:**
   - Click **"Load Dogs"** again without a filter to get new random dogs.

4. **Error Handling:**
   - If an invalid breed is entered, the app falls back to random dogs and shows a friendly message.



