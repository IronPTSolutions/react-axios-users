import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import { UserDetailWrapper } from "./components/UserDetail";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container pt-4">
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/users/:id" element={<UserDetailWrapper />} />
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
