import  React  from 'react';
import './Header.css';


const Header = function(props){
    
    return(
        <div className="header">
           {props.heading}
        </div>
    )
}

// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//             <h1>my-phone-directory</h1>
                //{this.props.heading}     //u can use it by using props in class as well but u need to add "this" bcs in class we need to use this.
//         </div>
//         )
//     }
// }

export default Header;