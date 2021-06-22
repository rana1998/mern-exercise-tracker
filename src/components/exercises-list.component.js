import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

const Exercise = props =>
(
    <tr>
        <td>
            {props.exercise.username}
        </td>
        <td>
            {props.exercise.description}
        </td>
        <td>
            {props.exercise.duration}
        </td>
        <td>
            {props.exercise.date.substring(0,10)}
        </td>
        <td>
            <Link to={"/edit/"+props.excercise._id}>edit</Link> |
            <a href="#" onClick={() => {
                props.deleteExercise(props.excercise._id)
            }}>Delete</a>
        </td>

    </tr>
)



export default class ExercisesList extends Component {
    constructor(props)
    {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            excercises : []
        }

    }

    componentDidMount()
    {
     
        axios.get('http://localhost:5000/exercises')
        .then(response =>{
            this.setState({
                excerrcises : response.data
            })
        })
        .catch((error) =>
        {
            console.log(error);
        })
        
    }

    deleteExercise(id)
    {
        axios.delete('http://localhost:5000/exercises'+id)
        .then(response =>console.log(response.data));
        this.setState({
            excercises:this.state.excercises.filter(el => el._id !== id)
        })
        
    }

    exercisesList()
    {
        return this.state.excercises.map( currentexercise => {
            return <Exercise excercise = {currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Logged excercises
                </h1>
                <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>
                                    Username
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    Duration
                                </th>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.exercisesList()}
                        </tbody>
                </table>
            </div>
        )
    }
}
