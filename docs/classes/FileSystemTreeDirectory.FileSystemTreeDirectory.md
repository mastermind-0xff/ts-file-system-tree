[ts-file-system-tree](../README.md) / [Exports](../modules.md) / [FileSystemTreeDirectory](../modules/FileSystemTreeDirectory.md) / FileSystemTreeDirectory

# Class: FileSystemTreeDirectory

[FileSystemTreeDirectory](../modules/FileSystemTreeDirectory.md).FileSystemTreeDirectory

## Table of contents

### Constructors

- [constructor](FileSystemTreeDirectory.FileSystemTreeDirectory.md#constructor)

### Properties

- [items](FileSystemTreeDirectory.FileSystemTreeDirectory.md#items)
- [name](FileSystemTreeDirectory.FileSystemTreeDirectory.md#name)

### Methods

- [addItem](FileSystemTreeDirectory.FileSystemTreeDirectory.md#additem)
- [flatten](FileSystemTreeDirectory.FileSystemTreeDirectory.md#flatten)
- [getDirectoryByName](FileSystemTreeDirectory.FileSystemTreeDirectory.md#getdirectorybyname)
- [getFileByName](FileSystemTreeDirectory.FileSystemTreeDirectory.md#getfilebyname)
- [getItemById](FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitembyid)
- [getItemByName](FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitembyname)
- [getItems](FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitems)
- [removeItem](FileSystemTreeDirectory.FileSystemTreeDirectory.md#removeitem)
- [getItemsFromDirectoryEntry](FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitemsfromdirectoryentry)
- [getItemsFromFileList](FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitemsfromfilelist)
- [getItemsFromItemList](FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitemsfromitemlist)
- [initializeAsync](FileSystemTreeDirectory.FileSystemTreeDirectory.md#initializeasync)
- [initializeSync](FileSystemTreeDirectory.FileSystemTreeDirectory.md#initializesync)
- [loopEntries](FileSystemTreeDirectory.FileSystemTreeDirectory.md#loopentries)
- [readDirectoryEntries](FileSystemTreeDirectory.FileSystemTreeDirectory.md#readdirectoryentries)

## Constructors

### constructor

• **new FileSystemTreeDirectory**(`$name`, `$items?`)

Create new directory container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$name` | `string` | Directory name. |
| `$items?` | ([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[] | List of direcotries and files. |

#### Defined in

FileSystemTreeDirectory.ts:18

## Properties

### items

• **items**: ([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[] = `[]`

List of all direcotries and files in the order they were retrieved.

#### Defined in

FileSystemTreeDirectory.ts:7

___

### name

• **name**: `string` = `''`

Directory name.

#### Defined in

FileSystemTreeDirectory.ts:11

## Methods

### addItem

▸ **addItem**(`$item`, `$index?`): `void`

Add item to the tree.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `$item` | [`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md) | `undefined` | Directory or file. |
| `$index` | `number` | `-1` | Position in the tree. |

#### Returns

`void`

#### Defined in

FileSystemTreeDirectory.ts:177

___

### flatten

▸ **flatten**(): [`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md)[]

Get all files from the tree in recursive manner.

#### Returns

[`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md)[]

Files list.

#### Defined in

FileSystemTreeDirectory.ts:190

___

### getDirectoryByName

▸ **getDirectoryByName**(`$name`): ``null`` \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Retrieve directory matching the provided name from this branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$name` | `string` \| `RegExp` | The exact name or RegExp to match against. |

#### Returns

``null`` \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

The directory.

#### Defined in

FileSystemTreeDirectory.ts:207

___

### getFileByName

▸ **getFileByName**(`$name`): ``null`` \| [`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md)

Retrieve file matching the provided name from this branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$name` | `string` \| `RegExp` | The exact name or RegExp to match against. |

#### Returns

``null`` \| [`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md)

The file.

#### Defined in

FileSystemTreeDirectory.ts:218

___

### getItemById

▸ **getItemById**(`$index`): [`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Retrieve item matching the provided id from this branch.
```ts
this.test = 123;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$index` | `number` | The id. |

#### Returns

[`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

The item - a directory or a file.

#### Defined in

FileSystemTreeDirectory.ts:232

___

### getItemByName

▸ **getItemByName**(`$name`): ``null`` \| [`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Retrieve the first item matching the provided name from this branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$name` | `string` \| `RegExp` | The exact name or RegExp to match against. |

#### Returns

``null`` \| [`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

The item - a directory or a file.

#### Defined in

FileSystemTreeDirectory.ts:245

___

### getItems

▸ **getItems**(`$name`, `$type?`, `$recursive?`): ([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]

Retrieve items that match the following criteria. Starting from this branch.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `$name` | `string` \| `RegExp` | `undefined` | Exact string name or RegExp to test against. |
| `$type` | ``"directory"`` \| ``"file"`` \| ``"both"`` | `'both'` | Item type to filter by - directory, file or both. |
| `$recursive` | `boolean` | `true` | Follow directory items when traversing. |

#### Returns

([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]

Directories and files list.

#### Defined in

FileSystemTreeDirectory.ts:258

___

### removeItem

▸ **removeItem**(`$index`): [`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Remove item from the tree and return it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$index` | `number` | Number. |

#### Returns

[`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

The item or throws an error.

#### Defined in

FileSystemTreeDirectory.ts:288

___

### getItemsFromDirectoryEntry

▸ `Static` **getItemsFromDirectoryEntry**(`$directoryEntry`): `Promise`<([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Loop directory entry recursively.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$directoryEntry` | `FileSystemDirectoryEntry` | Directory entry to traverse. |

#### Returns

`Promise`<([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Directories and files list.

#### Defined in

FileSystemTreeDirectory.ts:30

___

### getItemsFromFileList

▸ `Static` **getItemsFromFileList**(`$fileList`): ([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]

Retrieve directories and files with their relative paths from a file input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$fileList` | `FileList` | File input files property. |

#### Returns

([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]

Directories and files list.

#### Defined in

FileSystemTreeDirectory.ts:53

___

### getItemsFromItemList

▸ `Static` **getItemsFromItemList**(`$items`): `Promise`<([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Retrieve directories and files with their relative paths from a drag and drop event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `$items` | `DataTransferItemList` |

#### Returns

`Promise`<([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Directories and files list.

#### Defined in

FileSystemTreeDirectory.ts:97

___

### initializeAsync

▸ `Static` **initializeAsync**(`$items`): `Promise`<[`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)\>

Initialize directories and files async in one uniform tree structure. 
For example from drag and drop event - 'dataTransfer.items'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$items` | `undefined` \| `FileSystemDirectoryEntry` \| `DataTransferItemList` | Directory entry or drag and drop items list. |

#### Returns

`Promise`<[`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)\>

Root directory with the corresponding tree.

#### Defined in

FileSystemTreeDirectory.ts:109

___

### initializeSync

▸ `Static` **initializeSync**(`$items`): [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Initialize directories and files in one uniform tree structure. 
For example from input type file - 'input.files'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$items` | `FileList` | File input files. |

#### Returns

[`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Root directory with the corresponding tree.

#### Defined in

FileSystemTreeDirectory.ts:131

___

### loopEntries

▸ `Static` **loopEntries**(`$entries`): `Promise`<([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Construct directory-file tree from entries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$entries` | (``null`` \| `FileSystemEntry`)[] | Entries list. |

#### Returns

`Promise`<([`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Directories and files list.

#### Defined in

FileSystemTreeDirectory.ts:143

___

### readDirectoryEntries

▸ `Static` **readDirectoryEntries**(`$reader`): `Promise`<`FileSystemEntry`[]\>

Read current batch of entries from a FileSystemDirectoryReader. 
Could be limited to 100 by the browser.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$reader` | `FileSystemDirectoryReader` | The directory reader. |

#### Returns

`Promise`<`FileSystemEntry`[]\>

List of FileSystemEntry that are FileSystemFileEntry or 
FileSystemDirectoryEntry.

#### Defined in

FileSystemTreeDirectory.ts:165
