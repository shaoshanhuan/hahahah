function stringify(obj) {
    let objkeys = Object.keys(obj);
    let str = '';
    objkeys.forEach(item => {
        str = str + '&' + item + '=' + obj[item];
    });
    return str;
}
let o= {
	a:1,
	b:2,
	c:3,
	d:4
}
let str = stringify(o)

console.log(str)

function stringToObj(str) {
    let strArr = str.split('&');
    let o={}
    strArr.forEach(item => {
	if(item.length>0){
       	 let m = item.split('=');
       	 o[m[0]] = m[1];
	}
    });
    return o;
}

let oo = stringToObj(str)

console.log(oo)


console.log('********************')
class father{
    constructor(state){
        this.name = state.name;
        this.age = state.age;
       
    }
}
let fa = new father({name:'老子',age:'55'})
father.props = [
{
    namespace:'aaa'
    property:{
        car:'五菱宏光',
        money:'5万',
    },
    reduces:{
        del(state,action){
            return delete state[action.del]
        }
    }
},
{
    namespace:'bbb'
    debt:{
        ious:'2万'
    }
}

]
    
    

class nan extends father{
    constructor(props){
        super(props)
        this.sex = '男'
    }
}
class nv extends father{
    constructor(props){
        super(props)    
        this.sex = '女';
        this.props = {...this.props,height:160,width:'50'}      
    }
}
function say(state,dis){
    
    const fn = (obj)=>({
        hi(){       
            console.log('大家好我是'+obj)
        }
    })
    return function n(obj){
       obj.props = {...obj.props,...fn(obj.name)}
       obj.props = {...obj.props,...state(father.props)}
       
    }
}
// let xiaohong = new nv({name:'小红',age:'18'})
// let nanhai = new nan({name:'小明',age:20})
// const state = ({property})=>({car:property.car});
// const dis = ({dis})=>({dis})
// say(state,dis)(xiaohong)
// xiaohong.props.hi()
// let xiaoqing = new nv({name:'小青',age:'23'});
// console.log(xiaohong.props)

// xiaoqing.props.hi()

let obj1 = {
    car:'五菱宏光',
        money:'5万',
}

