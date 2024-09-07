import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'

function App() {

  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [passwordList, setPasswordList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/showpasswords').then((response) => {
      setPasswordList(response.data);


    });
  }, []);

  const addPassword = () => {
    Axios.post('http://localhost:3001/addpassword', { password: password, title: title })
  };

  const decryptedPassword = (encryption) => {
    Axios.post("http://localhost:3001/decryptpassword", {
      password: encryption.password,
      iv: encryption.iv
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <div className='AddingPasswords'>
        <input
          type="text"
          placeholder="Ex. password123"
          onChange={(event) => {
            setPassword(event.target.value)
          }} />
        <input
          type="text"
          placeholder="Ex. Facebook"
          onChange={(event) => {
            setTitle(event.target.value)
          }} />



        <button onClick={addPassword}>Add Password</button>

      </div>
      <div className='Passwords'>
        {passwordList.map((val, key) => {
          return (
            <div className='password' onClick={() => { decryptedPassword({ password: val.password, iv: val.iv }) }} key={key}>
              <h3>{val.title}</h3>
            </div>
          );
        })};
      </div>
    </div>
  );
}

export default App;
