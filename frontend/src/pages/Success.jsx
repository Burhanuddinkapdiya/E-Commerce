import { useLocation } from 'react-router-dom';


const Success = () => {
    const location = useLocation();
    console.log(location)
  return (
    alert("This is a success alert — check it out!")
  
  
  )
}

export default Success