const {normalizeURL, getUrl} = require ('./crawl.js')
const {test, expect} = require ('@jest/globals') //unit test 

test(`normalizeURL strip protocol`, ()=>{ //test function from jest
    const input = 'https://blog.boot.dev/path' //input
    const actual = normalizeURL(input) //output from function given input
    const expected = 'blog.boot.dev/path' //what we expect
    expect(actual).toEqual(expected) //test to see if they are the same
 })

 
test(`normalizeURL trailing slash`, ()=>{ //test function from jest
    const input = 'https://blog.boot.dev/path/' //input
    const actual = normalizeURL(input) //output from function given input
    const expected = 'blog.boot.dev/path' //what we expect
    expect(actual).toEqual(expected) //test to see if they are the same
 })

 test(`normalizeURL capitals`, ()=>{ //test function from jest
    const input = 'https://Blog.boot.dev/path/' //input
    const actual = normalizeURL(input) //output from function given input
    const expected = 'blog.boot.dev/path' //what we expect
    expect(actual).toEqual(expected) //test to see if they are the same
 })

 test(`normalizeURL http`, ()=>{ //test function from jest
    const input = 'http://Blog.boot.dev/path/' //input
    const actual = normalizeURL(input) //output from function given input
    const expected = 'blog.boot.dev/path' //what we expect
    expect(actual).toEqual(expected) //test to see if they are the same
 })

 test(`getUrlsFromHTML absolute`, () =>{
    const input = `
    <html>
        <body>
            <a href ="https://blog.boot.dev/">
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const baseURL = "https://blog.boot.dev"
    const actual = getUrl(input,baseURL) //output from function given input
    console.log(actual)
    const expected = ["https://blog.boot.dev/"] //what we expect
    expect(actual).toEqual(expected) //test to see if they are the same

 })

 test(`getUrlsFromHTML relative`, () =>{
    const input = `
    <html>
        <body>
            <a href ="/path/">
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const baseURL = "https://blog.boot.dev"
    const actual = getUrl(input,baseURL) //output from function given input
    console.log(actual)
    const expected = ["https://blog.boot.dev/path/"] //what we expect
    expect(actual).toEqual(expected) //test to see if they are the same

 })

 test(`getUrlsFromHTML relative and abso`, () =>{
    const input = `
    <html>
        <body>
            <a href ="/path1/">
                Boot.dev Blog
            </a>
            <a href ="https://blog.boot.dev/path2/">
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const baseURL = "https://blog.boot.dev"
    const actual = getUrl(input,baseURL) //output from function given input
    console.log(actual)
    const expected = ["https://blog.boot.dev/path1/","https://blog.boot.dev/path2/"] //what we expect
    expect(actual).toEqual(expected) //test to see if they are the same

 })

 test(`getUrlsFromHTML invalid`, () =>{
    const input = `
    <html>
        <body>
            <a href ="invalid">
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const baseURL = "https://blog.boot.dev"
    const actual = getUrl(input,baseURL) //output from function given input
    console.log(actual)
    const expected = [] //what we expect
    expect(actual).toEqual(expected) //test to see if they are the same

 })