import img1 from '../../img/neznayka.png';
import {Fragment, useState} from "react";
import './main.css';
import microphoneOff from "../../img/microphoneOff.png";
import microphoneOn from "../../img/microphoneOn.png";
import buttonOk from "../../img/buttonOk.png";

export const Main = () => {

    const [btn_mic_on_enabled, setBtn_mic_on_enabled] = useState(true);
    const [btn_mic_off_enabled, setBtn_mic_off_enabled] = useState(false);
    const [btn_ok_enabled, setBtn_ok_enabled] = useState(false);

    const changeButtonState = () => {
        if (btn_mic_on_enabled) {
            setBtn_mic_on_enabled(false);
            setBtn_mic_off_enabled(true);
            setBtn_ok_enabled(false);
        } else if (btn_mic_off_enabled) {
            setBtn_mic_on_enabled(false);
            setBtn_mic_off_enabled(false);
            setBtn_ok_enabled(true);
        } else if (btn_ok_enabled) {
            setBtn_mic_on_enabled(true);
            setBtn_mic_off_enabled(false);
            setBtn_ok_enabled(false);
        }
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
                {/*кнопки off, on, ok*/}
                <button type={'button'} id={'button'} className={btn_mic_on_enabled?'button_visible':'button_invisible'} onClick={changeButtonState}>
                    <img src={microphoneOff} className={''} alt={'image microphone off'}/>
                </button>
                <button type={'button'} id={'button'} className={btn_mic_off_enabled?'button_visible':'button_invisible'} onClick={changeButtonState}>
                    <img src={microphoneOn} className={''} alt={'image microphone on'}/>
                </button>
                <button type={'button'} id={'button'} className={btn_ok_enabled?'button_visible':'button_invisible'} onClick={changeButtonState}>
                    <img src={buttonOk} className={''} alt={'image button ok'}/>
                </button>
            </div>
        </Fragment>
    )
}