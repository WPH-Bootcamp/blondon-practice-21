import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type User = {
  name: string;
};

type Store = {
  user: User | null;
  theme: 'light' | 'dark';
  loading: boolean;

  login: (user: User) => void;
  logout: () => void;
  toggleTheme: () => void;
  setLoading: (value: boolean) => void;
};

export const useAppStore = create<Store>()(
  process.env.NODE_ENV === 'development'
    ? devtools((set) => ({
        user: null,
        theme: 'light',
        loading: false,

        login: (user: User) => set({ user }),
        logout: () => set({ user: null }),
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),
        setLoading: (value) => set({ loading: value }),
      }))
    : (set) => ({
        user: null,
        theme: 'light',
        loading: false,

        login: (user: User) => set({ user }),
        logout: () => set({ user: null }),
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),
        setLoading: (value) => set({ loading: value }),
      })
);
