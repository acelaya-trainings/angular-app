import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'delete-user-confirm',
    templateUrl: './delete-user-confirm.component.html',
})
export class DeleteUserConfirmComponent {
    constructor(public activeModal: NgbActiveModal) {}
}
