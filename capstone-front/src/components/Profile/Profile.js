import React from 'react';
import UpdateProfile from './UpdateProfile'
import './Profile.css';


const Update = () => {

  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = event => setUserName(event.target.value);
  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);


  const handleSubmit = event => {
    event.preventDefault();  
};

const updateUser = async() => {
const result = await UpdateProfile(firstName, lastName, userName, email, password);
}



  return (
    <div class = "update-form">
      <form onSubmit = {handleSubmit}>

      <div class = "user-name">
          <label>
            Enter your username:
            <input type = "text" name = "username" variant = "filled" required onChange = {handleUserNameChange} />
          </label>
      </div>

      <div class = "first-name">
          <label>
            Enter your first name:
            <input type = "text" name = "userFirstName" variant = "filled" required onChange = {handleFirstNameChange} />
          </label>
      </div>

      <div class = "last-name">
          <label>
            Enter your last name:
            <input type = "text" name = "userLastName" variant = "filled" required onChange = {handleLastNameChange} />
          </label>
      </div>

      <div class = "user-email">
          <label>
            Enter your email:
            <input type = "email" variant = "filled" required name = "userAddress" onChange = {handleEmailChange} />
          </label>
      </div>

      <div class = "user-password">
          <label>
            Enter your password:
            <input type = "password" variant = "filled" required name = "userPassword" onChange = {handlePasswordChange} />
          </label>
      </div>
      <div class = "clearfix">
        <button type = "reset" class = "cancelbtn">Cancel</button>
        <button class = "updatebtn" type = "submit" onClick = {updateUser}>Update Info</button>
      </div>
    </form>


  </div>
   
  );
};

export default Profile;