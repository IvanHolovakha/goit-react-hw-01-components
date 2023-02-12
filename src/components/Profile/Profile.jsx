import PropTypes from 'prop-types';

export const Profile = ({username, tag, location, avatar, stats:{views, followers, likes}}) => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt={username}
          class="avatar"
        />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats" style={{display: "flex"}}>
        <li style={{marginRight: "10px", display: "flex", flexDirection: "column"}}>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li style={{marginRight: "10px", display: "flex", flexDirection: "column"}}>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li style={{display: "flex", flexDirection: "column"}}>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}