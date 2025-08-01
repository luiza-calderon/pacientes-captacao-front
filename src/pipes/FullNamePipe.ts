import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
    transform(value: string): string {
        return value.split(' ').map(word => {
            return word.at(0)?.toUpperCase().concat(word.substring(1));
        }).join(' ');
    }
}