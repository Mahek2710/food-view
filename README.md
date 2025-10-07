Absolutely! Here’s a **Git-ready, copy-paste version** of the README for your LettuceEat project. You can directly save it as `README.md` in your repo:

````markdown
# 🍴 LettuceEat

**LettuceEat** is a modern web app for food enthusiasts to **browse trending food reels**. Think TikTok for food—users can discover delicious meals through short videos and connect with food partners who create them.

---

## ✨ Features

### Users
- Browse food reels in a vertical scroll format  
- Like and save favorite food videos  
- View saved videos in a dedicated section  
- Navigate directly to food partner profiles  

### Food Partners
- Create a business profile  
- Upload food videos with descriptions  
- Track engagement metrics (likes, saves)  
- Build customer base through video content  

---

## 🛠️ Tech Stack

### Frontend
- React 19, Vite  
- React Router DOM, Axios  
- CSS Modules, modern CSS (Variables, Grid, Flexbox)  

### Backend
- Node.js, Express  
- MongoDB with Mongoose  
- JWT Authentication  
- ImageKit for media storage  
- Cookie-based sessions  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+  
- MongoDB  
- ImageKit account  

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/lettuce-eat.git
cd lettuce-eat

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Create .env file in backend directory
# Add the following:
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_uri
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url

# Start backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
````

---

## 📱 App Features in Detail

* **Authentication**: Separate flows for users and food partners, JWT-based authentication, protected routes
* **Video Feed**: Infinite scroll, auto-play, like/save functionality, direct navigation to food partner profiles
* **Food Partner Dashboard**: Profile management, video upload with preview, business metrics, customer engagement tracking
* **UI/UX**: Responsive design, dark mode support, smooth animations, touch-friendly interface, accessible components
* **Security**: HTTP-only cookies, protected API endpoints, input validation, secure file uploads, CORS configuration

---

## 🔄 API Endpoints

**Authentication**

* `POST /api/auth/user/register` – Register new user
* `POST /api/auth/user/login` – User login
* `POST /api/auth/food-partner/register` – Register food partner
* `POST /api/auth/food-partner/login` – Food partner login

**Food**

* `POST /api/food` – Create new food post
* `GET /api/food` – Get food feed
* `POST /api/food/like` – Like/unlike food
* `POST /api/food/save` – Save/unsave food
* `GET /api/food/save` – Get saved foods

**Food Partner**

* `GET /api/food-partner/:id` – Get food partner profile

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a branch, and submit a pull request.

---

## 📝 License

MIT License – see `LICENSE` file for details.

---

## 🙏 Acknowledgements

* Vite
* React
* MongoDB
* ImageKit

```


