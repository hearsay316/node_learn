const fs = require('fs');
const path = require('path');

function rmdirSync(dir) {
    let flie = fs.readdirSync(dir);
    flie.forEach((item) => {
        let child = fs.statSync(path.join(dir, item));
        if (child.isDirectory()) {
            rmdirSync(path.join(dir, item))
        } else {
            fs.unlinkSync(path.join(dir, item))
        }
    })
    fs.rmdirSync(dir)
}

function redir(dir) {
    return new Promise((resolve, reject) => {
        console.log(22);
        fs.stat(dir, (err, stat) => {
            if (stat.isDirectory()) {
                fs.readdir(dir, function (err, files) {
                    if (err) return reject(err);
                    Promise.all(files.map(item => redir(path.join(dir, item)))).then(() => {
                        fs.rmdir(dir, resolve)
                    })
                })
            } else {
                fs.unlink(dir, resolve);
            }
        })

    })
}

redir('a');