/* The code you provided is a unit test for an Angular component called `AppComponent`. */
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

/* The code `describe('AppComponent', () => {...})` is a test suite that groups together multiple test
cases related to the `AppComponent` class. */
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  /* The code `it('should create the app', () => {...})` is a unit test case that checks if the
  `AppComponent` is created successfully. */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /* The code you provided is a unit test case that checks if the `title` property of the
  `AppComponent` is equal to the string `'Web_P1'`. */
  it(`should have as title 'Web_P1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Web_P1');
  });

  /* The code you provided is another unit test case that checks if the title of the rendered component
  matches the expected value. */
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'Web_P1 app is running!'
    );
  });
});
