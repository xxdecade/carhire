class HireHome {
    constructor(root) {
        this.root = root;
        this.$home = $(`
        <body>
            <div class="hire_home">
                <div class="header">
                    <div class="header_main">
                        
                        <a class="logo">
                        </a>

                        <ul class="menu">
                            <li class="menu_item">
                                <a>首页</a>
                            </li>
                            
                            <li class="menu_item">
                                <a>租车详情</a>
                            </li>
                            
                            <li class="menu_item">
                                <a>网点查询</a>
                            </li>

                            <li class="menu_item">
                                <a>精彩活动</a>
                            </li>
                        </ul>

                        <div class="header_contact">
                            <div class="telephone">
                                400-616-6666
                            </div>
                        </div>

                        <div class="logout">
                            <button>退出登录</button>
                        </div>
                    </div>
                </div>

                <div id="main_page" class="content">
                </div>

                <div id = "hire_detial" class="content">
                </div>

                <div id = "hire_map "class="content">
                </div>

            </div>
        </body>
        `);
        this.$home.hide();
        this.root.$hire.append(this.$home);

        this.$mainpage = this.$home.find('div[id="main_page"]');
        this.$hire_detial = this.$home.find('div[id="hire_detial"]');
        this.$hire_map = this.$home.find('div[id="hire_map"]');

        this.$logout = this.$home.find('.logout button');
    
        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
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
