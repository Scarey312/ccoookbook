import { useState } from "react";
import { DynamicHeader } from "../DynamicHeader/Main";
import { DynamicListMainStyled } from "./Styles/MainStyled"

export const DynamicList = (props)=>{
    const {items} = props; 
    const maxheight=100;
    const minheight = 50;
    const [headerHeight, setHeaderHeight] = useState(maxheight)
    const [lastScrollTop,setLastScrollTop] = useState(0)
    return <div>
    
    <DynamicHeader 
                height={headerHeight}
                text={'ccookbook'}/><DynamicListMainStyled
    onScroll={(e)=>{
        const scrolltop= e.currentTarget.scrollTop
        console.log(lastScrollTop,scrolltop)
        if(lastScrollTop<scrolltop){
            setHeaderHeight(50)
        } else if(lastScrollTop>scrolltop){
            setHeaderHeight(100)
        }
        setLastScrollTop(scrolltop)
    }}
    >

        {items && items.map((item)=>{
            return item
        })}
    </DynamicListMainStyled></div>
}