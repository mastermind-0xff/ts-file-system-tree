import { FileSystemTreeFile } from "./FileSystemTreeFile";

export class FileSystemTreeDirectory {
    /**
     * List of all direcotries and files in the order they were retrieved.
     */
    items: (FileSystemTreeDirectory | FileSystemTreeFile)[] = [];
    /**
     * Directory name.
     */
    name: string = ''

    /**
     * Create new directory container.
     * @param $name Directory name.
     * @param $items List of direcotries and files.
     */
    constructor($name: string, $items?: (FileSystemTreeDirectory | FileSystemTreeFile)[]) {
        this.name = $name;
        if ($items?.length) {
            this.items = $items;
        }
    }

    /**
     * Loop directory entry recursively.
     * @param $directoryEntry Directory entry to traverse.
     * @returns Directories and files list.
     */
    static async getItemsFromDirectoryEntry($directoryEntry: FileSystemDirectoryEntry):
        Promise<(FileSystemTreeDirectory | FileSystemTreeFile)[]> {
        const reader = $directoryEntry.createReader();
        let entriesCycle = await FileSystemTreeDirectory.readDirectoryEntries(reader);
        const entries: FileSystemEntry[] = [...entriesCycle];

        // while more entries, repeat
        while (entriesCycle.length) {
            // try {
            entriesCycle = await FileSystemTreeDirectory.readDirectoryEntries(reader);
            entries.push(...entriesCycle);
            // } catch ($e) {
            // }
        }

        return await FileSystemTreeDirectory.loopEntries(entries);
    }

    /**
     * Retrieve directories and files with their relative paths from a file input.
     * @param $fileList File input files property.
     * @returns Directories and files list.
     */
    static getItemsFromFileList($fileList: FileList):
        (FileSystemTreeDirectory | FileSystemTreeFile)[] {
        const result: (FileSystemTreeDirectory | FileSystemTreeFile)[] = [];
        const tempTree: any = {};
        let previousDir;
        for (let i = 0; i < $fileList.length; i++) {
            let file = $fileList[i];
            let dtFile = new FileSystemTreeFile(file, file.webkitRelativePath);
            const pathSegments = String(file.webkitRelativePath).split('/');
            pathSegments.pop();
            const path = pathSegments.join('/');
            if (pathSegments.length) {
                if (tempTree[path] === undefined) {
                    for (let n = 0; n < pathSegments.length; n++) {
                        let currentPath = pathSegments.slice(0, n + 1).join('/');
                        if (!tempTree[currentPath]) {
                            tempTree[currentPath] = new FileSystemTreeDirectory(pathSegments[n]);
                            if (previousDir) {
                                <FileSystemTreeDirectory>previousDir.addItem(tempTree[currentPath]);
                            } else {
                                result.push(tempTree[path]);
                            }
                        }
                        if (n < pathSegments.length - 1) {
                            previousDir = tempTree[currentPath];
                        } else {
                            previousDir = undefined;
                        }
                    }
                }
                <FileSystemTreeDirectory>tempTree[path].addItem(dtFile)

            } else {
                result.push(dtFile);
            }
        }
        return result;
    }

    /**
     * Retrieve directories and files with their relative paths from a drag and drop event.
     * @param $items 
     * @returns Directories and files list.
     */
    static async getItemsFromItemList($items: DataTransferItemList):
        Promise<(FileSystemTreeDirectory | FileSystemTreeFile)[]> {
        const entries = Array.from($items).map($item => $item.webkitGetAsEntry());
        return await FileSystemTreeDirectory.loopEntries(entries);
    }

    /**
     * Initialize directories and files async in one uniform tree structure. 
     * For example from drag and drop event - 'dataTransfer.items'. 
     * @param $items Directory entry or drag and drop items list.
     * @returns Root directory with the corresponding tree.
     */
    static async initializeAsync($items: FileSystemDirectoryEntry | DataTransferItemList | undefined):
        Promise<FileSystemTreeDirectory> {
        let items: (FileSystemTreeDirectory | FileSystemTreeFile)[] = [];
        if ($items instanceof DataTransferItemList) {
            items = await FileSystemTreeDirectory.getItemsFromItemList($items);
        } else if ($items === undefined) {
            // TODO

        } else {
            // FileSystemDirectoryEntry is not defined runtime error
            //} else if ($items instanceof FileSystemDirectoryEntry) {
            items = await FileSystemTreeDirectory.getItemsFromDirectoryEntry(<FileSystemDirectoryEntry>$items);
        }
        return new FileSystemTreeDirectory('root', items);
    }

    /**
     * Initialize directories and files in one uniform tree structure. 
     * For example from input type file - 'input.files'. 
     * @param $items File input files.
     * @returns Root directory with the corresponding tree.
     */
    static initializeSync($items: FileList):
        FileSystemTreeDirectory {
        const items: (FileSystemTreeDirectory | FileSystemTreeFile)[] =
            FileSystemTreeDirectory.getItemsFromFileList($items);
        return new FileSystemTreeDirectory('root', items);
    }

