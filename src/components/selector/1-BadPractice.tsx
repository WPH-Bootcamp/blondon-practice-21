import { useCounterStore } from '../../stores/useCounterStore';
const ComponentA = () => {
  const { count } = useCounterStore();
  return <h1>{count}</h1>;
};

const ComponentB = () => {
  const { increment } = useCounterStore();
  return <button onClick={increment}>+</button>;
};
