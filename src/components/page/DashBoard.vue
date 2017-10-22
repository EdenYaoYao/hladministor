<template>
    <div>
        <vPageTitle vtitle="主页"></vPageTitle>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                    <el-row :gutter="6">
                        <el-col :xs="24" :sm="8" :md="8" :lg="8">
                            <el-progress type="circle" :percentage="57" :width="80"></el-progress>
                        </el-col>
                        <el-col :xs="24" :sm="11" :md="12" :lg="12">
                            <div class="cart-string">
                                <span>访问量</span>
                                <span>
                                    <h2>1,820</h2>
                                </span>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="5" :md="4" :lg="4">
                            <div>
                                <i class="material-icons">person_outline</i>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                    <el-row :gutter="6">
                        <el-col :xs="24" :sm="8" :md="8" :lg="8">
                            <div>
                                <el-progress type="circle" :percentage="62" :width="80"></el-progress>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="11" :md="12" :lg="12">
                            <div class="cart-string">
                                <span>购买金额</span>
                                <span>
                                    <h2>¥1,680</h2>
                                </span>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="5" :md="4" :lg="4">
                            <div>
                                <i class="material-icons">attach_money</i>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                    <el-row :gutter="6">
                        <el-col :xs="24" :sm="8" :md="8" :lg="8">
                            <div>
                                <el-progress type="circle" :percentage="45" :width="80"></el-progress>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="11" :md="12" :lg="12">
                            <div class="cart-string">
                                <span>活跃用户</span>
                                <span>
                                    <h2>820</h2>
                                </span>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="5" :md="4" :lg="4">
                            <div>
                                <i class="material-icons">touch_app</i>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                    <el-row :gutter="6">
                        <el-col :xs="24" :sm="8" :md="8" :lg="8">
                            <div>
                                <el-progress type="circle" :percentage="51" :width="80"></el-progress>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="11" :md="12" :lg="12">
                            <div class="cart-string">
                                <span>撤回数量</span>
                                <span>
                                    <h2>645</h2>
                                </span>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="5" :md="4" :lg="4">
                            <div>
                                <i class="material-icons">replay</i>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <!-- 饼图，折线图 -->
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                    <PieChart></PieChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                    <LineChart></LineChart>
                </el-card>
            </el-col>
        </el-row>
        <!-- 饼图，折线图 -->
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                    <RadarChart></RadarChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                    <BarChart></BarChart>
                </el-card>
            </el-col>
        </el-row>

        

    </div>
</template>

<script>
import vPageTitle from '../common/PageTitle.vue';
import PieChart from '../charts/PieChart.vue';
import LineChart from '../charts/LineChart.vue';
import BarChart from '../charts/BarChart.vue';
import RadarChart from '../charts/RadarChart.vue';
export default {
    components: {
        vPageTitle, PieChart, LineChart,BarChart,RadarChart
    }
}
</script>

<style scoped>
.el-col {
    margin-bottom: 16px;
    text-align: center;
}

.material-icons {
    font-size: 80px;
    color: #ddd;
}

.box-card {
    height: 110px;
}

.cart-string {
    height: 100px;
    padding-top: 10px;
    font-size: 1.1rem;
}

.box-chart {
    height: 420px;
}
</style>