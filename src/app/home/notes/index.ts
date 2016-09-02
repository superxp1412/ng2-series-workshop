import {Component} from "@angular/core"
import {NoteCard} from './note-card'

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    styles: [require('./notes.css')],
    directives: [NoteCard]
})

export class Notes{
    notes = [
    {"title":"titt", "value": "vv"},
    {"title":"222", "value": "vv"},
]
    checkCard(note,index){
        console.log(note)
        console.log(index)
        this.notes.splice(index,1)
    }
}