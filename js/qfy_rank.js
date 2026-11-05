/*
  作者：齐方圆
  建立时间：2026-11-02
  使用模型：Trae
  功能名称：电视剧排行榜初始化脚本
  功能简介：实例化可复用选项卡组件 QfyTab，绑定排行榜页面的选项卡容器与内容面板，
            每日（索引 0）为默认选中项。依赖 js/qfy_tab.js。
*/

// qfy_rankTab: 实例化排行榜选项卡，每日（索引 0）为默认选中项
var qfy_rankTab = new QfyTab({
    tabContainer: '#qfy_rank_tabs',
    panelContainer: '#qfy_rank_panels',
    activeClass: 'qfy_active',
    defaultIndex: 0
});
