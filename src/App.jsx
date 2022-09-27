import './App.css';
import { Chat } from './components/Chat';
import { UsersList } from './components/UsersList';

function App() {
  return (
    <div className="App">
      <h1> REDUX CHAT </h1>
      <div className="container">
        <Chat />
        <UsersList />
      </div>
      Sending message as <span className="user-name bold"> User </span>
      <div id="message-box">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button id="send-message-button">Send Message</button>
      </div>
    </div>
  );
}

export default App;
