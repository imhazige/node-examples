import assert from 'assert';
import { describe, it } from 'mocha';
import { React } from '..';

describe('Hooks', () => {
  describe('test all ()', () => {
    it('test all', () => {});

    function Counter() {
      const [count, setCount] = React.useState(0);
      const [text, setText] = React.useState('foo');
      React.useEffect(() => {
        console.log('effect', count, text);
      }, [count, text]);
      return {
        click: () => setCount(count + 1),
        type: txt => setText(txt),
        noop: () => setCount(count),
        render: () => console.log({ count, text }),
      };
    }
    let App;
    App = React.render(Counter);
    // effect foo
    // {count: 0, text: 'foo'}
    App.click();
    App = React.render(Counter);
    // effect 1 foo
    // {count: 1, text: 'foo'}
    App.type('bar');
    App = React.render(Counter);
    // effect 1 bar
    // {count: I, text: • bar ' }
    App.noop();
    App = React.render(Counter);
    // // no effect run
    // effect 1 bar
    // {count: 1, text: 'bar'}
    App.click();
    App = React.render(Counter);
    // effect 2 bar
    // {count: 2, text: • bar ' }
  });
});
