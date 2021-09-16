function domainName(url){
    let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0]
    let domain = sourceString.split('.')[0]
    return domain
}

console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))
