//import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
  
 const onPlay = function()  {
    const timeupdate = player.currentTime;
    
 }

 player.on('play', onPlay);
    

   