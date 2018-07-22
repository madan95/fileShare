import { Switch, Route } from 'react-router-dom';
import UploadForm from "./form/UploadForm";


const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/upload" component={UploadForm}/>
        </Switch>
    </main>
)