class HireHome {
    constructor(root) {
        this.root = root;
        this.$home = $(`
            <div class="hire_home">
                <div class="hire_home_title">
                    <h1>Hire</h1>
                </div>
                <div class="logout">
                    <button>logout</button>
                </div>
            </div>
`);
        this.$home.hide();
        this.root.$hire.append(this.$home);

        this.$logout = this.$home.find('.logout button');
        
        this.start();
    }

    start() {
        this.add_listenging_events();
    }

    add_listenging_events() {
        let outer = this;
        this.$logout.on('click', function() {
            outer.root.settings.logout_on_remote();
        });
    }

    show() {
        this.$home.show();
    }
    
    hide() {
        this.$home.hide();
    }
}