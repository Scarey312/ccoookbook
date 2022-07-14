import { useCallback, useEffect, useState } from "react";
import { DynamicHeader } from "../DynamicHeader/Main";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export const DynamicMasonry= (props)=>{
    const {items} = props; 
    const maxheight=100;
    const minheight = 50;
    const [headerHeight, setHeaderHeight] = useState(maxheight)
    const [lastScrollTop,setLastScrollTop] = useState(0)
    

  const [y, setY] = useState(window.scrollY);

const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
      setHeaderHeight(100
        )
    } else if (y < window.scrollY) {
      console.log("scrolling down");
      setHeaderHeight(50)
    }
    setY(window.scrollY);
  }, [y]
);

useEffect(() => {
  setY(window.scrollY);
  window.addEventListener("scroll", handleNavigation);

  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation]);

    return  <div
    onScroll={(e)=>{
      const scrolltop= e.currentTarget.scrollTop
      console.log(lastScrollTop,scrolltop)
      if(lastScrollTop<scrolltop){
          setHeaderHeight(50)
      } else if(scrolltop<10){
          setHeaderHeight(100)
      }
      setLastScrollTop(scrolltop)
  }}
    style={{height:'100vh',width:'100vw',overflowY:'scroll',alignItems:'center',justifyContent:'center'}}

    >
       <DynamicHeader 
    height={headerHeight}
    text={'Family Cookbook'}/>
    {/* <div style={{height:50}}/> */}
      <ResponsiveMasonry
    columnsCountBreakPoints={{350: 2, 750: 3, 900: 4}}
>
  <div style={{height:100}} />
    <Masonry
        onScroll={()=>{console.log('oh fuck yeah')}}

    >
      {items}
    </Masonry>
</ResponsiveMasonry>
      </div>
   
               
              
}