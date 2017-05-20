[![CI Status](http://img.shields.io/travis/AhsanAyaz/angular4-rockstar-chat-ngrx.svg?style=flat)](https://travis-ci.org/AhsanAyaz/angular4-rockstar-chat-ngrx)


# Angular4Rockstar-NgRx

Author: Ahsan Ayaz

This project is created for the 3rd meetup of ngPakistan and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0

## App Details

The app is built on top the basic version of [Angular4Rockstar Chat](https://github.com/AhsanAyaz/angular4-rockstar-chat) project with the inclusion of @ngrx/store usage.

There're two simple pages: 
1) Landing Page
2) Chat Page (home)

Landing page is a simple page with link to Chat Page.

Chat Page has the following heirarchy of components: 

```
home (chat page)
-- ar-chat (chat component)
---- ar-chat-messages (chat messages list)
---- ar-write-message (component to write and send a new message)
```

## How the components work / Data Flow

With the use of @ngrx/store, we have eliminated the component interaction using `@Input` and `@Output` with `EventEmmitter` of course.

- The `ar-chat` component is the parent and `ar-chat-messages` and `ar-write-message` are the children.

- The `ar-chat` component loads the initial messages using `loadMessages` method utilizing  `chatService.getMessages()`.
  Then dispatches the action `LOAD_MESSAGES`.
  This sets the `State` of `messages` in `@ngrx/store` i.e. loads the message into state.

- The `ar-chat-messages` which displays messages, loads the messages on `ngOnInit` and subscribes to it using the `messages$` model which is assigned an `Observable` from the `@ngrx/store`. Therefore the messages are displayed in the component.

- The `ar-chat-messages` component also contains the functionality to remove messages. When the delete button is triggered, the component dispatches `REMOVE_MESSAGE` event which updates the state of `messages` refreshing the view with the remaining messages.

- The `ar-write-message` dispatches the event `ADD_MESSAGE` which updates the state in the store. As a result, the `ar-chat-messages` component gets its `messages$` model updated since it was subscribed to the `@ngrx/store`
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Plugins used

Used [`ngx-bootstrap`](valor-software.com/ngx-bootstrap/#/) for mainly the bootstrap styles. Didn't use any component yet.
For testing, I also installed `karma-spec-reporter` via npm so we can see the specs running in the consoles.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

The unit test is written for `chat.component` mainly. Can be found under `app/components/chat/chat.component.spec.ts`

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
The e2e test is written for the chat component of course. The file is at `e2e/chats/chats.e2e-spec.ts`

Editor: [VS Code](https://code.visualstudio.com/)

