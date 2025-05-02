type Callback = (action: any) => void;

class Dispatcher {
  private callbacks: Callback[] = [];

  register(callback: Callback) {
    this.callbacks.push(callback);
  }

  dispatch(action: any) {
    for (const cb of this.callbacks) {
      cb(action);
    }
  }
}

export const AppDispatcher = new Dispatcher();
