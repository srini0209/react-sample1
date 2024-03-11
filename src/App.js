// import logo from "./logo.svg";
import "./App.css";
import Title from "./Title.js";
import { Content } from "./pages/Content.js";
import { Footer } from "./Footer.js";
import { Header } from "./pages/Header.js";
import { Home } from "./pages/Home.js";
import { Blogs } from "./pages/Blogs.js";
import { Contact } from "./pages/Contact.js";
import NoPage from "./pages/NoPage.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToDoList } from "./pages/ToDoList.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<ToDoList />} />
            <Route path="home" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
