/*
  作者：齐方圆
  建立时间：2026-11-02
  使用模型：Trae
  功能名称：新闻选项卡初始化脚本
  功能简介：实例化可复用选项卡组件 QfyTab，绑定新闻页面的选项卡容器与内容面板，
            国内新闻（索引 0）为默认选中项。依赖 js/qfy_tab.js。
*/

// qfy_newsTab: 实例化新闻选项卡，国内新闻（索引 0）为默认选中项
var qfy_newsTab = new QfyTab({
    tabContainer: '#qfy_news_tabs',
    panelContainer: '#qfy_news_panels',
    activeClass: 'qfy_active',
    defaultIndex: 0
});
