import FriendListItem from "./FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={css.menu}>
        {friends.map((friend) => (
          <li className={css.item} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}
