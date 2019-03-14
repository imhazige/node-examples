import assert from 'assert';
import { describe, it } from 'mocha';
import createStore from '../redux';

describe('Redux', () => {
  describe('test all ()', () => {
    it('test all', () => {
      // Reducer
      function reducer(
        state = { firstName: 'John', lastName: 'Smith' },
        action,
      ) {
        switch (action.type) {
          case 'UPDATE_FIRSTNAME':
            return {
              ...state,
              firstName: action.payload,
            };
          case 'UPDATE_LASTNAME':
            return {
              ...state,
              lastName: action.payload,
            };
          default:
            return state;
        }
      }

      // Action creators
      const updateFirstName = firstName => ({
        type: 'UPDATE_FIRSTNAME',
        payload: firstName,
      });

      const updateLastName = lastName => ({
        type: 'UPDATE_LASTNAME',
        payload: lastName,
      });

      // Create the store
      const store = createStore(reducer);

      // Get initial state
      console.log(`INITIAL STATE: ${JSON.stringify(store.getState())}`);

      // Subscribe to state changes
      const unsub = store.subscribe(() => {
        console.log('Subscription fired', JSON.stringify(store.getState()));
      });

      // Dispatch an action
      store.dispatch(updateFirstName('Tommy'));

      // Unsubscribe our listener
      unsub();

      // Dispatch another action
      store.dispatch(updateLastName('Watson'));

      // Get the current state
      console.log(JSON.stringify(store.getState()));
    });
  });
});
