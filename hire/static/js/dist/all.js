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
class Settings {
    constructor(root) {
        this.root = root;
        this.username = "";
        this.photo = "";
        this.phone = "";

        this.$settings = $(`
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">


            <title>汽车租赁系统</title>
        </head>

        <body>
        <section>
            <div class="container">
                <div id="login_form" class="form">
                    <h2>登录</h2>
                    <form>
                        <div class="inputBox">
                            <input id = "login_name" type = "text" placeholder = "账号">
                        </div>

                        <div class="inputBox">
                            <input id = "login_psw" type = "password" placeholder = "密码">
                        </div>

                        <div id="login_error" class="error_message">
                        </div>
                        
                        <div class="inputBox">
                            <input id = "login_sub" type = "button" value = "登录">
                        </div>

                        <p class="tip">忘记密码?<a id="login_forget" href="#">
                                点击这里
                            </a></p>
                        <p class="tip">没有账户?<a id="login_register" href="#">
                                立即注册
                            </a></p>
                    </form>
                </div>

                <div id="register_form" class="form">
                    <h2>注册</h2>
                    <form>
                        <div class="inputBox">
                            <input id = "register_name" type = "text" placeholder = "账号">
                        </div>

                        <div class="inputBox">
                            <input id = "register_psw" type = "password" placeholder = "密码">
                        </div>

                        <div class="inputBox">
                            <input id = "register_psw2" type = "password" placeholder = "确认密码">
                        </div>

                        <div id="register_error" class="error_message">
                        </div>

                        <div id="register_success" class="success_message">
                        </div>
                        
                        <div class="inputBox">
                            <input id = "register_sub" type = "button" value = "注册">
                        </div>

                        <p class="tip">已有账号?<a id="register_login" href="#">
                                点击这里
                            </a></p>
                    </form>
                </div>

                <div id="forget_form" class="form">
                    <h2>修改密码</h2>
                    <form>
                        <div class="inputBox">
                            <input id = "forget_name" type = "text" placeholder = "账号">
                        </div>

                        <div class="inputBox">
                            <input id = "forget_psw" type = "password" placeholder = "新密码">
                        </div>

                        <div class="inputBox">
                            <input id = "forget_psw2" type = "password" placeholder = "确认密码">
                        </div>

                        <div id="forget_error" class="error_message">
                        </div>

                        <div id="forget_success" class="success_message">
                        </div>
                        
                        <div class="inputBox">
                            <input id = "forget_sub" type = "button" value = "修改">
                        </div>

                        <p class="tip">返回登录?<a id="forget_login" href="#">
                                点击这里
                            </a></p>
                    </form>
                </div>
            </div>
            
        </section>
        </body>
`);
        this.$login = this.$settings.find('div[id="login_form"]');
        this.$login_username = this.$login.find('input[id="login_name"]');
        this.$login_password = this.$login.find('input[id="login_psw"]');
        this.$login_submit = this.$login.find('input[id="login_sub"]');
        this.$login_error = this.$login.find('div[id="login_error"]');
        this.$login_register = this.$login.find('a[id="login_register"]');
        this.$login_forget = this.$login.find('a[id="login_forget"]');
        this.$login.hide();

        this.$register = this.$settings.find('div[id="register_form"]');
        this.$register_username = this.$register.find('input[id="register_name"]');
        this.$register_password = this.$register.find('input[id="register_psw"]');
        this.$register_password2 = this.$register.find('input[id="register_psw2"]');
        this.$register_submit = this.$register.find('input[id="register_sub"]');
        this.$register_error = this.$register.find('div[id="register_error"]');
        this.$register_success = this.$register.find('div[id="register_success"]');
        this.$register_login = this.$register.find('a[id="register_login"]');
        this.$register.hide();

        this.$forget = this.$settings.find('div[id="forget_form"]');
        this.$forget_username = this.$forget.find('input[id="forget_name"]');
        this.$forget_password = this.$forget.find('input[id="forget_psw"]');
        this.$forget_password2 = this.$forget.find('input[id="forget_psw2"]');
        this.$forget_submit = this.$forget.find('input[id="forget_sub"]');
        this.$forget_error = this.$forget.find('div[id="forget_error"]');
        this.$forget_success = this.$forget.find('div[id="forget_success"]');
        this.$forget_login = this.$forget.find('a[id="forget_login"]');
        this.$forget.hide();

        this.root.$hire.append(this.$settings);

        this.start();
    }

