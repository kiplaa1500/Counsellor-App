import { TestBed } from '@angular/core/testing';
import { AppointmentService } from './appointment.service';
describe('AppointmentService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AppointmentService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=appointment.service.spec.js.map