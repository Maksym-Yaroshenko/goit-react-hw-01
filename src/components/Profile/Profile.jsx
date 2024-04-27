import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.nameText}>{name}</p>
        <p className={css.tags}>{tag}</p>
        <p className={css.tags}>{location}</p>
      </div>

      <ul className={css.menu}>
        <li className={css.item}>
          <span className={css.menuText}>Followers</span>
          <span className={css.nameText}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.menuText}>Views</span>
          <span className={css.nameText}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.menuText}>Likes</span>
          <span className={css.nameText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
