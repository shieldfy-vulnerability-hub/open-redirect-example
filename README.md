# Open-redirect-example

## there is 1 vulnerability

1. Open Redirect in `index.vuln.js` line `26`

```js
const Vulnerability1 = (req, res) => {
    let url = encodeURI(req.query.url); //vulnerability
    res.redirect(url);
}
```