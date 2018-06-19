import { Pipe, PipeTransform } from '@angular/core';
<<<<<<< HEAD
import * as _ from 'lodash';
@Pipe({
    name: 'removeduplicates'
})
export class RemoveduplicatesPipe implements PipeTransform {
    transform(value: any): any {




        if (value !== undefined && value !== null) {
            return _.uniqBy(value, 'model');


        }





=======
import * as _ from 'lodash'; 
@Pipe({
    name: 'removeduplicates'
})
export class RemoveduplicatesPipe implements PipeTransform{
   transform(value: Array<string>):any{

        let arr = ['model','material','kind'];
    
        if(value!== undefined && value!== null){
            return  _.uniqBy(value, 'model');

        
        }

      
       
       
>>>>>>> 56639961bdb4ab483c2649e64f386362832e9083
        return value;
    }




<<<<<<< HEAD


=======
>>>>>>> 56639961bdb4ab483c2649e64f386362832e9083
}