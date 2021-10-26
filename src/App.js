import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewContact from "./pages/ViewContact";
import EditContact from "./pages/EditContact";
import NewContact from "./pages/NewContact";
import "./App.css";

function App() {
  return (
    <div className="my-4">
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact/new" component={NewContact} />
          <Route path="/contact/:id/edit" component={EditContact} />
          <Route exact path="/contact/:id" component={ViewContact} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
