<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="Browser" label="Browser" width="180"></el-table-column>
        <el-table-column prop="Visits" label="Visits" width="180"></el-table-column>
        <el-table-column prop="Purchases" label="Purchases" width="180"> </el-table-column>
        <el-table-column prop="co" label="%" align="right"> </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                Browser: '谷歌浏览器',
                Visits: '13,392',
                Purchases: '4,214',
                co: '50%'
            }, {
                Browser: '火狐浏览器',
                Visits: '7,873',
                Purchases: '3,031',
                co: '28%'
            }, {
                Browser: 'IE浏览器',
                Visits: '5,890',
                Purchases: '2,102',
                co: '17%'
            }, {
                Browser: 'Safari',
                Visits: '4,001',
                Purchases: '1,001',
                co: '14%'
            }]
        }
    }
}
</script>
