var q=[]
q.push({
    code: '(\'\'+66666666666666666).split(\'6\').pop()',
    A: '""',
    B: 'null',
    C: '"4"',
    D: '"6"',
    answer: 'C',
    yours:''
})
q.push({
    code: '(Infinity**-1)\n' +
    '(-Infinity**-1)\n' +
    '(-(Infinity**-1))\n' +
    '(Infinity**-Infinity)',
    A: '0,error,-0,0',
    B: 'NaN,NaN,NaN,NaN',
    C: '0,0,0,NaN',
    D: 'other',
    answer: 'A',
    yours:''
})
q.push({
    code: 'window instanceof new Function()\n' +
    'window instanceof function(){}\n' +
    'window instanceof function(){return true}\n' +
    'window instanceof ()=>{}',
    A: 'false,false,true,false',
    B: 'false,false,false,error',
    C: 'error,error,error,error',
    D: 'other',
    answer: 'B',
    yours:''
})
q.push({
    code: 'window > document\n' +
    'window < document\n' +
    'window >> document\n' +
    'window << document',
    A: 'true,false,true,false',
    B: 'false,false,false,false',
    C: 'true,false,error,error',
    D: 'other',
    answer: 'D',
    yours:''
})
q.push({
    code: '[1,2,3][\'join\'].call([2,3,[undefined]])' ,
    A: '"23"',
    B: '"2,3,[undefined]"',
    C: '"2,3,"',
    D: 'other',
    answer: 'C',
    yours:''
})
q.push({
    code: 'var a=1;\n  (a++,delete a,a)' ,
    A: '1',
    B: '2',
    C: 'error',
    D: 'undefined',
    answer: 'B',
    yours:''
})
q.push({
    code: 'var a=[1,2,3]\n' +
    'delete a.length\n' +
    'var {length}=a\n' +
    'a.pop()\n' +
    'length' ,
    A: '3',
    B: '2',
    C: 'error',
    D: 'other',
    answer: 'A',
    yours:''
})
q.push({
    code: 'f=x=>x=>f\n'+
    '[f(1)==f(1)(1)(1),f(1).toString()==f(1)(1)(1).toString() ]',
    A: '[true,false]',
    B: '[false,true]',
    C: '[true,true]',
    D: '[false,false]',
    answer: 'B',
    yours:''
})
q.push({
    code: 's=Symbol(\'s=1\')\n'+
    'a=eval(s.toString())\n'+
    'a',
    A: 'Symbol()',
    B: 'Symbol(1)',
    C: 'error',
    D: 'other',
    answer: 'B',
    yours:''
})
q.push({
    code: `var t=0
for (var i of function*(){
&nbsp&nbspfor (var i of function*(){
&nbsp&nbsp&nbsp&nbspfor(var i=0;i<10;i++){
&nbsp&nbsp&nbsp&nbsp&nbsp&nbspyield i++
&nbsp&nbsp&nbsp&nbsp}
&nbsp&nbsp}()){
&nbsp&nbsp&nbsp&nbspyield i++
&nbsp&nbsp}
}()){
&nbsp&nbspt+=i
}
t
`,
    A: '0',
    B: '10',
    C: '20',
    D: 'other',
    answer: 'C',
    yours:''
})

q.push({
    code: `'👩‍👩‍👧‍👦'.length`,
    A:'11',
    B:'7',
    C:'4',
    D:'1',
    answer: 'A',
    yours:''
})

app=new Vue({
    el:'#app',
    data:{
        q:q,
        f:'0/'+q.length
    },
    methods:{
        sel:function (aq,yours) {
            if(aq.yours!=''){
                return
            }
            aq.yours=yours
            app.q.splice(0,0)

            var len = app.q.length
            var score=0
            for(var i=0;i<app.q.length;i++){
                if(app.q[i].yours == app.q[i].answer){
                    score++
                }
            }
            app.f=''+score+'/'+len
        }
    }

})
bubbly();