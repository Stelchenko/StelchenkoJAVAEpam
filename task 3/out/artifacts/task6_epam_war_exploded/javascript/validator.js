class Validator {
    EMAIL = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    PASSWORD = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,15}/g;
    LOGIN = /[0-9a-zA-Z]{6,12}/;

    validate(line, type) {
        switch(type) {
            case 'login':
                if (!line.match(this.LOGIN)) {
                    return false;
                }
                return true;
            case 'email':
                if (!line.match(this.EMAIL)) {
                    return false;
                }
                return true;
            case 'password':
                if (!line.match(this.PASSWORD)) {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
}
