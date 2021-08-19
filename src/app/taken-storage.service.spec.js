import { TestBed } from '@angular/core/testing';
import { TokenStorageService } from './taken-storage.service';
describe('TakenStorageService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TokenStorageService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=taken-storage.service.spec.js.map