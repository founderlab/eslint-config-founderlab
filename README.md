# FounderLab JavaScript style guide

### Use the [Airbnb Style Guide](https://github.com/airbnb/javascript) without semicolons

Remember to not start lines with a '(' or '[' (or '/' or any operator really).

```javascript
// bad
function nameMe() {
  const name = 'Skywalker';
  return name;
}

// good
function nameMe() {
  const name = 'Skywalker'
  return name
}

// bad (the leading '[' will be considered part of the last line)
[1,2,3].forEach((num) => {
  console.log(num)
})

// bad (the leading '(' will be considered part of the last line)
(() => {
  const name = 'Skywalker'
  return name
})()

// bad (ugly and looks silly)
;(() => {
  const name = 'Skywalker'
  return name
})()

// good (just name the function and call it)
function nameMe() {
  const name = 'Skywalker'
  return name
}
nameMe()
```
