const firstnames = ["Gur", "Jas", "Shubh", "Prabh","Har","Gagan","Jag","Ran","Raman","Param","Chanchal","Chandan"];
const midnames = ["preet", "deep", "kiran", "neet","leen","jeet","jot","veer","jeev","noor"];

const fn=document.querySelector("#fn");
const mn=document.querySelector("#mn");
const btn=document.querySelector("#btn");
const res=document.querySelector("#fin");

const getrandomfn = () => {
   return `${firstnames[Math.floor(Math.random() * firstnames.length)]} `;
}
const getrandommn = () => {
    return `${midnames[Math.floor(Math.random() * midnames.length)]}`;
}

const rname=()=>{
    fn.innerText=getrandomfn();
    mn.innerText=getrandommn(); 
    res.innerText=fn.innerText+mn.innerText;

}



btn.addEventListener("click",rname);
