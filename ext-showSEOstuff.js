var ret = [];
ret.push({name: "language", val: $('html').attr("lang")});
ret.push({name: "title", val: $('head title').text()});
ret.push({name: "description", val: $('head meta[name="description"]').attr('content')});
ret.push({name: "viewport", val: $('head meta[name="viewport"]').attr('content')});
// Opengraph i.e. Facebook
ret.push({name: "og:title", val: $('head meta[property="og:title"]').attr('content')});
ret.push({name: "og:description", val: $('head meta[property="og:description"]').attr('content')});
ret.push({name: "og:image", val: $('head meta[property="og:image"]').attr('content')});
ret.push({name: "og:site_name", val: $('head meta[property="og:site_name"]').attr('content')});
ret.push({name: "og:type", val: $('head meta[property="og:type"]').attr('content')});
// twitter
ret.push({name: "twitter:title", val: $('head meta[name="twitter:title"]').attr('content')});
ret.push({name: "twitter:description", val: $('head meta[name="twitter:description"]').attr('content')});
ret.push({name: "twitter:card", val: $('head meta[name="twitter:card"]').attr('content')});
ret.push({name: "twitter:site", val: $('head meta[name="twitter:site"]').attr('content')});
ret.push({name: "twitter:creator", val: $('head meta[name="twitter:creator"]').attr('content')});
// schema.org for google
ret.push({name: "itemprop name", val: $('head meta[itemprop="name"]').attr('content')});
ret.push({name: "itemprop description", val: $('head meta[itemprop="description"]').attr('content')});
// content
ret.push({name: "h1", val: $('h1').text()});
ret.push({name: "first image in markup", val: $('img:first').attr('src')});

console.log("SEO?");
console.table(ret);