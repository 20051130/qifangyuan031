/*
  作者：齐方圆
  建立时间：2026-11-02
  使用模型：Trae
  功能名称：可复用选项卡组件 QfyTab
  功能简介：通用 Tab 选项卡切换组件，支持任意页面复用。通过事件监听（事件委托）
            实现点击切换，切换时先清除所有选项卡与内容面板的选中状态，再为当前
            点击项设置选中状态。支持自定义选中类名与默认选中索引。
*/

(function (global) {
    'use strict';

    /**
     * QfyTab 构造函数：创建一个可复用的选项卡实例
     * @param {Object} qfy_config 配置对象
     * @param {string} qfy_config.tabContainer   选项卡按钮容器的 CSS 选择器
     * @param {string} qfy_config.panelContainer 内容面板容器的 CSS 选择器
     * @param {string} [qfy_config.activeClass='qfy_active'] 选中态类名
     * @param {number} [qfy_config.defaultIndex=0]           默认选中的索引
     */
    function QfyTab(qfy_config) {
        // qfy_tabs: 选项卡按钮容器 DOM 元素
        this.qfy_tabs = document.querySelector(qfy_config.tabContainer);
        // qfy_panels: 内容面板容器 DOM 元素
        this.qfy_panels = document.querySelector(qfy_config.panelContainer);
        // qfy_activeClass: 选中状态使用的类名，默认为 qfy_active
        this.qfy_activeClass = qfy_config.activeClass || 'qfy_active';
        // qfy_defaultIndex: 默认选中的选项卡索引，默认为 0
        this.qfy_defaultIndex = qfy_config.defaultIndex || 0;

        // 若容器不存在则不初始化，避免报错
        if (!this.qfy_tabs || !this.qfy_panels) {
            return;
        }

        // qfy_tabItems: 所有选项卡按钮
        this.qfy_tabItems = this.qfy_tabs.children;
        // qfy_panelItems: 所有内容面板
        this.qfy_panelItems = this.qfy_panels.children;

        // 执行初始化
        this.qfy_init();
    }

    /**
     * qfy_init: 初始化选项卡，绑定事件并设置默认选中项
     */
    QfyTab.prototype.qfy_init = function () {
        this.qfy_bindEvents();
        this.qfy_switchTab(this.qfy_defaultIndex);
    };

    /**
     * qfy_bindEvents: 绑定事件监听（事件委托）
     * 在选项卡容器上监听 click 事件，判断点击目标是否为选项卡按钮
     */
    QfyTab.prototype.qfy_bindEvents = function () {
        var qfy_self = this;
        this.qfy_tabs.addEventListener('click', function (qfy_e) {
            // qfy_target: 实际触发点击的元素
            var qfy_target = qfy_e.target;
            // 向上查找最近的选项卡按钮（兼容按钮内部有子元素的情况）
            var qfy_item = qfy_target.closest('.qfy_tab_item');
            if (!qfy_item) { return; }

            // 计算被点击选项卡的索引
            var qfy_index = Array.prototype.indexOf.call(qfy_self.qfy_tabItems, qfy_item);
            if (qfy_index === -1) { return; }

            // 切换到对应选项卡
            qfy_self.qfy_switchTab(qfy_index);
        });
    };

    /**
     * qfy_switchTab: 切换到指定索引的选项卡
     * 核心逻辑：先清除所有选项卡与面板的选中状态，再为当前项设置选中状态
     * @param {number} qfy_index 要切换到的选项卡索引
     */
    QfyTab.prototype.qfy_switchTab = function (qfy_index) {
        // 1. 清除所有选项卡按钮的选中状态
        for (var qfy_i = 0; qfy_i < this.qfy_tabItems.length; qfy_i++) {
            this.qfy_tabItems[qfy_i].classList.remove(this.qfy_activeClass);
        }

        // 2. 清除所有内容面板的选中状态
        for (var qfy_j = 0; qfy_j < this.qfy_panelItems.length; qfy_j++) {
            this.qfy_panelItems[qfy_j].classList.remove(this.qfy_activeClass);
        }

        // 3. 为当前点击的选项卡按钮设置选中状态
        if (this.qfy_tabItems[qfy_index]) {
            this.qfy_tabItems[qfy_index].classList.add(this.qfy_activeClass);
        }

        // 4. 为对应索引的内容面板设置选中状态
        if (this.qfy_panelItems[qfy_index]) {
            this.qfy_panelItems[qfy_index].classList.add(this.qfy_activeClass);
        }
    };

    // 暴露到全局，供外部调用
    global.QfyTab = QfyTab;

})(window);
