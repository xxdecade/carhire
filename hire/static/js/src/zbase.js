class Hire {
    constructor(id) {
        this.id = id;
        this.$hire = $('#' + id);

        this.settings = new Settings(this);
        this.home = new HireHome(this);
        this.adminhome = new AdminHome(this);

        this.start();
    }

    start() {
    }
}


