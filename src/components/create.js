import axios from "axios";
import React from "react";

export class Create extends React.Component {

    constructor() {
        super();

        //Binding the events to "this" instance of the controls
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);


        //State (holder of data)
        this.state = {
            Title: '',
            Year: '',
            Type: '',
            Cover: ''

        }
    }
    //This event prevents any button on the form being called multiple times unintentionally
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + this.state.Year +this.state.Type + this.state.Cover)

        //Creating an object which will contain the data being sent up to the server
        const newSong={
            Title: this.state.Title,
            Year: this.state.Year,
            Type: this.state.Type,
            Cover: this.state.Cover
        }
        //Posting the object up to the server
        axios.post('http://localhost:4000/api/songs', newSong)
        .then((res)=>{
            console.log(res)
            console.log(newSong)
        })
        .catch((err)=>{
            console.log(err)
        });
    }

    //This event will handle adding the inputted song name to the components state
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    //This event will handle adding the inputted song year to the components state
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }
    //This event will handle adding the inputted song type to the components state
    onChangeType(e){
        this.setState({
            Type: e.target.value
        });
    }
    //This event will handle adding the inputted song cover art link to the components state
    onChangeCover(e){
        this.setState({
            Cover: e.target.value
        });
    }

    render() {
        return (
            <div className='App'>

                {/* Creating a form for adding a new song */}
                <form onSubmit={this.onSubmit}>

                    {/* Creating the input field for the song name */}
                    <div className='form-group'>
                        <label>Add Song Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    {/* Creating the input field for the song year */}
                    <div className='form-group'>
                        <label>Add Song Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>

                    {/* Creating the input field for the song type */}
                    <div className='form-group'>
                        <label>Add Song Type: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Type}
                            onChange={this.onChangeType}></input>
                    </div>

                    {/* Creating the input field for the song cover */}
                    <div className='form-group'>
                        <label>Add Song Cover Art (URL Link): </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Cover}
                            onChange={this.onChangeCover}></textarea>
                    </div>

                    {/* Creating the "Add Song" button */}
                    <div className='form-group'>
                        <input type='submit'
                            value='Add song'
                            className='btn btn-primary'></input>
                    </div>


                </form>
            </div>
        );
    }
}
