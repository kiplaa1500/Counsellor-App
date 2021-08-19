import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { AppointmentDetailsComponent } from './appointment-details.component';
describe('AppointmentDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [AppointmentDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AppointmentDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=appointment-details.component.spec.js.map