    /**
     * Construct directory-file tree from entries.
     * @param $entries Entries list.
     * @returns Directories and files list.
     */
    static async loopEntries($entries: (FileSystemEntry | null)[]):
        Promise<(FileSystemTreeDirectory | FileSystemTreeFile)[]> {
        const items: (FileSystemTreeDirectory | FileSystemTreeFile)[] = [];
        for (let entry of $entries) {
            if (entry) {
                if (entry.isFile) {
                    items.push(await FileSystemTreeFile.initializeAsync(<FileSystemFileEntry>entry));
                } else {
                    items.push(await FileSystemTreeDirectory.initializeAsync(<FileSystemDirectoryEntry>entry));
                }
            }
        }
        return items;
    }

    /**
     * Read current batch of entries from a FileSystemDirectoryReader. 
     * Could be limited to 100 by the browser.
     * @param $reader The directory reader.
     * @returns List of FileSystemEntry that are FileSystemFileEntry or 
     * FileSystemDirectoryEntry.
     */
    static async readDirectoryEntries($reader: FileSystemDirectoryReader):
        Promise<FileSystemEntry[]> {
        return await new Promise<FileSystemEntry[]>(async ($resolve, $reject) => {
            $reader.readEntries($resolve, $reject);
        });
    }

    /**
     * Add item to the tree.
     * @param $item Directory or file.
     * @param $index Position in the tree.
     */
    addItem($item: FileSystemTreeDirectory | FileSystemTreeFile,
        $index: number = -1) {
        if ($index < 0) {
            this.items.push($item);
        } else {
            this.items.splice($index, 0, $item);
        }
    }

    /**
     * Get all files from the tree in recursive manner.
     * @returns Files list.
     */
    flatten(): FileSystemTreeFile[] {
        const flattenItems: FileSystemTreeFile[] = [];
        for (let item of this.items) {
            if (item instanceof FileSystemTreeFile) {
                flattenItems.push(item);
            } else if (item instanceof FileSystemTreeDirectory) {
                flattenItems.push(...item.flatten());
            }
        }
        return flattenItems;
    }

    /**
     * Retrieve directory matching the provided name from this branch.
     * @param $name The exact name or RegExp to match against.
     * @returns The directory.
     */
    getDirectoryByName($name: string | RegExp):
        FileSystemTreeDirectory | null {
        const foundItems = this.getItems($name, 'directory', false);
        return foundItems.length && <FileSystemTreeDirectory>foundItems[0] || null;
    }

    /**
     * Retrieve file matching the provided name from this branch.
     * @param $name The exact name or RegExp to match against.
     * @returns The file.
     */
    getFileByName($name: string | RegExp):
        FileSystemTreeFile | null {
        const foundItems = this.getItems($name, 'file', false);
        return foundItems.length && <FileSystemTreeFile>foundItems[0] || null;
    }

    /**
     * Retrieve item matching the provided id from this branch.
     * ```ts
     * this.test = 123;
     * ```
     * @param $index The id.
     * @returns The item - a directory or a file.
     */
    getItemById($index: number):
        FileSystemTreeDirectory | FileSystemTreeFile {
        if ($index >= 0 && $index < this.items.length) {
            return this.items[$index];
        }
        throw new Error(`Index out of bounds [0..${this.items.length - 1}].`);
    }

    /**
     * Retrieve the first item matching the provided name from this branch.
     * @param $name The exact name or RegExp to match against.
     * @returns The item - a directory or a file.
     */
    getItemByName($name: string | RegExp):
        FileSystemTreeDirectory | FileSystemTreeFile | null {
        const foundItems = this.getItems($name, 'both', false);
        return foundItems.length && foundItems[0] || null;
    }

    /**
     * Retrieve items that match the following criteria. Starting from this branch.
     * @param $name Exact string name or RegExp to test against.
     * @param $type Item type to filter by - directory, file or both.
     * @param $recursive Follow directory items when traversing.
     * @returns Directories and files list.
     */
    getItems($name: string | RegExp, $type: 'directory' | 'file' | 'both' = 'both', $recursive: boolean = true):
        (FileSystemTreeDirectory | FileSystemTreeFile)[] {
        let foundItems: (FileSystemTreeDirectory | FileSystemTreeFile)[] = [];
        for (const item of this.items) {
            if (
                (
                    typeof $name === 'string' && item.name === $name ||
                    $name instanceof RegExp && $name.test(item.name)
                ) &&
                (
                    $type === 'both' ||
                    $type === 'file' && item instanceof FileSystemTreeFile ||
                    $type === 'directory' && item instanceof FileSystemTreeDirectory
                )
            ) {
                foundItems.push(item);
            }
            if ($recursive && item instanceof FileSystemTreeDirectory) {
                foundItems.push(...item.getItems($name, $type, $recursive));
            }
        }

        return foundItems;
    }

    /**
     * Remove item from the tree and return it.
     * @param $index Number.
     * @returns The item or throws an error.
     */
    removeItem($index: number):
        FileSystemTreeDirectory | FileSystemTreeFile {
        if ($index >= 0 && $index < this.items.length && this.items[$index]) {
            const item = this.items.splice($index, 1).pop();
            if (item) return item; // can't directly return .pop() because of undefined
        }
        throw new Error(`Index out of bounds [0..${this.items.length - 1}].`);
    }
}