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

                        <div class="user_info_dropdown">
                            <button class="user_info_dropdown_button">
                                <img class="user_avatar" src="https://cdn.acwing.com/media/user/profile/photo/256625_sm_a8f857996e.jpg">
                            </button>
                            <ul class="user_info_dropdown_menu">
                                <li class="logout">
                                    <button>退出登录</button>
                                </li>
                            </ul>
                        </div>

                        <div class="header_contact">
                            <div class="telephone">
                                400-616-6666
                            </div>
                        </div>
                            
                        </div>
                    </div>
                </div>

                <div id="main_page" class="content">
                    <a>首页</a>
                </div>

                <div id="hire_detial" class="content">
                    <a>租车详情</a>
                </div>

                <div id="hire_map "class="content">
                    <a>网点查询</a>
                </div>

                <div id="activity" class="content">
                    <a>精彩活动</a>
                </div>

            </div>
        </body>
        `);
        this.$home.hide();
        this.root.$hire.append(this.$home);

        this.$mainpage = this.$home.find('div[id="main_page"]');
        this.$hire_detial = this.$home.find('div[id="hire_detial"]');
        this.$hire_map = this.$home.find('div[id="hire_map"]');
        this.$activity = this.$home.find('div[id="activity"]');

        this.$dropdown_menu = this.$home.find('ul[class="user_info_dropdown_menu"]');
        this.$dropdown_menu.hide();

        this.$dropdown_button = this.$home.find('button[class="user_info_dropdown_button"]');

        this.$logout = this.$home.find('.logout button');
    
        this.start();
    }

    start() {
        this.$hire_detial.hide();
        this.$hire_map.hide();
        this.$activity.hide();
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$logout.on('click', function() {
            outer.root.settings.logout_on_remote();
        });

        this.add_event_show_dropdown_menu();
    }

    add_event_logout() {
        let outer = this;
        this.$logout.on('click', function() {
            outer.root.settings.logout_on_remote();
        });
    }

    add_event_show_dropdown_menu() {
        let outer = this;

        this.$dropdown_button.on('click', function() {
            if (outer.$dropdown_menu.is(':hidden')) {
                outer.$dropdown_menu.show();
            } else {
                outer.$dropdown_menu.hide();
            }
        });
    }

    show() {
        this.$home.show();
    }
    
    hide() {
        this.$home.hide();
    }
}
