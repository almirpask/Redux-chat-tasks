import './UserList.css';
export const UsersList = () => {
  return (
    <div className="user-container">
      <ul>
        <li className={'activeuser-name'}>Pedro</li>
      </ul>
      <button>Add User</button>
    </div>
  );
};
