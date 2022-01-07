import { useNavigate } from "react-router-dom";
import "../style/sidebar.css";
export default function Sidebar() {

    const navigate=useNavigate();
  const nav = [

    {
      name: "About",
      loc: "/",
    },
    {
      name: "Porfolio",
      loc: "/portfolio",
    },
    {
      name: "Blog",
      loc: "/blog",
    },
    {
        name:'Resume',
        loc:'/resume'
    },
    {
        name:'Works',
        loc:'/works'
    },
    {
        name:'Make Request',
        loc:'/request'
    }
  
  ];
  return (
    <div className="sidebar">
      <div className="sidewrapper">
        {nav.map((e, i) => {
          return (
            <h3 key={i} className="navButton" onClick={()=>navigate(e.loc)}>
              {e.name}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
