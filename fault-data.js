// 故障数据
const faultData = {
    heatpump: [
        {
            code: "01",
            title: "错相",
            category: "critical",
            description: "检测到电源相序错误，可能导致设备损坏或运行异常",
            causes: [
                "三相电源相序接反",
                "电源线路改造后未检查相序",
                "电源进线端子排连接错误"
            ],
            solutions: [
                { step: "切断设备总电源，确保安全操作", detail: "关闭配电箱总开关，并挂上警示标志" },
                { step: "检查三相电源相序", detail: "使用相序表检测R、S、T三相相序是否正确" },
                { step: "调整相序", detail: "如有必要，调换任意两相电源线位置" },
                { step: "重新通电测试", detail: "确认相序正确后重新上电，检查故障是否消除" }
            ],
            prevention: [
                "安装相序保护器，防止相序错误",
                "定期检查电源线路连接状态",
                "电源线路改造后必须进行相序检测"
            ]
        },
        {
            code: "02",
            title: "缺相",
            category: "critical",
            description: "三相电源中某一相缺失，严重影响设备运行",
            causes: [
                "电源线路断路或接触不良",
                "断路器某相触点损坏",
                "接线端子松动或氧化"
            ],
            solutions: [
                { step: "立即停止设备运行", detail: "防止因缺相导致的电机烧毁" },
                { step: "检查断路器状态", detail: "测量三相电压是否正常，检查断路器触点" },
                { step: "检查接线端子", detail: "紧固所有电源接线端子，清理氧化层" },
                { step: "检查保险丝", detail: "如有保险丝熔断，查明原因后更换" }
            ],
            prevention: [
                "安装缺相保护装置",
                "定期检查电气连接点",
                "使用带缺相保护的断路器"
            ]
        },
        {
            code: "03",
            title: "水流开关1",
            category: "warning",
            description: "1号水系统水流检测异常，可能影响换热效果",
            causes: [
                "水泵未启动或故障",
                "水管路堵塞",
                "水流开关本身故障",
                "水阀未开启"
            ],
            solutions: [
                { step: "检查水泵运行状态", detail: "确认水泵是否正常运转，有无异响" },
                { step: "检查水阀门", detail: "确保所有相关水阀处于开启状态" },
                { step: "检查过滤器", detail: "清理或更换水路过滤器" },
                { step: "测试水流开关", detail: "手动测试水流开关动作是否正常" }
            ],
            prevention: [
                "定期清理水路过滤器",
                "定期检查水泵运行状态",
                "建立水系统维护保养制度"
            ]
        },
        {
            code: "04",
            title: "水流开关2",
            category: "warning",
            description: "2号水系统水流检测异常",
            causes: [
                "水泵未启动或故障",
                "水管路堵塞",
                "水流开关本身故障"
            ],
            solutions: [
                { step: "检查水泵运行状态", detail: "确认2号水泵是否正常运转" },
                { step: "检查水阀门", detail: "确保2号系统水阀处于开启状态" },
                { step: "检查管路", detail: "检查2号水路是否有堵塞现象" }
            ],
            prevention: [
                "定期检查水系统运行状态",
                "保持水路清洁"
            ]
        },
        {
            code: "05",
            title: "高压开关1",
            category: "critical",
            description: "1号系统压力过高，可能导致压缩机损坏",
            causes: [
                "冷凝器散热不良",
                "制冷剂充注过量",
                "系统内有空气",
                "高压开关故障误报"
            ],
            solutions: [
                { step: "立即停机检查", detail: "防止压力继续升高造成设备损坏" },
                { step: "检查冷凝器", detail: "清理冷凝器翅片，检查风机是否正常运行" },
                { step: "检查制冷剂压力", detail: "使用压力表检测系统压力，必要时回收部分制冷剂" },
                { step: "检查高压开关", detail: "测试高压开关动作值是否正常" }
            ],
            prevention: [
                "定期清洁冷凝器",
                "严格控制制冷剂充注量",
                "确保系统真空度合格"
            ]
        },
        {
            code: "06",
            title: "低压开关1",
            category: "critical",
            description: "1号系统压力过低，可能导致压缩机润滑不良",
            causes: [
                "制冷剂泄漏",
                "膨胀阀堵塞",
                "蒸发器结霜严重",
                "低压开关故障"
            ],
            solutions: [
                { step: "检查制冷剂压力", detail: "使用压力表检测系统低压压力" },
                { step: "检漏处理", detail: "使用检漏仪查找泄漏点并修复" },
                { step: "补充制冷剂", detail: "修复泄漏后，按规定量补充制冷剂" },
                { step: "检查膨胀阀", detail: "清理或更换膨胀阀滤网" }
            ],
            prevention: [
                "定期检查制冷剂压力",
                "使用质量可靠的制冷剂",
                "定期检查管路连接点"
            ]
        },
        {
            code: "07",
            title: "高压开关2",
            category: "critical",
            description: "2号系统压力过高",
            causes: [
                "冷凝器散热不良",
                "制冷剂充注过量",
                "系统内有空气"
            ],
            solutions: [
                { step: "检查冷凝器", detail: "清理2号系统冷凝器翅片" },
                { step: "检查制冷剂", detail: "检测系统压力，必要时调整制冷剂量" }
            ],
            prevention: [
                "定期维护冷凝器",
                "避免制冷剂过量充注"
            ]
        },
        {
            code: "08",
            title: "低压开关2",
            category: "critical",
            description: "2号系统压力过低",
            causes: [
                "制冷剂泄漏",
                "膨胀阀堵塞",
                "蒸发器结霜严重"
            ],
            solutions: [
                { step: "检查制冷剂压力", detail: "检测2号系统低压压力" },
                { step: "检漏处理", detail: "查找泄漏点并修复" }
            ],
            prevention: [
                "定期检查系统压力",
                "保持管路密封良好"
            ]
        },
        {
            code: "09",
            title: "通讯",
            category: "warning",
            description: "主控制器与扩展设备通讯异常",
            causes: [
                "通讯线路连接不良",
                "通讯协议不匹配",
                "控制器程序错误",
                "电磁干扰"
            ],
            solutions: [
                { step: "检查通讯线路", detail: "确认通讯线连接牢固，无断路短路" },
                { step: "检查接地", detail: "确保设备接地良好，减少干扰" },
                { step: "重启设备", detail: "断电重启，重新建立通讯连接" }
            ],
            prevention: [
                "使用屏蔽通讯线",
                "确保良好的接地系统",
                "远离强电磁干扰源"
            ]
        },
        {
            code: "10",
            title: "扩展板通讯",
            category: "warning",
            description: "主控板与扩展板通讯失败",
            causes: [
                "扩展板连接线松动",
                "扩展板故障",
                "主控板通讯口损坏"
            ],
            solutions: [
                { step: "检查扩展板连接", detail: "重新插拔扩展板连接线" },
                { step: "检查扩展板供电", detail: "测量扩展板电源电压是否正常" },
                { step: "更换扩展板", detail: "如扩展板损坏，需更换新的扩展板" }
            ],
            prevention: [
                "定期检查扩展板连接状态",
                "确保供电稳定"
            ]
        },
        {
            code: "11",
            title: "面板限时",
            category: "warning",
            description: "控制面板操作时间限制触发",
            causes: [
                "连续操作时间过长",
                "定时设置触发"
            ],
            solutions: [
                { step: "等待时间限制解除", detail: "根据系统设置等待冷却时间" },
                { step: "检查定时设置", detail: "如需修改，联系技术人员调整定时参数" }
            ],
            prevention: [
                "避免长时间连续操作",
                "合理安排设备使用时间"
            ]
        },
        {
            code: "12",
            title: "排气1温度高",
            category: "critical",
            description: "1号压缩机排气温度超过安全限值",
            causes: [
                "压缩比过大",
                "制冷剂不足",
                "冷却效果不良",
                "排气温度传感器故障"
            ],
            solutions: [
                { step: "立即停机", detail: "防止压缩机因高温损坏" },
                { step: "检查冷却系统", detail: "确保冷却风/水系统正常工作" },
                { step: "检查制冷剂", detail: "补充制冷剂至规定压力" },
                { step: "检查温度传感器", detail: "测试传感器是否准确" }
            ],
            prevention: [
                "保持合适的运行工况",
                "定期检查冷却系统",
                "避免压缩机在极端工况下运行"
            ]
        },
        {
            code: "13",
            title: "排气2温度高",
            category: "critical",
            description: "2号压缩机排气温度超过安全限值",
            causes: [
                "压缩比过大",
                "制冷剂不足",
                "冷却效果不良"
            ],
            solutions: [
                { step: "检查2号压缩机工况", detail: "检查运行参数是否在设计范围内" },
                { step: "检查冷却系统", detail: "确保2号系统冷却正常" }
            ],
            prevention: [
                "监控压缩机运行参数",
                "定期维护冷却系统"
            ]
        },
        {
            code: "14",
            title: "湿度传感器",
            category: "sensor",
            description: "湿度传感器检测异常或故障",
            causes: [
                "传感器损坏",
                "传感器污染",
                "接线不良"
            ],
            solutions: [
                { step: "清洁传感器", detail: "使用软布清洁传感器探头" },
                { step: "检查接线", detail: "重新连接传感器线路" },
                { step: "校准或更换", detail: "如损坏，需更换新传感器" }
            ],
            prevention: [
                "定期清洁传感器",
                "避免传感器接触腐蚀性气体"
            ]
        },
        {
            code: "15",
            title: "水箱温传",
            category: "sensor",
            description: "水箱温度传感器故障",
            causes: [
                "传感器损坏",
                "线路断路",
                "接线端子松动"
            ],
            solutions: [
                { step: "检查线路连接", detail: "测量传感器电阻值是否正常" },
                { step: "更换传感器", detail: "如电阻值异常，需更换传感器" }
            ],
            prevention: [
                "定期检查传感器状态",
                "确保接线牢固"
            ]
        },
        {
            code: "16",
            title: "盘管1温传",
            category: "sensor",
            description: "1号盘管温度传感器故障",
            causes: [
                "传感器损坏",
                "线路故障",
                "安装位置不当"
            ],
            solutions: [
                { step: "检查传感器安装", detail: "确认传感器与盘管接触良好" },
                { step: "测试传感器", detail: "测量传感器在不同温度下的阻值" },
                { step: "更换传感器", detail: "如异常则更换" }
            ],
            prevention: [
                "确保传感器安装正确",
                "定期检查传感器性能"
            ]
        },
        {
            code: "17",
            title: "盘管2温传",
            category: "sensor",
            description: "2号盘管温度传感器故障",
            causes: [
                "传感器损坏",
                "线路故障"
            ],
            solutions: [
                { step: "检查传感器及线路", detail: "测量传感器阻值" },
                { step: "更换故障传感器", detail: "使用同型号传感器更换" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "18",
            title: "排气1温传",
            category: "sensor",
            description: "1号排气温度传感器故障",
            causes: [
                "传感器损坏",
                "高温导致传感器失效"
            ],
            solutions: [
                { step: "检查传感器状态", detail: "测量传感器输出信号" },
                { step: "更换传感器", detail: "更换为耐高温传感器" }
            ],
            prevention: [
                "使用耐高温传感器",
                "定期检查传感器性能"
            ]
        },
        {
            code: "19",
            title: "排气2温传",
            category: "sensor",
            description: "2号排气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "21",
            title: "外环温传",
            category: "sensor",
            description: "室外环境温度传感器故障",
            causes: [
                "传感器损坏",
                "线路故障",
                "传感器污染"
            ],
            solutions: [
                { step: "清洁传感器", detail: "清理传感器表面的灰尘杂物" },
                { step: "检查线路", detail: "测量传感器信号" },
                { step: "更换传感器", detail: "如损坏则更换" }
            ],
            prevention: [
                "定期清洁传感器",
                "检查线路连接"
            ]
        },
        {
            code: "22",
            title: "回水温传",
            category: "sensor",
            description: "回水温度传感器故障",
            causes: [
                "传感器损坏",
                "安装位置不当"
            ],
            solutions: [
                { step: "检查安装位置", detail: "确保传感器安装在正确位置" },
                { step: "更换传感器", detail: "如损坏则更换" }
            ],
            prevention: [
                "确保传感器安装正确",
                "定期检查"
            ]
        },
        {
            code: "23",
            title: "进水温传",
            category: "sensor",
            description: "进水温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "25",
            title: "水位开关",
            category: "warning",
            description: "水位检测开关动作异常",
            causes: [
                "水位异常",
                "开关损坏",
                "线路故障"
            ],
            solutions: [
                { step: "检查实际水位", detail: "确认水箱或水池水位是否正常" },
                { step: "测试开关", detail: "手动测试开关动作是否正常" },
                { step: "更换开关", detail: "如损坏则更换" }
            ],
            prevention: [
                "定期检查水位",
                "保持开关清洁"
            ]
        },
        {
            code: "26",
            title: "进水温度过高",
            category: "warning",
            description: "进水温度超过设定上限",
            causes: [
                "水源温度过高",
                "前期换热不良",
                "温度传感器故障"
            ],
            solutions: [
                { step: "检查水源温度", detail: "测量实际进水温度" },
                { step: "检查前期设备", detail: "确认上游设备运行正常" },
                { step: "调整运行参数", detail: "根据实际情况调整设备运行参数" }
            ],
            prevention: [
                "监控进水温度",
                "确保上游设备正常运行"
            ]
        },
        {
            code: "27",
            title: "出水温传1",
            category: "sensor",
            description: "1号出水温度传感器故障",
            causes: [
                "传感器损坏",
                "线路故障"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "28",
            title: "出水温传2",
            category: "sensor",
            description: "2号出水温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "29",
            title: "回气温传1",
            category: "sensor",
            description: "1号回气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "30",
            title: "回气温传2",
            category: "sensor",
            description: "2号回气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "31",
            title: "水压开关",
            category: "warning",
            description: "水压开关动作异常",
            causes: [
                "水压异常",
                "开关损坏",
                "管路堵塞"
            ],
            solutions: [
                { step: "检查实际水压", detail: "使用压力表检测系统水压" },
                { step: "检查管路", detail: "确认管路无堵塞" },
                { step: "更换开关", detail: "如损坏则更换" }
            ],
            prevention: [
                "保持水压在正常范围",
                "定期检查管路"
            ]
        },
        {
            code: "32",
            title: "循环出水温度低",
            category: "warning",
            description: "循环出水温度低于设定下限",
            causes: [
                "负荷过小",
                "环境温度过低",
                "流量过大"
            ],
            solutions: [
                { step: "检查运行工况", detail: "确认设备是否在合适工况下运行" },
                { step: "调整水流量", detail: "适当调整循环水流量" },
                { step: "检查环境温度", detail: "确认环境温度是否过低" }
            ],
            prevention: [
                "根据环境调整运行参数",
                "保持合适的负荷"
            ]
        },
        {
            code: "33",
            title: "水源出水温度低",
            category: "warning",
            description: "水源出水温度异常低",
            causes: [
                "水源温度低",
                "换热过度"
            ],
            solutions: [
                { step: "检查水源温度", detail: "确认水源温度是否正常" },
                { step: "调整运行模式", detail: "根据实际情况调整运行模式" }
            ],
            prevention: [
                "监控水源温度",
                "合理调整运行模式"
            ]
        },
        {
            code: "34",
            title: "循环出水温度高",
            category: "warning",
            description: "循环出水温度超过设定上限",
            causes: [
                "负荷过大",
                "散热不良",
                "流量不足"
            ],
            solutions: [
                { step: "检查负荷", detail: "确认系统负荷是否过大" },
                { step: "检查流量", detail: "测量循环水流量是否充足" },
                { step: "检查散热", detail: "清理散热器，确保通风良好" }
            ],
            prevention: [
                "避免超负荷运行",
                "保持散热系统良好"
            ]
        },
        {
            code: "35",
            title: "压缩机1过流",
            category: "critical",
            description: "1号压缩机电流超过额定值",
            causes: [
                "压缩机故障",
                "电压异常",
                "制冷剂过多",
                "系统高压"
            ],
            solutions: [
                { step: "立即停机", detail: "防止压缩机因过流烧毁" },
                { step: "检查电源电压", detail: "测量三相电压是否平衡且在额定范围" },
                { step: "检查系统压力", detail: "检测系统高低压是否正常" },
                { step: "检查压缩机", detail: "测量压缩机绕组阻值，确认压缩机状态" }
            ],
            prevention: [
                "确保电压稳定",
                "避免制冷剂过量",
                "定期检查压缩机状态"
            ]
        },
        {
            code: "36",
            title: "压缩机2过流",
            category: "critical",
            description: "2号压缩机电流超过额定值",
            causes: [
                "压缩机故障",
                "电压异常",
                "制冷剂过多"
            ],
            solutions: [
                { step: "检查电源电压", detail: "测量供电电压" },
                { step: "检查压缩机", detail: "检查压缩机运行状态" }
            ],
            prevention: [
                "确保电压稳定",
                "定期检查压缩机"
            ]
        },
        {
            code: "37",
            title: "恒温器1无水流",
            category: "warning",
            description: "1号恒温器检测到无水流",
            causes: [
                "水泵故障",
                "阀门关闭",
                "管路堵塞"
            ],
            solutions: [
                { step: "检查水泵", detail: "确认水泵是否运行" },
                { step: "检查阀门", detail: "确认相关阀门是否开启" },
                { step: "检查管路", detail: "检查管路是否堵塞" }
            ],
            prevention: [
                "定期检查水系统",
                "保持管路畅通"
            ]
        },
        {
            code: "38",
            title: "恒温器2无水流",
            category: "warning",
            description: "2号恒温器检测到无水流",
            causes: [
                "水泵故障",
                "阀门关闭",
                "管路堵塞"
            ],
            solutions: [
                { step: "检查水泵", detail: "确认2号水泵运行状态" },
                { step: "检查阀门", detail: "确认2号系统阀门状态" }
            ],
            prevention: [
                "定期检查水系统"
            ]
        },
        {
            code: "39",
            title: "水源出水温度高",
            category: "warning",
            description: "水源出水温度超过上限",
            causes: [
                "水源温度高",
                "换热不足"
            ],
            solutions: [
                { step: "检查水源温度", detail: "测量水源实际温度" },
                { step: "检查换热效果", detail: "检查换热器是否正常工作" }
            ],
            prevention: [
                "监控水源温度",
                "保持换热器良好"
            ]
        },
        {
            code: "40",
            title: "水源水温差大",
            category: "warning",
            description: "水源进出水温差异常大",
            causes: [
                "流量不足",
                "负荷过大"
            ],
            solutions: [
                { step: "检查水源流量", detail: "测量水源水流量是否充足" },
                { step: "检查系统负荷", detail: "确认系统负荷是否过大" }
            ],
            prevention: [
                "保持充足流量",
                "避免超负荷运行"
            ]
        },
        {
            code: "41",
            title: "循环水温差大",
            category: "warning",
            description: "循环水进出水温差异常大",
            causes: [
                "循环水流量不足",
                "负荷过大"
            ],
            solutions: [
                { step: "检查循环水流量", detail: "测量循环水流量" },
                { step: "检查水泵", detail: "确认水泵是否正常运行" }
            ],
            prevention: [
                "确保循环水流量充足",
                "定期检查水泵"
            ]
        },
        {
            code: "42",
            title: "循环进水温度低",
            category: "warning",
            description: "循环进水温度异常低",
            causes: [
                "回水温度低",
                "环境温度低"
            ],
            solutions: [
                { step: "检查回水温度", detail: "测量回水温度" },
                { step: "调整运行参数", detail: "根据温度调整运行模式" }
            ],
            prevention: [
                "监控回水温度",
                "合理设置运行参数"
            ]
        },
        {
            code: "43",
            title: "室内盘管防冻",
            category: "critical",
            description: "室内盘管温度过低，有结冰风险",
            causes: [
                "环境温度过低",
                "水流不足",
                "防冻措施失效"
            ],
            solutions: [
                { step: "立即启动防冻模式", detail: "开启防冻加热或循环泵" },
                { step: "检查水系统", detail: "确认水循环正常" },
                { step: "检查保温", detail: "检查管道保温是否完好" }
            ],
            prevention: [
                "保持防冻系统正常运行",
                "确保管道保温良好",
                "低温环境加强防冻措施"
            ]
        },
        {
            code: "44",
            title: "水源进水温度低",
            category: "warning",
            description: "水源进水温度异常低",
            causes: [
                "水源温度低",
                "季节变化"
            ],
            solutions: [
                { step: "检查水源温度", detail: "测量水源实际温度" },
                { step: "调整运行模式", detail: "根据水源温度调整设备运行" }
            ],
            prevention: [
                "根据季节调整运行策略",
                "监控水源温度变化"
            ]
        },
        {
            code: "45",
            title: "制冷过冷",
            category: "warning",
            description: "制冷系统温度过低",
            causes: [
                "膨胀阀开启过大",
                "负荷过小",
                "环境温度低"
            ],
            solutions: [
                { step: "检查膨胀阀", detail: "调整膨胀阀开启度" },
                { step: "检查负荷", detail: "确认系统负荷是否正常" }
            ],
            prevention: [
                "根据负荷调整膨胀阀",
                "避免在极端环境下运行"
            ]
        },
        {
            code: "46",
            title: "风机过载",
            category: "critical",
            description: "风机电机电流过大",
            causes: [
                "风机轴承损坏",
                "风机叶片损坏",
                "电机故障",
                "电压异常"
            ],
            solutions: [
                { step: "立即停机", detail: "防止风机烧毁" },
                { step: "检查风机机械部分", detail: "手动转动风机，检查是否有卡滞" },
                { step: "检查电机", detail: "测量电机绕组阻值" },
                { step: "更换损坏部件", detail: "根据检查结果更换相应部件" }
            ],
            prevention: [
                "定期给轴承加注润滑油",
                "定期检查风机叶片",
                "确保电压稳定"
            ]
        },
        {
            code: "47",
            title: "制冷回气1温度低",
            category: "warning",
            description: "1号制冷系统回气温度过低",
            causes: [
                "蒸发温度过低",
                "制冷剂过多",
                "膨胀阀故障"
            ],
            solutions: [
                { step: "检查蒸发温度", detail: "测量蒸发器温度和压力" },
                { step: "检查膨胀阀", detail: "检查膨胀阀开启度" }
            ],
            prevention: [
                "保持合适的蒸发温度",
                "定期检查膨胀阀"
            ]
        },
        {
            code: "48",
            title: "制冷回气2温度低",
            category: "warning",
            description: "2号制冷系统回气温度过低",
            causes: [
                "蒸发温度过低",
                "制冷剂过多"
            ],
            solutions: [
                { step: "检查系统工况", detail: "检查2号系统运行参数" }
            ],
            prevention: [
                "监控系统运行参数"
            ]
        },
        {
            code: "49",
            title: "制冷回气3温度低",
            category: "warning",
            description: "3号制冷系统回气温度过低",
            causes: [
                "蒸发温度过低"
            ],
            solutions: [
                { step: "检查系统工况", detail: "检查3号系统运行参数" }
            ],
            prevention: [
                "监控系统运行参数"
            ]
        },
        {
            code: "50",
            title: "制冷回气4温度低",
            category: "warning",
            description: "4号制冷系统回气温度过低",
            causes: [
                "蒸发温度过低"
            ],
            solutions: [
                { step: "检查系统工况", detail: "检查4号系统运行参数" }
            ],
            prevention: [
                "监控系统运行参数"
            ]
        },
        {
            code: "65",
            title: "高压开关3",
            category: "critical",
            description: "3号系统压力过高",
            causes: [
                "冷凝器散热不良",
                "制冷剂充注过量"
            ],
            solutions: [
                { step: "检查冷凝器", detail: "清理3号系统冷凝器" },
                { step: "检查制冷剂", detail: "检测并调整制冷剂量" }
            ],
            prevention: [
                "定期维护冷凝器"
            ]
        },
        {
            code: "66",
            title: "低压开关3",
            category: "critical",
            description: "3号系统压力过低",
            causes: [
                "制冷剂泄漏",
                "膨胀阀堵塞"
            ],
            solutions: [
                { step: "检漏处理", detail: "查找并修复泄漏点" },
                { step: "补充制冷剂", detail: "按规定量补充制冷剂" }
            ],
            prevention: [
                "定期检查系统压力",
                "保持管路密封"
            ]
        },
        {
            code: "67",
            title: "高压开关4",
            category: "critical",
            description: "4号系统压力过高",
            causes: [
                "冷凝器散热不良",
                "制冷剂充注过量"
            ],
            solutions: [
                { step: "检查冷凝器", detail: "清理4号系统冷凝器" },
                { step: "检查制冷剂", detail: "检测并调整制冷剂量" }
            ],
            prevention: [
                "定期维护冷凝器"
            ]
        },
        {
            code: "68",
            title: "低压开关4",
            category: "critical",
            description: "4号系统过低",
            causes: [
                "制冷剂泄漏",
                "膨胀阀堵塞"
            ],
            solutions: [
                { step: "检漏处理", detail: "查找并修复泄漏点" },
                { step: "补充制冷剂", detail: "按规定量补充制冷剂" }
            ],
            prevention: [
                "定期检查系统压力"
            ]
        },
        {
            code: "72",
            title: "排气3温度高",
            category: "critical",
            description: "3号压缩机排气温度过高",
            causes: [
                "压缩比过大",
                "制冷剂不足",
                "冷却效果不良"
            ],
            solutions: [
                { step: "检查3号压缩机工况", detail: "检查运行参数" },
                { step: "检查冷却系统", detail: "确保冷却正常" }
            ],
            prevention: [
                "监控压缩机参数",
                "定期维护冷却系统"
            ]
        },
        {
            code: "73",
            title: "排气4温度高",
            category: "critical",
            description: "4号压缩机排气温度过高",
            causes: [
                "压缩比过大",
                "制冷剂不足"
            ],
            solutions: [
                { step: "检查4号压缩机工况", detail: "检查运行参数" }
            ],
            prevention: [
                "监控压缩机参数"
            ]
        },
        {
            code: "76",
            title: "盘管3温传",
            category: "sensor",
            description: "3号盘管温度传感器故障",
            causes: [
                "传感器损坏",
                "线路故障"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "77",
            title: "盘管4温传",
            category: "sensor",
            description: "4号盘管温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "78",
            title: "排气3温传",
            category: "sensor",
            description: "3号排气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "79",
            title: "排气4温传",
            category: "sensor",
            description: "4号排气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "81",
            title: "中冷进1温传",
            category: "sensor",
            description: "1号中间冷却器进口温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "82",
            title: "中冷出1温传",
            category: "sensor",
            description: "1号中间冷却器出口温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "83",
            title: "中冷进2温传",
            category: "sensor",
            description: "2号中间冷却器进口温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "84",
            title: "中冷出2温传",
            category: "sensor",
            description: "2号中间冷却器出口温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "89",
            title: "回气温传3",
            category: "sensor",
            description: "3号回气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "90",
            title: "回气温传4",
            category: "sensor",
            description: "4号回气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "91",
            title: "回气温传5",
            category: "sensor",
            description: "5号回气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "92",
            title: "回气温传6",
            category: "sensor",
            description: "6号回气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "93",
            title: "回气温传7",
            category: "sensor",
            description: "7号回气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "94",
            title: "回气温传8",
            category: "sensor",
            description: "8号回气温度传感器故障",
            causes: [
                "传感器损坏"
            ],
            solutions: [
                { step: "更换传感器", detail: "更换为同型号传感器" }
            ],
            prevention: [
                "定期检查传感器"
            ]
        },
        {
            code: "95",
            title: "压缩机3过流",
            category: "critical",
            description: "3号压缩机电流超过额定值",
            causes: [
                "压缩机故障",
                "电压异常",
                "制冷剂过多"
            ],
            solutions: [
                { step: "检查电源电压", detail: "测量供电电压" },
                { step: "检查压缩机", detail: "检查压缩机运行状态" }
            ],
            prevention: [
                "确保电压稳定",
                "定期检查压缩机"
            ]
        },
        {
            code: "96",
            title: "压缩机4过流",
            category: "critical",
            description: "4号压缩机电流超过额定值",
            causes: [
                "压缩机故障",
                "电压异常"
            ],
            solutions: [
                { step: "检查电源电压", detail: "测量供电电压" },
                { step: "检查压缩机", detail: "检查压缩机运行状态" }
            ],
            prevention: [
                "确保电压稳定",
                "定期检查压缩机"
            ]
        },
        {
            code: "111",
            title: "远程限时",
            category: "warning",
            description: "远程控制时间限制触发",
            causes: [
                "远程控制时间超限",
                "定时设置触发"
            ],
            solutions: [
                { step: "等待时间限制解除", detail: "根据设置等待冷却时间" },
                { step: "检查定时设置", detail: "必要时调整定时参数" }
            ],
            prevention: [
                "合理设置远程控制时间"
            ]
        },
        {
            code: "124",
            title: "变频器输入电压故障",
            category: "critical",
            description: "变频器检测到输入电压异常",
            causes: [
                "输入电压过高或过低",
                "电压波动大",
                "电源质量差"
            ],
            solutions: [
                { step: "检查输入电压", detail: "使用万用表测量变频器输入端电压" },
                { step: "检查电源质量", detail: "确认电源是否稳定" },
                { step: "安装稳压器", detail: "如电压不稳定，安装稳压设备" }
            ],
            prevention: [
                "确保电源电压稳定",
                "安装电压保护装置",
                "定期检查电源质量"
            ]
        },
        {
            code: "130",
            title: "变频器输出电流故障",
            category: "critical",
            description: "变频器检测到输出电流异常",
            causes: [
                "电机故障",
                "输出线路故障",
                "负载过大"
            ],
            solutions: [
                { step: "检查电机", detail: "测量电机绝缘和绕组阻值" },
                { step: "检查输出线路", detail: "检查变频器到电机的线路" },
                { step: "检查负载", detail: "确认负载是否在额定范围内" }
            ],
            prevention: [
                "定期检查电机状态",
                "避免超负荷运行",
                "保持线路连接良好"
            ]
        },
        {
            code: "131",
            title: "变频器输入电流故障",
            category: "critical",
            description: "变频器检测到输入电流异常",
            causes: [
                "输入电压异常",
                "变频器内部故障"
            ],
            solutions: [
                { step: "检查输入电压", detail: "测量输入电压是否正常" },
                { step: "检查变频器", detail: "如电压正常，可能是变频器故障" }
            ],
            prevention: [
                "确保输入电压稳定",
                "定期检查变频器"
            ]
        },
        {
            code: "135",
            title: "变频器散热器温度故障",
            category: "critical",
            description: "变频器散热器温度异常",
            causes: [
                "散热不良",
                "环境温度过高",
                "风扇故障"
            ],
            solutions: [
                { step: "检查散热风扇", detail: "确认变频器风扇是否正常运转" },
                { step: "清理散热器", detail: "清理散热器灰尘" },
                { step: "改善通风", detail: "确保安装空间通风良好" }
            ],
            prevention: [
                "定期清理散热器",
                "保持良好通风",
                "监控环境温度"
            ]
        },
        {
            code: "136",
            title: "变频器IPM模块温度故障",
            category: "critical",
            description: "变频器IPM模块温度异常",
            causes: [
                "过载运行",
                "散热不良",
                "IPM模块故障"
            ],
            solutions: [
                { step: "检查负载", detail: "确认是否超载运行" },
                { step: "检查散热系统", detail: "清理散热器，检查风扇" },
                { step: "更换IPM模块", detail: "如模块损坏，需更换" }
            ],
            prevention: [
                "避免超载运行",
                "保持散热良好",
                "定期检查变频器"
            ]
        },
        {
            code: "152",
            title: "变频器直流侧欠压",
            category: "critical",
            description: "变频器直流母线电压过低",
            causes: [
                "输入电压过低",
                "电容老化",
                "负载过大"
            ],
            solutions: [
                { step: "检查输入电压", detail: "测量输入电压是否达标" },
                { step: "检查电容", detail: "检查直流母线电容是否老化" },
                { step: "减轻负载", detail: "适当降低负载" }
            ],
            prevention: [
                "确保输入电压稳定",
                "定期检查电容状态",
                "避免超载运行"
            ]
        },
        {
            code: "153",
            title: "变频器直流侧过压",
            category: "critical",
            description: "变频器直流母线电压过高",
            causes: [
                "输入电压过高",
                "再生能量过大",
                "制动电阻故障"
            ],
            solutions: [
                { step: "检查输入电压", detail: "测量输入电压" },
                { step: "检查制动电阻", detail: "检查制动回路是否正常" },
                { step: "调整减速时间", detail: "适当延长减速时间" }
            ],
            prevention: [
                "确保输入电压稳定",
                "定期检查制动回路",
                "合理设置加减速时间"
            ]
        },
        {
            code: "156",
            title: "变频器输出过载",
            category: "critical",
            description: "变频器输出超过额定负载",
            causes: [
                "负载过大",
                "加速时间过短",
                "电机堵转"
            ],
            solutions: [
                { step: "检查负载", detail: "测量实际负载电流" },
                { step: "调整加速时间", detail: "适当延长加速时间" },
                { step: "检查电机", detail: "确认电机是否正常转动" }
            ],
            prevention: [
                "避免超载运行",
                "合理设置加减速时间",
                "定期检查电机"
            ]
        },
        {
            code: "157",
            title: "变频器输出电流过流",
            category: "critical",
            description: "变频器输出电流超过保护值",
            causes: [
                "电机短路",
                "负载突变",
                "变频器故障"
            ],
            solutions: [
                { step: "检查电机", detail: "测量电机绝缘阻值" },
                { step: "检查负载", detail: "确认负载是否突变" },
                { step: "检查变频器", detail: "如电机正常，可能是变频器故障" }
            ],
            prevention: [
                "定期检查电机绝缘",
                "避免负载突变",
                "保持变频器良好状态"
            ]
        },
        {
            code: "169",
            title: "变频器散热器过热",
            category: "critical",
            description: "变频器散热器温度超过保护值",
            causes: [
                "环境温度过高",
                "风扇故障",
                "散热器堵塞"
            ],
            solutions: [
                { step: "检查环境温度", detail: "测量环境温度" },
                { step: "检查风扇", detail: "确认风扇是否正常" },
                { step: "清理散热器", detail: "清理散热器灰尘" }
            ],
            prevention: [
                "保持环境温度适宜",
                "定期清理散热器",
                "确保风扇正常运转"
            ]
        },
        {
            code: "170",
            title: "变频器IPM模块过热",
            category: "critical",
            description: "变频器IPM模块温度超过保护值",
            causes: [
                "过载运行",
                "散热不良",
                "模块故障"
            ],
            solutions: [
                { step: "降低负载", detail: "适当降低运行频率或负载" },
                { step: "改善散热", detail: "清理散热器，检查风扇" },
                { step: "更换模块", detail: "如模块故障，需更换" }
            ],
            prevention: [
                "避免超载运行",
                "保持散热良好",
                "定期检查变频器"
            ]
        },
        {
            code: "199",
            title: "网络中断",
            category: "warning",
            description: "控制器网络通讯中断",
            causes: [
                "网络线路故障",
                "网络设备故障",
                "IP地址冲突",
                "控制器网络模块故障"
            ],
            solutions: [
                { step: "检查网络连接", detail: "确认网线连接是否正常" },
                { step: "检查网络设备", detail: "检查交换机、路由器是否正常" },
                { step: "检查IP地址", detail: "确认IP地址设置是否正确，无冲突" },
                { step: "重启设备", detail: "尝试重启控制器和网络设备" }
            ],
            prevention: [
                "定期检查网络连接状态",
                "使用固定IP地址",
                "确保网络设备稳定运行"
            ]
        }
    ],
    aircon: {
        single: [
            {
                code: "01",
                title: "错相",
                category: "critical",
                description: "检测到电源相序错误，可能导致设备损坏或运行异常",
                causes: ["三相电源相序接反", "电源线路改造后未检查相序", "电源进线端子排连接错误"],
                solutions: [
                    { step: "切断设备总电源", detail: "关闭配电箱总开关，挂上警示标志" },
                    { step: "检查三相电源相序", detail: "使用相序表检测R、S、T三相相序是否正确" },
                    { step: "调整相序", detail: "调换任意两相电源线位置" },
                    { step: "重新通电测试", detail: "确认相序正确后重新上电" }
                ],
                prevention: ["安装相序保护器", "定期检查电源线路连接状态"]
            },
            {
                code: "02",
                title: "缺相",
                category: "critical",
                description: "三相电源中某一相缺失，严重影响设备运行",
                causes: ["电源线路断路或接触不良", "断路器某相触点损坏", "接线端子松动或氧化"],
                solutions: [
                    { step: "立即停止设备运行", detail: "防止因缺相导致电机烧毁" },
                    { step: "检查断路器状态", detail: "测量三相电压是否正常" },
                    { step: "检查接线端子", detail: "紧固所有电源接线端子，清理氧化层" },
                    { step: "检查保险丝", detail: "如有熔断，查明原因后更换" }
                ],
                prevention: ["安装缺相保护装置", "定期检查电气连接点", "使用带缺相保护的断路器"]
            },
            {
                code: "03",
                title: "水流",
                category: "warning",
                description: "水系统水流检测异常",
                causes: ["水泵未启动或故障", "水管路堵塞", "水流开关故障", "水阀未开启"],
                solutions: [
                    { step: "检查水泵运行状态", detail: "确认水泵是否正常运转" },
                    { step: "检查水阀门", detail: "确保所有相关水阀处于开启状态" },
                    { step: "检查过滤器", detail: "清理或更换水路过滤器" },
                    { step: "测试水流开关", detail: "手动测试水流开关动作是否正常" }
                ],
                prevention: ["定期清理水路过滤器", "定期检查水泵运行状态"]
            },
            {
                code: "04",
                title: "脏堵",
                category: "warning",
                description: "系统管路脏堵，影响正常运行",
                causes: ["干燥过滤器堵塞", "毛细管或膨胀阀堵塞", "系统内有杂质", "管路焊接遗留物"],
                solutions: [
                    { step: "检查干燥过滤器", detail: "观察过滤器前后是否有温差" },
                    { step: "检查膨胀阀", detail: "检查膨胀阀是否堵塞" },
                    { step: "清理管路", detail: "清洗或更换堵塞部件，重新抽真空" },
                    { step: "更换制冷剂", detail: "按规定量重新充注清洁制冷剂" }
                ],
                prevention: ["安装干燥过滤器", "定期检查管路", "使用合格制冷剂"]
            },
            {
                code: "05",
                title: "高压",
                category: "critical",
                description: "系统压力过高，可能导致压缩机损坏",
                causes: ["冷凝器散热不良", "制冷剂充注过量", "系统内有空气", "高压开关故障"],
                solutions: [
                    { step: "立即停机检查", detail: "防止压力继续升高造成设备损坏" },
                    { step: "检查冷凝器", detail: "清理冷凝器翅片，检查风机运行" },
                    { step: "检查制冷剂压力", detail: "使用压力表检测系统压力" },
                    { step: "检查高压开关", detail: "测试高压开关动作值是否正常" }
                ],
                prevention: ["定期清洁冷凝器", "严格控制制冷剂充注量", "确保系统真空度合格"]
            },
            {
                code: "06",
                title: "低压",
                category: "critical",
                description: "系统压力过低，可能导致压缩机润滑不良",
                causes: ["制冷剂泄漏", "膨胀阀堵塞", "蒸发器结霜严重"],
                solutions: [
                    { step: "检查制冷剂压力", detail: "使用压力表检测系统低压压力" },
                    { step: "检漏处理", detail: "使用检漏仪查找泄漏点并修复" },
                    { step: "补充制冷剂", detail: "修复泄漏后按规定量补充" },
                    { step: "检查膨胀阀", detail: "清理或更换膨胀阀滤网" }
                ],
                prevention: ["定期检查制冷剂压力", "定期检查管路连接点"]
            },
            {
                code: "11",
                title: "限时",
                category: "warning",
                description: "控制面板操作时间限制触发",
                causes: ["连续操作时间过长", "定时设置触发"],
                solutions: [
                    { step: "等待时间限制解除", detail: "根据系统设置等待冷却时间" },
                    { step: "检查定时设置", detail: "如需修改，联系技术人员调整参数" }
                ],
                prevention: ["避免长时间连续操作", "合理安排设备使用时间"]
            },
            {
                code: "12",
                title: "排气高温",
                category: "critical",
                description: "压缩机排气温度超过安全限值",
                causes: ["压缩比过大", "制冷剂不足", "冷却效果不良"],
                solutions: [
                    { step: "立即停机", detail: "防止压缩机因高温损坏" },
                    { step: "检查冷却系统", detail: "确保冷却系统正常工作" },
                    { step: "检查制冷剂", detail: "补充制冷剂至规定压力" }
                ],
                prevention: ["保持合适的运行工况", "定期检查冷却系统"]
            },
            {
                code: "15",
                title: "水箱温传（室内温度传感器）",
                category: "sensor",
                description: "水箱/室内温度传感器故障",
                causes: ["传感器损坏", "线路断路", "接线端子松动"],
                solutions: [
                    { step: "检查线路连接", detail: "测量传感器电阻值是否正常" },
                    { step: "更换传感器", detail: "如电阻值异常，更换同型号传感器" }
                ],
                prevention: ["定期检查传感器状态", "确保接线牢固"]
            },
            {
                code: "16",
                title: "盘管温传（室外盘管温度传感器）",
                category: "sensor",
                description: "室外盘管温度传感器故障",
                causes: ["传感器损坏", "线路故障", "安装位置不当"],
                solutions: [
                    { step: "检查传感器安装", detail: "确认传感器与盘管接触良好" },
                    { step: "测试传感器", detail: "测量传感器在不同温度下的阻值" },
                    { step: "更换传感器", detail: "如异常则更换" }
                ],
                prevention: ["确保传感器安装正确", "定期检查传感器性能"]
            },
            {
                code: "18",
                title: "排气温传",
                category: "sensor",
                description: "排气温度传感器故障",
                causes: ["传感器损坏", "高温导致传感器失效"],
                solutions: [
                    { step: "检查传感器状态", detail: "测量传感器输出信号" },
                    { step: "更换传感器", detail: "更换为耐高温传感器" }
                ],
                prevention: ["使用耐高温传感器", "定期检查传感器性能"]
            },
            {
                code: "21",
                title: "环境温传",
                category: "sensor",
                description: "室外环境温度传感器故障",
                causes: ["传感器损坏", "线路故障", "传感器污染"],
                solutions: [
                    { step: "清洁传感器", detail: "清理传感器表面的灰尘杂物" },
                    { step: "检查线路", detail: "测量传感器信号" },
                    { step: "更换传感器", detail: "如损坏则更换" }
                ],
                prevention: ["定期清洁传感器", "检查线路连接"]
            },
            {
                code: "22",
                title: "回水温传",
                category: "sensor",
                description: "回水温度传感器故障",
                causes: ["传感器损坏", "安装位置不当"],
                solutions: [
                    { step: "检查安装位置", detail: "确保传感器安装在正确位置" },
                    { step: "更换传感器", detail: "如损坏则更换" }
                ],
                prevention: ["确保传感器安装正确", "定期检查"]
            },
            {
                code: "25",
                title: "工作水箱缺水",
                category: "warning",
                description: "工作水箱水位低于正常值",
                causes: ["补水系统故障", "管路泄漏", "水位传感器故障", "用水量过大"],
                solutions: [
                    { step: "检查实际水位", detail: "确认水箱实际水位" },
                    { step: "检查补水系统", detail: "确认补水阀门和水泵是否正常" },
                    { step: "检查管路", detail: "检查是否有泄漏点" },
                    { step: "检查水位传感器", detail: "测试传感器是否正常" }
                ],
                prevention: ["定期检查水箱水位", "保持补水系统正常", "定期检查管路密封"]
            },
            {
                code: "26",
                title: "回水温度高",
                category: "warning",
                description: "回水温度超过设定上限",
                causes: ["负荷过大", "散热不良", "水流不足"],
                solutions: [
                    { step: "检查系统负荷", detail: "确认系统负荷是否过大" },
                    { step: "检查散热", detail: "确保散热系统正常" },
                    { step: "检查水流", detail: "确认循环水流量是否充足" }
                ],
                prevention: ["监控系统负荷", "保持散热系统良好"]
            },
            {
                code: "28",
                title: "出水温传（室内盘管温度传感器）",
                category: "sensor",
                description: "出水/室内盘管温度传感器故障",
                causes: ["传感器损坏", "线路故障"],
                solutions: [
                    { step: "检查线路连接", detail: "测量传感器阻值" },
                    { step: "更换传感器", detail: "更换为同型号传感器" }
                ],
                prevention: ["定期检查传感器"]
            },
            {
                code: "29",
                title: "回气温传",
                category: "sensor",
                description: "回气温度传感器故障",
                causes: ["传感器损坏"],
                solutions: [
                    { step: "更换传感器", detail: "更换为同型号传感器" }
                ],
                prevention: ["定期检查传感器"]
            },
            {
                code: "35",
                title: "压机电流大",
                category: "critical",
                description: "压缩机电流超过额定值",
                causes: ["压缩机故障", "电压异常", "制冷剂过多", "系统高压"],
                solutions: [
                    { step: "立即停机", detail: "防止压缩机因过流烧毁" },
                    { step: "检查电源电压", detail: "测量三相电压是否平衡" },
                    { step: "检查系统压力", detail: "检测系统高低压是否正常" },
                    { step: "检查压缩机", detail: "测量压缩机绕组阻值" }
                ],
                prevention: ["确保电压稳定", "避免制冷剂过量", "定期检查压缩机"]
            },
            {
                code: "37",
                title: "压机电流小",
                category: "warning",
                description: "压缩机电流低于正常值",
                causes: ["制冷剂不足", "压缩机阀片损坏", "压缩机磨损", "电压过低"],
                solutions: [
                    { step: "检查制冷剂量", detail: "检测系统压力判断制冷剂是否充足" },
                    { step: "检查压缩机效率", detail: "测量压缩机吸排气能力" },
                    { step: "检查供电电压", detail: "确认电压是否在额定范围" }
                ],
                prevention: ["定期检查制冷剂压力", "监控压缩机运行参数"]
            },
            {
                code: "51",
                title: "冷凝温度高",
                category: "critical",
                description: "冷凝温度超过安全限值",
                causes: ["冷凝器散热不良", "制冷剂过多", "环境温度过高", "通风不良"],
                solutions: [
                    { step: "检查冷凝器", detail: "清理冷凝器翅片" },
                    { step: "检查风机", detail: "确认风机运行正常" },
                    { step: "检查通风", detail: "确保安装空间通风良好" },
                    { step: "检查制冷剂", detail: "检测制冷剂量是否过多" }
                ],
                prevention: ["定期清洁冷凝器", "保持良好通风", "监控环境温度"]
            },
            {
                code: "111",
                title: "远程限时",
                category: "warning",
                description: "远程控制时间限制触发",
                causes: ["远程控制时间超限", "定时设置触发"],
                solutions: [
                    { step: "等待时间限制解除", detail: "根据设置等待冷却时间" },
                    { step: "检查定时设置", detail: "必要时调整定时参数" }
                ],
                prevention: ["合理设置远程控制时间"]
            }
        ],
        dual: [
            {
                code: "01",
                title: "错相",
                category: "critical",
                description: "检测到电源相序错误，可能导致设备损坏或运行异常",
                causes: ["三相电源相序接反", "电源线路改造后未检查相序", "电源进线端子排连接错误"],
                solutions: [
                    { step: "切断设备总电源", detail: "关闭配电箱总开关，挂上警示标志" },
                    { step: "检查三相电源相序", detail: "使用相序表检测R、S、T三相相序" },
                    { step: "调整相序", detail: "调换任意两相电源线位置" },
                    { step: "重新通电测试", detail: "确认相序正确后重新上电" }
                ],
                prevention: ["安装相序保护器", "定期检查电源线路连接状态"]
            },
            {
                code: "02",
                title: "缺相",
                category: "critical",
                description: "三相电源中某一相缺失，严重影响设备运行",
                causes: ["电源线路断路或接触不良", "断路器某相触点损坏", "接线端子松动或氧化"],
                solutions: [
                    { step: "立即停止设备运行", detail: "防止因缺相导致电机烧毁" },
                    { step: "检查断路器状态", detail: "测量三相电压是否正常" },
                    { step: "检查接线端子", detail: "紧固所有电源接线端子" },
                    { step: "检查保险丝", detail: "如有熔断，查明原因后更换" }
                ],
                prevention: ["安装缺相保护装置", "定期检查电气连接点"]
            },
            {
                code: "03",
                title: "水流",
                category: "warning",
                description: "水系统水流检测异常",
                causes: ["水泵未启动或故障", "水管路堵塞", "水流开关故障", "水阀未开启"],
                solutions: [
                    { step: "检查水泵运行状态", detail: "确认水泵是否正常运转" },
                    { step: "检查水阀门", detail: "确保所有相关水阀处于开启状态" },
                    { step: "检查过滤器", detail: "清理或更换水路过滤器" },
                    { step: "测试水流开关", detail: "手动测试水流开关动作是否正常" }
                ],
                prevention: ["定期清理水路过滤器", "定期检查水泵运行状态"]
            },
            {
                code: "04",
                title: "脏堵",
                category: "warning",
                description: "系统管路脏堵，影响正常运行",
                causes: ["干燥过滤器堵塞", "毛细管或膨胀阀堵塞", "系统内有杂质"],
                solutions: [
                    { step: "检查干燥过滤器", detail: "观察过滤器前后是否有温差" },
                    { step: "检查膨胀阀", detail: "检查膨胀阀是否堵塞" },
                    { step: "清理管路", detail: "清洗或更换堵塞部件" },
                    { step: "更换制冷剂", detail: "按规定量重新充注清洁制冷剂" }
                ],
                prevention: ["安装干燥过滤器", "定期检查管路"]
            },
            {
                code: "05",
                title: "高压1",
                category: "critical",
                description: "1号系统压力过高，可能导致压缩机损坏",
                causes: ["冷凝器散热不良", "制冷剂充注过量", "系统内有空气"],
                solutions: [
                    { step: "立即停机检查", detail: "防止压力继续升高造成设备损坏" },
                    { step: "检查冷凝器", detail: "清理冷凝器翅片，检查风机运行" },
                    { step: "检查制冷剂压力", detail: "使用压力表检测系统压力" }
                ],
                prevention: ["定期清洁冷凝器", "严格控制制冷剂充注量"]
            },
            {
                code: "06",
                title: "低压1",
                category: "critical",
                description: "1号系统压力过低",
                causes: ["制冷剂泄漏", "膨胀阀堵塞", "蒸发器结霜严重"],
                solutions: [
                    { step: "检查制冷剂压力", detail: "检测1号系统低压压力" },
                    { step: "检漏处理", detail: "查找泄漏点并修复" },
                    { step: "补充制冷剂", detail: "按规定量补充制冷剂" }
                ],
                prevention: ["定期检查系统压力", "保持管路密封"]
            },
            {
                code: "07",
                title: "高压2",
                category: "critical",
                description: "2号系统压力过高",
                causes: ["冷凝器散热不良", "制冷剂充注过量", "系统内有空气"],
                solutions: [
                    { step: "检查2号系统冷凝器", detail: "清理冷凝器翅片" },
                    { step: "检查制冷剂压力", detail: "检测2号系统压力" }
                ],
                prevention: ["定期维护冷凝器", "避免制冷剂过量充注"]
            },
            {
                code: "08",
                title: "低压2",
                category: "critical",
                description: "2号系统压力过低",
                causes: ["制冷剂泄漏", "膨胀阀堵塞"],
                solutions: [
                    { step: "检查2号系统压力", detail: "检测低压压力" },
                    { step: "检漏处理", detail: "查找泄漏点并修复" }
                ],
                prevention: ["定期检查系统压力", "保持管路密封"]
            },
            {
                code: "11",
                title: "限时",
                category: "warning",
                description: "控制面板操作时间限制触发",
                causes: ["连续操作时间过长", "定时设置触发"],
                solutions: [
                    { step: "等待时间限制解除", detail: "根据系统设置等待冷却时间" },
                    { step: "检查定时设置", detail: "如需修改，联系技术人员调整参数" }
                ],
                prevention: ["避免长时间连续操作", "合理安排设备使用时间"]
            },
            {
                code: "12",
                title: "排气1高温",
                category: "critical",
                description: "1号压缩机排气温度超过安全限值",
                causes: ["压缩比过大", "制冷剂不足", "冷却效果不良"],
                solutions: [
                    { step: "立即停机", detail: "防止压缩机因高温损坏" },
                    { step: "检查冷却系统", detail: "确保1号系统冷却正常" },
                    { step: "检查制冷剂", detail: "补充制冷剂至规定压力" }
                ],
                prevention: ["保持合适的运行工况", "定期检查冷却系统"]
            },
            {
                code: "13",
                title: "排气2高温",
                category: "critical",
                description: "2号压缩机排气温度超过安全限值",
                causes: ["压缩比过大", "制冷剂不足", "冷却效果不良"],
                solutions: [
                    { step: "检查2号压缩机工况", detail: "检查运行参数" },
                    { step: "检查冷却系统", detail: "确保2号系统冷却正常" }
                ],
                prevention: ["监控压缩机运行参数", "定期维护冷却系统"]
            },
            {
                code: "15",
                title: "水箱温传（室内温度传感器）",
                category: "sensor",
                description: "水箱/室内温度传感器故障",
                causes: ["传感器损坏", "线路断路", "接线端子松动"],
                solutions: [
                    { step: "检查线路连接", detail: "测量传感器电阻值是否正常" },
                    { step: "更换传感器", detail: "如异常则更换同型号传感器" }
                ],
                prevention: ["定期检查传感器状态", "确保接线牢固"]
            },
            {
                code: "16",
                title: "盘管1温传（室外盘管1温度传感器）",
                category: "sensor",
                description: "1号室外盘管温度传感器故障",
                causes: ["传感器损坏", "线路故障", "安装位置不当"],
                solutions: [
                    { step: "检查传感器安装", detail: "确认传感器与盘管接触良好" },
                    { step: "测试传感器", detail: "测量传感器阻值" },
                    { step: "更换传感器", detail: "如异常则更换" }
                ],
                prevention: ["确保传感器安装正确", "定期检查"]
            },
            {
                code: "17",
                title: "盘管2温传（室外盘管2温度传感器）",
                category: "sensor",
                description: "2号室外盘管温度传感器故障",
                causes: ["传感器损坏", "线路故障"],
                solutions: [
                    { step: "检查传感器及线路", detail: "测量传感器阻值" },
                    { step: "更换传感器", detail: "使用同型号传感器更换" }
                ],
                prevention: ["定期检查传感器"]
            },
            {
                code: "18",
                title: "排气1温传",
                category: "sensor",
                description: "1号排气温度传感器故障",
                causes: ["传感器损坏", "高温导致传感器失效"],
                solutions: [
                    { step: "检查传感器状态", detail: "测量传感器输出信号" },
                    { step: "更换传感器", detail: "更换为耐高温传感器" }
                ],
                prevention: ["使用耐高温传感器", "定期检查"]
            },
            {
                code: "19",
                title: "排气2温传",
                category: "sensor",
                description: "2号排气温度传感器故障",
                causes: ["传感器损坏"],
                solutions: [
                    { step: "更换传感器", detail: "更换为同型号传感器" }
                ],
                prevention: ["定期检查传感器"]
            },
            {
                code: "21",
                title: "环境温传",
                category: "sensor",
                description: "室外环境温度传感器故障",
                causes: ["传感器损坏", "线路故障", "传感器污染"],
                solutions: [
                    { step: "清洁传感器", detail: "清理传感器表面的灰尘杂物" },
                    { step: "检查线路", detail: "测量传感器信号" },
                    { step: "更换传感器", detail: "如损坏则更换" }
                ],
                prevention: ["定期清洁传感器", "检查线路连接"]
            },
            {
                code: "22",
                title: "回水温传",
                category: "sensor",
                description: "回水温度传感器故障",
                causes: ["传感器损坏", "安装位置不当"],
                solutions: [
                    { step: "检查安装位置", detail: "确保传感器安装在正确位置" },
                    { step: "更换传感器", detail: "如损坏则更换" }
                ],
                prevention: ["确保传感器安装正确", "定期检查"]
            },
            {
                code: "25",
                title: "工作水箱缺水",
                category: "warning",
                description: "工作水箱水位低于正常值",
                causes: ["补水系统故障", "管路泄漏", "水位传感器故障"],
                solutions: [
                    { step: "检查实际水位", detail: "确认水箱实际水位" },
                    { step: "检查补水系统", detail: "确认补水阀门和水泵是否正常" },
                    { step: "检查管路", detail: "检查是否有泄漏点" }
                ],
                prevention: ["定期检查水箱水位", "保持补水系统正常"]
            },
            {
                code: "26",
                title: "回水温度高",
                category: "warning",
                description: "回水温度超过设定上限",
                causes: ["负荷过大", "散热不良", "水流不足"],
                solutions: [
                    { step: "检查系统负荷", detail: "确认系统负荷是否过大" },
                    { step: "检查散热", detail: "确保散热系统正常" },
                    { step: "检查水流", detail: "确认循环水流量" }
                ],
                prevention: ["监控系统负荷", "保持散热系统良好"]
            },
            {
                code: "27",
                title: "出水1温传（室内盘管1温度传感器）",
                category: "sensor",
                description: "1号出水/室内盘管温度传感器故障",
                causes: ["传感器损坏", "线路故障"],
                solutions: [
                    { step: "检查线路", detail: "测量传感器阻值" },
                    { step: "更换传感器", detail: "更换为同型号传感器" }
                ],
                prevention: ["定期检查传感器"]
            },
            {
                code: "28",
                title: "出水2温传（室内盘管2温度传感器）",
                category: "sensor",
                description: "2号出水/室内盘管温度传感器故障",
                causes: ["传感器损坏"],
                solutions: [
                    { step: "更换传感器", detail: "更换为同型号传感器" }
                ],
                prevention: ["定期检查传感器"]
            },
            {
                code: "29",
                title: "回气1温传",
                category: "sensor",
                description: "1号回气温度传感器故障",
                causes: ["传感器损坏"],
                solutions: [
                    { step: "更换传感器", detail: "更换为同型号传感器" }
                ],
                prevention: ["定期检查传感器"]
            },
            {
                code: "30",
                title: "回气2温传",
                category: "sensor",
                description: "2号回气温度传感器故障",
                causes: ["传感器损坏"],
                solutions: [
                    { step: "更换传感器", detail: "更换为同型号传感器" }
                ],
                prevention: ["定期检查传感器"]
            },
            {
                code: "35",
                title: "压机1电流",
                category: "critical",
                description: "1号压缩机电流异常",
                causes: ["压缩机故障", "电压异常", "制冷剂过多", "系统高压"],
                solutions: [
                    { step: "检查电源电压", detail: "测量三相电压是否平衡" },
                    { step: "检查系统压力", detail: "检测系统高低压" },
                    { step: "检查压缩机", detail: "测量压缩机绕组阻值" }
                ],
                prevention: ["确保电压稳定", "定期检查压缩机"]
            },
            {
                code: "36",
                title: "压机2电流",
                category: "critical",
                description: "2号压缩机电流异常",
                causes: ["压缩机故障", "电压异常", "制冷剂过多"],
                solutions: [
                    { step: "检查电源电压", detail: "测量供电电压" },
                    { step: "检查2号压缩机", detail: "检查压缩机运行状态" }
                ],
                prevention: ["确保电压稳定", "定期检查压缩机"]
            },
            {
                code: "51",
                title: "冷凝温度高",
                category: "critical",
                description: "冷凝温度超过安全限值",
                causes: ["冷凝器散热不良", "制冷剂过多", "环境温度过高"],
                solutions: [
                    { step: "检查冷凝器", detail: "清理冷凝器翅片" },
                    { step: "检查风机", detail: "确认风机运行正常" },
                    { step: "检查通风", detail: "确保通风良好" }
                ],
                prevention: ["定期清洁冷凝器", "保持良好通风"]
            },
            {
                code: "111",
                title: "远程限时",
                category: "warning",
                description: "远程控制时间限制触发",
                causes: ["远程控制时间超限", "定时设置触发"],
                solutions: [
                    { step: "等待时间限制解除", detail: "根据设置等待冷却时间" },
                    { step: "检查定时设置", detail: "必要时调整定时参数" }
                ],
                prevention: ["合理设置远程控制时间"]
            }
        ]
    },
    coldstorage: [
        {
            code: "C01",
            title: "库温过高",
            category: "critical",
            description: "冷库温度超过设定上限",
            causes: [
                "制冷效果差",
                "保温层破损",
                "开门时间过长"
            ],
            solutions: [
                { step: "检查制冷系统", detail: "确认制冷系统运行正常" },
                { step: "检查保温层", detail: "检查保温层是否完好" },
                { step: "管理使用", detail: "减少开门次数和时间" }
            ],
            prevention: [
                "定期检查制冷系统",
                "保持保温层完好",
                "合理使用库门"
            ]
        },
        {
            code: "C02",
            title: "蒸发器结霜严重",
            category: "warning",
            description: "蒸发器霜层过厚影响换热",
            causes: [
                "化霜故障",
                "湿度大",
                "化霜间隔过长"
            ],
            solutions: [
                { step: "手动化霜", detail: "执行手动化霜程序" },
                { step: "检查化霜加热器", detail: "检查加热器是否正常" },
                { step: "调整化霜参数", detail: "适当缩短化霜间隔" }
            ],
            prevention: [
                "定期检查化霜系统",
                "合理设置化霜参数",
                "控制库内湿度"
            ]
        },
        {
            code: "C03",
            title: "制冷剂泄漏",
            category: "critical",
            description: "制冷系统制冷剂泄漏",
            causes: [
                "管路腐蚀",
                "接头松动",
                "阀门损坏"
            ],
            solutions: [
                { step: "检漏", detail: "使用检漏仪查找泄漏点" },
                { step: "修复泄漏", detail: "修复或更换损坏部件" },
                { step: "补充制冷剂", detail: "按规定量补充制冷剂" }
            ],
            prevention: [
                "定期检查管路",
                "使用耐腐蚀材料",
                "定期检查接头"
            ]
        }
    ]
};
