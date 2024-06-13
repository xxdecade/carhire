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
            const hireInfo1 = vehicle.is_hired
                ? `<td>${vehicle.hired_date}</td>`
                : '<td>未租用</td>';

            const hireInfo2 = vehicle.is_hired
                ? `<td>未归还</td>`
                : `<td>${vehicle.return_date}</td>`;
            const $row = $(`
                <tr>
                    <td>${vehicle.store}</td>
                    <td>${vehicle.brand}</td>
                    <td>${vehicle.model}</td>
                    <td>${vehicle.category}</td>
                    <td>${vehicle.is_hired ? '是' : '否'}</td>
                    ${hireInfo1}
                    ${hireInfo2}
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

}