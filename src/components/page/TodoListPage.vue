<template>
    <div>
        <vPageTitle vtitle="待办任务"></vPageTitle>
        <el-row :gutter="20">
            <el-col :offset="6" :xs="24" :sm="24" :md="12" :lg="10">
                <el-card class="box-card">
                    <input class="my-input" v-model="inputContent" placeholder="请输入待办任务" v-on:keyup.enter="onEnter" />
                    <ul class="todolist">
                        <li v-for="list in listContents">
                            {{list.content}}
                        </li>
                    </ul>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import vPageTitle from '../common/PageTitle.vue';
export default {
    components: {
        vPageTitle
    },
    data() {
        return {
            inputContent: '',
            listContents: [
                { content: '你是怎么想的?', isDone: false },
                { content: '和管理员一起玩', isDone: false },
                { content: '给小红写邮件', isDone: false },
                { content: '我是一名最优秀的学生。', isDone: false }
            ]
        }
    },
    methods: {
        onEnter: function() {
            if (this.inputContent != '') {
                var listContent = { content: this.inputContent, isDone: true };
                this.listContents.splice(0, 0, listContent);
                this.inputContent = '';
            }
        }
    }
}
</script>

<style>
.el-col {
    margin-bottom: 16px;
}

.todolist {
    margin-top: 5px;
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.todolist li {
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    line-height: 20px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    border-left: 5px solid #209e91;
    text-align: left;
}

.todolist li:nth-child(2n) {
    border-left: 5px solid #0e8174;
}

.todolist li:hover {
    border-left: 30px solid #209e91;
    background-color: #eee;
}

.my-input {
    line-height: 28px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 98%;
    padding: 5px;
}
</style>