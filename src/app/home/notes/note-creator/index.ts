import {Component, Input, Output, EventEmitter} from "@angular/core"
import {ColorPicker} from './color-picker'
import { isEmpty } from 'lodash'

@Component({
    selector: 'note-creator',
    template: require('./note-creator.html'),
    styles: [require('./note-creator.css')],
    directives: [ColorPicker]
})

export class NoteCreator{
    newNote = { title: '', value: ''};

    @Output()
    onCreateNote = new EventEmitter();

    createNote() {

        const { title, value } = this.newNote;

        if( isEmpty(title) || isEmpty(value)){
            return false;
        }

        this.onCreateNote.emit({title, value, color:this.backgroundColor});

        console.log(this.newNote);

        return false;

    }

    backgroundColor = 'rgb(255, 255, 255)'

    changeBackground(color) {
        console.log("---")
        console.log(color)
        this.backgroundColor = color
    }

}
