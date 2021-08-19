import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { UpdateAppointmentComponent } from './update-appointment.component';
describe('UpdateAppointmentComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [UpdateAppointmentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateAppointmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-appointment.component.spec.js.map