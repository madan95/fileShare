import React, { Component } from "react";
import axios, { post } from 'axios';

export default  class UploadForm extends  Component{
    constructor(props){
        super(props);
        this.fileInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.post = this.post.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        alert(`Selected File - ${
            this.fileInput.current.files[0].name
            }`
        );

        const data = new FormData();
        data.append('file', this.fileInput.current.files[0]);
        data.append('filename', this.fileInput.current.files[0].value);

        axios.post('http://localhost:8080/upload', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

      /*  this.fileUpload(this.fileInput.current.files[0]).then((response)=>{
            console.log(response.data);
        })
        */
    }

    fileUpload(file){
        const url = 'http://localhost:8080/users';
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return this.post(url, formData, config);
    }

    post(url, formData, config){
        fetch(url, {
            method: 'POST',
            config
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    File:
                    <input
                        name = 'filetoupload'
                        type="file"
                        ref={this.fileInput}/>
                </label>
                <br />
                <button type="submit">Upload</button>
            </form>
        );
    }
}