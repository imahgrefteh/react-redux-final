//import {Component} from 'react';
import React, {Component} from 'react';
import {getUsers} from "../utils/api";
import UserCard from "./UserCard";

class LeaderBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {users: []};
    }

    componentDidMount() {
        getUsers().then((results) => this.a(results));
    }

    a(results) {
        Object.keys(results).map(function (keyName, keyIndex) {
            console.log(keyName, keyIndex)
            console.log(results[keyName])
        })

        console.log('results', results)
        this.setState({users: results})
    }

    render() {

        const tifOptions = Object.keys(this.state.users).map(key =>
            <UserCard name={this.state.users[key].name} avatarURL={this.state.users[key].avatarURL}/>
        )


        return (<span>
            <h2>LeaderBoards</h2>
            <div className="row">{tifOptions}</div>
        </span>);
    }
}

export default LeaderBoard;