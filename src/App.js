import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* more pages to be added here later */}
        <Route exact path="/" component={HomePage} />
        <Route path="/post/:id" component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
