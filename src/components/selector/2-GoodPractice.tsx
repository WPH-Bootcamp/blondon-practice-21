import { useCounterStore } from '../../stores/useCounterStore';
const ComponentA = () => {
  const count = useCounterStore((state) => state.count);
  return <h1>{count}</h1>;
};

const ComponentB = () => {
  const increment = useCounterStore((state) => state.increment);
  return <button onClick={increment}>+</button>;
};
