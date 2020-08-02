//main CLI logic.
//copy files from /core to user specified directory.
//run git init.
//tell user to cd into directory and use npm install / yarn.

import path from "path";
import fs from "fs-extra";
import execa from "execa";

export async function copyFilesToTargetDirectory(targetDir) {
    const sourcePath = path.join(__dirname, "..", "core");

    return fs.copy(sourcePath, targetDir);
}

export async function initGit(targetDir) {
    return execa("git", ["init"], {
        cwd: targetDir || process.cwd()
    });
}
