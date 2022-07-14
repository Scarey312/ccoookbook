import { DynamicCardMainStyled } from "./Styles/MainStyles"
import {AiFillStar} from 'react-icons/ai'
export const DynamicCard = (props) =>{
  const {image} = props;

    return <DynamicCardMainStyled>
  <img
    key={'i'}
    src={image}
    style={{width: "100%",display: "block",borderRadius:20}}
    alt=""
/>
<div style={{width:'calc(100% - 20px)',left:0,padding:10,backgroundColor:'white',position:'absolute',bottom:0,borderBottomRightRadius:20,borderBottomLeftRadius:20,opacity:.8}}>
    <div style={{fontSize:20,fontWeight:'bold'}}>Hello World!</div>
        <div>This is a brief description of the recipe</div>
        <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>

        
</div>
    </DynamicCardMainStyled>
}