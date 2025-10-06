// -------------------------- 实验启动核心逻辑 --------------------------
let jsPsych;

document.addEventListener("DOMContentLoaded", () => {
    // 初始化jsPsych配置
    jsPsych = initJsPsych({
        on_finish: () => {
            console.log("实验完全结束！");
            console.log("被试姓名：", GLOBAL_DATA.subjectName);
            console.log("实验数据预览：", GLOBAL_DATA.experimentLog.slice(0, 5));
        },
        // ✅ 显示加载进度条
        show_preload_progress_bar: true,
        auto_preload: true,
        preload_images: []  // 稍后填充
    });

    // 随机打乱图片呈现顺序
    IMAGE_LIST = jsPsych.randomization.shuffle(IMAGE_LIST);

    // ✅ 收集所有需要预加载的图片路径
    const imagesToPreload = IMAGE_LIST.map(item => item.imageUrl);
    
    // ✅ 预加载所有图片
    jsPsych.pluginAPI.preloadImages(imagesToPreload, () => {
        console.log("所有图片加载完成！");
        // 构建实验时间线
        const timeline = buildTimeline();
        // 运行实验
        jsPsych.run(timeline);
    }, () => {
        // 加载进度更新（可选）
        console.log("图片加载中...");
    }, (error) => {
        console.error("图片加载失败:", error);
    });
});
