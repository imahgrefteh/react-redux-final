import React, {Component} from 'react';

class UserCard extends Component {
    render() {
        return (
            <div className="column">
            <div className="card">
                <img src={this.props.avatarURL} alt="Avatar" style={{width:"100%"}}/>
                <div className="container">
                    <h4><b>{this.props.name}</b></h4>
                    <p>Interior Designer</p>
                </div>
            </div>
            </div>
        );
    }
}

export default UserCard;