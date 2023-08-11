export function debounce(
  // tslint:disable-next-line:no-empty
  callback = () => {},
  delay = 1e3,
  leading = false,
): (callback: () => void, delay: number, leading: boolean) => any {
  let timer: number;
  let isCancel: boolean;

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
    const self = this;

    const cb = () => {
      callback.apply(self, args);
    };

    if (leading) {
      cb();
    }

    if (isCancel) {
      cb();
      isCancel = false;
      return;
    }

    clear();
    if (!timer) {
      timer = window.setTimeout(cb, delay);
    }
  }

  fn.cancel = cancel;
  return fn;
}
