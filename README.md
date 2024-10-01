# converter-helper
转换器

--------------------------------------------------------------------------------------
# 两个任务：

1. **将源代码上传到 GitHub 的 `main` 分支**。
2. **将 Vue 项目的页面发布到 GitHub Pages**。

### 步骤 1: 将源代码上传到 GitHub 的 `main` 分支

#### 1.1 确保本地 Git 仓库已初始化并关联远程仓库

1. **初始化 Git 仓库**（如果尚未初始化）：

   ```
   sh
   
   git init
   ```

2. **将本地仓库与远程仓库关联**：

   ```
   sh
   
   git remote add origin https://github.com/On3CoolKid/converter-helper.git
   ```

#### 1.2 添加和提交文件

1. **添加所有文件**：

   ```
   sh
   
   git add .
   ```

2. **提交更改**：

   ```
   sh
   
   git commit -m "Initial commit"
   ```

#### 1.3 解决冲突（如果有的话）

1. **拉取远程仓库的最新更改**：

   ```
   sh
   
   git pull origin main
   ```

   如果出现冲突，解决冲突后重新提交：

   ```
   shgit add <解决冲突的文件>
   git commit -m "Resolve merge conflict"
   ```

2. **推送代码**：

   ```
   sh
   
   git push -u origin main
   ```

### 步骤 2: 将 Vue 项目的页面发布到 GitHub Pages

#### 2.1 安装必要的依赖

1. **安装 `gh-pages` 包**：

   ```
   sh
   
   npm install gh-pages --save-dev
   ```

2. **安装 Vue 和相关依赖**（如果尚未安装）：

   ```
   sh
   
   npm install vue@next @vue/compiler-sfc
   ```

#### 2.2 配置 `package.json`

确保 `package.json` 中包含以下脚本：

```
json{
  "name": "converter-helper",
  "version": "1.0.0",
  "dependencies": {
    "vue": "^3.2.13",
    "@vue/compiler-sfc": "^3.2.13"
  },
  "devDependencies": {
    "vite": "^2.9.0",
    "vue-loader": "^17.0.0",
    "gh-pages": "^3.2.0"
  },
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

#### 2.3 构建项目

1. **构建项目**：

   ```
   sh
   
   npm run build
   ```

#### 2.4 部署到 GitHub Pages

1. **执行部署脚本**：

   ```
   sh
   
   npm run deploy
   ```

### 完整步骤示例

1. **初始化 Git 仓库并关联远程仓库**：

   ```
   sh
   
   git init
   git remote add origin https://github.com/On3CoolKid/converter-helper.git
   ```

2. **添加和提交文件**：

   ```
   shgit add .
   git commit -m "Initial commit"
   ```

3. **拉取远程仓库的最新更改**：

   ```
   sh
   
   git pull origin main
   ```

   如果出现冲突，解决冲突后重新提交：

   ```
   shgit add <解决冲突的文件>
   git commit -m "Resolve merge conflict"
   ```

4. **推送代码**：

   ```
   sh
   
   git push origin main
   ```

5. **安装必要的依赖**：

   ```
   shnpm install gh-pages --save-dev
   npm install vue@next @vue/compiler-sfc
   ```

6. **配置 `package.json`**：

   ```
   json{
     "name": "converter-helper",
     "version": "1.0.0",
     "dependencies": {
       "vue": "^3.2.13",
       "@vue/compiler-sfc": "^3.2.13"
     },
     "devDependencies": {
       "vite": "^2.9.0",
       "vue-loader": "^17.0.0",
       "gh-pages": "^3.2.0"
     },
     "scripts": {
       "build": "vite build",
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

7. **构建项目**：

   ```
   sh
   
   npm run build
   ```

8. **部署到 GitHub Pages**：

   ```
   sh
   
   npm run deploy
   ```

通过以上步骤，你可以将源代码上传到 GitHub 的 `main` 分支，并将 Vue 项目的页面发布到 GitHub Pages。



------

# 1. 使用GitHub Pages发布网站

需要在 package.json 文件中添加相应的脚本。

以下是详细的步骤：

打开 package.json 文件： 打开项目根目录下的 package.json 文件。

添加 deploy 脚本： 在 scripts 部分添加 deploy 脚本。你可以根据需要自定义这个脚本。

例如，你可以添加以下脚本来执行构建并部署到 GitHub Pages：

json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}
安装 gh-pages 包： 为了使用 gh-pages 脚本，你需要先安装 gh-pages 包：

sh
npm install gh-pages --save-dev
重新运行 deploy 命令： 再次运行 deploy 命令：

sh
npm run deploy
详细步骤
编辑 package.json 文件：

打开 package.json 文件，并在 scripts 部分添加 deploy 脚本：

json
{
  "name": "converter-helper",
  "version": "1.0.0",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}
安装 gh-pages 包：

sh
npm install gh-pages --save-dev
再次运行 deploy 命令：

sh
npm run deploy
这样就可以通过 npm run deploy 命令来构建并部署到 GitHub Pages 了。

-------------------------------------------------------------------------
访问 GitHub 仓库页面：

转到你的 GitHub 仓库页面。
转到 Settings > Pages。
配置 gh-pages 分支：

在 Source 下拉菜单中选择 gh-pages 分支，并确保选择 root 目录作为构建目录。
保存设置。
确认 URL 显示正确：

在 Settings > Pages 页面，你会看到一个类似于 https://on3coolkid.github.io/converter-helper/ 的 URL。
通过以上步骤，你应该能够成功发布并访问你的 GitHub Pages 站点。

# 2. 将本地代码上传到Github的main分支



# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
