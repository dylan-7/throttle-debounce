# throttle-debounce

Throttle and debounce for typescript. Support ES Modules and CommonJS.

## Install

```
npm i @bearcookie/throttle-debounce
or
yarn add @bearcookie/throttle-debounce
```

## Usage

### Throttle

```javascript
import { throttle } from "@bearcookie/throttle-debounce";

const foo = throttle(() => {
    // do something
}, 1000);
```

### Debounce

```javascript
import { debounce } from "@bearcookie/throttle-debounce";

const foo = debounce(() => {
    // do something
}, 1000);
```

### Cancel

```javascript
const throttleFunc = throttle(() => {
    // do something
}, 1000);
throttleFunc.cancel();

const debounceFunc = debounce(() => {
    // do something
}, 1000);
debounceFunc.cancel();
```
