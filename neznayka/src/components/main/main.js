import img1 from '../../img/neznayka.png';
import {Fragment} from "react";
import './main.css';
import img2 from "../../img/Group 1321317225.png";
export const Main = () => {
    const changeButtonState = (e) => {
        // e.target.closest('.play_btn').classList.toggle('play_btn--toggle');
    }
    return (
        <Fragment>
            <div className={'main'}>
                {/*поле "говорите"*/}
                <input disabled className={'main_input'} placeholder={'говорите'}/>
                {/*изображение Незнайки*/}
                <img src={img1} alt="image" className="main_img" />
                {/*поле ввода текстом*/}
                <input className={'text_input'} placeholder={'| ввести текстом'}/>
                {/*кнопки on, off, ok*/}
                <button type={'button'} className={'button_img'} onClick={changeButtonState}>
                    <img src={img2} className={'button_img_off'} alt={'image microphone off'}/>
                </button>
            </div>
        </Fragment>
    )
}