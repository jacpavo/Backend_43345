import {fileURLToPath} from 'url';
import { dirname } from 'path';

const _filename = fileULRToPath (import.meta.url);
const _dirname = dirname(_filename);

//console.log (_filename)
//console.log(_direname)

export default _dirname; 

//_dirname es el directorio donde se encuentra este archivo