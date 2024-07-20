import Location from "./Location";
import Upper from "./Upper";

const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[]);
   
    return ( 
        <div className="">
            <Upper/>
            <Location/>
        </div>
     );

}
 
export default Contact;