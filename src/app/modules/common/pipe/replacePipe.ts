import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform{
    transform(value: string, stringToReplace: string, replacmentString: string) {
       if(!value || !stringToReplace || !replacmentString){
        return value;
       } 
       return value.replace(new RegExp(stringToReplace, 'g'), replacmentString);
    }

}