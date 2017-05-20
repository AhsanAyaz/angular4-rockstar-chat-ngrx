# Angular4Rockstar

Author: Ahsan Ayaz

This project is only for the task `Angular 4 Programming Challenge` and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0

## App Details

Since the task had to show component interaction, I decided to make a simple chat app.
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

## How the components interact

The `ar-chat` component is the parent and `ar-chat-messages` and `ar-write-message` are the children.

`ar-chat` passes `chatMessages` model as an @Input (`messages`) to `ar-chat-messages` which displays messages. Whenever the model `chatMessages` gets updated, the child component displays the list accordingly. (showing parent to child communication)

`ar-write-message` being a child component, fires an event `onMessageSent` which the parent (`ar-chat`) receives (showing child to parent communication/interaction) and adds the new message to the `chatMessages` model which updates the `messages` input by the parent component to `ar-chat-messages`. Therefore, updating the messages list inside `ar-chat-messages`. 

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
Before running the tests make sure you are serving the app via `ng serve`.

The e2e test is written for the chat component of course. The file is at `e2e/chats/chats.e2e-spec.ts`


## What I could do more

Well I enjoyed creating the app and writing the tests. I could work more on the UI, also could use localStorage to persist data (messages). 
I could also show loaders and some fading animation when the new message is sent. 
I could also add delete message functionality too.

But for the sake of the task, I think the current code might be sufficient :)

Thanks


Time Taken : 4.5 hours

Editor: [VS Code](https://code.visualstudio.com/)

