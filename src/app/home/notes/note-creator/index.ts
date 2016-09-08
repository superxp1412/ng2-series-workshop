import {Component, Input, Output, EventEmitter} from "@angular/core"

@Component({
    selector: 'note-creator',
    template: require('./note-creator.html'),
    styles: [require('./note-creator.css')]
})

export class NoteCreator{
    newNote = { title: '', value: ''};

    @Output()
    onCreateNote = new EventEmitter();

    createNote() {

        if( isEmpty(title) || isEmpty(value)){
            return false;
        }

        const { title, value } = this.newNote;

        this.onCreateNote.emit({title, value});

        console.log(this.newNote);

        return false;

    }

}
