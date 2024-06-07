#!/usr/bin/env node

if (process.argv.length < 3) {
    console.error('Usage: node script.js <url>');
    process.exit(1);
}

// get the input URL
const url = process.argv[2];

// print the input parameter
console.error(`fetching '${url}'`);

const request = require('request');
const cheerio = require('cheerio');


request(url, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error}`);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(`Response status code: ${response.statusCode}`);
        return;
    }

    // get rid of headers, footers and navigation bars
    const $ = cheerio.load(body);

    $('[class*="header"]').prevAll().remove();
    $('[class*="footer"]').nextAll().remove();
    $('[class*="header"]').remove();
    $('[class*="footer"]').remove();
    $('header').prevAll().remove();
    $('footer').nextAll().remove();
    $('head').remove()
    $('header').remove()
    $('footer').remove()
    $('nav').remove()
    $('script').remove()
    $('noscript').remove()
    $('title').remove()
    $('form').remove()
    $('button').remove()
    $('input').remove()
    $('style').remove()
    $('iframe').remove()
    $('img').remove()

    // use turndown to convert to markdown
    var TurndownService = require('turndown')
    var turndownService = new TurndownService()
    var markdown = turndownService.turndown($.html())
    console.log(markdown)
});
