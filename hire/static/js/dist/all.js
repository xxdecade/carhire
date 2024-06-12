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
                        <img class="car_img" src="static/image/home/carimg.png">

                        <div class="car_select">
                        </div>
                    </div>
                    <div class="car_recommend">
                        <div class="car_recommend_info">
                            <img class="car_recommed" src="static/image/home/car_recommed.png">
                        </div>
                    </div>
                </div>

                <div id="hire_detial" class="content">
                    <div>
                        <br><br><br>
                        <table id="vehicle_table1" border="1">
                            <tr>
                                <th>所在店铺</th>
                                <th>品牌</th>
                                <th>型号</th>
                                <th>类别</th>
                                <th>租赁价格（元/天）</th>
                                <th>是否在租</th>
                                <th>操作</th>
                            </tr>
                        </table>
                    </div>
                </div>

                <div id="hire_map">
                    <div id="map" style="width: 100%; height: 1000px;"></div>
                </div>

                <div id="hire_activity" class="content">
                    <br><br><br>
                    <a style="margin-top: 50px">暂未推出,敬请期待...</a>
                </div>

                <div id="userinfo_page" class="content">
                    <div class="main_content">
                        <div class="userinfo_preview">
                            
                        </div>

                        <ul id="userinfo_form" class="userinfo_form">
                            <li id="user_id" class="userinfo_form_item">
                            
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
                                        <button id="user_name_edit_cancel_button">取消</button>
                                    </div>
                                </div>
                            </li>

                            <li id="user_sex" class="userinfo_form_item">
                                <div class="col_1">性别</div>
                                <div class="col_2">
                                    <div id="user_sex_output" class="col_2_form">
                                        <div class="info_output"></div>
                                        <button id="user_sex_edit_button">编辑</button>
                                    </div>
                                    <div id="user_sex_edit" class="col_2_form">
                                        <select class="user_sex_input">
                                            <option value="男">男</option>
                                            <option value="女">女</option>
                                            <option value="未知">其他</option>
                                        </select>
                                        <div id="user_sex_edit_error" class="error_message"></div>
                                        <button id="user_sex_edit_submit_button">提交</button>
                                        <button id="user_sex_edit_cancel_button">取消</button>
                                    </div>
                                </div>
                            </li>

                            <li id="user_phone" class="userinfo_form_item">
                                <div class="col_1">联系方式</div>

                                <div class="col_2">
                                    <div id="user_phone_output" class="col_2_form">
                                        <div class="info_output"></div>
                                        <button id="user_phone_edit_button">编辑</button>
                                    </div>
                                    <div id="user_phone_edit" class="col_2_form">
                                        <input type="text" class="user_phone_input"></input>
                                        <div id="user_phone_edit_error" class="error_message"></div>
                                        <button id="user_phone_edit_submit_button">提交</button>
                                        <button id="user_phone_edit_cancel_button">取消</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div id="userorder_page" class="content">
                    <br><br><br>
                    <a>我的订单</a>
                    <table id="user_order_table" border="1">
                        <tr>
                            <th>所在店铺</th>
                            <th>品牌</th>
                            <th>型号</th>
                            <th>类别</th>
                            <th>租用日期</th>
                            <th>租赁价格（元/天）</th>
                            <th>操作</th>
                        </tr>
                    </table>
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
        this.$userinfo_name_edit_cancal_button = this.$home.find('button[id="user_name_edit_cancel_button"]');
        this.$userinfo_name_newname = this.$home.find('input[class="user_name_input"]');
        this.$userinfo_name_edit_error = this.$home.find('div[id="user_name_edit_error"]');
        this.$userinfo_name_edit.hide();

        this.$logout = this.$home.find('button[id="logout_button"]');

        this.$map = this.$home.find('div[id="map"]');
        // Add map locations
        this.locations = [
            { name: "南京浦口店", x: "118.62", y: "32.05" },
            { name: "南京鼓楼店", x: "118.80", y: "32.07" },
            { name: "南京江宁店", x: "118.82", y: "31.95" },
            { name: "南京雨花店", x: "118.78", y: "31.99" },
            { name: "南京秦淮店", x: "118.77", y: "32.05" }
        ];

        this.$userinfo_sex_output = this.$home.find('div[id="user_sex_output"]');
        this.$userinfo_sex_edit_button = this.$home.find('button[id="user_sex_edit_button"]');
        this.$userinfo_sex_edit = this.$home.find('div[id="user_sex_edit"]');
        this.$userinfo_sex_edit_submit_button = this.$home.find('button[id="user_sex_edit_submit_button"]');
        this.$userinfo_sex_edit_cancel_button = this.$home.find('button[id="user_sex_edit_cancel_button"]');
        this.$userinfo_sex_newsex = this.$home.find('select[class="user_sex_input"]');
        this.$userinfo_sex_edit_error = this.$home.find('div[id="user_sex_edit_error"]');
        this.$userinfo_sex_edit.hide();

        this.$userinfo_phone_output = this.$home.find('div[id="user_phone_output"]');
        this.$userinfo_phone_edit_button = this.$home.find('button[id="user_phone_edit_button"]');
        this.$userinfo_phone_edit = this.$home.find('div[id="user_phone_edit"]');
        this.$userinfo_phone_edit_submit_button = this.$home.find('button[id="user_phone_edit_submit_button"]');
        this.$userinfo_phone_edit_cancel_button = this.$home.find('button[id="user_phone_edit_cancel_button"]');
        this.$userinfo_phone_newphone = this.$home.find('input[class="user_phone_input"]');
        this.$userinfo_phone_edit_error = this.$home.find('div[id="user_phone_edit_error"]');
        this.$userinfo_phone_edit.hide();
    
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
        this.show_userinfo_sex();
        this.show_userinfo_phone();
        this.add_event_submit_userinfo_name();
        this.show_car_select();
        this.add_event_car_select();
        this.add_event_click_hire();
        this.add_event_click_return();
        this.add_event_show_userinfo_sex_edit();
        this.add_event_show_userinfo_sex_output();
        this.add_event_submit_userinfo_sex();
        this.add_event_show_userinfo_phone_edit();
        this.add_event_show_userinfo_phone_output();
        this.add_event_submit_userinfo_phone();
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

        this.load_vehicles_detail();
    }

    add_event_click_map() {
        let outer = this;

        this.$hire_map_button.on('click', function() {
            outer.show_map();
            $('.menu_item button').removeClass('current');
            outer.$hire_map_button.addClass('current');
        });

        outer.render_map();
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
        outer.load_user_orders();
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

    add_event_show_userinfo_sex_edit() {
        let outer = this;

        this.$userinfo_sex_edit_button.on('click', function() {
            outer.show_userinfo_sex_edit();
        });
    }

    add_event_show_userinfo_sex_output() {
        let outer = this;

        this.$userinfo_sex_edit_cancel_button.on('click', function() {
            outer.show_userinfo_sex_output();
        });
    }

    add_event_submit_userinfo_sex() {
        let outer = this;

        this.$userinfo_sex_edit_submit_button.on('click', function() {
            outer.edit_userinfo_sex();
        });
    }

    show_userinfo_sex() {
        let outer = this;
        
        $.ajax({
            url: '/home/show_sex',
            type: 'GET',
            success: function(resp) {
                outer.$userinfo_sex_output.find('.info_output').text(resp.result);
            },
        });
    }

    edit_userinfo_sex() {
        let outer = this;
        let newsex = this.$userinfo_sex_newsex.val();
        this.$userinfo_sex_edit_error.empty();

        $.ajax({
            url: '/home/edit_sex',
            type: 'GET',
            data: {
                newsex: newsex,
            },
            success: function(resp) {
                console.log(newsex, resp);
                if (resp.result == 'success') {
                    outer.show_userinfo_sex_output();
                    outer.show_userinfo_sex();
                } else {
                    outer.$userinfo_sex_edit_error.text(resp.result);
                }
            },
        });
    }

    show_userinfo_phone() {
        let outer = this;
        
        $.ajax({
            url: '/home/show_phone',
            type: 'GET',
            success: function(resp) {
                outer.$userinfo_phone_output.find('.info_output').text(resp.result);
            },
        });
    }

    edit_userinfo_phone() {
        let outer = this;
        let newphone = this.$userinfo_phone_newphone.val();
        this.$userinfo_phone_edit_error.empty();

        $.ajax({
            url: '/home/edit_phone',
            type: 'GET',
            data: {
                newphone: newphone,
            },
            success: function(resp) {
                console.log(newphone, resp);
                if (resp.result == 'success') {
                    outer.show_userinfo_phone_output();
                    outer.show_userinfo_phone();
                } else {
                    outer.$userinfo_phone_edit_error.text(resp.result);
                }
            },
        });
    }

    show_userinfo_sex_output() {
        this.$userinfo_sex_output.show();
        this.$userinfo_sex_edit.hide();
    }

    show_userinfo_sex_edit() {
        this.$userinfo_sex_edit.show();
        this.$userinfo_sex_output.hide();
    }

    add_event_show_userinfo_phone_edit() {
        let outer = this;

        this.$userinfo_phone_edit_button.on('click', function() {
            outer.show_userinfo_phone_edit();
        });
    }

    add_event_show_userinfo_phone_output() {
        let outer = this;

        this.$userinfo_phone_edit_cancel_button.on('click', function() {
            outer.show_userinfo_phone_output();
        });
    }

    add_event_submit_userinfo_phone() {
        let outer = this;

        this.$userinfo_phone_edit_submit_button.on('click', function() {
            outer.edit_userinfo_phone();
        });
    }

    show_userinfo_phone_output() {
        this.$userinfo_phone_output.show();
        this.$userinfo_phone_edit.hide();
    }

    show_userinfo_phone_edit() {
        this.$userinfo_phone_edit.show();
        this.$userinfo_phone_output.hide();
    }

    show_car_select() {
        let outer = this;
        this.$car_select = $(`
            <div class="car_select_body">
                <!-- Store Selection -->
                <label for="store">门店:</label>
                <select id="store" class="car_select_dropdown">
                    <option value="all_store">不限</option>
                    <option value="南京浦口店">南京浦口店</option>
                    <option value="南京鼓楼店">南京鼓楼店</option>
                    <option value="南京江宁店">南京江宁店</option>
                    <option value="南京雨花店">南京雨花店</option>
                    <option value="南京秦淮店">南京秦淮店</option>
                </select>

                <label for="time">时间:</label>
                <input type="datetime-local" id="time" class="car_select_input">

                <button id="car_select_submit_button" class="car_select_submit">提交</button>
            </div>
        `);
        this.$car_select.appendTo(this.$home.find('.car_select'));
        this.$store_select = this.$car_select.find('#store');
        this.$time_select = this.$car_select.find('#time');
        this.$car_select_submit_button = this.$car_select.find('#car_select_submit_button');
    }
    
    add_event_car_select() {
        let outer = this;
        this.$car_select_submit_button.on('click', function() {
            let store = outer.$store_select.val();
            let time = outer.$time_select.val();
            outer.load_vehicles_detail(store, time);
            outer.show_detial();
            $('.menu_item button').removeClass('current');
            outer.$hire_detial_button.addClass('current');
        });
    }

    load_vehicles_detail(store, time) {
        $.ajax({
            url: '/order/get_vehicle_info/',
            type: 'GET',
            data: {
                store: store,
                time: time,
            },
            success: (data) => {
                this.render_vehicles_detail(data);
            },
            error: (error) => {
                console.error('Error fetching vehicles:', error);
            }
        });
    }

    render_vehicles_detail(vehicles) {
        const $table = $('#vehicle_table1');
        $table.find("tr:gt(0)").remove();

        vehicles.forEach((vehicle) => {
            const $row = $(`
                <tr>
                    <td>${vehicle.store}</td>
                    <td>${vehicle.brand}</td>
                    <td>${vehicle.model}</td>
                    <td>${vehicle.category}</td>
                    <td>${vehicle.hire_price}</td>
                    <td>${vehicle.is_hired}</td>
                    <td>
                        ${vehicle.is_hired ? '已租用' : `<button class="choose_button" data-id="${vehicle.id}">租用</button>`}
                    </td>
                </tr>
            `);
            $table.append($row);
        });
    }
    
    add_event_click_hire() {
        let outer = this;
    
        this.$home.on('click', '.choose_button', function() {
            let vehicle_id = $(this).data('id');
    
            $.ajax({
                url: `/home/hire_vehicle/${vehicle_id}/`,
                type: 'GET',
                data: {
                    'vehicle_id': vehicle_id,
                },
                success: function(resp) {
                    if (resp.result === 'success') {
                        alert('租用成功！');
                        location.reload();// 刷新车辆列表
                    } else {
                        alert(resp.message);
                    }
                },
            });
        });
    }
    
    add_event_click_return() {
        let outer = this;
    
        this.$home.on('click', '.return_button', function() {
            let vehicle_id = $(this).data('id');
    
            $.ajax({
                url: `/home/return_vehicle/${vehicle_id}/`,
                type: 'GET',
                data: {
                    'vehicle_id': vehicle_id,
                },
                success: function(resp) {
                    if (resp.result === 'success') {
                        alert('归还成功！');
                        location.reload(); // 刷新用户订单列表
                    } else {
                        alert(resp.message);
                    }
                },
            });
        });
    }
    

    // 在加载用户订单页面时，发送 AJAX 请求获取用户订单信息并显示在页面上
    load_user_orders() {
        $.ajax({
            url: `/home/get_user_orders/`,
            type: 'GET',
            success: (data) => {
                this.render_user_orders(data);
            },
            error: (error) => {
                console.error('Error fetching user orders:', error);
            }
        });
    }

    // 渲染用户订单信息到页面上
    render_user_orders(orders) {
        const $table = $('#user_order_table');
        $table.find("tr:gt(0)").remove();

        orders.forEach((order) => {
            const $row = $(`
                <tr>
                    <td>${order.store}</td>
                    <td>${order.brand}</td>
                    <td>${order.model}</td>
                    <td>${order.category}</td>
                    <td>${order.hired_date}</td>
                    <td>${order.hire_price}</td>
                    <td>
                        <button class="return_button" data-id="${order.id}">归还</button>
                    </td>
                </tr>
            `);
            $table.append($row);
        });
    }

    render_map() {
        // Clear existing map content if any
        this.$map.empty();
    
        // Initialize Baidu Map
        var map = new BMap.Map("map"); // Create a Map instance
        var point = new BMap.Point(118.22, 32.30); // Set a point representing the geographical coordinates (Nanjing)
        map.centerAndZoom(point, 12); // Initialize the map, set the center point and the map zoom level
        map.enableScrollWheelZoom(true); // Enable scroll wheel zooming
    
        // Add markers to the map
        this.locations.forEach(location => {
            var markerPoint = new BMap.Point(location.x, location.y);
            var marker = new BMap.Marker(markerPoint); // Create a marker at the specified location
            map.addOverlay(marker); // Add the marker to the map
            marker.setLabel(new BMap.Label(location.name, {offset:new BMap.Size(20,-10)})); // Add labels to the markers
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
class AdminHome {
    constructor(root) {
        this.root = root;

        this.$adminhome = $(`
            <div>
                <h1>管理员界面</h1>
                <table id="vehicle_table" border="1">
                    <tr>
                        <th>所在店铺</th>
                        <th>品牌</th>
                        <th>型号</th>
                        <th>类别</th>
                        <th>是否出租</th>
                        <th>出租时间</th>
                        <th>归还时间</th>
                        <th>租赁价格（元/天）</th>
                        <th>操作</th>
                    </tr>
                </table>
                <button id="add_vehicle_button">添加新车辆</button>
                <button id="logout_admin_button">退出登录</button>
            </div>
        `);
        this.$adminhome.hide();
        this.root.$hire.append(this.$adminhome);

        this.start();
    }

    start() {
        this.add_listening_events();
        this.load_vehicles();
    }

    add_listening_events() {
        this.add_event_logout();
        this.add_event_add_vehicle();
        this.add_event_edit_vehicle();
        this.add_event_delete_vehicle();
    }


    load_vehicles() {
        $.ajax({
            url: '/order/get_vehicle_info/',
            type: 'GET',
            success: (data) => {
                this.render_vehicles(data);
            },
            error: (error) => {
                console.error('Error fetching vehicles:', error);
            }
        });
    }

    render_vehicles(vehicles) {
        const $table = $('#vehicle_table');
        vehicles.forEach((vehicle) => {
            const hireInfo = vehicle.is_hired
                ? `<td>${vehicle.hire_start}</td><td>${vehicle.hire_end}</td>`
                : '<td></td><td></td>';
            const $row = $(`
                <tr>
                    <td>${vehicle.store}</td>
                    <td>${vehicle.brand}</td>
                    <td>${vehicle.model}</td>
                    <td>${vehicle.category}</td>
                    <td>${vehicle.is_hired ? '是' : '否'}</td>
                    ${hireInfo}
                    <td>${vehicle.hire_price}</td>
                    <td>
                        <button class="edit_button" data-id="${vehicle.id}">编辑</button>
                        <button class="delete_button" data-id="${vehicle.id}">删除</button>
                    </td>
                </tr>
            `);
            $table.append($row);
        });
    }
    

    add_event_add_vehicle() {
        let outer = this;
        $('#add_vehicle_button').on('click', function() {
            // 显示添加车辆的表单
            outer.show_add_vehicle_form();
        });
    }

    show_add_vehicle_form() {
        // 创建一个新的表单元素
        const $form = $(`
            <form id="add_vehicle_form">
                <h2>添加新车辆</h2>
                <select id="store" name="store" required>
                    <option value="南京浦口店">南京浦口店</option>
                    <option value="南京鼓楼店">南京鼓楼店</option>
                    <option value="南京江宁店">南京江宁店</option>
                    <option value="南京雨花店">南京雨花店</option>
                    <option value="南京秦淮店">南京秦淮店</option>
                </select><br>
                <label for="brand">品牌:</label>
                <input type="text" id="brand" name="brand" required><br>
                <label for="model">型号:</label>
                <input type="text" id="model" name="model" required><br>
                <label for="category">类别:</label>
                <select id="category" name="category" required>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Truck">Truck</option>
                    <option value="Van">Van</option>
                </select><br>
                <label for="hire_price">租赁价格（元/天）:</label>
                <input type="number" id="hire_price" name="hire_price" required><br>
                <button type="submit">提交</button>
                <button id="cancel_button">取消</button>
            </form>
        `);

        // 将表单添加到页面中
        this.$adminhome.append($form);

        // 处理表单提交事件
        $form.on('submit', (e) => {
            e.preventDefault();
            this.submit_add_vehicle_form($form.serialize());
        });

        $('#cancel_button').on('click', function() {
            $form.remove();
        });
    }

    submit_add_vehicle_form(formData) {
        $.ajax({
            url: '/order/add_vehicle/', // API端点，用于添加新车辆
            type: 'GET',
            data: formData,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8', // 确保发送的是表单数据
            success: (data) => {
                location.reload();
            },
            error: (error) => {
                console.error('Error adding vehicle:', error);
            }
        });
    }

    add_event_edit_vehicle() {
        let outer = this;
        $(document).on('click', '.edit_button', function() {
            const id = $(this).data('id');
            outer.show_edit_vehicle_form(id);
        });
    }

    show_edit_vehicle_form(id) {
        // 从服务器获取当前车辆的信息
        let outer = this;
        $.ajax({
            url: `/order/get_vehicle_byid/${id}/`,
            type: 'GET',
            success: (data) => {
                // 使用获取到的车辆信息填充表单
                const vehicle = data; 
                const $form = $(`
                    <form id="edit_vehicle_form">
                        <h2>编辑车辆</h2>
                        <select id="store" name="store" required>
                        <option value="南京浦口店" ${vehicle.store === '南京浦口店' ? 'selected' : ''}>南京浦口店</option>
                        <option value="南京鼓楼店" ${vehicle.store === '南京鼓楼店' ? 'selected' : ''}>南京鼓楼店</option>
                        <option value="南京江宁店" ${vehicle.store === '南京江宁店' ? 'selected' : ''}>南京江宁店</option>
                        <option value="南京雨花店" ${vehicle.store === '南京雨花店' ? 'selected' : ''}>南京雨花店</option>
                        <option value="南京秦淮店" ${vehicle.store === '南京秦淮店' ? 'selected' : ''}>南京秦淮店</option>
                        </select><br>
                        <input type="hidden" id="id" name="id" value="${vehicle.id}" required>
                        <label for="brand">品牌:</label>
                        <input type="text" id="brand" name="brand" value="${vehicle.brand}" required><br>
                        <label for="model">型号:</label>
                        <input type="text" id="model" name="model" value="${vehicle.model}" required><br>
                        <label for="category">类别:</label>
                        <select id="category" name="category" required>
                            <option value="SUV" ${vehicle.category === 'SUV' ? 'selected' : ''}>SUV</option>
                            <option value="Sedan" ${vehicle.category === 'Sedan' ? 'selected' : ''}>Sedan</option>
                            <option value="Truck" ${vehicle.category === 'Truck' ? 'selected' : ''}>Truck</option>
                            <option value="Van" ${vehicle.category === 'Van' ? 'selected' : ''}>Van</option>
                        </select><br>
                        <label for="hire_price">租赁价格（元/天）:</label>
                        <input type="number" id="hire_price" name="hire_price" value="${vehicle.hire_price}" required><br>
                        <button type="submit">更新</button>
                        <button id="cancel_button">取消</button>
                    </form>
                `);

                outer.$adminhome.append($form);

                // 处理表单提交事件
                $form.on('submit', (e) => {
                    e.preventDefault();
                    outer.submit_edit_vehicle_form($form.serialize());
                });

                $('#cancel_button').on('click', function() {
                    $form.remove();
                });
            },

            error: (error) => {
                console.error('Error fetching vehicle info:', error);
            }
        });
    }

    submit_edit_vehicle_form(formData) {
        $.ajax({
            url: '/order/edit_vehicle/', // API端点，用于更新车辆信息
            type: 'GET',
            data: formData,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: (data) => {
                location.reload();
            },
            error: (error) => {
                console.error('Error editing vehicle:', error);
            }
        });
    }

    add_event_delete_vehicle() {
        let outer = this;
        $(document).on('click', '.delete_button', function() {
            const id = $(this).data('id');
            if (confirm('确定要删除这辆车吗？')) {
                outer.delete_vehicle(id);
            }
        });
    }
    
    delete_vehicle(id) {
        $.ajax({
            url: `/order/delete_vehicle/${id}/`,
            type: 'POST',
            success: (data) => {
                alert('车辆删除成功');
                location.reload(); // 重新加载车辆列表
            },
            error: (error) => {
                console.error('Error deleting vehicle:', error);
            }
        });
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

}class Settings {
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
            url: "/settings/login/",
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
            url: "/settings/register/",
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
            url: "/settings/forget",
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
            url: "/settings/logout/",
            type: "GET",
            success: function(resp) {
                if (resp.result === "success") {
                    location.reload();
                } else {
                    console.log(resp.result);
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
                    if (resp.username === "admin") {
                        outer.root.adminhome.show();
                    } else {
                        outer.root.home.show();
                    }
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
        this.adminhome = new AdminHome(this);

        this.start();
    }

    start() {
    }
}


