<template>
    <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="userName" label="NAME" width="180"></el-table-column>
        <el-table-column prop="age" label="AGE" width="80"> </el-table-column>
        <el-table-column prop="ability" label="ABILITY"> </el-table-column>
        <el-table-column prop="value" label="VALUE" align="right"> </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                id: 1,
                userName: '小明',
                age: '30',
                ability: 'Web,HTML5,PHP',
                value: '80%'
            }, {
                id: 2,
                userName: '小红',
                age: '28',
                ability: 'Web,PHP',
                value: '70%'
            }, {
                id: 3,
                userName: '小胡',
                age: '30',
                ability: 'PHP,MySql',
                value: '60%'
            }, {
                id: 4,
                userName: '小琪',
                age: '35',
                ability: 'Web,HTML5,PHP,DB',
                value: '80%'
            }, {
                id: 2,
                userName: '小敏',
                age: '28',
                ability: 'Web,PHP',
                value: '70%'
            }, {
                id: 3,
                userName: '小时',
                age: '30',
                ability: 'PHP,MySql',
                value: '60%'
            }, {
                id: 4,
                userName: '小黑',
                age: '35',
                ability: 'Web,HTML5,PHP,DB',
                value: '80%'
            }]
        }
    }
}
</script>
