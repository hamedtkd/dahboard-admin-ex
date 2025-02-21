# 🚀 React + Redux Toolkit + RTK Query User Management System

This project is a **User Management System** built with **React, Redux Toolkit, RTK Query, and React Router**.  
It uses the **[Reqres.in](https://reqres.in/)** API for authentication and user management.

## 📌 Features

✅ User can log in to the system (`/api/login`).  
✅ Authenticated users can see a list of users (`/api/users?page=?`).  
✅ Authenticated users can see user details (`/api/users/:id`).  
✅ Authenticated users can perform CRUD actions on users.  
✅ Authenticated users can log out.

---

## 🛠 Technologies Used

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **RTK Query** - API handling
- **React Router** - Navigation
- **TypeScript** - Strongly typed JavaScript
- **Tailwind CSS** - Styling

---

## 📦 Installation and Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/hamedtkd/dahboard-admin-ex.git
cd dahboard-admin-ex
```

## Install Dependencies

```sh

pnpm install
```

## 3️⃣ Run the Development Server

```sh
pnpm dev
```

### 🔹 User Login Information

#### 📥 Request:

```sh
{
 "email": "eve.holt@reqres.in",
 "password": "cityslicka"
}
```

#### 📤 Response:

```sh
{
  "token": "QpwL5tke4Pnpja7X4"
}
```

## ⚠ Important Notes ----------------- \_ ⚠

**Reqres API does NOT persist data.** If you create or delete a user, the data won't be saved in the API. \_ ✅ **To handle this issue, we update the local state manually.**

## 📝 License

This project is licensed under the MIT License.
