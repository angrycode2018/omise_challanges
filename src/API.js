export default class API {

    serverURL = 'http://localhost:3001/';

        //Return Promise with all data
        get = (path) => {
            const url = this.serverURL + path;
            return fetch(url)
                    .then(response => response.json())
                        .catch(err => console.log(err))
        }


    //obj is a single object like { ticked: false, name: 'wash dishes' }
    //Return Promise with res.ok
    post = (obj, path) => {
        const url = this.serverURL + path;
        const options = {
            'method': 'post',
            'headers': { 'content-type': 'application/json' },
            'body': JSON.stringify(obj)
        }
        return fetch(url, options)
                .then(res => res.ok)
                    .catch(err => console.log('Post Error: ', err))
    }

        //Update DB and Return Promise with res.ok
        put = (obj, path) => {
            const url = `${this.serverURL + path + '/' + obj.id}`
            //console.log('URL ',url)
            const options = {
                'method': 'put',
                'headers': { 'content-type': 'application/json' },
                'body': JSON.stringify(obj)
            }
            return fetch(url, options)
                    .then(res => res.ok)
                        .catch(err => console.log('UpdateError:', err))
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
                    .catch(err => console.log('ErrDelete:', err))
    }

    

    
}