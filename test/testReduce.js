import {items} from './data.js'
import  * as ash from '../reduce.js'
var res=ash.reduce(items,ash.cb,1); 
console.log(res);