[ts-file-system-tree](../README.md) / [Exports](../modules.md) / [lib/FileSystemTreeFile](../modules/lib_FileSystemTreeFile.md) / FileSystemTreeFile

# Class: FileSystemTreeFile

[lib/FileSystemTreeFile](../modules/lib_FileSystemTreeFile.md).FileSystemTreeFile

## Table of contents

### Constructors

- [constructor](lib_FileSystemTreeFile.FileSystemTreeFile.md#constructor)

### Properties

- [file](lib_FileSystemTreeFile.FileSystemTreeFile.md#file)
- [fullPath](lib_FileSystemTreeFile.FileSystemTreeFile.md#fullpath)
- [name](lib_FileSystemTreeFile.FileSystemTreeFile.md#name)
- [path](lib_FileSystemTreeFile.FileSystemTreeFile.md#path)

### Methods

- [getFileFromEntry](lib_FileSystemTreeFile.FileSystemTreeFile.md#getfilefromentry)
- [initializeAsync](lib_FileSystemTreeFile.FileSystemTreeFile.md#initializeasync)
- [initializeSync](lib_FileSystemTreeFile.FileSystemTreeFile.md#initializesync)

## Constructors

### constructor

• **new FileSystemTreeFile**(`$file`, `$fullPath`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `$file` | `File` | File object. |
| `$fullPath` | `string` | Full path including the file name from the root.   In some cases full path can't be retrieved from the File object. |

#### Defined in

lib/FileSystemTreeFile.ts:25

## Properties

### file

• **file**: `File`

File object

#### Defined in

lib/FileSystemTreeFile.ts:5

___

### fullPath

• **fullPath**: `string`

Full path including filename.

#### Defined in

lib/FileSystemTreeFile.ts:9

___

### name

• **name**: `string`

File name.

#### Defined in

lib/FileSystemTreeFile.ts:13

___

### path

• **path**: `string`

Path from root without filename and dash at the end.

#### Defined in

lib/FileSystemTreeFile.ts:17

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

lib/FileSystemTreeFile.ts:37

___

### initializeAsync

▸ `Static` **initializeAsync**(`$fileEntry`): `Promise`<[`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md)\>

Initialize a file in a async way.

#### Parameters

| Name | Type |
| :------ | :------ |
| `$fileEntry` | `FileSystemFileEntry` |

#### Returns

`Promise`<[`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md)\>

File object with unified path proeprty.

#### Defined in

lib/FileSystemTreeFile.ts:49

___

### initializeSync

▸ `Static` **initializeSync**(`$file`): [`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md)

Initialize a file from a File object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `$file` | `File` |

#### Returns

[`FileSystemTreeFile`](lib_FileSystemTreeFile.FileSystemTreeFile.md)

File object with unified path proeprty.

#### Defined in

lib/FileSystemTreeFile.ts:60
