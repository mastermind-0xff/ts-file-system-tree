import { FileSystemTreeDirectory } from '../../../src/lib/FileSystemTreeDirectory';

describe('Test file selection', () => {
    let files: File[];
    let dataTransfer: DataTransfer;

    beforeEach(() => {
        files = [];
        dataTransfer = new DataTransfer();

        const fileContents: string[] = [
            '     (•_•)',
            '     ( •_•)>⌐■-■',
            '     (⌐■_■)',
            '⌐■-■<( •_•)',
        ];
        for (let i = 0; i < 5; i++) {
            let fileName = `file_${i + 1}.png`;
            let file = new File(
                [fileContents[i % fileContents.length]],
                fileName,
                {
                    type: 'image/png',
                }
            );
            files.push(file);
            dataTransfer.items.add(file);
        }
    });

    test('from FileList', () => {
        // document.body.innerHTML = '<input id="file" type="file" multiple>';
        // const inputFile: HTMLInputElement | null = <HTMLInputElement>(
        //     document.getElementById('file')
        // );
        // if (!inputFile) throw new Error('no input[type="file"]');
        console.log(dataTransfer);
        console.log(dataTransfer.items);
        console.log(dataTransfer.files);

        // inputFile.files = files;

        expect(1).toBe(1);
    });

    // test('input[type="file"][webkitdirectory][multiple] ', () => {
    //     1;
    // });
});
