export class FileSystemTreeFile {
    /**
     * File object
     */
    file: File;
    /**
     * Full path including filename.
     */
    fullPath: string;
    /**
     * File name.
     */
    name: string;
    /**
     * Path from root without filename and dash at the end.
     */
    path: string;

    /**
     * 
     * @param $file File object.
     * @param $fullPath Full path including the file name from the root. 
     * In some cases full path can't be retrieved from the File object.
     */
    constructor($file: File, $fullPath: string) {
        this.name = $file.name;
        this.file = $file;
        this.fullPath = $fullPath;
        this.path = $fullPath.substring(0, $fullPath.lastIndexOf('/'));
    }

    /**
     * Get File object from FileSystemEntry.
     * @param $fileEntry 
     * @returns File object.
     */
    static async getFileFromEntry($fileEntry: FileSystemFileEntry):
        Promise<File> {
        return await new Promise<File>(($resolve, $reject) => {
            $fileEntry.file($resolve, $reject);
        });
    }

    /**
     * Initialize a file in a async way.
     * @param $fileEntry 
     * @returns File object with unified path proeprty.
     */
    static async initializeAsync($fileEntry: FileSystemFileEntry):
        Promise<FileSystemTreeFile> {
        const file = await FileSystemTreeFile.getFileFromEntry($fileEntry);
        return new FileSystemTreeFile(file, $fileEntry.fullPath);
    }

    /**
     * Initialize a file from a File object.
     * @param $file 
     * @returns File object with unified path proeprty.
     */
    static initializeSync($file: File):
        FileSystemTreeFile {
        return new FileSystemTreeFile($file, $file.webkitRelativePath);
    }
}