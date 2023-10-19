import img1 from '../../img/neznayka.png';
import wave from '../../img/wave.png';
import {Fragment, useState} from "react";
import './main.css';
import microphoneOff from "../../img/microphoneOff.png";
import microphoneOn from "../../img/microphoneOn.png";
import buttonOk from "../../img/buttonOk.png";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export const Main = () => {

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'ru-RU';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const [btn_mic_on_enabled, setBtn_mic_on_enabled] = useState(true);
    const [btn_mic_off_enabled, setBtn_mic_off_enabled] = useState(false);
    const [btn_ok_enabled, setBtn_ok_enabled] = useState(false);
    const [show_text_input, setShow_text_input] = useState(true);
    const [show_soundWave, setShow_soundWave] = useState(false);
    const [btn_send, setBtn_send] = useState(false);
    const [AI_text, setAI_text] = useState('');

    function setInitialState(){

    }

    function setRecordingState(){

    }

    function setTextInputState(){

    }

    function setResultsState(){

    }




    const mic_off_pressed_handler = () => {
        setBtn_mic_off_enabled(false);
        setBtn_mic_on_enabled(true);
        setBtn_ok_enabled(false);
        setShow_soundWave(true);
        setShow_text_input(false);
        setBtn_send(false);
    }

    const mic_on_pressed_handler = () => {
        setBtn_mic_off_enabled(false);
        setBtn_mic_on_enabled(false);
        setBtn_ok_enabled(true);
        setShow_soundWave(false);
        setShow_text_input(false);
        setBtn_send(false);

        // recognition.start();
    }

    const text_input_handler = () => {
        setBtn_mic_off_enabled(false);
        setBtn_mic_on_enabled(false);
        setBtn_ok_enabled(false);
        setShow_soundWave(false);
        setShow_text_input(true);
        setBtn_send(true);
    }

    const ok_pressed_handler = () => {
        setBtn_mic_off_enabled(true);
        setBtn_mic_on_enabled(false);
        setBtn_ok_enabled(false);
        setShow_soundWave(false);
        setShow_text_input(true);
        setBtn_send(false);
    }

    const send_pressed_handler = () => {
        setBtn_mic_off_enabled(false);
        setBtn_mic_on_enabled(false);
        setBtn_ok_enabled(true);
        setShow_soundWave(false);
        setShow_text_input(false);
        setBtn_send(false);
    }

    recognition.onresult = function (r) {
        const recognizedText = r.results[0][0].transcript;

        mic_off_pressed_handler();

        setAI_text(recognizedText);
    }

    return (
        <Fragment>
            <div className={'main'}>
                {/*поле "говорите"*/}
                <input disabled className={'main_input'} placeholder={AI_text ? AI_text : 'говорите'} />
                {/*изображение Незнайки*/}
                <img src={img1} alt="image" className="main_img" />
                {/*поле ввода текстом*/}
                <input id={'text_input'} className={show_text_input?'button_visible':'button_invisible'} placeholder={'| ввести текстом'} onClick={text_input_handler}/>
                {/*картинка волна*/}
                <img src={wave} alt="image sound wave" id={'soundWave'} className={show_soundWave?'button_visible':'button_invisible'}/>
                {/*кнопки off, on, ok, Отправить*/}
                <button type={'button'} id={'button'} className={btn_mic_on_enabled?'button_visible':'button_invisible'} onClick={mic_on_pressed_handler}>
                    <img src={microphoneOff} className={''} alt={'image microphone off'}/>
                </button>
                <button type={'button'} id={'button'} className={btn_mic_off_enabled?'button_visible':'button_invisible'} onClick={mic_off_pressed_handler}>
                    <img src={microphoneOn} className={''} alt={'image microphone on'}/>
                </button>
                <button type={'button'} id={'button'} className={btn_ok_enabled?'button_visible':'button_invisible'} onClick={ok_pressed_handler}>
                    <img src={buttonOk} className={'btn_ok'} alt={'image button ok'}/>
                </button>
                <button type={'button'} id={'button_send'} className={btn_send?'button_visible':'button_invisible'} onClick={send_pressed_handler}> Отправить</button>
            </div>
        </Fragment>
    )
}