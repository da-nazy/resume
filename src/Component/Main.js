import '../style/main.css';
export default function Main() {
    return (
        <div className="about">
           <div style={{height:'70%',flexDirection:'row',display:'flex',justifyContent:'space-around'}}>
               <div style={{border:'1px solid black',width:'60%'}} >
               <h1>Passionate <br/>React Developer</h1>
               <p>I am a freelance React developer based in Enugu Nigeria. 
                   I've worked with startups
                  and established companies. 
                  I'm passionate about my work.</p>
                  <button>Hire me</button>
                </div>
                <div style={{border:'1px solid black',width:'30%'}}>
                    <img  style={{backgroundImage:`url(../Asset/Image/avatar.jpg)`}}/>
                </div>
           </div>
           <div style={{border:'1px solid black',height:'20%'}}>
               <h1>Bottom </h1>
           </div>
        </div>
    )
}
