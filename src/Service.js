import moment from "moment";
class Service{
    static getQOD(){
        return new Promise((resolve , reject)=>{


            fetch(" https://quotes.rest/qod").then((res)=>res.json()).then(res=>{
                   resolve({title : res.contents.quotes[0].title , body :res.contents.quotes[0].quote })
            }).catch(e=>{
                reject(e)
            })
        })
    }

    static getExperience(){

        // let startDate = moment('15-03-2019', 'dd-mm-yyyy');
        // let endDate = moment(new Date());
        // let years = endDate.diff(startDate , "years");
        // startDate.add(years , 'years');
        //
        // let months = endDate.diff(startDate , "months");
        // startDate.add(months , 'months');
        // let days = endDate.diff(startDate , "days");
        // console.log(`I have ${years} years, ${months} months and ${days} days of experience!! `)

    }
}

export default Service;
