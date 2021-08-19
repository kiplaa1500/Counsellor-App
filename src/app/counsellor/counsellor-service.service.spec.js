import { TestBed } from '@angular/core/testing';
import { CounsellorServiceService } from './counsellor-service.service';
describe('CounsellorServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CounsellorServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=counsellor-service.service.spec.js.map