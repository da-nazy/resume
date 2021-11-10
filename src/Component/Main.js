import '../style/main.css';
import avatar from '../Asset/Image/avatar.jpg'
export default function Main() {
    const socialHandle=[
        {
            name:'Instagram',
            icon:'',
        },
        {
            name:'Facebook',
            icon:'',
        
        },
        {
            name:'Whatsapp',
            icon:'',
        },
        {
            name:'Github',
            icon:'',
        }
    ]
    return (
        <div className="about">
           <div style={{height:'70%',flexDirection:'row',display:'flex',justifyContent:'center',backgroundColor:'#F3F4F8'}}>
               <div style={{width:'50%',height:'65%',paddingBottom:25,margin:'auto 0',alignItems:'left',justifyContent:'space-evenly'}} >
               <h1 style={{height:'25%',textAlign:'left'}}>Passionate <br/>React Developer</h1>
               <p style={{height:'25%',textAlign:'left',marginTop:20}}>I am a freelance React developer based in Enugu Nigeria. 
                   I've worked with startups
                  and established companies. 
                  I'm passionate about my work.</p>
                <button style={{ justifyContent:'center',display:'flex',flexDirection:'row', height:'12%', width:'25%',borderRadius:20,backgroundColor:'#867CF4',color:'#fff',fontWeight:'500',border:'1px solid transparent',textAlign:'center',alignItems:'center',fontSize:15,boxShadow:" 0 0 10px #ccc"}}>Hire me</button>
                </div>
                <div style={{width:'35%',alignSelf:'center'}} >
                    <img  src={avatar} style={{width:'40%',height:'20%',borderRadius:'50%',backgroundSize:'contain',boxShadow:" 1px 1px 5px #cc9"}}/>
                </div>
           </div>
           <div style={{border:'1px solid black',height:'25%',backgroundColor:'#fff'}}>
               <h1>Bottom </h1>
           </div>
        </div>
    )
}
