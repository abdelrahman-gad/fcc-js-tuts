function pairElement(str) {
  
      let letters=Array.from(str);
      let groups=[];
      letters.forEach(Letter =>{
         
           switch (Letter) {
               case 'A':
                  
                   groups.push(['A','T']);
                   break;
                case 'T':
                    groups.push(['T','A']);
                    break;
                case 'C':
                    groups.push(['C','G']);
                    break;
                case 'G':
                    groups.push(['G','C']);
                    break; 
               default:
                   break;
           }
      });
    return groups;
  }
  
 const result = pairElement("GCG");
  
 console.log(result);
