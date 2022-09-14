import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Article from "./components/Article";
import Home from "./components/Home";
function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
        <Route path="/addpost" element={<AddArticle />} />

          <Route path="/signin" element={<Login />} />
          <Route path="/article/:id" element={<Article/>} />
          <Route path="/"   element={   <Articles/>  }/>
        </Routes>
       
      </Router>
  );
}

export default App;
