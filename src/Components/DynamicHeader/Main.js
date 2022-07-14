import { useState } from "react";
import { DynamicHeaderMainStyled } from "./Styles/MainStyles";

export const DynamicHeader = (props)=>{
    const {onScroll,text,} = props;
    const [fontSize, setFontSize] = useState(props.height ===50? 16:20)
    return <DynamicHeaderMainStyled
    style={{height:props.height,width:props.height===50? '200px':'100%',left:props.height!==50? 0:null, margin:props.height===50?10:0,borderRadius:props.height===50?100:0 }}
    >
        <div style={{fontSize:props.height ===50? 16:40, fontWeight:'900'}} >
        {text}
        </div>
        </DynamicHeaderMainStyled>
}