let s=require('fs').readFileSync('text.txt');
s=s.toString();
let t ='колокол';
m=t.length;
alph=new Array();

for (let i=0;i<m;i++){
	alph[t.charAt(i)]=0;
}

let del=new Array (m+1);

for (let j=0;j<=m; j++){
	del[j]=new Array ();
}

for (i in alph){
	del[0][i]=0;
}

for(let j=0;j<m; j++){
	prev=del[j][t.charAt(j)];
	del[j][t.charAt (j)]=j+1;
	for (i in alph){
		del[j+1][i]=del[prev][i];
	}
}

for (let j=0; j<=m; j++) {
	let deltaTable='';
	for(let i in alph){
		deltaTable+=del[j][i]+' ';
	}
	console.log(deltaTable);
}


let res=new Array();
let state=0;


for (let i=0;i<s.length; i++) {
	if(s.charAt(i) in alph) {
		state=del[state][s.charAt (i)];
	}
	else
		state=0;
	if (state==m){
		res.push (i-m+1);
	}
}
console.log(res);