import {Component, ViewChild} from "@angular/core"
import {NoteCard} from './note-card'
import {NoteCreator} from './note-creator'
import {Input, Output, EventEmitter} from "@angular/core"

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    styles: [require('./notes.css')],
    directives: [NoteCard,NoteCreator]
})

export class Notes{
    @ViewChild(NoteCreator) creator: NoteCreator

    notes = [
    {"title":"titt", "value": "vv", "color": 'white'},
    {"title":"222", "value": "vv", "color": 'white'},
]
    checkCard(note,index){
        console.log(note)
        console.log(index)
        this.notes.splice(index,1)
    }

    addNote(note){
        this.notes.push(note);
    }
}