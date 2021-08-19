import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { GroupchatComponent } from './groupchat.component';
describe('GroupchatComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [GroupchatComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GroupchatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=groupchat.component.spec.js.map