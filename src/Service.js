class Service{
    static getQOD(){
        return new Promise((resolve , reject)=>{


            fetch(" https://quotes.rest/qod").then((res)=>res.json()).then(res=>{
                console.log(res);
                    resolve({title : res.contents.quotes[0].title , body :res.contents.quotes[0].quote })
            }).catch(e=>{
                reject(e)
            })
        })
    }
}

export default Service;
