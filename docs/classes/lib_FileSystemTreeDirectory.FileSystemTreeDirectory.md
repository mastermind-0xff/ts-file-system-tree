[ts-file-system-tree](../README.md) / [Exports](../modules.md) / [lib/FileSystemTreeDirectory](../modules/lib_FileSystemTreeDirectory.md) / FileSystemTreeDirectory

# Class: FileSystemTreeDirectory

[lib/FileSystemTreeDirectory](../modules/lib_FileSystemTreeDirectory.md).FileSystemTreeDirectory

## Table of contents

### Constructors

- [constructor](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#constructor)

### Properties

- [items](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#items)
- [name](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#name)

### Methods

- [addItem](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#additem)
- [flatten](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#flatten)
- [getDirectoryByName](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#getdirectorybyname)
- [getFileByName](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#getfilebyname)
- [getItemById](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitembyid)
- [getItemByName](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitembyname)
- [getItems](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitems)
- [removeItem](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#removeitem)
- [getItemsFromDirectoryEntry](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitemsfromdirectoryentry)
- [getItemsFromFileList](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitemsfromfilelist)
- [getItemsFromItemList](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#getitemsfromitemlist)
- [initializeAsync](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#initializeasync)
- [initializeSync](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#initializesync)
- [loopEntries](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#loopentries)
- [readDirectoryEntries](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md#readdirectoryentries)

## Constructors

### constructor

• **new FileSystemTreeDirectory**(`$name`, `$items?`)

Create new directory container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$name` | `string` | Directory name. |
| `$items?` | ([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[] | List of direcotries and files. |

#### Defined in

lib/FileSystemTreeDirectory.ts:18

## Properties

### items

• **items**: ([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[] = `[]`

List of all direcotries and files in the order they were retrieved.

#### Defined in

lib/FileSystemTreeDirectory.ts:7

___

### name

• **name**: `string` = `''`

Directory name.

#### Defined in

lib/FileSystemTreeDirectory.ts:11

## Methods

### addItem

▸ **addItem**(`$item`, `$index?`): `void`

Add item to the tree.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `$item` | [`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md) | `undefined` | Directory or file. |
| `$index` | `number` | `-1` | Position in the tree. |

#### Returns

`void`

#### Defined in

lib/FileSystemTreeDirectory.ts:208

___

### flatten

▸ **flatten**(): [`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md)[]

Get all files from the tree in recursive manner.

#### Returns

[`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md)[]

Files list.

#### Defined in

lib/FileSystemTreeDirectory.ts:220

___

### getDirectoryByName

▸ **getDirectoryByName**(`$name`): ``null`` \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Retrieve directory matching the provided name from this branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$name` | `string` \| `RegExp` | The exact name or RegExp to match against. |

#### Returns

``null`` \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

The directory.

#### Defined in

lib/FileSystemTreeDirectory.ts:237

___

### getFileByName

▸ **getFileByName**(`$name`): ``null`` \| [`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md)

Retrieve file matching the provided name from this branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$name` | `string` \| `RegExp` | The exact name or RegExp to match against. |

#### Returns

``null`` \| [`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md)

The file.

#### Defined in

lib/FileSystemTreeDirectory.ts:250

___

### getItemById

▸ **getItemById**(`$index`): [`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Retrieve item matching the provided id from this branch.
```ts
this.test = 123;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$index` | `number` | The id. |

#### Returns

[`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

The item - a directory or a file.

#### Defined in

lib/FileSystemTreeDirectory.ts:263

___

### getItemByName

▸ **getItemByName**(`$name`): ``null`` \| [`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Retrieve the first item matching the provided name from this branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$name` | `string` \| `RegExp` | The exact name or RegExp to match against. |

#### Returns

``null`` \| [`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

The item - a directory or a file.

#### Defined in

lib/FileSystemTreeDirectory.ts:275

___

### getItems

▸ **getItems**(`$name`, `$type?`, `$recursive?`): ([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]

Retrieve items that match the following criteria. Starting from this branch.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `$name` | `string` \| `RegExp` | `undefined` | Exact string name or RegExp to test against. |
| `$type` | ``"directory"`` \| ``"file"`` \| ``"both"`` | `'both'` | Item type to filter by - directory, file or both. |
| `$recursive` | `boolean` | `true` | Follow directory items when traversing. |

#### Returns

([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]

Directories and files list.

#### Defined in

lib/FileSystemTreeDirectory.ts:289

___

### removeItem

▸ **removeItem**(`$index`): [`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Remove item from the tree and return it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$index` | `number` | Number. |

#### Returns

[`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

The item or throws an error.

#### Defined in

lib/FileSystemTreeDirectory.ts:319

___

### getItemsFromDirectoryEntry

▸ `Static` **getItemsFromDirectoryEntry**(`$directoryEntry`): `Promise`<([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Loop directory entry recursively.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$directoryEntry` | `FileSystemDirectoryEntry` | Directory entry to traverse. |

#### Returns

`Promise`<([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Directories and files list.

#### Defined in

lib/FileSystemTreeDirectory.ts:33

___

### getItemsFromFileList

▸ `Static` **getItemsFromFileList**(`$fileList`): ([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]

Retrieve directories and files with their relative paths from a file input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$fileList` | `FileList` | File input files property. |

#### Returns

([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]

Directories and files list.

#### Defined in

lib/FileSystemTreeDirectory.ts:61

___

### getItemsFromItemList

▸ `Static` **getItemsFromItemList**(`$items`): `Promise`<([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Retrieve directories and files with their relative paths from a drag and drop event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `$items` | `DataTransferItemList` |

#### Returns

`Promise`<([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Directories and files list.

#### Defined in

lib/FileSystemTreeDirectory.ts:114

___

### initializeAsync

▸ `Static` **initializeAsync**(`$items`): `Promise`<[`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)\>

Initialize directories and files async in one uniform tree structure.
For example from drag and drop event - 'dataTransfer.items'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$items` | `undefined` \| `FileSystemDirectoryEntry` \| `DataTransferItemList` | Directory entry or drag and drop items list. |

#### Returns

`Promise`<[`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)\>

Root directory with the corresponding tree.

#### Defined in

lib/FileSystemTreeDirectory.ts:129

___

### initializeSync

▸ `Static` **initializeSync**(`$items`): [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Initialize directories and files in one uniform tree structure.
For example from input type file - 'input.files'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$items` | `FileList` | File input files. |

#### Returns

[`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md)

Root directory with the corresponding tree.

#### Defined in

lib/FileSystemTreeDirectory.ts:153

___

### loopEntries

▸ `Static` **loopEntries**(`$entries`): `Promise`<([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Construct directory-file tree from entries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$entries` | (``null`` \| `FileSystemEntry`)[] | Entries list. |

#### Returns

`Promise`<([`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md) \| [`FileSystemTreeDirectory`](lib_FileSystemTreeDirectory.FileSystemTreeDirectory.md))[]\>

Directories and files list.

#### Defined in

lib/FileSystemTreeDirectory.ts:164

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

lib/FileSystemTreeDirectory.ts:195
