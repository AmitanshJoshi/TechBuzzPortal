import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search : string): any {
    debugger;
    if(!value)return null;
        if(!search)return value;

        search = search.toLowerCase();

        return value.filter(function(item){
            return JSON.stringify(item).toLowerCase().includes(search);
        });
  }

}
