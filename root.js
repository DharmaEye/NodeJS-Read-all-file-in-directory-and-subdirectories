var getFilesInDirectory = function (directory) {
    var files = [];

    require("fs").readdirSync(directory).forEach(function (file) {
        if (file.indexOf('.') === -1)
            files = [].concat(files, getFilesInDirectory(directory + "/" + file));
        else
            files.push(directory + "/" + file);
    });

    return files;
}
