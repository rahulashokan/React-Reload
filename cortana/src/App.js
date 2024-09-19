import ProfileCard from "./profileCard";
import "bulma/css/bulma.css";
import AlexaImage from "./Modern React Redux Course/alexa.png";
import CortanaImage from "./Modern React Redux Course/cortana.png";
import SiriImage from "./Modern React Redux Course/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <section className="hero is-primary ">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa "
                handle="@Alexa99"
                image={AlexaImage}
                description="Alexa is powered by Amazon AI"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana "
                handle="@Cortana99"
                image={CortanaImage}
                description="Cortana is powered by Microsoft AI"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@Siri01"
                image={SiriImage}
                description="Siri is powered by Apple AI"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
