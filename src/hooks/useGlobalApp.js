import { useState } from 'react';

const store = {
  state: {},
  setState(name, value) {
    this.state[name] = value;
    this.setters[name].forEach((setter) => setter(this.state[name]));
  },
  setters: {},
};

export default function useGlobalApp(name, initialState) {
  const [state, seState] = useState(() => {
    store.state[name] = initialState;
    return store.state[name];
  });

  store.setters[name] = store.setters[name] || [];

  if (!store.setters[name].includes(seState)) {
    store.setters[name].push(seState);
  }

  return [
    state,
    (value) => store.setState(name, value),
  ];
}
