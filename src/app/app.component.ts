import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<FeedState>) { }

  ngOnInit(): void {
    const store = this.store;
    store.subscribe(() => console.log(store.getState()))

    // The only way to mutate the internal state is to dispatch an action.
    // The actions can be serialized, logged or stored and later replayed.
    store.dispatch({ type: 'INCREMENT' })
    // 1
    store.dispatch({ type: 'INCREMENT' })
    // 2
    store.dispatch({ type: 'DECREMENT' })
    // 1  }
    title = 'redux';
  }
