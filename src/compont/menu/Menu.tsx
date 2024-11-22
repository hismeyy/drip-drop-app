import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faCog} from '@fortawesome/free-solid-svg-icons';
import "./Menu.css";

function Menu() {
    const appTitle = "drip-drop";
    const menuList = [
        {icon: faHome, title: "主页"},
        {icon: faCog, title: "设置"},
    ];

    return (
        <div className="menu-box">
            <div className="logo">
                <h1>{appTitle}</h1>
            </div>
            <ul className="menu">
                {menuList.map((item, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={item.icon}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
