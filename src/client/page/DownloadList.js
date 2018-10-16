import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class DownloadList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    componentDidMount(){
    //    axios.get('http://localhost:8080/download')
      //      .then(res=>{
        //        console.log(res);
               // const files = res.data.data.children.map(obj=>obj.data);
               // this.setState({files});
                //console.log(this.files);

          //  });


        axios.get('http://localhost:8080/downloadlist')
            .then(res=>{
                console.log(res['data']);
                this.setState({files: res['data']});
                console.log(this.state.files);
            })
            .catch(res=>{
                console.log(res);
            })
/*
        fetch('http://localhost:8080/downloadlist',{
            method: 'GET',
            body: JSON.stringify({username: 'madan'}),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Eerr', error))
            .then(reponse => console.log('Sucess', response));
            */
    }

    render(){
        var url = 'http://localhost:8080/download/';
        return(
            <div>
                <ul>
                    {this.state.files.map(
                        file=>
                         /*   <li><a href={file} onClick={(e)=>{
                                e.preventDefault();
                                console.log('clicked');
                                var filer = 'http://localhost:8080/download/'+file;
                                fetch(filer)
                                    .then(function (res) {
                                        console.log(res);
                                    })
                                    .catch(function (res) {
                                        console.log(res);
                                    });
                            }}>{file}</a></li>*/
                            <li><a href={url+file} >{file}</a></li>
                    )}
                </ul>
            </div>
        );
    }
}