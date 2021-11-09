import '../style/main.css';
export default function Main() {
    return (
        <div className="about">
           <div style={{height:'70%',flexDirection:'row',display:'flex',justifyContent:'center',}}>
               <div style={{border:'1px solid red',width:'50%'}} >
               <h1 style={{height:'25%',textAlign:'left'}}>Passionate <br/>React Developer</h1>
               <p style={{height:'40%',textAlign:'left'}}>I am a freelance React developer based in Enugu Nigeria. 
                   I've worked with startups
                  and established companies. 
                  I'm passionate about my work.</p>
                  <button style={{justifyContent:'left', height:'20%', width:'25%',height:40,borderRadius:10,backgroundColor:'#867CF4',color:'#fff',fontWeight:'500',border:'1px solid transparent'}}>Hire me</button>
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
