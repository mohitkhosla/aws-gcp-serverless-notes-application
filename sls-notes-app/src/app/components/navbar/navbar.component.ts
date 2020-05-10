import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesDataService } from '../../services/notes-data/notes-data.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    @Output() showNoteModalEvent = new EventEmitter();
    @Output() signOutUserEvent = new EventEmitter();
    @Output() isHomeClicked = new EventEmitter<boolean>();

    isShowAnalytics:boolean=false;
    aws:string;
    constructor(private notesDataService: NotesDataService, private route:ActivatedRoute, private router:Router) {
    }
    ngOnInit() {
        this.aws=JSON. parse(localStorage.getItem('aws'));
        if(this.aws["user_name"]=="Asit Panda")
            this.isShowAnalytics=true;
     }

    onShowNoteModal($event) {
        $event.preventDefault();
        this.showNoteModalEvent.emit();
    }   
    showNotes($event){
        $event.preventDefault();
        this.isHomeClicked.emit(true);
    }
    loadAnalytics($event){
        $event.preventDefault();
        this.isHomeClicked.emit(false);
    }

    onSignOut() {
        this.signOutUserEvent.emit();
    }
}