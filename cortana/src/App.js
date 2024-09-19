import ProfileCard from "./profileCard";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa " handle="@Alexa99" />
      <ProfileCard title="Cortana " handle="@Cortana99" />
      <ProfileCard title="Siri " handle="@Siri01" />
    </div>
  );
}

export default App;
