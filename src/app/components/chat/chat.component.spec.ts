import { async, ComponentFixture, TestBed, fakeAsync, inject, tick } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { ChatService, messages } from '../../providers/chat.service';
import { MockChatService } from '../../mock-providers/mock-chat.service';
import { Store } from '@ngrx/store';
import { MockStoreService } from 'app/mock-providers/mock-store.service';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComponent ],
      providers: [
        { provide: ChatService, useClass: MockChatService },
        { provide: Store, useClass: MockStoreService },
      ]
    })
    .overrideTemplate(ChatComponent, `
                        <h3 class="heading text-center">Angular4 Rockstar Chat</h3>
                      `)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create chat component', () => {
    expect(component).toBeTruthy();
  });

  it('should load inital messages from chat service and dispatch load event',
    fakeAsync(inject([ChatService, Store], (chatService, MockStoreService) => {
    spyOn(MockStoreService, 'dispatch');
    component.ngOnInit();
    fixture.detectChanges();
    expect(MockStoreService.dispatch).toHaveBeenCalledWith({
      type: 'LOAD_MESSAGES',
      payload: messages
    });
  })));
});
