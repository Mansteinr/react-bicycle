
import React from 'react'
import { Select } from 'antd'

let Option = Select.Option

export default {
  formatterTime (timestamp, format) {
    //format:  "yyyy-m-d h:i:s.S","yyyy年mm月dd日 hh:ii:ss"  default: "yyyy-mm-dd hh:ii:ss"
    var obj = parseInt(timestamp)
    var date = new Date(obj)
    var data = {
      "m+": date.getMonth() + 1,                 //月   
      "d+": date.getDate(),                    //日   
      "h+": date.getHours(),                   //小时   
      "i+": date.getMinutes(),                 //分   
      "s+": date.getSeconds(),                 //秒   
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
      "S": date.getMilliseconds()             //毫秒   
    };
    if (!format) {
      format = "yyyy-mm-dd hh:ii:ss"
    }
    if (/(y+)/.test(format)) {
      // date.getFullYear() + ""  转为字符串
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (var k in data) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (data[k]) : (("00" + data[k]).substring(("" + data[k]).length)))
      }
    }
    return format
  },
  // 分页封装
  pagination (data, callback) {
    return {
      onChange:(current)=>{
        callback(current)
      },
      current:data.result.page,
      pageSize:data.result.page_size,
      total: data.result.total_count,
      showTotal:()=>{
          return `共${data.result.total_count}条`
      },
      showQuickJumper:true
    }
  },
  getOptionList (data) {
    if (!data) {
      return []
    }
    let options = []
    data.map((v) => {
      options.push(<Option value={v.id} key={v.id}>{ v.name }</Option>)
    })
    return options
  }
}