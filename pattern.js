function pattern1(){
  let p = '';
  let i=0,j=0;
  for(i=0;i<=4;i++)
  {
    p = '';
     for(j=0;j<=i;j++)
     {
        p = p +" "+'*';
      }
    console.log(p);
    console.log('\n');
  }
}

pattern1();