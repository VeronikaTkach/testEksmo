import img1 from '../../img/neznayka.png';
import {Fragment} from "react";
import './main.css';
export const Main = () => {
    return (
        <Fragment>
        <div>
            <img src={img1} alt="image" className="main_img" />
        </div>
        <div>
            <input className={'main_input'} placeholder={'| ввести текстом'}/>
        </div>
        </Fragment>
    )
}