import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p className={css.nameText}>{name}</p>
      <p className={clsx(css.text, isOnline ? css.active : css.retired)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
