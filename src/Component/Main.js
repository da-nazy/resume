import "../style/main.css";
import avatar from "../Asset/Image/avatar.jpg";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
export default function Main() {
  // Create a profile
  // make it user editable
  // make the site pdf downloadable
  // make the profile theme changeable
  // make the profile view section true or false
  // make the profile view section have expiry date

  const socialHandle = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/datableed/",
      func: "",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://web.facebook.com/daniel.ani.712",
      func: "",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      func: "",
      link: "https://www.linkedin.com/in/ani-daniel-b8572b109/",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/da-nazy",
      func: "",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/+2348060556744",
      func: "",
    },
  ];
  return (
    <div className="about">
      <div
        style={{
          height: "70%",
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F3F4F8",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "65%",
            paddingBottom: 25,
            margin: "auto 0",
            alignItems: "left",
            justifyContent: "space-evenly",
          }}
        >
          <h1 style={{ height: "25%", textAlign: "left" }}>
            Passionate <br />
            React Developer
          </h1>
          <p style={{ ...style.workDesc }}>
            I am a freelance React developer based in Enugu Nigeria. I currently
            work with Javascript, Java,Html,Css,Sql,React and React-native. I'm
            passionate about my work.
          </p>
          <button
          className={"hireBtn"}
            style={{ ...style.hireBtn }}
            onClick={() =>
              window.open("mailto:danielani660@gmail.com", "_blank")
            }
          >
            Hire me
          </button>
        </div>
        <div style={{ width: "35%", alignSelf: "center" }}>
          <img
            src={avatar}
            alt={"A physical description"}
            style={{ ...style.avatar }}
          />
        </div>
      </div>
      <div className="socHandCont" style={{ ...style.socialHandlCont }}>
        <div style={{ ...style.socialHandle }}>
          {socialHandle.map((e, i) => {
            return (
              <div
                onClick={() => window.open(`${e.link}`, "_blank")}
                key={i}
                style={{
                  ...style.socialWrap
               
                }}
                className="socialHand"
              >
                <i style={{ color: "#9DA3A9", fontSize: 35 }}> {e.icon}</i>
                <h5 style={{ color: "#9DA3A9" }}>{e.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const style = {
  socialWrap: {
    width: "18%",
    height: "75%",
    justifyContent: "space-evenly",
  },
  socialHandlCont: {
    height: "25%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  socialHandle: {
    height: "70%",
    width: "55%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  workDesc: {
    height: "25%",
    textAlign: "left",
    marginTop: 20,
  },
  hireBtn: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    height: "12%",
    width: "25%",
    borderRadius: 20,
    backgroundColor: "#867CF4",
    color: "#fff",
    fontWeight: "500",
    border: "1px solid transparent",
    textAlign: "center",
    alignItems: "center",
    fontSize: 15,
    boxShadow: " 0 0 10px #ccc",
  },
  avatar: {
    width: "60%",
    height: "20%",
    borderRadius: "50%",
    backgroundSize: "contain",
    boxShadow: " 1px 1px 5px #cc9",
  },
};
