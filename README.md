# OmniLUME paper website

论文 **OmniLUME: Towards Omnidirectional Video Quality Understanding and Assessment** 的静态介绍网站。

本目录从同级 `UniFES-video.github.io-main/` 复制后独立改写，原目录未修改。
内容依据随目录保存的 `liutie_TCSVT2026_OmniLUME.pdf`，保留英文论文主页风格。

页面包含论文标题、作者及单位、摘要、贡献、S²K 与 OmniLUME 方法框架、VRQU 数据集、
质量评估和质量理解实验、论文 PDF、GitHub 代码入口和 BibTeX。
不包含视频播放器、视频示例或旧项目内容，也不依赖 CDN、在线字体或第三方前端库。

## 本地查看

直接用浏览器打开 `index.html`，或在本目录运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。无需安装依赖或执行构建。

## GitHub Pages

将本目录内容上传到 `omnilume-360.github.io` 仓库，在 GitHub Pages 中选择对应分支的根目录。
`.nojekyll` 已包含在目录中。此任务仅准备本地文件，未创建远程仓库或发布网站。

## 内容与素材

- `index.html`：页面文字、论文链接、代码链接及引用。
- `static/css/index.css`：桌面与手机布局。
- `static/js/index.js`：论文截图放大和引用复制，禁用 JavaScript 时仍可打开原图与 PDF。
- `static/images/`：直接从论文 PDF 以 3 倍分辨率裁切的六张截图。
- `static/images/figure-sources.json`：截图的来源页码、裁切坐标及像素尺寸。
- `liutie_TCSVT2026_OmniLUME.pdf`：完整论文。

截图分别来自 Figure 1（第 1 页）、Figure 2（第 4 页）、Figure 5（第 6 页）、
Table II（第 8 页）、Table IV 和 Figure 7（第 10 页）。
268,576 条评分、39 位参与者与实验指标均采用论文正文和表格中的数据。
BibTeX 使用稿件信息，未添加未经确认的发表状态、卷期或 DOI。

## 已完成的验证

Chromium 下已检查 1440、768、390 和 320 像素宽度，均无页面横向溢出。
六张截图的放大与关闭、章节导航、引用复制、论文 PDF 链接均正常。
直接打开本地 HTML、禁用 JavaScript 的情况下仍能阅读页面并打开原图与论文。
页面无浏览器错误或失败的资源请求，所有本地链接与锚点均存在。
原网站 118 个文件的 SHA256 校验与复制前一致，新目录不含视频文件。

## 代码地址

等待作者提供实际 GitHub 代码仓库 URL。收到后更新 `index.html` 中两个 `.code-link` 的
`href`、外链属性和 `#code-description` 即可。不会使用猜测的代码仓库地址。
