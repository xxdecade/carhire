class AdminHome {
    constructor(root) {
        this.root = root;

        this.$adminhome = $(`
        <body>
            <button id="logout_admin_button"> 退出登录 </button>
        </body>
`); 
        this.$adminhome.hide();
        this.root.$hire.append(this.$adminhome);

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        this.add_event_logout();
    }

    add_event_logout() {
        let outer = this;
        
        $(document).on('click', '#logout_admin_button', function() {
            outer.root.settings.logout_on_remote();
        });
    }

    show() {
        this.$adminhome.show();
    }

    hide() {
        this.$adminhome.hide();
    }

}