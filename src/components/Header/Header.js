import './Header.css'
import Trufa from '../../assets/trufa.png'

const Header = ()=>{

    return(
        <>
        <div className="container">
            <div className="header">
                <h1>Maria trufas</h1>
                <img src={Trufa} alt="Trufa"/>
            </div>  
        </div>
        </>
    )
}

export default Header