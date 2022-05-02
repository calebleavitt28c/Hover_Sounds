import React from 'react'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';

const Callback = () => {
  (function() {
    var hash = {};
    window.location.hash.replace(/^#\/?/, '').split('&').forEach(function(kv) {
      var spl = kv.indexOf('=');
      if (spl != -1) {
        hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl+1));
      }
    });
    console.log('initial hash', hash);
  console.log(hash.access_token);
    if (hash.access_token) {
      let now = new Date()
      let time = now.getTime()
      time += 3600 * 1000
      now.setTime(time)
      document.cookie = 'spotifyAuthToken=' + hash.access_token + '; expires=' + now.toUTCString() + '; path=/'
      window.location.href = '/spotify'
      toast.success('Successful Spotify Login', {
        position: 'bottom-right',
        closeOnClick: true,
        pauseOnHover: false
      })
      }
  })();
  return (
    <ToastContainer />
  )
}

export default Callback

