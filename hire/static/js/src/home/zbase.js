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

                        <div class="userinfo_dropdown">
                            <button class="userinfo_dropdown_button">
                                <img class="user_avatar" src="static/image/home/xxg_avatar.jpg">
                            </button>
                        </div>

                        <ul class="userinfo_dropdown_menu">
                            <li class="dropdown_menu_item">
                                <button id="userinfo_button">个人信息</button>
                            </li>

                            <li class="dropdown_menu_item">
                                <button id="userorder_button">我的订单</button>
                            </li>

                            <li class="logout dropdown_menu_item">
                                <button id="logout_button">退出登录</button>
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
                    </div>
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

                <div id="userinfo_page" class="content">
                    <div class="main_content">
                        <div class="userinfo_preview">
                            avatar
                        </div>

                        <ul id="userinfo_form" class="userinfo_form">
                            <li id="user_id" class="userinfo_form_item">
                                <div class="col_1">用户ID</div>
                                <div class="col_2">ID</div>
                            </li>

                            <li id="user_name" class="userinfo_form_item">
                                <div class="col_1">用户账号</div>

                                <div class="col_2">
                                    <div id="user_name_output" class="col_2_form">
                                        <div class="info_output"></div>
                                        <button id="user_name_edit_button">编辑</button>
                                    </div>
                                    <div id="user_name_edit" class="col_2_form">
                                        <input type="text" class="user_name_input"></input>
                                        <div id="user_name_edit_error" class="error_message"></div>
                                        <button id="user_name_edit_submit_button">提交</button>
                                        <button id="user_name_edit_cancal_button">取消</button>
                                    </div>
                                </div>
                            </li>

                            <li id="user_sex" class="userinfo_form_item">
                                <div class="col_1">性别</div>
                            </li>

                            <li id="user_phone" class="userinfo_form_item">
                                <div class="col_1">联系方式</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="userorder_page" class="content">
                    <a>我的订单</a>
                </div>

            </div>
        </body>
        `);
        this.$home.hide();
        this.root.$hire.append(this.$home);

        this.$hire_mainpage = this.$home.find('div[id="hire_mainpage"]');
        this.$hire_mainpage_button = this.$home.find('button[id="hire_mainpage_button"]');
        ///this.$hire_mainpage.hide();


        this.$hire_detial = this.$home.find('div[id="hire_detial"]');
        this.$hire_detial_button = this.$home.find('button[id="hire_detial_button"]');
        this.$hire_detial.hide();

        this.$hire_map = this.$home.find('div[id="hire_map"]');
        this.$hire_map_button = this.$home.find('button[id="hire_map_button"]');
        this.$hire_map.hide();

        this.$hire_activity = this.$home.find('div[id="hire_activity"]');
        this.$hire_activity_button = this.$home.find('button[id="hire_activity_button"]');
        this.$hire_activity.hide();

        this.$userinfo_page = this.$home.find('div[id="userinfo_page"]');
        this.$userinfo_page_button = this.$home.find('button[id="userinfo_button"]');
        this.$userinfo_page.hide();

        this.$userorder_page = this.$home.find('div[id="userorder_page"]');
        this.$userorder_page_button = this.$home.find('button[id="userorder_button"]');
        this.$userorder_page.hide();

        this.$dropdown_menu = this.$home.find('ul[class="userinfo_dropdown_menu"]');
        this.$dropdown_menu.hide();

        this.$dropdown_button = this.$home.find('button[class="userinfo_dropdown_button"]');

        this.$userinfo_name_output = this.$home.find('div[id="user_name_output"]');
        this.$userinfo_name_edit_button = this.$home.find('button[id="user_name_edit_button"]');
        this.$userinfo_name_edit = this.$home.find('div[id="user_name_edit"]');
        this.$userinfo_name_edit_submit_button = this.$home.find('button[id="user_name_edit_submit_button"]');
        this.$userinfo_name_edit_cancal_button = this.$home.find('button[id="user_name_edit_cancal_button"]');
        this.$userinfo_name_newname = this.$home.find('input[class="user_name_input"]');
        this.$userinfo_name_edit_error = this.$home.find('div[id="user_name_edit_error"]');
        this.$userinfo_name_edit.hide();

        this.$logout = this.$home.find('button[id="logout_button"]');
    
        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        this.add_event_click_mainpage();
        this.add_event_click_detial();
        this.add_event_click_map();
        this.add_event_click_activity();
        this.add_event_click_userinfo();
        this.add_event_click_userorder();
        this.add_event_logout();
        this.add_event_show_dropdown_menu();
        this.add_event_show_userinfo_name_edit();
        this.add_event_show_userinfo_name_output();
        this.show_userinfo_name();
        this.add_event_submit_userinfo_name();
    }

    add_event_click_mainpage() {
        let outer = this;

        this.$hire_mainpage_button.on('click', function() {
            outer.show_mainpage();
            $('.menu_item button').removeClass('current');
            outer.$hire_mainpage_button.addClass('current');
        });
    }

    add_event_click_detial() {
        let outer = this;

        this.$hire_detial_button.on('click', function() {
            outer.show_detial();
            $('.menu_item button').removeClass('current');
            outer.$hire_detial_button.addClass('current');
        });
    }

    add_event_click_map() {
        let outer = this;

        this.$hire_map_button.on('click', function() {
            outer.show_map();
            $('.menu_item button').removeClass('current');
            outer.$hire_map_button.addClass('current');
        });
    }

    add_event_click_activity() {
        let outer = this;

        this.$hire_activity_button.on('click', function() {
            outer.show_activity();
            $('.menu_item button').removeClass('current');
            outer.$hire_activity_button.addClass('current');
        });
    }

    add_event_click_userinfo() {
        let outer = this;

        this.$userinfo_page_button.on('click', function() {
            outer.show_userinfo_page();
            $('.menu_item button').removeClass('current');
            outer.$dropdown_menu.hide();
        });
    }

    add_event_click_userorder() {
        let outer = this;

        this.$userorder_page_button.on('click', function() {
            outer.show_userorder_page();
            $('.menu_item button').removeClass('current');
            outer.$dropdown_menu.hide();
        });
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

    add_event_show_userinfo_name_edit() {
        let outer = this;

        this.$userinfo_name_edit_button.on('click', function() {
            outer.show_userinfo_name_edit();
        });
    }

    add_event_show_userinfo_name_output() {
        let outer = this;

        this.$userinfo_name_edit_cancal_button.on('click', function() {
            outer.show_userinfo_name_output();
        });
    }

    add_event_submit_userinfo_name() {
        let outer = this;

        this.$userinfo_name_edit_submit_button.on('click', function() {
            outer.edit_userinfo_name();
        });
    }

    show_userinfo_name() {
        let outer = this;
        
        $.ajax({
            url: '/home/show_name',
            type: 'GET',
            success: function(resp) {
                outer.$userinfo_name_output.find('.info_output').text(resp.result);
            },
        });
    }

    edit_userinfo_name() {
        let outer = this;
        let newname = this.$userinfo_name_newname.val();
        this.$userinfo_name_edit_error.empty();

        $.ajax({
            url: '/home/edit_name',
            type: 'GET',
            data: {
                newname: newname,
            },
            success: function(resp) {
                console.log(newname, resp);
                if (resp.result == 'success') {
                    outer.show_userinfo_name_output();
                    outer.show_userinfo_name();
                } else {
                    outer.$userinfo_name_edit_error.text(resp.result);
                }
            },
        });
    }

    show_mainpage() {
        this.$hire_mainpage.show();
        this.$hire_detial.hide();
        this.$hire_map.hide();
        this.$hire_activity.hide();
        this.$userinfo_page.hide();
        this.$userorder_page.hide();
    }

    show_detial() {
        this.$hire_detial.show();
        this.$hire_mainpage.hide();
        this.$hire_map.hide();
        this.$hire_activity.hide();
        this.$userinfo_page.hide();
        this.$userorder_page.hide();
    }

    show_map() {
        this.$hire_map.show();
        this.$hire_mainpage.hide();
        this.$hire_detial.hide();
        this.$hire_activity.hide();
        this.$userinfo_page.hide();
        this.$userorder_page.hide();
    }

    show_activity() {
        this.$hire_activity.show();
        this.$hire_mainpage.hide();
        this.$hire_detial.hide();
        this.$hire_map.hide();
        this.$userinfo_page.hide();
        this.$userorder_page.hide();
    }

    show_userinfo_page() {
        this.$userinfo_page.show();
        this.$hire_mainpage.hide();
        this.$hire_detial.hide();
        this.$hire_map.hide();
        this.$hire_activity.hide();
        this.$userorder_page.hide();
    }

    show_userorder_page() {
        this.$userorder_page.show();
        this.$userinfo_page.hide();
        this.$hire_mainpage.hide();
        this.$hire_detial.hide();
        this.$hire_map.hide();
        this.$hire_activity.hide();
    }

    show_userinfo_name_output() {
        this.$userinfo_name_output.show();
        this.$userinfo_name_edit.hide();
    }

    show_userinfo_name_edit() {
        this.$userinfo_name_edit.show();
        this.$userinfo_name_output.hide();
    }

    show() {
        this.$home.show();
    }
    
    hide() {
        this.$home.hide();
    }
}
