<template>
    <div>
        <vPageTitle vtitle="BasicTables"></vPageTitle>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    滑入效果表格
                    <hr>
                    <hoverRow></hoverRow>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    条纹表格
                    <hr>
                    <stripedRow></stripedRow>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    边框表格
                    <hr>
                    <borderTable></borderTable>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    色彩表格
                    <hr>
                    <condensedTable></condensedTable>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    垂直滚动表格
                    <hr>
                    <fixedHeaderTable></fixedHeaderTable>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                   横向滚动表格
                    <hr>
                    <fixedColumnTable></fixedColumnTable>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import vPageTitle from '../common/PageTitle.vue';
import hoverRow from '../tables/hoverRow.vue';
import stripedRow from '../tables/stripedRow.vue';
import borderTable from '../tables/borderTable.vue';
import condensedTable from '../tables/condensedTable.vue';
import fixedHeaderTable from '../tables/fixedHeaderTable.vue';
import fixedColumnTable from '../tables/fixedColumnTable.vue';
export default {
    components: {
        vPageTitle, hoverRow, stripedRow, borderTable, condensedTable, fixedHeaderTable, fixedColumnTable
    },
    methods: {
    }
}
</script>
<style scoped>
.el-col {
    margin-bottom: 16px;
}
.box-card {
    font-size: 12px;
}
.box-card hr {
    height: 1px;
    border: none;
    border-top: 1px dashed #ccc;
    margin-bottom: 10px;
    margin-top: 6px;
}
</style>