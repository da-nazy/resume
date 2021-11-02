import '../style/sidebar.css';
export default function Sidebar() {
    const nav=[
        {
            name:"About",
            loc:'about',

    },{
        name:"Porfolio",
        loc:"portfolio",
    },{
        name:"Blog",
        loc:"blog",
    },{
        name:"Contact",
        loc:"contact"
    }

    ]
    return (
        <div className="sidebar">
            <div className="sidewrapper">
            {nav.map((e,i)=>{
                return(
                    <h3 key={i} className="navButton">
                   {e.name}
                </h3>
                )
            })}
            </div>
           
          
        </div>
    )
}
