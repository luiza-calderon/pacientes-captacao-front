import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    transform(value: string): string {
        return `(${value.substring(0, 2)}) ${value.substring(2, value.length - 4)}-${value.substring(value.length - 4)}`;
    }
}