
import { logDOM } from '@testing-library/dom';
import './App.css';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" 
integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" 
crossorigin="anonymous"></script>

function App() {
  return (
    <div className="cApp">
      <header className="App-header">
      <h2>
        My First React_App
        </h2>
        <h3>An Input Form (Take it easy this is my first attempt LOL)</h3>
        <img src="./logo512.png" className="App-logo" alt="logo" />


      <div class="input-group mb-3">
      <button class="btn btn-outline-secondary" type="button" id="button-addon1">First Name</button>
      <input type="text" class="form-control" placeholder=""
      aria-label="Example text with button addon" 
      aria-describedby="button-addon1"></input>
      </div>
      
      <div class="input-group mb-3">
      <input type="text" class="form-control" 
      placeholder="Recipient's username" 
      aria-label="Recipient's username" 
      aria-describedby="button-addon2"></input>
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Last Name</button>
      </div>

  <label for="basic-url" class="form-label">Typr your URL Here</label>
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
  </input></div>


  <div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>
  <span class="input-group-text">.00</span>
  </div>
  

  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"></input>
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</input></div>

<div class="input-group">
  <span class="input-group-text">Any Comments?</span>
  <textarea class="form-control" aria-label="With textarea"  maxLength="1000" ></textarea>
</div>
     </header>
    </div>
   
  );
}

export default App;
