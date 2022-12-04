/* eslint-disable */
const USER_CONFIG = {
  /**
   * 基本配置
   */
  
  USE_PASSAGE: 'wechat-test',
  
  APP_ID: 'wx3c2f4f31f193246f',

  APP_SECRET: 'd220a5d56f049aa6ba5852eaf718f85b',
  
  MAX_PUSH_ONE_MINUTE: 5,

  SLEEP_TIME: 65000,

  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: false,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: true,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: true,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },
  
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '28f972d9f56d0bbc3c7ff71c888a1a8a',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    // morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    // eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    // networkHot: 3,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    // networkHotType: 'default',
  },
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: false,
  
  /** 每日一言 */
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "",
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {

      name: '宝宝',
      id: 'o0X4q6yOdSYIT1lRf9dg3WoiGryc',
      useTemplateId: 'GgXRHUlvI_o_TOOx8AGD4jih2P3LBMqN7fsaqIW6Okw',
      province: '江西',
      city: '赣州',
	  
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '10-08',
	  
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
	  
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://weibo.com/hot/search',
	  
      // 专属节日提醒
      festivals: [
        
		// 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '1998', date: '10-08', isShowAge: true,
        },
        {
          type: '节日', name: '认识纪念日', year: '2022', date: '01-24', isShowAge: true,
        }
      ],
	  
	  
      // 专属纪念日/倒数日
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-03-05' },
      ],
	  
      // 课程表相关配置
      courseSchedule: null
	  
    }
	
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */
  CALLBACK_TEMPLATE_ID: '05eiwLAre34w9HCH0ju6g403_dG3wzQOeO47wQy3ZGw',

  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: '自己',
      id: 'o0X4q65g0MwbYmX3AX9U5SO8t9VE',
    }

  ],

  
}

module.exports = USER_CONFIG
