<template>
    <div>
        <vPageTitle vtitle="BasicCharts"></vPageTitle>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                    <barChart></barChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                    <lineChart></lineChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                    <radarChart></radarChart>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    <pieChart></pieChart>
                </el-card>
            </el-col>
        </el-row>

    </div>
</template>
<script>
import vPageTitle from '../common/PageTitle.vue';
import BarChart from '../charts/BarChart.vue';
import PieChart from '../charts/PieChart.vue';
import LineChart from '../charts/LineChart.vue';
import RadarChart from '../charts/RadarChart.vue';
export default {
    components: {
        vPageTitle, BarChart, PieChart, LineChart, RadarChart
    },
    methods: {
    }
}
</script>

<style scoped>
.el-col {
    margin-bottom: 16px;
}

.material-icons {
    font-size: 80px;
    color: #ddd;
}

.cart-string {
    height: 100px;
    padding-top: 10px;
    font-size: 1.1rem;
}
</style>