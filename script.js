
 const butt = document.getElementById("butt");
 const res =  document.getElementById("result") 
 const time = 50;

function getRandomChinese(length) {
    return new Promise((resolve) => {
      setTimeout(() => {
           let i = 0; 
           let arr = [];
           let sign = String(Date.now()).slice(-5);
    while(i < length ) {
           sign += time;
           arr.push(String.fromCharCode(sign));
           i++;
   };
       resolve(arr.join(""))}, length * time);

    });
};

   butt.addEventListener("click", () =>{
        getRandomChinese(4).then(( result) => { 
   res.innerHTML = result;
    });

  });


