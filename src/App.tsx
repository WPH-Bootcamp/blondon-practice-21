import { useCounterStore } from './stores/useCounterStore';
import { useAppStore } from './stores/useAppStore';
import { CounterAction, CounterDisplay } from './components';

const App = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  const { user, theme, loading, login, logout, setLoading, toggleTheme } =
    useAppStore();
  return (
    <div>
      <h1>Get ready with me</h1>

      {/* <h2>{count}</h2> */}
      <h2>{theme}</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button> */}

      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ name: 'Ucup' })}>Login</button>
      )}

      <p>loading : {loading ? 'true' : 'false'}</p>
      <button
        onClick={() => {
          setLoading(!loading);
        }}
      >
        Toggle Loading
      </button>

      <CounterDisplay />
      <CounterAction />
    </div>
  );
};

export default App;
