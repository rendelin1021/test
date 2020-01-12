import {fetch as fetchPolyfill} from 'whatwg-fetch';
export default (url)=>{
    let result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        },    
   }).then(res=>res.json());
   
   return result
}
