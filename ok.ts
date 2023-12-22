/* import {v4} from "uuid"

const num: number = 2;

function show(a: number,b: string){
    console.log(typeof a,typeof b)
}

show(num, "oleg") */




/* const num: 'da' | 'net' = "da";

function show(a: string){
    console.log(typeof a)
}

show(num) */





/* type Stringtype<T> = T | string
// num: string или то что в скобках
const num: Stringtype<number> = "da";

function show(a: string){
    console.log(typeof a)
}
show(num)
 */







/* const obj: ObjType = {
    id: 1,
    name: "oleg",
    age: 29,
    isMerried: true,
    innerObg: {
        id: 2,
        str: "blabla"
    }
} */
/* 
type ObjType = {
    id: number,
    name: string,
    age: number,
    isMerried: boolean
} */
//сверху такое же
/* interface Objtype{
    id: number,
    name: string,
    age: number,
    isMerried: boolean,
    innerObg: test
}
interface test {
    id:number,
    str:string
} */






/* enum EnumTest { //часто используют для статусов
    NAME = 'oleg',
    SECONDNAME = "nika"
}

function show(num: EnumTest){
    console.log(num)
}
show(EnumTest.NAME) */




function show(a:string){
    console.log(a)
}
function MainFunc(show: Function):void /* ◄ то что возвращает*/{
    show('hello')
}

MainFunc(show)