const url = require('url');

const myUrl = new URL('http://nuolu.com/hello.html?id=100&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());

console.log(myUrl.host);
console.log(myUrl.hostname);

console.log(myUrl.pathname);
console.log(myUrl.search);

console.log(myUrl.searchParams);
console.log(myUrl.searchParams.append('abc', '123'));
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))