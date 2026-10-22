---
name: submit-project
description: 提交当前项目到 Gitee 远程仓库。当用户要求提交项目、git commit、git push 或上传代码到 gitee 时使用。不用于其他 Git 操作。
---

# 提交项目

将当前项目的改动通过 `git add` → `git commit` → `git push` 推送到指定的 Gitee 远程仓库。

远程仓库地址：`https://gitee.com/qi-fangyuan/gaowang24001011031qifangyuan.git`

## 流程

1. **查看状态**：运行 `git status`，列出已修改与未跟踪文件。
2. **收敛提交面**：确认 `.gitignore` 存在并包含常见忽略项（`node_modules`、临时文件、IDE 配置、大体积二进制等），避免误提交非源码资产。
3. **暂存**：运行 `git add -A`（或按需点名文件与目录）。
4. **提交**：运行 `git commit -m "..."`，提交信息需结构化描述本次变更要点。
5. **配置远程**：检查 `git remote -v`：
   - 若 `origin` 不存在，执行 `git remote add origin https://gitee.com/qi-fangyuan/gaowang24001011031qifangyuan.git`
   - 若 `origin` 已存在但 URL 不符，执行 `git remote set-url origin https://gitee.com/qi-fangyuan/gaowang24001011031qifangyuan.git`
6. **推送**：执行 `git push -u origin main`（若默认分支为 `master` 则替换为 `master`）。首次推送需确认分支名，可用 `git branch` 查看。
7. **回执**：输出提交哈希、远程地址与推送结果。

## 环境适配

- Windows PowerShell 环境下运行 Git 命令，注意 PowerShell 对 `&&` 的兼容性（可用 `;` 串联）。
- 若推送时出现 `TLS certificate verification has been disabled` 警告，应引导恢复 TLS 校验（如撤销全局 `http.sslVerify=false`），并提示风险。

## 注意

- 提交前先与用户确认提交范围，避免将大量历史改动或敏感配置一并提交。
- 不要在未确认分支名的情况下盲推。
