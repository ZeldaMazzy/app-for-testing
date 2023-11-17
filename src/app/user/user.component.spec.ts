import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { UserComponent } from "./user.component"
import { UserService } from "./user.service";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { DataService } from "../data/data.service";

describe("user component", () => {
    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>
    let userService: UserService;
    let dataService: DataService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(UserComponent);
        userService = TestBed.inject(UserService);
        dataService = TestBed.inject(DataService);
        component = fixture.componentInstance;
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should get the user name from the user service", () => {
        //arrange
        const userName = userService.user.name;

        //assert
        expect(component.user.name).toBe(userName);
    });

    it("should display the logged in message if the user is logged in, and not display the other one", () => {
        //arrange
        component.isLoggedIn = true;

        //act
        fixture.detectChanges();
        const loggedInDiv: DebugElement = fixture.debugElement.query(By.css("#is-logged-in-container"));
        const loggedOutDiv: DebugElement = fixture.debugElement.query(By.css("#is-logged-out-container"));

        //assert
        expect(loggedInDiv).toBeTruthy();
        expect(loggedOutDiv).toBeFalsy();
    });

    it("should display the logged out message if the user is logged out, and not display the other one", () => {
        //arrange
        component.isLoggedIn = false;

        //act
        fixture.detectChanges();
        const loggedInDiv: DebugElement = fixture.debugElement.query(By.css("#is-logged-in-container"));
        const loggedOutDiv: DebugElement = fixture.debugElement.query(By.css("#is-logged-out-container"));

        //assert
        expect(loggedOutDiv).toBeTruthy();
        expect(loggedInDiv).toBeFalsy();
    });

    it("should display the username if the user is logged in", () => {
        //arrange
        const name: string = "Zelda :)"
        component.isLoggedIn = true;
        component.user.name = name;

        //act
        fixture.detectChanges();
        const userMessage: HTMLParagraphElement = fixture.debugElement
            .query(By.css("#is-logged-in-container > p")).nativeElement;

        //assert
        expect(userMessage.innerText).toContain(name);
    });

    it("should set the data equal to 'Data' when the component calls getDetails()", waitForAsync(() => {
        //arrange
        const expected: string = "Data";

        //assert
        fixture.whenStable()
            .then(() => {
                expect(component.data).toEqual(expected);
            })
    }));
});