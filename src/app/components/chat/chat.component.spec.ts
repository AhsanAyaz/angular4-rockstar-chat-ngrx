import { async, ComponentFixture, TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';

import { ChatComponent } from './chat.component';
import { ChatService, messages } from '../../providers/chat.service';
import { MockChatService } from '../../mock-providers/mock-chat.service';
import { Store } from '@ngrx/store';
import { MockStoreService } from 'app/mock-providers/mock-store.service';
import { ChatEffects } from '../../effects/chat.effects';

fdescribe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let runner, chatEffects;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComponent ],
      imports: [EffectsTestingModule],
      providers: [
        ChatEffects,
        { provide: ChatService, useClass: MockChatService },
        { provide: Store, useClass: MockStoreService },
      ]
    })
    .overrideTemplate(ChatComponent, `
                        <h3 class="heading text-center">Angular4 Rockstar Chat</h3>
                      `)
    .compileComponents();
  }));
  beforeEach(inject([
      EffectsRunner, ChatEffects
    ],
    (_runner, _chatEffects) => {
      runner = _runner;
      chatEffects = _chatEffects;
    }
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create chat component', () => {
    expect(component).toBeTruthy();
  });

  it('should load inital messages from chat service and emit LOAD_MESSAGES_SUCCESS', fakeAsync(() => {
    runner.queue({ type: 'LOAD_MESSAGES' });
    component.ngOnInit();
    chatEffects.getMessages$.subscribe(result => {
      expect(result).toEqual({ type: 'LOAD_MESSAGES_SUCCESS', payload: messages });
    });
  }));
});
