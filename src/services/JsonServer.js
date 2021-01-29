export default class JsonServer {

    serverURL = 'http://localhost:3001/';

        //Return Promise with all data
        get = (path) => {
            const url = this.serverURL + path;
            return fetch(url)
                    .then(response => response.json())
                        .catch(err => console.error(`Fail to GET ${path.toUpperCase()} from Json-Server `, err))
        }


    //obj is a single object like { ticked: false, name: 'wash dishes' }
    //Return Promise with res.ok
    post = (item, path) => {
        const url = this.serverURL + path;
        // const url = 'http://localhost:3001/payments'
        const options = {
            'method': 'post',
            'headers': { 'content-type': 'application/json' },
            'body': JSON.stringify(item)
        }
        // console.log('Options: ',options)
        return fetch(url, options)
                .then(res => res.ok)
                    .catch(err => console.error(`Fail to POST ${path.toUpperCase()} to Json-Server `, err))
    }

        //Update DB and Return Promise with res.ok
        put = (item, path) => {
            const url = `${this.serverURL + path + '/' + item.id}`
            //console.log('URL ',url)
            const options = {
                'method': 'put',
                'headers': { 'content-type': 'application/json' },
                'body': JSON.stringify(item)
            }
            return fetch(url, options)
                    .then(res => res.ok)
                        .catch(err => console.error(`Fail to PUT ${path.toUpperCase()} to Json-Server `, err))
        }


    //Delet data from server and Return Promise with res.ok
    delete = (path, id) => {
        const url = `${this.serverURL + path + '/' + id}`
        const options = {
            'method': 'delete',
            'headers': { 'content-type': 'application/json' },
            'body': ''
        }
        return fetch(url, options)
                .then(res => res.ok)
                    .catch(err => console.error(`Fail to DELETE ${path.toUpperCase()} from Json-Server `, err))
    }

    

    
}