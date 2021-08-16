import {items} from './data.js'
import  * as ash from '../find.js'
var res=ash.find(items,ash.cb,5);  
console.log(res);