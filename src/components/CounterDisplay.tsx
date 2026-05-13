import { useCounterStore } from '../stores/useCounterStore';
const CounterDisplay = () => {
  const count = useCounterStore((state) => state.count);
  return <h1>{count}</h1>;
};

export default CounterDisplay;
