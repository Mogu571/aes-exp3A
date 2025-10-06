// -------------------------- 全局配置（所有文件可共用） --------------------------
const EXPERIMENT_CONFIG = {
    imageFolder: "artpic/", 
    totalTrials: 60,        
    fixationDuration: 1000, 
    blankDuration: 500,     
    bgColor: "#626262",     
    textColor: "#000000"    
};

// -------------------------- 生成"图片序号-类型"映射 --------------------------
// 规则：序号1-30=先验（type:1），31-60=随机（type:2）
let IMAGE_LIST = [];
for (let i = 1; i <= EXPERIMENT_CONFIG.totalTrials; i++) {
    IMAGE_LIST.push({
        imageId: i,
        imageType: i <= 30 ? 1 : 2,  //
        imageUrl: EXPERIMENT_CONFIG.imageFolder + i + ".png",
        imageViewTime: 0,
        beautyScore: 0,
    });
}

// -------------------------- 全局数据存储 --------------------------
const GLOBAL_DATA = {
    subjectName: "",
    experimentLog: [
        "被试姓名：待录入",
        "图片序号\t图片类型\t美观度(0-1)\t观看时长(ms)"
    ]
};
