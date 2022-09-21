Exmaple repo, showing a tree-shaking issue of internal files.

- `./api.js` creates two api interfaces, one user server side `serverApi` and another one for client side `clientApi`
- server side api interface should not be exposed in the client side bundle
- looking at `./.next/static/chunks/pages/index-f70e66cea4cef052.js`, both `serverApi` and `clientApi` are bundled in the client side code

I've noticed this issue when using `axios`, but this example replicates the issue without.

p.s. The `./api.js` file has some commented out code that helped analyzing the issue.


#### Try out yourself
- Do changes (or not)
- Run `npm run build`
- Search for your "server-needle" in the `./.next/static/chuunks/` directory. (E.g. in my case i searched for the `I should only be available server side.` text)