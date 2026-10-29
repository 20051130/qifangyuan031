---
name: submit-to-github
description: 提交当前项目到 GitHub 远程仓库（SSH 公钥）。当用户要求提交到 github、git push 到 github 或上传代码到 github 时使用。不用于其他 Git 操作。
---

# 提交到 GitHub

将当前项目的改动通过 `git add` → `git commit` → `git push` 推送到指定的 GitHub 远程仓库，使用已配置的 SSH 公钥认证。

远程仓库（SSH 地址）：`git@github.com:20051130/qifangyuan031.git`

## 流程

1. **查看状态**：运行 `git status`，列出已修改与未跟踪文件。
2. **收敛提交面**：确认 `.gitignore` 存在并包含常见忽略项（`node_modules`、临时文件、IDE 配置、大体积二进制等），避免误提交非源码资产。
3. **暂存**：运行 `git add -A`（或按需点名文件与目录）。
4. **提交**：运行 `git commit -m "..."`，提交信息需结构化描述本次变更要点。若无变更可提交，直接跳到推送。
5. **配置远程**：使用独立 remote 名 `github`（避免与 gitee 的 `origin` 冲突）：
   - 若 `github` 不存在，执行 `git remote add github git@github.com:20051130/qifangyuan031.git`
   - 若 `github` 已存在但 URL 不符，执行 `git remote set-url github git@github.com:20051130/qifangyuan031.git`
   - 检查：`git remote -v`
6. **推送**：执行 `git push -u github <当前分支名>`。先用 `git branch --show-current` 确认当前分支。
7. **回执**：输出提交哈希、远程地址与推送结果。

## 环境适配

- Windows PowerShell 环境下运行 Git 命令，可用 `;` 串联命令。
- 认证走 SSH 公钥，无需输入用户名密码。若推送报权限错误，提示用户检查 `~/.ssh/` 下公钥是否已添加到 GitHub 账户。
- 若推送时出现 SSH host key 确认提示（首次连接 github.com），可通过 `ssh -T git@github.com` 预先确认，或设置 `GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"`（仅临时，有安全风险）。

## 注意

- 使用独立 remote `github` 而非覆盖 `origin`，保留 gitee 的 `origin` 不变。
- 不要在未确认分支名的情况下盲推。
