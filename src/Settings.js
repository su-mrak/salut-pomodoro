import ReactSlider from 'react-slider';
import './Slider.css'
import { useContext } from 'react';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';


function Settings() {
    const settingsInfo = useContext(SettingsContext);

    return(


        <div style={{textAlign:'left'}}>
            <label>Время сессии: {settingsInfo.workMinutes}:00</label>
            <ReactSlider 
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                onChange={newvalue => settingsInfo.setWorkMinutes(newvalue)}

                min={1}
                max={120}
            />
            <label>Время перерыва: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider 
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                onChange={newvalue => settingsInfo.setBreakMinutes(newvalue)}

                min={1}
                max={120}
            />
            <div style={{textAlign:'center', marginTop:'20px'}}>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
            </div>
        </div>
    );
}

export default Settings;