import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ViewAppointmentComponent } from './view-appointment.component';
describe('ViewAppointmentComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ViewAppointmentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ViewAppointmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=view-appointment.component.spec.js.map