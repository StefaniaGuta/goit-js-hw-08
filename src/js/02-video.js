import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const key = 'videoplayer-current-time';
const localStorageTime = localStorage.getItem(key);

   
    player.on('timeupdate', throttle( time =>
        localStorage.setItem(key, time.seconds), 1000, {
            leading: false,
        })
      );

      if(localStorageTime != null){
        player.setCurrentTime(+localStorageTime);
      }
