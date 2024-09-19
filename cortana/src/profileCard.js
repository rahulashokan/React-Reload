///Obj destructre hence title and handle as variable

function ProfileCard({ title, handle, image }) {
  return (
    <div>
      <img src={image} />

      <div>Title is {title}</div>

      <div>Handle will be {handle}</div>

      <br></br>
    </div>
  );
}
export default ProfileCard;
