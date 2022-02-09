import logo from './logo.svg';
import './App.css';
import React, { Component, useState }  from 'react';
import GithubImage from './git.png';

function App() {
  const [search,setSearch] = useState('');
  const [userData, setUserData] = useState();

    const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(userResponse => setUserData(userResponse));
    }
    console.log(userData);

    const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    }

  return (
    
    <div className ="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>  
      <div className="form-group">
       <div className="input-group">
       <input type="text" className="form-control" required value={search} onChange={handleChange}/>
      <span className="input-group-btn">
        <button type="submit" className="btn btn-success" style={{marginLeft:'20px'}}>Search</button>
      </span>

       </div>
      </div>
      </form>
      <div className="py-5">
        {!userData && (
        <img src={GithubImage} 
        className="responsive rounded-circle" 
        alt="Profile picture" height="200px"/>
        )}
        {userData && (
        <div>
         <img src={userData.avatar_url} 
        className="responsive rounded-circle" 
        alt="Profile picture" height="200px"/>
        <h1 className="pt-5">
          <a href="https://github.com/felipematheus1337" target="_new">{userData.name}</a>
        </h1>
        <h3>{userData.location}</h3>
        <p>
          <a href={userData.blog} target="_new" className="text-info">
            {userData.blog}
          </a>
        </p>
        </div>
        )}
      </div>
    </div>
    
  );
}

export default App;
