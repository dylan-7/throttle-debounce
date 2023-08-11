export function throttle(
  // tslint:disable-next-line:no-empty
  callback = () => {},
  delay = 1e3,
  leading = false,
): (callback: () => void, delay: number, leading?: false) => any {
  let timer: number;
  let isCancel: boolean;
  let lastTime = leading ? 0 : Date.now();

  const clear = () => {
    if (timer) {
      window.clearTimeout(timer);
      timer = -1;
    }
  };

  const cancel = () => {
    clear();
    isCancel = true;
  };

  function fn(...args) {
    if (isCancel) return;

    const self = this;

    const cb = () => {
      lastTime = Date.now();
      callback.apply(self, args);
    };

    if (leading) {
      clear();
      if (!timer) timer = window.setTimeout(cb, delay);
    }

    const runTime = Date.now() - lastTime;
    if (runTime > delay) cb();
  }

  fn.cancel = cancel;
  return fn;
}
