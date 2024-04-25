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
                                <button id="hire_mainpage_button">首页</button>
                            </li>
                            
                            <li class="menu_item">
                                <button id="hire_detial_button">租车详情</button>
                            </li>
                            
                            <li class="menu_item">
                                <button id="hire_map_button">网点查询</button>
                            </li>

                            <li class="menu_item">
                                <button id="hire_activity_button">精彩活动</button>
                            </li>
                        </ul>

                        <div class="user_info_dropdown">
                            <button class="user_info_dropdown_button">
                                <img class="user_avatar" src="static/image/home/xxg_avatar.jpg">
                            </button>
                        </div>
                            <ul class="user_info_dropdown_menu">
                                <li id="user_info" class="dropdown_menu_item">
                                    <button>个人信息</button>
                                </li>

                                <li id="user_order" class="dropdown_menu_item">
                                    <button>我的订单</button>
                                </li>

                                <li id="logout" class="logout dropdown_menu_item">
                                    <button>退出登录</button>
                                </li>
                            </ul>

                        <div class="header_contact">
                            <div class="telephone">
                                18888888888
                            </div>
                        </div>
                            
                    </div>
                </div>

                <div id="hire_mainpage" class="content">
                    <div class="banner">
                        <a>广告</a>

                        <div class="car_select">
                            <a>选车框</a>
                        </div>
                    <div>
                    <div class="car_recommend">
                        <div class="car_recommend_info">
                            <a>推荐车辆</a>
                        </div>
                    </div>
                </div>

                <div id="hire_detial" class="content">
                    <a>租车详情</a>
                </div>

                <div id="hire_map" class="content">
                    <a>网点查询</a>
                </div>

                <div id="hire_activity" class="content">
                    <a>精彩活动</a>
                </div>

            </div>
        </body>
        `);
        this.$home.hide();
        this.root.$hire.append(this.$home);

        this.$hire_mainpage = this.$home.find('div[id="hire_mainpage"]');
        this.$hire_mainpage_button = this.$home.find('button[id="hire_mainpage_button"]');
        this.$hire_mainpage.show();

        this.$hire_detial = this.$home.find('div[id="hire_detial"]');
        this.$hire_detial_button = this.$home.find('button[id="hire_detial_button"]');
        this.$hire_detial.hide();

        this.$hire_map = this.$home.find('div[id="hire_map"]');
        this.$hire_map_button = this.$home.find('button[id="hire_map_button"]');
        this.$hire_map.hide();

        this.$hire_activity = this.$home.find('div[id="hire_activity"]');
        this.$hire_activity_button = this.$home.find('button[id="hire_activity_button"]');
        this.$hire_activity.hide();

        this.$dropdown_menu = this.$home.find('ul[class="user_info_dropdown_menu"]');
        this.$dropdown_menu.hide();

        this.$dropdown_button = this.$home.find('button[class="user_info_dropdown_button"]');

        this.$logout = this.$home.find('.logout button');
    
        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        this.add_event_logout();
        this.add_event_show_dropdown_menu();
        this.add_event_click_mainpage();
        this.add_event_click_detial();
        this.add_event_click_map();
        this.add_event_click_activity();
    }

    add_event_click_mainpage() {
        let outer = this;

        this.$hire_mainpage_button.on('click', function() {
            outer.show_mainpage();
        });
    }

    add_event_click_detial() {
        let outer = this;

        this.$hire_detial_button.on('click', function() {
            outer.show_detial();
        });
    }

    add_event_click_map() {
        let outer = this;

        this.$hire_map_button.on('click', function() {
            outer.show_map();
        });
    }

    add_event_click_activity() {
        let outer = this;

        this.$hire_activity_button.on('click', function() {
            outer.show_activity();
        });
    }

    show_mainpage() {
        this.$hire_mainpage.show();
        this.$hire_detial.hide();
        this.$hire_map.hide();
        this.$hire_activity.hide();
    }

    show_detial() {
        this.$hire_detial.show();
        this.$hire_mainpage.hide();
        this.$hire_map.hide();
        this.$hire_activity.hide();
    }

    show_map() {
        this.$hire_map.show();
        this.$hire_mainpage.hide();
        this.$hire_detial.hide();
        this.$hire_activity.hide();
    }

    show_activity() {
        this.$hire_activity.show();
        this.$hire_mainpage.hide();
        this.$hire_detial.hide();
        this.$hire_map.hide();
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
