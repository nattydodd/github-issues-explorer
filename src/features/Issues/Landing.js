import React, { Component } from "react";
import './Landing.scss';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {url: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({url: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let a = this.state.url.split('/')
    const owner = a[3];
    const repo = a[4];

    if (!owner || !repo) return
    this.props.history.push(`/${owner}/${repo}`)
  }

 render() {
  return (
   <div className="landing">
     <h1 className="landing-title"> Github Issues Viewer</h1>
     <div className="search-bar">
       <form onSubmit={this.handleSubmit}>
         <i className="material-icons search-icon noUserSelect">search</i>
         <input
           type="url"
           name="url"
           value={this.state.url}
           id="search-input"
           placeholder="Paste a link to a Github repo!"
           onChange={this.handleChange}
         />
       </form>
     </div>
   </div>
  )
 }
}

export default Landing
