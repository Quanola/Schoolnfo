const{JSDOM} = require (`jsdom`)

function getUrl (htmlBody,BaseUrl){ // getting branch URL from HTML site
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll(`a`) //gets all the a tags withing the html
    for (const linkElement of linkElements){ //loops through links elements
        
    
        if(linkElement.href.slice(0,1) === `/`){//check if relative URL
            console.log(linkElement.href.slice(0,1) === `/`)

            try{
                const urlObj = new URL(`${BaseUrl}${linkElement.href}`)
                console.log(urlObj.href)
                urls.push(urlObj.href)

            }catch(err){
                console.log(`error with relative url`)
            }

            console.log(linkElement.href)


        }  else{ //absolute
            
             try{
                const urlObj = new URL(`${linkElement}`)
                urls.push(urlObj.href)
            }catch(err){
                console.log(`error with relative url`)
            }
     
        }

    }
    return urls
}


function normalizeURL (urlString){ //turns a url into a common default format

    const urlObj = new URL(urlString) // constructor for urls breaking down the url string into it's parts like hostname pathname and search
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if(hostPath.length > 0 && hostPath.slice(-1) === "/"){
        return hostPath.slice(0,-1)
    }
    return hostPath
}

module.exports = { normalizeURL,getUrl };