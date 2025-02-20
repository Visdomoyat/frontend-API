import axios from 'axios';

const API_KEY = ' 9667d5ccef9711efa9d00242ac120002'
      
    
      const fetchData = async (year, make, model, trim) => {
        
        try {
            const url = `https://api.vehicledatabases.com/ymm-specs/${year}/${make}/${model}/${trim}`;

            const res = await axios.get(url, {
                headers: {
                    'x-AuthKey': API_KEY,
                   
                }
            });
            console.log('API res', res.status );
            if(res.status !== 200) {
                throw new Error ('API request failed')
            }
            console.log('fetchData:', res.data);
            return res.data.data;
        }catch(err) {
            console.log(err)
            return null;
        }
      } 
     
// fetchData(2015, 'Ford', 'F-150', 'XL', )
export{fetchData}

