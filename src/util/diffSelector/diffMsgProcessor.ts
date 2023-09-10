import { REVIEW_FILE_EXTENSION, IGNORE_FILE } from "../../conf"

interface IDiff {
    author:string,
    date:string,
    email:string,
    message:string,
}

interface IFile {
    name:string,
    content:string,
}

const regxForAuthor = /Author:.*</;
const regxForDate = /Date:.*\n/;
const regxForEmail = /<.*>/;
const regxForFilename = /^\+\+\+(.*)/;
const regxForFileContent = /^\+().*/;

export function diffMsgProcessor(rowDiffMessage: string) {
    const DiffMessage:IDiff = {
        author:'',
        date:'',
        email:'',
        message:'',
    };
    const file:Array<IFile> = [];

    const tmp = rowDiffMessage.split('\n');
    for(let i=0;i<tmp.length;) {
        if(tmp[i].match(regxForFilename)) {
            const name = tmp[i].replace('+++ b/','').trim();
            let content = '';
            i++;
            while(tmp[i] && !tmp[i].match(regxForFilename)) {
                if(tmp[i].match(regxForFileContent)) {
                    content += tmp[i].replace('+','')+ '\n';
                }
                i++;
            }
            if(IGNORE_FILE.includes(name)) 
                continue;
            if(!REVIEW_FILE_EXTENSION.includes(name.slice(name.lastIndexOf('.'))))
                continue;
            file.push({
                name,
                content
            });
        } else {
            i++;
        }
    }

    console.log(file);

    return "diffMsgProcessor";
}