# Swiper 课后三关 · AI 协作记录（提示词 + 关键往返）

> 姓名：齐方圆　课程：高级网页设计　交付页：`swiper-homework.html`（全部实测通过）

---

## 任务一 · 提示词工程师（2 轮迭代）

### 第 1 轮提示词
> 帮我写一个 Swiper 11 的初始化配置，选择器 #wySw4：要能无缝循环，自动播放，切换动画 800 毫秒，有圆点分页器，效果用 cube。

### 第 1 轮 AI 回答（有错）
```js
var swiper = new Swiper('#wySw4', {
  loop: true,
  autoplay: true,          // ← 问题：默认 3 秒，写不出 3.2 秒
  speed: 800,
  effect: 'cube',
  pagination: { clickable: true }   // ← 问题：没写 el，圆点渲染不进 #wyPag4
});
// ← 问题：漏了 disableOnInteraction: false，拖动后自动播放会永久停止
```

**发现的 3 处问题：** autoplay 用了简写（只能拿默认 3 秒）；漏 disableOnInteraction；pagination 漏 el。

### 第 2 轮提示词（逐条编号 + 确切参数名）
> 重写，仍用 Swiper 11、选择器 #wySw4，逐条满足：1. loop 无缝循环；2. autoplay 用对象写法，delay 精确为 3200 毫秒，并且用户手动拖动后自动播放不能停（disableOnInteraction: false）；3. 圆点分页器渲染进 #wyPag4，且可点击跳转；4. effect 初始为 'cube'；5. 切换动画 800 毫秒。每行加中文注释。

### 第 2 轮 AI 回答（最终采用，已实测）
```js
var swiper4 = new Swiper('#wySw4', {
  loop: true,
  autoplay: { delay: 3200, disableOnInteraction: false },
  pagination: { el: '#wyPag4', clickable: true },
  effect: 'cube',
  speed: 800
});
```

**验证结论：** 循环 ✔ / 3.2 秒自动翻页 ✔ / 拖动后自动播放继续 ✔ / 圆点可点 ✔ / 初始 cube ✔。

---

## 任务二 · creative 电影墙

### 关键提示词
> 参考官方示例 swiper/demo/257-effect-creative.html，给 Swiper 11 写一个 creativeEffect：上一张缩小左移并带角度退场，下一张放大右移进场，像电影选片墙。

### 追问
> prev / next 的 transform 各控制什么？transform 里的百分号是相对谁的？

### AI 回答（用自己的话总结）
- **prev** 控制"已翻过去的上一张（左侧旧卡）"离场后的姿态：本页为左移 58%、缩 0.78、转 -20°、透明 0.45；
- **next** 控制"即将进场的下一张（右侧新卡）"出发时的姿态：本页为从右侧 100% 处、放大 1.15 倍出发，动画进行中回到正中并恢复原大；
- **百分号相对 slide 自身宽度**（X 方向），不是容器；translate 第三个数 z 是像素。

最终参数（已入交付页）：
```js
creativeEffect: {
  prev: { shadow: true, translate: ['-58%', 0, -180], rotate: [0, 0, -20], scale: 0.78, opacity: 0.45 },
  next: { shadow: true, translate: ['100%', 0, 0], scale: 1.15, opacity: 0.4 }
}
```

---

## 任务三 · 新展品 + keyboard 键盘控制

### ① 爱达·魔都号（第六件展品）
- 图片生成提示词：**"大型邮轮、白色船身带彩色艺术涂装、清晨金色阳光下平静海面、低角度海面视角、无文字"**（16:9 横版）
- 生成文件：`swiper-imgs/adamo_1.png`，slide 结构与前 5 件一致，caption：首艘国产大型邮轮 · 2024 年 1 月首航。

### ② 超纲能力：keyboard
关键提示词：
> 给 Swiper 11 加键盘方向键控制，要求轮播滚出屏幕后按方向键不再翻页，怎么配置？

AI 第一次回答漏了容器需要 `tabindex="0"`（div 默认无法获得键盘焦点，按 ← → 无反应且不报错）；对照官方 keyboard 演示补上后正常。最终配置：

```js
keyboard: { enabled: true, onlyInViewport: true }
```
- `enabled: true`：← 上一张、→ 下一张；
- `onlyInViewport: true`：轮播不在可视区时不响应键盘，避免"抢键盘"。

**答辩预设（delay 改值）：** 把 autoplay.delay 从 3200 改成 1000 → 停留间隔变为 1 秒，speed 800 不变（动画快慢不变，只是停得短）。
