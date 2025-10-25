
# Real-Time Chat Application Using Socket.IO

## **Project Overview**

This project is a **secure, scalable real-time chat application** built with Node.js, Express, Socket.IO, MongoDB, and Tailwind CSS. It allows users to communicate instantly in **public chat rooms** or **private conversations**, with features such as **typing indicators, online status, and chat history**.

The application demonstrates practical implementation of **full-stack web development**, including **real-time communication, user authentication, database management, and responsive frontend design**.

---

## **Features**

* User registration and login with **secure authentication (JWT / sessions)**
* Real-time messaging with **Socket.IO**
* Public chat rooms and private one-to-one conversations
* Typing indicators for active users
* Online/offline user status display
* Persistent message history stored in **MongoDB**
* Responsive UI designed with **Tailwind CSS**
* Deployable on **Vercel** for global access

---

## **Tech Stack**

* **Backend:** Node.js, Express.js
* **Real-Time Communication:** Socket.IO
* **Database:** MongoDB
* **Frontend:** Tailwind CSS, HTML, JavaScript
* **Authentication:** JWT / Session-based
* **Deployment:** Vercel
* **Dependencies:** bcryptjs, dotenv, mongoose

---

## **Installation and Setup**

1. **Clone the repository**

```bash
git clone https://github.com/Anticoder03/chati-app.git
cd chati-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**
   Create a `.env` file in the root directory with the following:

```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
```

4. **Run the application locally**

```bash
npm start
```

5. **Access the app**
   Open your browser and navigate to `http://localhost:5000`

---



---

## **Usage**

1. Register a new account or log in with existing credentials.
2. Join a public chat room or start a private conversation.
3. Send and receive messages in real-time.
4. See typing indicators and online status of other users.
5. Chat history is saved and accessible whenever you join a room.

---

## **Future Enhancements**

* File and image sharing
* Voice and video chat integration
* AI-powered chat suggestions or moderation
* Advanced group management and roles
* Push notifications

---

## **License**

This project is open-source and available under the **MIT License**.

