<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="DashBoard">
                <span class="sb-icon">
                    <i class="material-icons">home</i>
                </span>
                <span class="sb-cn">主页</span>
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title">
                    <span class="sb-icon">
                        <i class="material-icons">perm_data_setting</i>
                    </span>
                    <span class="sb-cn">编辑</span>
                </template>
                <el-menu-item index="EditPage">文章编辑</el-menu-item>
                <el-menu-item index="MarkdownPage">Markdown</el-menu-item>
                <el-menu-item index="TodoListPage">待办任务</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <span class="sb-icon">
                        <i class="material-icons">pie_chart</i>
                    </span>
                    <span class="sb-cn">图表</span>
                </template>
                <el-menu-item index="ChartPage">图表显示</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <span class="sb-icon">
                        <i class="material-icons">content_paste</i>
                    </span>
                    <span class="sb-cn">表单</span>
                </template>
                <el-menu-item index="FormInputPage">表单输入</el-menu-item>
                <el-menu-item index="FormLayoutPage">表单布局</el-menu-item>
            </el-submenu>

            <el-submenu index="5">
                <template slot="title">
                    <span class="sb-icon">
                        <i class="material-icons">border_all</i>
                    </span>
                    <span class="sb-cn">表格</span>
                </template>
                <el-menu-item index="TablePage">表格显示</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    }
}
</script>
<style scoped>
.sidebar {
    display: block;
    position: absolute;
    width: 200px;
    left: 0;
    top: 66px;
    bottom: 0;
    background: #324157;
}

.sidebar>ul {
    height: 100%;
}

.el-menu-item,
.el-submenu__title {
    font-size: 14px;
}

.material-icons {
    font-size: 12px;
}
</style>