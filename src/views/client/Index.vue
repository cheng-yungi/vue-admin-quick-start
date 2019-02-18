<template>
  <div>
    <Row :gutter="16">
      <Col :span="12">
        <Card>
          <p slot="title" class="clearfix">
            <span>通知</span>
          </p>
          <!-- 每項通知 -->
          <ul>
            <li :key="index+'noti'" v-for="(item,index) in notification.notifications" class="li-notification">
              <Button
                @click="showNotificatin(item.id)"
                type="text"
              >[{{item.type}}] {{item.header}}{{$moment(item.lastEditTime, 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm:ss')}}</Button>
            </li>
          </ul>
        </Card>
      </Col>
    </Row>
    <!-- 下游商戶号 -->
    <Row style="margin-top:20px">
      <Col span="24">
        <Card>
          <Collapse accordion>
            <Panel :key="index" v-for="(item,index) in spList">
              <font style="color:red;">渠道：{{global.routeEnMap[item.routeName]}}</font>
              &nbsp;&nbsp;商户号 {{item.userId}} 结算时间：{{item.routeType}} {{item.routeTypeHour}}:{{item.routeTypeMinute}}
              <font
                style="color:red;"
              >总馀额：￥{{item.balance/100}}</font>
              <!-- 商戶号資訊 -->
              <p slot="content">
                <Row :gutter="16">
                  <Col span="8">
                    <Card>
                      <h2>可垫资馀额：￥{{item.balancePay/100}}</h2>
                      <h2>已结算馀额：￥{{item.count/100}}</h2>
                      <h2>待结算资金：￥{{item.discount/100}}</h2>
                      <h2>风险资金：￥{{item.riskCount/100}}</h2>
                      <h2>结算时间：
                        <Button type="text" @click="showSettleTime(index)">详细时间</Button>
                      </h2>
                    </Card>
                  </Col>
                  <Col span="16">
                    <Table border :columns="item.columns" :data="item.list"></Table>
                  </Col>
                </Row>
              </p>
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
    <!-- 查看通知 -->
    <Modal v-model="notificationDialog" :mask-closable="false" :closable="false">
      <p slot="header" class="clearfix">
        <span>{{notification.notification.header}}</span>
      </p>
      <span>{{$moment(notification.notification.lastEditTime, 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm:ss')}}</span>
      <Input v-model="notification.notification.content" :rows="10" type="textarea" disabled/>
      最后修改者：{{notification.notification.lastEditor}} ({{notification.notification.spName}})
      <div slot="footer">
        <Button type="primary" @click="notificationDialog = false">确认</Button>
      </div>
    </Modal>
     <!-- 查看结算时间 -->
    <Modal title="结算时间" v-model="settleDialog" :mask-closable="false" :closable="false">
      <div v-html="settleMsg"></div>
      <div slot="footer">
        <Button type="primary" @click="settleDialog = false">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { FETCH_NOTIFICATIONS, FETCH_NOTIFICATION_ONE, FETCH_CLIENT_INFO } from '@/store/types';
@Component
export default class Index extends Vue {
  @State((state: State) => state.global ) public global!: GlobalState;
  @State((state: State) => state.notification ) public notification!: NotificationState;
  @State((state: State) => state.clientInfo ) public clientInfo!: ClientInfoState;
  @Provide() public notificationDialog: boolean = false;
  @Provide() public settleDialog: boolean = false;
  @Provide() public settleMsg: string = '';
  @Provide() public spList: ClientDetail[] = [];

  public getData() {
    this.$store.dispatch(FETCH_NOTIFICATIONS);
    this.$store.dispatch(FETCH_CLIENT_INFO)
    .then((result) => {
      if (result === 'success') {
        this.spList = this.formatSpList();
        console.log(this.spList);
      }
    });
  }

  public mounted() {
    this.getData();
  }

  public showNotificatin(id) {
    this.$store.dispatch(FETCH_NOTIFICATION_ONE, id)
    .then((result) => {
      if (result === 'success') {
        this.notificationDialog = true;
      }
    });
  }

  public showSettleTime(index) {
    const routeDetail: RouteDetail = this.spList[index].routeDetailFormat;
    this.settleMsg = '';
    let count = 1;
    routeDetail.timeList.forEach((t) => {
        this.settleMsg += `${count++}. ${this.$moment(t.time, 'HHmm').format(
          'HH:mm',
        )} <br>`;
      });
    this.settleDialog = true;
  }

  public formatSpList(): ClientDetail[] {
    const result: ClientDetail[] = Object.assign([], this.clientInfo.detail);
    result.forEach((item) => {
      item.columns = [];
      item.list = [{}, {}, {}, {}];
      item.columns[0] = { key: 'col0', title: '支付产品' };
      item.list[0].col0 = '单笔限额';
      item.list[1].col0 = '单日限额';
      item.list[2].col0 = '费率';
      item.list[3].col0 = '状态';
      let colCount = 1;
      item.rateData.forEach((detail) => {
        item.columns[colCount] = {
          key: 'col' + colCount,
          title: this.global.payTypeMap[detail.payType],
        };
        item.list[0]['col' + colCount] =  detail.perLimit / 100;
        item.list[1]['col' + colCount] = detail.dayLimit / 100;
        if (detail.payType === 'AP1' || detail.payType === 'AP2') {
          item.list[2]['col' + colCount] = detail.spRate / 100 + '元/笔';
        } else {
          item.list[2]['col' + colCount] = detail.spRate / 100 + '%';
        }
        item.list[3]['col' + colCount] = this.formatStatus(detail.status);
        colCount++;
      });
      item.routeDetailFormat = JSON.parse(item.routeDetail);
    });
    return result;
  }
  private formatStatus(status: number): string {
    if (status === 1) {
      return '开启';
    } else {
      return '关闭';
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
}
.li-notification {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 10px;
}
.ivu-input[disabled],
fieldset[disabled] .ivu-input {
  background-color: white;
  color: #515a6e;
}
</style>

