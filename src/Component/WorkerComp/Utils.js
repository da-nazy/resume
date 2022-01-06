
import underconst from "../../Asset/Image/underconst.gif";
export const Underconstruction=(name)=>{
    
    return (
        <div>
            <h1>{name} is Underconstruction</h1>
            <img
             src={underconst}
             alt={"Under construction"}
             style={style.img}
            />
        </div>
    )
}

const style={
    img:{
        width:50,
        height:100, 
    }
}