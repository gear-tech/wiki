---
sidebar_position: 4
sidebar_label: Upload Program
---

# Upload Program

A smart contract compiled to Wasm can be uploaded as a program to the Gear network. During uploading it is initialized in the network to be able to send and receive messages with other actors in the network (programs and users).

```javascript
const code = fs.readFileSync('path/to/program.wasm');

const program = {
  code,
  gasLimit: 1000000,
  value: 1000,
  initPayload: somePayload,
};

try {
  const { programId, salt, submitted } = await gearApi.program.submit(uploadProgram, meta);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

try {
  await gearApi.program.signAndSend(keyring, (event) => {
    console.log(event.toHuman());
  });
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
```

:::note

For the calculation of the required gas for `init` message processing should use `api.program.calculateGas.init()` method.

[more info](/api/calculate-gas)
:::