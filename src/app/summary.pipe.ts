import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary' 
})

export class SummaryPipe implements PipeTransform{
    transform(value: string){
        if (!value)   return null;   
              
        let words = value.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (i > 0 && this.isPreposition(words[i])) 
                words[i] = this.toLowerCase(words[i]);
            else
                words[i] = this.toTitleCase(words[i]);
        }
        return words.join(' ');
    } 

    private toTitleCase(word: string): string{
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }

    private toLowerCase(word: string): string{
        return word.toLowerCase();
    }


    private isPreposition(word: String): boolean {
        let prepositions = ['of', 'the'];
        return prepositions.includes(word.toLowerCase());
    }
}