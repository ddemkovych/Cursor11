
 const butt = document.getElementById("butt");
 const res =  document.getElementById("result") 
 const  delay = 50;

function getRandomChinese(length) {
    return new Promise((resolve) => {
      setTimeout(() => {
           let i = 0; 
           let arr = [];
           let sign = String(Date.now()).slice(-5);
    while(i < length ) {
           sign +=  delay;
           arr.push(String.fromCharCode(sign));
           i++;
   };
       resolve(arr.join(""))}, length *  delay);

    });
};

   butt.addEventListener("click", () =>{
        getRandomChinese(4).then(( result) => { 
   res.innerHTML = result;
    });

  });










