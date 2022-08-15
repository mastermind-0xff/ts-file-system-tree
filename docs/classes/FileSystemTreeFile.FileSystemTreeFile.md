[ts-file-system-tree](../README.md) / [Exports](../modules.md) / [FileSystemTreeFile](../modules/FileSystemTreeFile.md) / FileSystemTreeFile

# Class: FileSystemTreeFile

[FileSystemTreeFile](../modules/FileSystemTreeFile.md).FileSystemTreeFile

## Table of contents

### Constructors

- [constructor](FileSystemTreeFile.FileSystemTreeFile.md#constructor)

### Properties

- [file](FileSystemTreeFile.FileSystemTreeFile.md#file)
- [fullPath](FileSystemTreeFile.FileSystemTreeFile.md#fullpath)
- [name](FileSystemTreeFile.FileSystemTreeFile.md#name)
- [path](FileSystemTreeFile.FileSystemTreeFile.md#path)

### Methods

- [getFileFromEntry](FileSystemTreeFile.FileSystemTreeFile.md#getfilefromentry)
- [initializeAsync](FileSystemTreeFile.FileSystemTreeFile.md#initializeasync)
- [initializeSync](FileSystemTreeFile.FileSystemTreeFile.md#initializesync)

## Constructors

### constructor

• **new FileSystemTreeFile**(`$file`, `$fullPath`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$file` | `File` | File object. |
| `$fullPath` | `string` | Full path including the file name from the root.   In some cases full path can't be retrieved from the File object. |

#### Defined in

FileSystemTreeFile.ts:25

## Properties

### file

• **file**: `File`

File object

#### Defined in

FileSystemTreeFile.ts:5

___

### fullPath

• **fullPath**: `string`

Full path including filename.

#### Defined in

FileSystemTreeFile.ts:9

___

### name

• **name**: `string`

File name.

#### Defined in

FileSystemTreeFile.ts:13

___

### path

• **path**: `string`

Path from root without filename and dash at the end.

#### Defined in

FileSystemTreeFile.ts:17

## Methods

### getFileFromEntry

▸ `Static` **getFileFromEntry**(`$fileEntry`): `Promise`<`File`\>

Get File object from FileSystemEntry.

#### Parameters

| Name | Type |
| :------ | :------ |
| `$fileEntry` | `FileSystemFileEntry` |

#### Returns

`Promise`<`File`\>

File object.

#### Defined in

FileSystemTreeFile.ts:37

___

### initializeAsync

▸ `Static` **initializeAsync**(`$fileEntry`): `Promise`<[`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md)\>

Initialize a file in a async way.

#### Parameters

| Name | Type |
| :------ | :------ |
| `$fileEntry` | `FileSystemFileEntry` |

#### Returns

`Promise`<[`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md)\>

File object with unified path proeprty.

#### Defined in

FileSystemTreeFile.ts:49

___

### initializeSync

▸ `Static` **initializeSync**(`$file`): [`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md)

Initialize a file from a File object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `$file` | `File` |

#### Returns

[`FileSystemTreeFile`](FileSystemTreeFile.FileSystemTreeFile.md)

File object with unified path proeprty.

#### Defined in

FileSystemTreeFile.ts:60
