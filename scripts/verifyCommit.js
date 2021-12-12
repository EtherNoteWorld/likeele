/*
 * @Author: your name
 * @Date: 2021-12-12 23:44:01
 * @LastEditTime: 2021-12-12 23:44:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \likeele\scripts\verifyCommit.js
 */
const msg = require("fs").readFileSync(".git/COMMIT_EDITMSG", "utf-8").trim();

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/;
const mergeRe = /^(Merge pull request|Merge branch)/;
if (!commitRE.test(msg)) {
  if (!mergeRe.test(msg)) {
    console.log("git commit信息校验不通过");

    console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式
      比如 fix: xxbug
      feat(test): add new
      具体校验逻辑看 scripts/verifyCommit.js
    `);
    process.exit(1);
  }
} else {
  console.log("git commit信息校验通过");
}
