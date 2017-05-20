import { Observable } from 'rxjs/Observable';

export class MockStoreService {
  select() {
    return [];
  }

  dispatch({type: string, payload: any}): any {
    return [];
  }
}