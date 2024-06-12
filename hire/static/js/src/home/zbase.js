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
