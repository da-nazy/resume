
import underconst from "../../Asset/Image/underconst.gif";
export const Underconstruction=({name})=>{
    
    return (
        <div>
            <h1>{name}</h1>
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
        width:500,
        height:500, 
    }
}