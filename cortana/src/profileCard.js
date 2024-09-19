///Obj destructre hence title and handle as variable

function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="ImageDel" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>

          <p className="sutitle is-6">{handle}</p>
          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
