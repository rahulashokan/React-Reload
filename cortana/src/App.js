import ProfileCard from "./profileCard";
import AlexaImage from "./Modern React Redux Course/alexa.png";
import CortanaImage from "./Modern React Redux Course/cortana.png";
import SiriImage from "./Modern React Redux Course/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa " handle="@Alexa99" image={AlexaImage} />
      <ProfileCard title="Cortana " handle="@Cortana99" image={CortanaImage} />
      <ProfileCard title="Siri " handle="@Siri01" image={SiriImage} />
    </div>
  );
}

export default App;
