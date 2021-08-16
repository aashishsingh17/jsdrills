import {items} from './data.js'
import  * as ash from '../filter.js'
var res=ash.filter(items,ash.cb,5);  
console.log(res);