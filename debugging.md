## How?

Toggle the auto-attach flag in VS code command pallette and then run:

```javascript
node --inspect server.js
```

or run the following command

```
node server.js
```

Now, attach the VS code node debugger to a node.js process from the command pallette.

## Why?

VS code provides a debugger client and in each of the above cases, we tell VS code how to find the node.js process.
