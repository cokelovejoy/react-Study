# React 16 架构
- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler
- Reconciler（协调器）—— 负责找出变化的组件
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上

# 重要文件夹
根目录
- fixtures        # 包含一些给贡献者准备的小型 React 测试项目
- packages        # 包含元数据（比如 package.json）和 React 仓库中所有 package 的源码（子目录 src）
- scripts         # 各种工具链的脚本，比如git、jest、eslint等

## packages目录
重点关注
- React 文件夹包含全局React API。不包括ReactDOM、ReactNative等平台特定的代码。
- scheduler 文件夹 Scheduler调度器的实现。
- shared 文件夹，源码中其他模块公用的方法和全局变量。

render相关文件夹
react-dom

react-reconcile文件夹,重点关注