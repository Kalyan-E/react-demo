//import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
    
      <form action="action_page.php" method="post">
  

  <div class="container">
  <div>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>
</div>
<div>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
</div>
<div>
    <button type="submit">Login</button>
    </div>
    
  </div>
  </form>
  </div>
  
  );
}


