# User List App with Glassmorphism Design

A React application that fetches and displays a list of users from the JSONPlaceholder API, styled with a modern glassmorphism effect.

---

## 🚀 Features

- Built with [Vite](https://vitejs.dev/) for fast development
- Data fetching using [Axios](https://axios-http.com/)
- State management with React Hooks (`useState`, `useEffect`)
- Stylish glassmorphism UI design
- Responsive layout for various screen sizes

---

## 🛠️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/user-list-app.git
   cd user-list-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**

   ```
   http://localhost:5173/
   ```

---

## 📄 Usage

- The `UserList` component fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) using Axios within a `useEffect` hook.
- Fetched data is stored in the `listOfUser` state using the `useState` hook.
- The user list is rendered by mapping over the `listOfUser` array.
- Styling is applied via `UserList.css` to achieve a glassmorphism effect.

---

## 🎨 Styling with Glassmorphism

The application utilizes glassmorphism design principles, featuring:

- Semi-transparent backgrounds
- Backdrop blur effects
- Soft shadows and rounded corners
- Vibrant gradient backgrounds

These styles are defined in the `UserList.css` file.

---

## 📦 Dependencies

- React
- Vite
- Axios

---

## 📸 Screenshots

![Screenshot 2025-05-22 at 18-52-37 User List](https://github.com/user-attachments/assets/0c5de8bc-12f0-49b7-a4a9-1cea81fa054f)
