import { async, TestBed } from '@angular/core/testing';
import { ErrorPagesModule } from './error-pages.module';
describe('ErrorPagesModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ErrorPagesModule]
        }).compileComponents();
    }));
    it('should create', () => {
        expect(ErrorPagesModule).toBeDefined();
    });
});
//# sourceMappingURL=error-pages.module.spec.js.map