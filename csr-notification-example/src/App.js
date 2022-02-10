import logo from "./logo.svg";
import bell from "./youtubeBell.png"
import "./App.css";
import Notifications from "react-notifications-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// const icon = <FontAwesomeIcon icon={faShoppingCart} color="white" size={25} />;

// create component to add new data and to have toast message indicating summary of message


function App() {
  return (
    <div className="App">
      <div className="test">
        <Notifications
          data={[
            {
              image: logo,
              message: "Kameshwaran S had shared a feedback with you.",
              detailPage: "/",
            },
            {
              image: logo,
              message: (
                <p>
                  Kameshwaran S had shared a{" "}
                  <span style={{ color: "#7ac2fa" }}>feedback</span> with you.
                </p>
              ),
              detailPage: "/",
            },
          ]}
          header={{
            title: "Notifications",
            option: { text: "View All", onClick: () => console.log("Clicked") },
          }}
        />
      </div>
    </div>
  );
}

export default App;
