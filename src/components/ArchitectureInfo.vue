<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane style="height: 33rem">
        <span slot="label">
          <i class="el-icon-date"></i> 建筑信息管理
        </span>
        <!--搜索 start-->
        <el-collapse accordion>
          <el-collapse-item title="模糊查询条件" name="1">
            <el-form :model="searchForm" :inline="true" :close-on-click-modal="false">
              <el-form-item label="建筑名" :xs="6" :md="3">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="状态" :xs="6" :md="3">
                <el-input v-model="form.status" auto-complete="off"></el-input>
              </el-form-item>
              <el-button type="success">搜索</el-button>
            </el-form>
          </el-collapse-item>
        </el-collapse>
        <!--搜索 end-->

        <!--操作 start-->
        <el-row title="操作" name="2" class="operate">
          <el-button type="success" @click="dialogAddVisible = true">
            <i class="el-icon-plus" />添加
          </el-button>
          <el-button type="warning" @click="dialogModifyVisible = true">
            <i class="el-icon-edit" />修改
          </el-button>
          <el-button type="danger" @click="dialogDeleteVisible = true">
            <i class="el-icon-delete" /> 删除
          </el-button>
          <!--分页 start-->
          <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :page-count="total"
            :current-page="page"
            @current-change="handleCurrentChange"
          ></el-pagination>
          <!--分页 end-->
        </el-row>
        <!--添加dialog start-->

        <el-dialog title="添加用户" :visible.sync="dialogAddVisible">
          <el-form :model="form" :inline="true" :close-on-click-modal="false">
            <el-form-item label="昵称" :xs="6">
              <el-input v-model="form.userNickname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="状态" :xs="6">
              <el-input v-model="form.userStatus" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="角色" :xs="6">
              <el-input v-model="form.userRole" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogAddVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogAddVisible = false">确 定</el-button>
          </div>
        </el-dialog>

        <!--添加dialog end-->

        <!--修改dialog start-->

        <el-dialog title="修改用户" :visible.sync="dialogModifyVisible">
          <el-form :model="form" :inline="true" :close-on-click-modal="false">
            <el-form-item label="昵称" :xs="6">
              <el-input v-model="form.userNickname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="状态" :xs="6">
              <el-input v-model="form.userStatus" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="角色" :xs="6">
              <el-input v-model="form.userRole" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogModifyVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogModifyVisible = false">确 定</el-button>
          </div>
        </el-dialog>

        <!--修改dialog end-->

        <!--删除dialog start-->

        <el-dialog title="删除用户" :visible.sync="dialogDeleteVisible">
          <el-form :model="form" :inline="true" :close-on-click-modal="false">
            <el-form-item label="昵称" :xs="6">
              <el-input v-model="form.userNickname" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="状态" :xs="6">
              <el-input v-model="form.userStatus" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="角色" :xs="6" disabled>
              <el-input v-model="form.userRole" auto-complete="off" disabled></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogDeleteVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogDeleteVisible = false">确 定</el-button>
          </div>
        </el-dialog>

        <!--删除dialog end-->

        <!--操作 end-->

        <!--表格 start-->

        <el-table
          :data="tableData"
          style="width: 100%"
          :border="true"
          v-loading="loading"
          size="mini"
        >
          <el-table-column prop="userNickname" label="昵称" width="180"></el-table-column>
          <el-table-column prop="userWxid" label="微信id" width="180"></el-table-column>
          <el-table-column prop="userDate" label="注册时间" width="180" sortable></el-table-column>
          <el-table-column prop="userStatus" label="用户状态" sortable></el-table-column>
          <el-table-column prop="userRole" label="用户角色"></el-table-column>
        </el-table>

        <!--表格 end-->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "ArchitectureInfo",
  data() {
      return {
        dialogAddVisible: false,
        dialogDeleteVisible: false,
        dialogModifyVisible: false,
        form: {
          userNickname: '123',
          userStatus: 'asd',
        },
        tableData: [],
        loading: true,
        total: 10,
        page: 1
      }
    }
};
</script>

<style scoped>
  .operate {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .operate .el-button {
    padding: 7px 7px;
  }

  .pagination {
    float: right;
  }

</style>