    start() {
        this.getinfo();
        this.add_event();
    }

    add_event() {
        this.add_event_login();
        this.add_event_register();
        this.add_event_forget();
    }

    add_event_login() {
        let outer = this;
        
        this.$login_submit.click(function() {
            console.log("login");
            outer.login_on_remote();
        });

        this.$login_register.click(function() {
            outer.register();
        });
        this.$login_forget.click(function() {
            outer.forget();
        });
    }

    add_event_register() {
        let outer = this;

        this.$register_login.click(function() {
            outer.login();
        });

        this.$register_submit.click(function() {
            console.log("register");
            outer.register_on_remote();
        });
    }

    add_event_forget() {
        let outer = this;

        this.$forget_submit.click(function() {
            console.log("forget");
            outer.forget_on_remote();
        });

        this.$forget_login.click(function() {
            outer.login();
        });
    }

    login_on_remote() { //在远程服务器上登录
        let outer = this;
        let username = this.$login_username.val();
        let password = this.$login_password.val();
        this.$login_error.empty();

        $.ajax({
            url: "http://47.122.4.91:8000/settings/login/",
            type: "GET",
            data: {
                username: username,
                password: password,
            }, 
            success: function(resp) {
                console.log(resp);
                if (resp.result === "success") {
                    location.reload();
                } else {
                    outer.$login_error.html(resp.result);
                }   
            }
        });
    }

    register_on_remote() { //在远程服务器上注册
        let outer = this;
        let username = this.$register_username.val();
        let password = this.$register_password.val();
        let password2 = this.$register_password2.val();
        this.$register_error.empty();
        
        $.ajax({
            url: "http://47.122.4.91:8000/settings/register/",
            type: "GET",
            data: {
                username: username,
                password: password,
                password2: password2,
            },
            success: function(resp) {
                if (resp.result === "success") {
                    outer.$register_success.html("注册成功!3秒后自动登录");
                    setTimeout(function() {
                        location.reload();
                    }, 3000);                 
                } else {
                    outer.$register_error.html(resp.result);
                }
            }
        });
    }

    forget_on_remote() { //在远程服务器上修改密码
        let outer = this;
        let username = this.$forget_username.val();
        let password = this.$forget_password.val();
        let password2 = this.$forget_password2.val();
        this.$forget_error.empty();

        $.ajax({
            url: "http://47.122.4.91:8000/settings/forget",
            type: "GET",
            data: {
                username: username,
                password: password,
                password2: password2,
            },
            success: function(resp) {
                if (resp.result === "success") {
                    outer.$forget_success.html("修改成功!请返回登录");
                } else {
                    outer.$forget_error.html(resp.result);
                }
            }
        });
    }

    logout_on_remote() { //在远程服务器上登出
        $.ajax({
            url: "http://47.122.4.91:8000/settings/logout/",
            type: "GET",
            success: function(resp) {
                if (resp.result === "success") {
                    location.reload();
                }
            }
        })
    }

    register() {
        this.$register.show();
        this.$login.hide();
        this.$forget.hide();
    }

    login() {
        this.$login.show();
        this.$register.hide();
        this.$forget.hide();
    }

    forget() {
        this.$forget.show();
        this.$login.hide();
        this.$register.hide();
    }

    getinfo() {
        let outer = this;
        $.ajax({
            url: '/settings/getinfo/',
            type: 'GET',
            success: function(resp) {
                if (resp.result === "success") {
                    outer.username = resp.username;
                    outer.phone = resp.phone;
                    outer.hide();
                    outer.root.home.show();
                } else {
                    outer.login();
                }
            }
        });
    }

    hide() {
        this.$settings.hide();
    }

    show() {
        this.$settings.show();
    }
}class Hire {
    constructor(id) {
        this.id = id;
        this.$hire = $('#' + id);

        this.settings = new Settings(this);
        this.home = new HireHome(this);

        this.start();
    }

    start() {
    }
}


