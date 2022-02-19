import axios from 'axios'
import fs from 'fs'
class FetchRequest {
    constructor(
         private _url: string,
    ){}
    get GetUrl() { return this._url}
    set url(value:string){
        this._url = value
    }
    public getBody=()=>{
        axios.get(this.GetUrl).then((response)=>{
            console.log("body")
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }
    public getStatus=()=>{
        axios.get(this.GetUrl).then((response)=>{
            console.log("status")
            console.log(response.status)
        }).catch((err)=>{
            console.log(err)
        })
    }
    public getLength=()=>{
        axios.get(this.GetUrl).then((response)=>{
            console.log("lenght")
            console.log(response.headers['content-length'])
        }).catch((err)=>{
            console.log(err)
        })
    }
    public getServer=()=>{
        axios.get(this.GetUrl).then((response)=>{
            console.log("server")
            console.log(response.headers.server)
        }).catch((err)=>{
            console.log(err)
        })
    }
    public getUrl=()=>{
        axios.get(this.GetUrl).then((response)=>{
            console.log("url")
            const linkExp = /<a[^>]*href=["']([^"']*)["']/g
            const doc = response.data.toString()
            const urls = doc.match(linkExp)
            console.log(urls)
        }).catch((err)=>{
            console.log(err)
        })
    }
    public getData=()=>{
        axios.get(this.GetUrl, {responseType: "stream"}).then((response)=>{
            response.data.pipe(fs.createWriteStream(`./download/htmlDownload${Math.random() * 10}.html`))
        }).catch((err)=>{
            console.log(err)
        })
    }
    public DownloadImg=(url: string, format: string)=>{
        axios.get(url, {responseType: 'stream'}).then((response)=>{
            response.data.pipe(fs.createWriteStream(`./download/imageDownload${Math.random() * 10}.${format}`))
        }).catch((err)=>{
            console.log(err)
        })
    }

}

const fetch =new FetchRequest('https://www.ifpi.edu.br/')

fetch.getData()
fetch.getStatus()
fetch.getBody() 
fetch.getUrl()
fetch.getServer()
fetch.DownloadImg('https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80', "png") 