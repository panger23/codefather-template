import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import linuxSideBar from "./sidebars/linuxSideBar";
import  gitSideBar from "./sidebars/gitSideBar";
import ucasSideBar from "./sidebars/ucasSideBar";
import groceriesSideBar from "./sidebars/groceriesSideBar";
import leetcodeSiteBar  from "./sidebars/leetcodeSiteBar";

// @ts-ignore
export default {
    "/学习路线/": roadmapSideBar,
    "/Linux/": linuxSideBar,
    "/Git/" : gitSideBar,
    "/国科大部分课程笔记/":ucasSideBar,
    "/杂货铺/":groceriesSideBar,
    "/leetcode/":leetcodeSiteBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;

