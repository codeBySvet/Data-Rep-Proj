import axios from "axios";
import React from "react";

export class Edit extends React.Component {

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

    //This life cycle event will pull the existing song data (via the document id) into the edit fields 
    //when the component is in view
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/api/songs/' + this.props.match.params.id)
            .then(response => {
                
                this.setState({
                    _id: response.data._id,
                    Title: response.data.Title,
                    Year: response.data.Year,
                    Type: response.data.Type,
                    Cover: response.data.Cover
                })
            })
            .catch((err) => {
                this.props.history.push('/operationError')
            });
    }
    //Method for form submission
    onSubmit(e) {
        //This event prevents any button on the form being called multiple times unintentionally
        e.preventDefault();
        //Creating an object which will contain the data being sent up to the server
        const newSong = {
            _id: this.state._id,
            Title: this.state.Title,
            Year: this.state.Year,
            Type: this.state.Type,
            Cover: this.state.Cover
        }
        //Calling axios to send a put request to the server with the new song details
        axios.put('http://localhost:4000/api/songs/' + this.state._id, newSong)
            .then(()=>{
                this.props.history.push('/read')
            })
            .catch(()=>{
                this.props.history.push('/operationError')
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
    onChangeType(e) {
        this.setState({
            Type: e.target.value
        });
    }
    //This event will handle adding the inputted song cover art link to the components state
    onChangeCover(e) {
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
                            value='Edit song'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
