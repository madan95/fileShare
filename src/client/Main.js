import { Switch, Route } from 'react-router-dom';
import React, {Component} from "react";
import Home from './page/Home';
import UploadForm from "./page/UploadForm";
import DownloadList from "./page/DownloadList";



export default class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <main>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/upload" component={UploadForm}/>
                    <Route path="/downloadlist" component={DownloadList}/>
                </div>
            </main>
        )
    }
}