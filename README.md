# File System Tree (TypeScript)

Library that gathers different sources of user input files like Drag And Drop event's **event.dataTransfer.items** (DataTransferItemsList) and file input change event's **input.files** (FilesList) to generate a unified tree like structure that includes basic functionalities and most importantly - the files' relative path.

## Instalation

---

```
npm install ts-file-system-tree
```

## Usage

---

```ts
const inputElement = document.getElementById('input');

inputElement.addEventListener('change', ($event) => {
    const fileList = $event.target.files;
    const dir = FileSystemTreeDirectory.initializeSync(fileList);
    console.log(dir);
});
```

## Reference Guides

[Modules](https://github.com/mastermind-0xff/ts-file-system-tree/blob/main/docs/modules.md)

## License

[MIT](https://github.com/mastermind-0xff/ts-file-system-tree/blob/main/LICENSE) / [@mastermind_0xff](https://github.com/mastermind-0xff)
