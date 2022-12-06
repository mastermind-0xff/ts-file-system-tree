import { chromium } from 'playwright';

const path = require('path');

describe('Test file selection', () => {
    test('from FileList', async () => {
        const rootDir = path.join(__dirname, '../');

        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await browser.newPage();
        await page.addScriptTag({
            path: path.join(
                rootDir,
                '/node_modules/systemjs/dist/system.min.js'
            ),
        });
        await page.addScriptTag({
            path: path.join(rootDir, '/dist/bundle.js'),
        });

        // await page.addInitScript({ path: path.join(rootDir,'/dist/lib/FileSystemTreeFile.js') });
        // await page.addInitScript({ path: path.join(rootDir,'/dist/lib/FileSystemTreeDirectory.js') });
        expect(1).toBe(1);

        const result = await page.evaluate(() => {
            try {
                // console.log(System.);

                let files: File[];
                let dataTransfer: DataTransfer;
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
                    console.log(dataTransfer);
                }
                // console.log(FileSystemTreeDirectory);
            } catch (e) {
                console.log(e);
            }
        });
        console.log(result);

        // inputFile.files = files;
    });

    // test('input[type="file"][webkitdirectory][multiple] ', () => {
    //     1;
    // });
});
