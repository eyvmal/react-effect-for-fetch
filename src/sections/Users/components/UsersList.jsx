import UsersListItem from "./UsersListItem.jsx";

function UsersList({ data }) {
  return (
    <ul className="users-list">
      {data.map((item) => (
        <UsersListItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default UsersList;