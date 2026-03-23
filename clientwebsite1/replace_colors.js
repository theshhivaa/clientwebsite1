const fs = require('fs');

const walkSync = function (dir, filelist) {
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = walkSync(dir + '/' + file, filelist);
        }
        else {
            if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
                filelist.push(dir + '/' + file);
            }
        }
    });
    return filelist;
};

const files = walkSync('/Users/shiva/clientwebsite1/src', []);
files.forEach(f => {
    // Skip index.css explicitly because we will manually format it with exact neon colors
    if (f.endsWith('index.css')) return;

    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/#a78bfa/ig, 'var(--primary)');
    content = content.replace(/#c4b5fd/ig, 'var(--primary)');
    content = content.replace(/#5942E9/ig, 'var(--primary)');
    content = content.replace(/#BE5103/ig, 'var(--primary)');
    fs.writeFileSync(f, content);
});
console.log("Color replacement complete.");
