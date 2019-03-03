import { AnimationRecorder } from "../dist/index"
const recorder = new AnimationRecorder()
recorder.init({
    waveConfig:{
        // colors:['rgba(255,152,152, 0.2)', 'rgba(255,152,152, 0.5)','rgba(255,152,152, 1)']
    }
},document.body);
let isStart = false;
window.addEventListener('touchend', async ()=> {
    if(isStart){
        recorder.stop();
        isStart = false;
    }else{
        recorder.start();
        isStart = true;
    }
});
// AudioContext = null;
// alert(webkitAudioContext );

recorder.addEventListener('error', event => {
    alert(event);
})

recorder.addEventListener('start', event =>{
    console.log(event);
})
recorder.addEventListener('stop', event => {
    console.log(event);
})
recorder.addEventListener('audioprocess', event => {
    // document.body.innerHTML = event.data;
    // console.log(event);
})
