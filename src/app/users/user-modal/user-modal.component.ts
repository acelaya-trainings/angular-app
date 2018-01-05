import {Component, Input} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../shared/user.model";

@Component({
    selector: 'user-modal',
    templateUrl: './user-modal.component.html',
})
export class UserModalComponent {
    @Input()
    public user: User = {
        name: '',
        email: '',
    };
    @Input()
    public isEdition: boolean = false;

    constructor(public activeModal: NgbActiveModal) {}

    public save() {
        this.activeModal.close(this.user);
    }
}
