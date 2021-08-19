import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CounsellorInputComponent } from './counsellor-input.component';
describe('CounsellorInputComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CounsellorInputComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CounsellorInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=counsellor-input.component.spec.js.map