import Logo from './LOGO HE VINCI.png'
const Header = (props) => {
    return (
      <div>
        <img src={Logo}></img>
        <h1>{props.course}</h1>
      </div>
    )
}

export default Header