class Authorizator {
    login ='';
    email ='';
    password ='';
    link ='';

    constructor(login, email, password, link) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.link = link;
    }

    async doRequest(action) {
        let jsonString = this._formJsonString(action);
        return await this._doPost(jsonString, this.link);
    }

    _formJsonString(action) {
        let jsonObject = {
            action: action,
            login: this.login,
            email: this.email,
            password: this.password
        }
        return JSON.stringify(jsonObject);
    }

    _doPost(jsonString, link) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', link);
            request.send(jsonString);

            request.onload = function() {
                if(request.status == 200) {
                    let response = JSON.parse(request.response);
                    resolve({status: response.status});
                }
                else {
                    reject({status: request.status});
                }
            };

            request.onerror = function() {
                reject({status: 'server error'});
            };
        });
    }
}