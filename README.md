# react-global [![CI](https://github.com/imod-ch/react-global/actions/workflows/ci.yml/badge.svg)](https://github.com/imod-ch/react-global/actions/workflows/ci.yml) [![npm version](https://badge.fury.io/js/@imod-ch%2Freact-global.svg)](https://badge.fury.io/js/@imod-ch%2Freact-global)

React library to access global variables using a hook.

## Installation

```bash
npm install @imod-ch/react-global --save

# or

yarn add @imod-ch/react-global
```

## Usage

```tsx
import { FC } from 'react';
import { useGlobal } from '@imod-ch/react-global';

const SampleComponent: FC = () => {
  const globalVariable = useGlobal<string>('globalVariable');

  return <p>{globalVariable}</p>;
};
```

## License

MIT

## Contributors

<a href="https://github.com/imod-ch/react-global/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=imod-ch/react-global" />
</a>
