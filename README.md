# 🍲 Recipe Management

A full-stack **Next.js application** that allows users to create, share, and explore recipes. Users can contribute their own recipes and become part of a growing **foodie community**.

This project demonstrates the use of **Next.js App Router**, **SQLite database integration**, and modern UI development with **Tailwind CSS**.

---

## 🚀 Features

### 🍳 Recipe Creation

- Create new recipes with:
  - Title
  - Summary
  - Instructions
  - User Name
  - User Email
- Form-based submission
- Data persisted in **SQLite database**

### 📖 Recipe Listing

- View all shared recipes
- Dynamic rendering of recipes
- Community-driven content

### 🌐 Foodie Community

- Users can join and contribute recipes
- Encourages sharing and collaboration

---

## 🛠️ Tech Stack

### Frontend & Backend

- **Next.js (App Router)**
- **React.js**

### Database

- **SQLite**

### Styling

- **Tailwind CSS**

---

## 📂 Project Structure

```
recipe-management/
├─ README.md
├─ app
│  ├─ community
│  │  ├─ layout.tsx
│  │  ├─ page.module.css
│  │  └─ page.tsx
│  ├─ error.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ icon.png
│  ├─ layout.tsx
│  ├─ loading.module.css
│  ├─ loading.tsx
│  ├─ meals
│  │  ├─ [slug]
│  │  │  ├─ page.module.css
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.module.css
│  │  ├─ page.tsx
│  │  └─ share
│  │     ├─ error.tsx
│  │     ├─ page.module.css
│  │     └─ page.tsx
│  ├─ not-found.tsx
│  ├─ page.module.css
│  └─ page.tsx
├─ components
│  ├─ images
│  │  ├─ image-slideshow.module.css
│  │  └─ image-slideshow.tsx
│  ├─ main-header
│  │  ├─ main-header-background.module.css
│  │  ├─ main-header-background.tsx
│  │  ├─ main-header.module.css
│  │  ├─ main-header.tsx
│  │  ├─ nav-link.module.css
│  │  └─ nav-link.tsx
│  └─ meals
│     ├─ button-submit.tsx
│     ├─ image-picker.module.css
│     ├─ image-picker.tsx
│     ├─ meal-item.module.css
│     ├─ meal-item.tsx
│     ├─ meals-grid.module.css
│     └─ meals-grid.tsx
├─ lib
│  ├─ actions.ts
│  ├─ meals.ts
│  └─ validator.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ tsconfig.json
└─ types
   └─ meal.ts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/mishraabhishek11/recipe-management.git

### 2️⃣ Navigate to the project folder

cd recipe-management

### 3️⃣ Install dependencies

npm install

### 4️⃣ Run the development server

npm run dev

### 5️⃣ Open in browser

http://localhost:3000

---

## 🧑‍💻 Usage

1. Navigate to recipe creation page
2. Fill in recipe details
3. Submit the form
4. View recipes shared by the community
5. Explore and contribute

---

## 💾 Database (SQLite)

- Recipes are stored in SQLite database
- Lightweight and easy to manage
- to initiate DB run below command

node initdb.ts

---

## 🎯 Learning Objectives

- Next.js App Router
- Full-stack development with Next.js
- SQLite integration
- Tailwind styling
- Form handling

---

## 🔮 Future Enhancements

- User authentication
- Image upload
- Comments and ratings
- Search and filters
- Deployment

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch  
   git checkout -b feature/your-feature

3. Commit changes  
   git commit -m "Add your message"

4. Push changes  
   git push origin feature/your-feature

5. Open Pull Request

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Abhishek Mishra  
GitHub: https://github.com/mishraabhishek11

---

## ⭐ Support

Give a ⭐ if you like this project!
